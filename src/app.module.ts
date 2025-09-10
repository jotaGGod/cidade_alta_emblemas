import { Module } from '@nestjs/common';
import { BadgesModule } from './module/badges/badges.module';

@Module({
  imports: [BadgesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
