import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { DatabaseModule } from 'src/database/database.module';
import path from 'node:path';
import { ProductsResolver } from '../graphql/resolvers/products.resolver';
import { ApolloDriver } from '@nestjs/apollo';
import { ProductsService } from 'src/services/products.service';
import { PurchasesService } from 'src/services/purchases.service';
import { PurchasesResolver } from 'src/graphql/resolvers/purchases.resolver';
import { CustomersService } from 'src/services/customers.service';

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
  providers: [
    // Products
    ProductsResolver,
    ProductsService,

    // Purchases
    PurchasesService,
    PurchasesResolver,

    // Customers
    CustomersService,
  ],
})
export class HttpModule {}
