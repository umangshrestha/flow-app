import { Module } from '@nestjs/common';
import { InstructorsService } from './instructors.service';
import { InstructorsResolver } from './instructors.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [InstructorsResolver, InstructorsService],
  imports:[PrismaModule]
})
export class InstructorsModule {}
