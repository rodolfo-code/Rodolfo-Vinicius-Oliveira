import { useState } from "react";
import { useFormContext } from "react-hook-form";
import currencyIcon from "../../assets/left-right.png";
import CurrencyConverter from "./components/CurrencyConverterComponent/index";

import { useCurrencies } from "../../context/currencyContext";
import { ICurrencyForm, IExchangeRateInfo } from "../../interfaces";
import { ExchangeRateDisplay } from "./components/ExchangeRateDisplay";
import { fetchExchangeRate, swapCurrencies } from "./helpers/helpers";
import { CurrencyInputType, CurrencySelectProps } from "../../interfaces/types";

export function CurrencyConverterFeature() {
  const { prices } = useCurrencies();
  const {
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    register,
    watch,
  } = useFormContext<ICurrencyForm>();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [exchangeRateInfo, setExchangeRateinfo] = useState<IExchangeRateInfo | null>(null);

  async function handleConvert(data: ICurrencyForm): Promise<void> {
    const { fromCurrency, toCurrency, amountToConvert } = data;

    const fromValue = Number(fromCurrency.value);
    const toValue = Number(toCurrency.value);
    const amount = Number(amountToConvert);

    setIsLoading(true);

    try {
      const exchangeResponse = await fetchExchangeRate(fromValue, amount, toValue);

      setExchangeRateinfo({
        amount: amount,
        fromCurrency: fromCurrency.label!,
        toCurrency: toCurrency.label!,
        exchange: exchangeResponse,
      });
    } catch (error) {
      console.error("Failed to convert currency:", error);
    } finally {
      setIsLoading(false);
    }
  }

  const fromCurrencySelectProps: CurrencySelectProps = {
    data: prices,
    name: "fromCurrency",
    icon: watch("fromCurrency").icon,
    title: "From",
    errors: errors,
  };

  const toCurrencySelectProps: CurrencySelectProps = {
    data: prices,
    name: "toCurrency",
    icon: watch("toCurrency").icon,
    title: "To",
    errors: errors,
  };

  const inputAmountProps: CurrencyInputType = {
    name: "amountToConvert",
    title: "Enter Amount",
    register: register,
    errors: errors,
  };

  return (
    <form onSubmit={handleSubmit(handleConvert)} className="w-full">
      <div className="h-full flex flex-col justify-center items-center ">
        <CurrencyConverter.Root>
          <CurrencyConverter.Section>
            <div className="flex flex-col w-full items-center my-3">
              <h2 className="text-3xl font-bold text-[#0a377e]">Currency converter</h2>
              <div>
                <p>Check live rates </p>
              </div>
            </div>
          </CurrencyConverter.Section>
          <div className="border-b-[1px]" />
          <CurrencyConverter.Section>
            <CurrencyConverter.Input {...inputAmountProps} />
          </CurrencyConverter.Section>

          <CurrencyConverter.Section>
            <CurrencyConverter.Select {...fromCurrencySelectProps} />

            <button
              onClick={(event) => swapCurrencies(event, setValue, getValues("fromCurrency"), getValues("toCurrency"), setExchangeRateinfo)}
              className="flex self-end justify-center transition-transform duration-200 ease-out hover:scale-105 hover:shadow-lg bg-[#224273] rounded-full cursor-pointer"
            >
              <img src={currencyIcon} width={45} />
            </button>

            <CurrencyConverter.Select {...toCurrencySelectProps} />
          </CurrencyConverter.Section>

          <CurrencyConverter.Section>
            <CurrencyConverter.Button isLoading={isLoading}>Get Exchange Rate</CurrencyConverter.Button>
          </CurrencyConverter.Section>
          <CurrencyConverter.Section>
            <ExchangeRateDisplay exchangeRateInfo={exchangeRateInfo} />
          </CurrencyConverter.Section>
        </CurrencyConverter.Root>
      </div>
    </form>
  );
}
