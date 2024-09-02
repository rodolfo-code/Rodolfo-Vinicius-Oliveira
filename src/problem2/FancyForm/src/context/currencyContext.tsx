import * as React from "react";
import { createContext, useContext, useState } from "react";
import { api } from "../services/axiosConfig";
import { CurrencyApiResponse, FormattedCurrencyOption } from "../interfaces";
import { mapCurrencyData } from "../utils/currencyMapper";

interface CurrenciesContextProps {
  prices: FormattedCurrencyOption[];
}

const defaultContextValue: CurrenciesContextProps = {
  prices: [],
};

const CurrenciesContext = createContext<CurrenciesContextProps>(defaultContextValue);

export const useCurrencies = () => useContext(CurrenciesContext);

export const CurrenciesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [prices, setPrices] = useState<FormattedCurrencyOption[]>([]);

  async function fetchPriceData() {
    try {
      const result = await api.get<CurrencyApiResponse[]>("/prices.json");

      const mappedCurrencies = mapCurrencyData(result.data);

      setPrices(mappedCurrencies);
    } catch (error) {
      console.error("Error fetching:", error);
      setPrices([]);
    }
  }

  React.useEffect(() => {
    fetchPriceData();
  }, []);

  return <CurrenciesContext.Provider value={{ prices }}>{children}</CurrenciesContext.Provider>;
};
