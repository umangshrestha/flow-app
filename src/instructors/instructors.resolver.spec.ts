import { Test, TestingModule } from '@nestjs/testing';
import { InstructorsResolver } from './instructors.resolver';
import { InstructorsService } from './instructors.service';

describe('InstructorsResolver', () => {
  let resolver: InstructorsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstructorsResolver, InstructorsService],
    }).compile();

    resolver = module.get<InstructorsResolver>(InstructorsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
