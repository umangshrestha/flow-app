import { SetMetadata } from '@nestjs/common';
import { Role } from '@prisma/client';

export const isRole = (role: Role) => SetMetadata('role', role);
