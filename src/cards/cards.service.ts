import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CardsService {
  constructor(private prisma: PrismaService) {}

  async create(createCardDto: CreateCardDto, columnId: string, userId: string) {
    return await this.prisma.card.create({
      data: {
        title: createCardDto.title,
        description: createCardDto.description,
        userId,
        columnId,
      },
    });
  }

  async findAll(columnId: string, userId: string) {
    return await this.prisma.card.findMany({
      where: {
        columnId,
        userId,
      },
    });
  }

  async findOne(cardId: string, columnId: string, userId: string) {
    const card = await this.prisma.card.findFirst({
      where: {
        id: cardId,
        columnId,
        userId,
      },
    });
    return card ?? null;
  }

  async update(
    cardId: string,
    updateCardDto: UpdateCardDto,
    columnId: string,
    userId: string,
  ) {
    try {
      return await this.prisma.card.update({
        where: {
          id: cardId,
          columnId,
          userId,
        },
        data: {
          title: updateCardDto.title,
          description: updateCardDto.description,
          columnId: updateCardDto.columnId,
        },
      });
    } catch {
      throw new NotFoundException();
    }
  }

  async remove(cardId: string, columnId: string, userId: string) {
    try {
      return await this.prisma.card.delete({
        where: {
          id: cardId,
          columnId,
          userId,
        },
      });
    } catch {
      throw new NotFoundException();
    }
  }
}
