import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AdminController } from './controller/admin.controller';
import { UsersController } from './controller/users.controller';
import { UsersService } from './users.service';

@Module({
    controllers: [UsersController, AdminController],
    providers: [UsersService],
    imports: [PrismaModule],
})
export class UsersModule { }
