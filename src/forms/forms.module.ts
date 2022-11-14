import { Module } from '@nestjs/common';
import { FormsService } from './forms.service';
import { FormsController } from './forms.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { FormSectionService } from './section.service';

@Module({
  imports: [PrismaModule],
  controllers: [FormsController],
  providers: [FormsService, FormSectionService]
})
export class FormsModule {}
