import { Test, TestingModule } from '@nestjs/testing';
import { FacultysResolver } from './facultys.resolver';
import { FacultysService } from './facultys.service';

describe('FacultysResolver', () => {
  let resolver: FacultysResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FacultysResolver, FacultysService],
    }).compile();

    resolver = module.get<FacultysResolver>(FacultysResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
