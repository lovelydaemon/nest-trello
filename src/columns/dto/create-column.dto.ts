import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateColumnDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  title?: string;
}
