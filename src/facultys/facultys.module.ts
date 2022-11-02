import { Module } from '@nestjs/common';
import { FacultysService } from './facultys.service';
import { FacultysController } from './facultys.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { DepartmentsModule } from 'src/departments/departments.module';

@Module({
  imports:[PrismaModule, DepartmentsModule],
  controllers: [FacultysController],
  providers: [FacultysService]
})
export class FacultysModule {}
