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
import { CardsService } from './cards.service';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('cards')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('columns/:columnId/cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Post()
  create(
    @Request() { userId },
    @Param('columnId') columnId: string,
    @Body() createCardDto: CreateCardDto,
  ) {
    return this.cardsService.create(createCardDto, columnId, userId);
  }

  @Get()
  findAll(@Request() { userId }, @Param('columnId') columnId: string) {
    return this.cardsService.findAll(columnId, userId);
  }

  @Get(':cardId')
  findOne(
    @Request() { userId },
    @Param('columnId') columnId: string,
    @Param('cardId') cardId: string,
  ) {
    return this.cardsService.findOne(cardId, columnId, userId);
  }

  @Patch(':cardId')
  update(
    @Request() { userId },
    @Param('columnId') columnId: string,
    @Param('cardId') cardId: string,
    @Body() updateCardDto: UpdateCardDto,
  ) {
    return this.cardsService.update(cardId, updateCardDto, columnId, userId);
  }

  @Delete(':cardId')
  remove(
    @Request() { userId },
    @Param('columnId') columnId: string,
    @Param('cardId') cardId: string,
  ) {
    return this.cardsService.remove(cardId, columnId, userId);
  }
}
