import { Injectable } from '@nestjs/common';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type-dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TypesService {
  constructor(private prisma: PrismaService) {}

  create(createTypeDto: CreateTypeDto) {
    return this.prisma.type.create({ data: createTypeDto });
  }

  findAll() {
    return this.prisma.type.findMany();
  }

  findOne(id: number) {
    return this.prisma.type.findUnique({ where: { id } });
  }

  update(id: number, updateTypeDto: UpdateTypeDto) {
    return this.prisma.type.update({
      where: { id },
      data: updateTypeDto,
    });
  }

  remove(id: number) {
    return this.prisma.type.delete({ where: { id } });
  }
}
