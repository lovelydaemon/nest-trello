import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) { }

  async create(
    createCommentDto: CreateCommentDto,
    cardId: string,
    userId: string,
  ) {
    return await this.prisma.comment.create({
      data: {
        text: createCommentDto.text,
        userId,
        cardId,
      },
    });
  }

  async findAll(cardId: string, userId: string) {
    return await this.prisma.comment.findMany({
      where: {
        cardId,
        userId,
      },
    });
  }

  async findOne(commentId: string, cardId: string, userId: string) {
    const comment = await this.prisma.comment.findFirst({
      where: {
        id: commentId,
        cardId,
        userId,
      },
    });
    return comment ?? null;
  }

  async update(
    commentId: string,
    updateCommentDto: UpdateCommentDto,
    cardId: string,
    userId: string,
  ) {
    try {
      return await this.prisma.comment.update({
        where: {
          id: commentId,
          cardId,
          userId,
        },
        data: {
          text: updateCommentDto.text,
        },
      });
    } catch {
      throw new NotFoundException();
    }
  }

  async remove(commentId: string, cardId: string, userId: string) {
    try {
      return await this.prisma.comment.delete({
        where: {
          id: commentId,
          cardId,
          userId,
        },
      });
    } catch {
      throw new NotFoundException();
    }
  }
}
