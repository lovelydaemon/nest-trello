import { IsOptional, IsString } from 'class-validator';

export class CreateColumnDto {
  @IsOptional()
  @IsString()
  title?: string;
}
