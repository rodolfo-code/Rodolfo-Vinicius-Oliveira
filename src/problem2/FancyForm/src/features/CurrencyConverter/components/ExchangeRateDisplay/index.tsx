import { IExchangeRateInfo } from "../../../../interfaces";

export function ExchangeRateDisplay({ exchangeRateInfo }: { exchangeRateInfo: IExchangeRateInfo | null }) {
  return (
    <div className="flex w-full h-20 p-12 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-center items-center w-full text-xl font-bold text-[#8e8e8e]">
        {exchangeRateInfo && (
          <div className="flex items-center space-x-2 flex-wrap">
            <p className="text-[#426eaf]">{exchangeRateInfo.amount.toLocaleString("en-US")}</p>
            <p>{exchangeRateInfo.fromCurrency} = </p>
            <p className="text-[#426eaf]">{exchangeRateInfo.exchange.toLocaleString("en-US")}</p>
            <p>{exchangeRateInfo.toCurrency}</p>
          </div>
        )}
      </div>
    </div>
  );
}
