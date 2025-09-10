import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { BadgesDto } from './dto/badges.dto';
import { PrismaService } from '../database/PrismaService';
import { BadgeNameDto } from './dto/badges.request.dto';

@Injectable()
export class BadgesService {
  constructor(private prisma: PrismaService) {}

  async getAll(filter?: BadgeNameDto): Promise<BadgesDto[]> {
    const { name } = filter || {};
    try {
      const badge = await this.prisma.badges.findMany({
        where: {
          name: { contains: name }
        }
      });
      if (!badge || badge.length === 0) {
        throw new NotFoundException('No badge found');
      }
      return badge;
    }catch (error){
      throw new BadRequestException('Error while getting users')
    }
  }
}
