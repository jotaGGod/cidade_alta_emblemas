import { Controller, Get, HttpCode, HttpStatus, ParseIntPipe, Query } from '@nestjs/common';
import { BadgesService } from './badges.service';
import { BadgeNameDto } from './dto/badges.request.dto';
import { BadgesDto } from './dto/badges.dto';

@Controller('badges')
export class BadgesController {
  constructor(private readonly badgesService: BadgesService) {}
  @Get()
  @HttpCode(HttpStatus.OK)
  async getAll(@Query() query: BadgeNameDto): Promise<BadgesDto[]> {
    return this.badgesService.getAll(query);
  }
}
