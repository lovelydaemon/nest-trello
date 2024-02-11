import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty({
    minLength: 1,
    maxLength: 600,
  })
  @IsString()
  @Length(1, 600)
  @IsNotEmpty()
  text: string;
}
