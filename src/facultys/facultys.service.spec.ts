import { Test, TestingModule } from '@nestjs/testing';
import { FacultysService } from './facultys.service';
import { PrismaModule } from '../prisma/prisma.module';

describe('FacultysService', () => {
  let service: FacultysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FacultysService],
      imports: [PrismaModule]
    }).compile();

    service = module.get<FacultysService>(FacultysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
