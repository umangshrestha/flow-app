import { Module } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { DepartmentsResolver } from './departments.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [DepartmentsResolver, DepartmentsService],
  imports: [PrismaModule]
})
export class DepartmentsModule {}
