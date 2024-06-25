import { IsString, IsOptional } from 'class-validator';

export class BadgeNameDto {
  @IsString()
  @IsOptional()
  name: string;
}
