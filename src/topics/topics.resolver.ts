import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TopicsService as Service } from './topics.service';
import { TopicEntity as Entity } from './entities/topic.entity';
import { CreateTopicInput as CreateInput } from './dto/create-topic.input';
import { UpdateTopicInput as UpdateInput } from './dto/update-topic.input';
import { QueryInput } from 'src/shared/dto/query.input';

@Resolver(() => Entity)
export class TopicsResolver {
  constructor(private readonly service: Service) { }

  @Mutation(() => Entity)
  createTopic(@Args('create') createInput: CreateInput) {
    return this.service.create(createInput);
  }

  @Query(() => [Entity], { name: 'topics' })
  findAll(@Args("query", { nullable: true }) query: QueryInput) {
    return this.service.findAll(query);
  }

  @Query(() => Entity, { name: 'topic' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.service.findOne(id);
  }

  @Mutation(() => Entity)
  updateTopic(@Args('update') updateInput: UpdateInput) {
    return this.service.update(updateInput);
  }

  @Mutation(() => Entity)
  removeTopic(@Args('id', { type: () => Int }) id: number) {
    return this.service.remove(id);
  }
}
