import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TypesService } from './types.service';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type-dto';
import { ApiTags, ApiOkResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { TypeEntity } from './entities/type.entity';

@Controller('types')
@ApiTags('types')
export class TypesController {
  constructor(private readonly typesService: TypesService) {}

  @Post()
  @ApiCreatedResponse({ type: TypeEntity })
  create(@Body() createTypeDto: CreateTypeDto) {
    return this.typesService.create(createTypeDto);
  }

  @Get()
  @ApiOkResponse({ type: TypeEntity, isArray: true })
  findAll() {
    return this.typesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: TypeEntity })
  findOne(@Param('id') id: string) {
    return this.typesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: TypeEntity })
  update(@Param('id') id: string, @Body() updateTypeDto: UpdateTypeDto) {
    return this.typesService.update(+id, updateTypeDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: TypeEntity })
  remove(@Param('id') id: string) {
    return this.typesService.remove(+id);
  }
}
