import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateCardDto } from './create-card.dto';
import { IsOptional, IsUUID } from 'class-validator';

export class UpdateCardDto extends PartialType(CreateCardDto) {
  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  columnId?: string;
}
