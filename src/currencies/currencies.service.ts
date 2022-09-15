import { Injectable, InternalServerErrorException } from '@nestjs/common';

export class CurrenciesRepository {
  async getCurrency(currency: string): Promise<any> {
    return {};
  }
}

@Injectable()
export class CurrenciesService {
  constructor(private readonly currenciesRepository: CurrenciesRepository) {}
  async getCurrency(currency: string): Promise<any> {
    try {
      await this.currenciesRepository.getCurrency(currency);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}