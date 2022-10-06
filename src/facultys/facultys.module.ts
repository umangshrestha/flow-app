import { Module } from '@nestjs/common';
import { FacultysService } from './facultys.service';
import { FacultysController } from './facultys.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [FacultysController],
  providers: [FacultysService],
  imports: [PrismaModule],
})
export class FacultysModule {}
