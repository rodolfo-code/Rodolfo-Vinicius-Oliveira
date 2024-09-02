export interface FormattedCurrencyOption {
  value: number;
  label: string;
  icon: string;
}

export interface CurrencyApiResponse {
  currency: string;
  price: number;
}

export interface CurrencyOption {
  value: string | null;
  label: string | null;
  icon: string;
}

export interface ICurrencyForm {
  amountToConvert: string;
  fromCurrency: CurrencyOption;
  toCurrency: CurrencyOption;
  exchangeRate: string | null;
  exchangeRateInfo: any;
}

export interface IExchangeRateInfo {
  amount: number;
  fromCurrency: string;
  toCurrency: string;
  exchange: number;
}
