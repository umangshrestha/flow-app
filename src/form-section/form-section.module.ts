import { Module } from '@nestjs/common';
import { FormSectionService } from './form-section.service';
import { FormSectionResolver } from './form-section.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [FormSectionResolver, FormSectionService],
  exports: [
    FormSectionService
  ],
  imports: [PrismaModule],
})
export class FormSectionModule {}
