import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FlowsService as Service} from './flows.service';
import { FlowEntity as Entity } from './entities/flow.entity';
import { CreateFlowInput as CreateInput} from './dto/create-flow.input';
import { UpdateFlowInput as UpdateInput} from './dto/update-flow.input';
import { QueryInput } from 'src/shared/dto/query.input';

@Resolver(() => Entity)
export class FlowsResolver {
  constructor(private readonly service: Service) { }

  @Mutation(() => Entity)
  createFlow(@Args('create') createInput: CreateInput) {
    return this.service.create(createInput);
  }

  @Query(() => [Entity], { name: 'flows' })
  findAll(@Args("query", { nullable: true }) query: QueryInput) {
    return this.service.findAll(query);
  }

  @Query(() => Entity, { name: 'flow' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.service.findOne(id);
  }

  @Mutation(() => Entity)
  updateFlow(@Args('update') update: UpdateInput) {
    return this.service.update(update);
  }

  @Mutation(() => Entity)
  removeFlow(@Args('id', { type: () => Int }) id: number) {
    return this.service.remove(id);
  }
}
