import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { DatabaseModule } from 'src/database/database.module';
import path from 'node:path';
import { ProductsResolver } from '../graphql/resolvers/products.resolver';
import { ApolloDriver } from '@nestjs/apollo';
import { ProductsService } from 'src/services/products.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot({
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.graphql'),
      playground: true,
      driver: ApolloDriver,
    }),
  ],
  providers: [ProductsResolver, ProductsService],
})
export class HttpModule {}
