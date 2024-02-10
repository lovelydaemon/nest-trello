import { IsOptional, IsString } from 'class-validator';

export class CreateCardDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;
}
