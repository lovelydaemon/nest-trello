import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateColumnDto } from './dto/create-column.dto';
import { UpdateColumnDto } from './dto/update-column.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ColumnsService {
  constructor(private prisma: PrismaService) {}

  async create(createColumnDto: CreateColumnDto, userId: string) {
    const newColumn = await this.prisma.column.create({
      data: {
        title: createColumnDto.title,
        userId,
      },
    });
    return newColumn;
  }

  async findAll(userId: string) {
    return await this.prisma.column.findMany({
      where: {
        userId,
      },
    });
  }

  async findOne(columnId: string, userId: string) {
    const column = await this.prisma.column.findFirst({
      where: {
        id: columnId,
        userId,
      },
    });
    return column ?? null;
  }

  async update(
    columnId: string,
    updateColumnDto: UpdateColumnDto,
    userId: string,
  ) {
    try {
      return await this.prisma.column.update({
        where: { id: columnId, userId },
        data: { title: updateColumnDto.title },
      });
    } catch {
      throw new NotFoundException();
    }
  }

  async remove(columnId: string, userId: string) {
    try {
      return await this.prisma.column.delete({
        where: { id: columnId, userId },
      });
    } catch {
      throw new NotFoundException();
    }
  }
}
