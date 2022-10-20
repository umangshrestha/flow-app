import { Module } from '@nestjs/common';
import { ParentTopicsService } from './parent-topics.service';
import { ParentTopicsResolver } from './parent-topics.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [ParentTopicsResolver, ParentTopicsService],
  imports: [PrismaModule]
})
export class ParentTopicsModule {}
