import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  @Length(0, 600)
  @IsNotEmpty()
  text: string;
}
