import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { genHash } from 'src/utils/password';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.prisma.user.findFirst({
      where: {
        email: createUserDto.email,
      },
    });

    if (user)
      throw new HttpException(
        'There is already a user with this email address. Please sign in.',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );

    const hash = await genHash(createUserDto.password);
    const newUser = await this.prisma.user.create({
      data: {
        email: createUserDto.email,
        password: hash,
      },
    });
    return [newUser.email, createUserDto.password];
  }

  async findOne(email: string) {
    const user = await this.prisma.user.findFirst({
      where: { email },
    });

    return user ?? null;
  }
}
