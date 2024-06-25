import { BadgesController } from '../badges.controller';
import { Test, TestingModule } from '@nestjs/testing';
import { BadgesService } from '../badges.service';
import { BadgeNameDto } from '../dto/badges.request.dto';

describe('BadgesController', () => {
  let badgesController: BadgesController;
  let badgesService: BadgesService;
  let mockArrayAllBadges: any[];
  let mockArrayFilteredBadges: any[];
  beforeEach( async() => {
    mockArrayAllBadges = [
      {
        id: '0b64f1d1-5b85-4a8d-8c6a-2b6e1a5f8d7e',
        slug: 'cda-valley',
        name: 'Cidade Alta Valley',
        image: 'https://cidadealtarp.com/imagens/challenge/cidade-alta-valley.png',
      },
      {
        id: '1b2c3e4d-5a6b-4d8c-8e5a-2b6d4f7a8c9d',
        slug: 'coruja',
        name: 'Coruja',
        image: 'https://cidadealtarp.com/imagens/challenge/cidade-alta-valley.png',
      },
      {
        id: '2c3e7b1d-3a67-4b8e-8d2a-4b8c3e5f6a7b',
        slug: 'policia',
        name: 'Policia do Cidade Alta',
        image: 'https://cidadealtarp.com/imagens/challenge/cidade-alta-valley.png',
      },
      {
        id: '3e4d7b1a-5a6b-4d8c-8e5a-2b6d4f7a8c9d',
        slug: 'hiena',
        name: 'Hiena',
        image: 'https://cidadealtarp.com/imagens/challenge/cidade-alta-valley.png',
      }
    ];
    mockArrayFilteredBadges = [
      {
        id: '1b2c3e4d-5a6b-4d8c-8e5a-2b6d4f7a8c9d',
        slug: 'coruja',
        name: 'Coruja',
        image: 'https://cidadealtarp.com/imagens/challenge/cidade-alta-valley.png',
      },
    ];
    const mockBadgesService = {
      getAll: jest.fn().mockImplementation(async (query: BadgeNameDto) => {
        if (!query || !query.name) {
          return mockArrayAllBadges;
        }
        return mockArrayAllBadges.filter(badge => {
          return badge.name.toLowerCase().includes(query.name.toLowerCase());
        });
      })
    }
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BadgesController],
      providers: [
        {
        provide: BadgesService,
        useValue: mockBadgesService
        },
      ]
    }).compile();
    badgesController = module.get<BadgesController>(BadgesController);
    badgesService = module.get<BadgesService>(BadgesService);
  });
  it('the object should be defined and ready to use after module initialization', () => {
    expect(badgesController).toBeDefined();
  });
  describe('getAll', () => {
    it('should return an array with all badges without filter and pagination', async () => {
      const query: BadgeNameDto = { name: "" };
      const response = await badgesController.getAll(query);
      expect(response).toEqual(mockArrayAllBadges);
      expect(badgesService.getAll).toHaveBeenCalledWith(query);
    });
    it('should return an array with filtered badges by name', async () => {
      const query: BadgeNameDto = { name: "coruja" };
      const response = await badgesController.getAll(query);
      expect(response).toEqual(mockArrayFilteredBadges);
      expect(badgesService.getAll).toHaveBeenCalledWith(query);
    });
    it('should return an empty array if no badge filtered by name was found', async () => {
      const query: BadgeNameDto = { name: "noExistingBadgeName" };
      const response = await badgesController.getAll(query);
      expect(response).toEqual([]);
      expect(badgesService.getAll).toHaveBeenCalledWith(query);
    });
  });
});
