import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('cards/:cardId/comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  create(
    @Request() { userId },
    @Param('cardId') cardId: string,
    @Body() createCommentDto: CreateCommentDto,
  ) {
    return this.commentsService.create(createCommentDto, cardId, userId);
  }

  @Get()
  findAll(@Param('cardId') cardId: string) {
    return this.commentsService.findAll(cardId);
  }

  @Get(':commentId')
  findOne(
    @Param('cardId') cardId: string,
    @Param('commentId') commentId: string,
  ) {
    return this.commentsService.findOne(commentId, cardId);
  }

  @Patch(':commentId')
  update(
    @Request() { userId },
    @Param('commentId') commentId: string,
    @Param('cardId') cardId: string,
    @Body() updateCommentDto: UpdateCommentDto,
  ) {
    return this.commentsService.update(
      commentId,
      updateCommentDto,
      cardId,
      userId,
    );
  }

  @Delete(':commentId')
  remove(
    @Request() { userId },
    @Param('cardId') cardId: string,
    @Param('commentId') commentId: string,
  ) {
    return this.commentsService.remove(commentId, cardId, userId);
  }
}
