import { Module } from '@nestjs/common';
import { TopicsService } from './topics.service';
import { TopicsResolver } from './topics.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [TopicsResolver, TopicsService],
  imports: [PrismaModule]
})
export class TopicsModule {}
