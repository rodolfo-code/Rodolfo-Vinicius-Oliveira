import { UseFormSetValue } from "react-hook-form";
import { CurrencyOption, ICurrencyForm, IExchangeRateInfo } from "../../../interfaces";
import { Dispatch, SetStateAction } from "react";

const API_DELAY = 1500;

export function currencyConversion(fromCurrencyPrice: number, amount: number, toCurrencyPrice: number): number {
  const exchange = (fromCurrencyPrice / toCurrencyPrice) * amount;
  return Number(exchange.toFixed(3));
}

export async function fetchExchangeRate(fromCurrency: number, amount: number, toCurrency: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const exchange = currencyConversion(fromCurrency, amount, toCurrency);
      resolve(exchange);
    }, API_DELAY);
  });
}

export function swapCurrencies(
  event: React.MouseEvent,
  setValue: UseFormSetValue<ICurrencyForm>,
  fromCurrency: CurrencyOption,
  toCurrency: CurrencyOption,
  resetExchangeRateInfo: Dispatch<SetStateAction<IExchangeRateInfo | null>>
) {
  event.preventDefault();
  setValue("fromCurrency", toCurrency);
  setValue("toCurrency", fromCurrency);
  resetExchangeRateInfo(null);
}
