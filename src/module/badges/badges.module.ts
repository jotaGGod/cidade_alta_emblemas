import { Module } from '@nestjs/common';
import { BadgesService } from './badges.service';
import { BadgesController } from './badges.controller';
import { PrismaService } from '../database/PrismaService';

@Module({
  controllers: [BadgesController],
  providers: [BadgesService, PrismaService],
})
export class BadgesModule {}
