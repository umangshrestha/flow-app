import { Module } from '@nestjs/common';
import { FacultysService } from './facultys.service';
import { FacultysResolver } from './facultys.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [FacultysResolver, FacultysService],
  imports: [PrismaModule]
})
export class FacultysModule {}
