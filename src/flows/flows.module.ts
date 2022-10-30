import { Module } from '@nestjs/common';
import { FlowsService } from './flows.service';
import { FlowsResolver } from './flows.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [FlowsResolver, FlowsService],
  imports: [PrismaModule]
})
export class FlowsModule {}
