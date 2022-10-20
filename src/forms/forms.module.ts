import { Module } from '@nestjs/common';
import { FormsService } from './forms.service';
import { FormsResolver } from './forms.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';
import { FormSectionModule } from 'src/form-section/form-section.module';

@Module({
  providers: [FormsResolver, FormsService],
  imports: [PrismaModule, FormSectionModule]
})
export class FormsModule {}
