import { Module } from '@nestjs/common';
import { PurchaseController } from './controlers/purchases.controller';

@Module({
  controllers: [PurchaseController],
})
export class MessagingModule {}
