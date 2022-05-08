import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { DatabaseModule } from 'src/database/database.module';
import path from 'node:path';

import { ProductsResolver } from './graphql/resolvers/products.resolver';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { ProductsService } from 'src/services/products.service';
import { PurchasesService } from 'src/services/purchases.service';
import { PurchasesResolver } from 'src/http/graphql/resolvers/purchases.resolver';
import { CustomersService } from 'src/services/customers.service';
import { CustomerResolver } from 'src/http/graphql/resolvers/customer.resolver';
import { MessagingModule } from 'src/messaging/messaging.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    MessagingModule,
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.graphql'),
      playground: true,
      driver: ApolloFederationDriver,
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
    CustomerResolver,
  ],
})
export class HttpModule {}
