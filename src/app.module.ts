import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { TopicsModule } from './topics/topics.module';
import { FacultysModule } from './facultys/facultys.module';
import PostsModule from './posts/posts.module';

@Module({
  imports: [PrismaModule, TopicsModule, FacultysModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
