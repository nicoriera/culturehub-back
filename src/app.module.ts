import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ArticlesModule } from './articles/articles.module';
import { TypesModule } from './types/types.module';

@Module({
  imports: [PrismaModule, ArticlesModule, TypesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
