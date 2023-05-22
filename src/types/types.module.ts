import { PrismaModule } from './../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { TypesService } from './types.service';
import { TypesController } from './types.controller';

@Module({
  controllers: [TypesController],
  providers: [TypesService],
  imports: [PrismaModule],
})
export class TypesModule {}
