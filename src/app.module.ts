import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExchangeModule } from './exchange/exchange.module';
import { CurrenciesModule } from './currencies/currencies.module';

@Module({
  imports: [ExchangeModule, CurrenciesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
