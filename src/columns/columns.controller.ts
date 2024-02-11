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
import { ColumnsService } from './columns.service';
import { CreateColumnDto } from './dto/create-column.dto';
import { UpdateColumnDto } from './dto/update-column.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('columns')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('columns')
export class ColumnsController {
  constructor(private readonly columnsService: ColumnsService) { }

  @Post()
  create(@Request() { userId }, @Body() createColumnDto: CreateColumnDto) {
    return this.columnsService.create(createColumnDto, userId);
  }

  @Get()
  findAll(@Request() { userId }) {
    return this.columnsService.findAll(userId);
  }

  @Get(':columnId')
  findOne(@Request() { userId }, @Param('columnId') columnId: string) {
    return this.columnsService.findOne(columnId, userId);
  }

  @Patch(':columnId')
  update(
    @Request() { userId },
    @Param('columnId') columnId: string,
    @Body() updateColumnDto: UpdateColumnDto,
  ) {
    return this.columnsService.update(columnId, updateColumnDto, userId);
  }

  @Delete(':columnId')
  remove(@Request() { userId }, @Param('columnId') columnId: string) {
    return this.columnsService.remove(columnId, userId);
  }
}
