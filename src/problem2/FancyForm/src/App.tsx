import { FormProvider } from "react-hook-form";
import { CurrenciesProvider } from "./context/currencyContext";
import "./index.css";

import { CurrencyConverterFeature } from "./features/CurrencyConverter/CurrencyConverterFeature";
import { useFormCurrency } from "./features/CurrencyConverter/hooks/useFormCurrency";

export function App() {
  const methods = useFormCurrency();

  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-b from-soft-blue to-soft-grey">
      <FormProvider {...methods}>
        <CurrenciesProvider>
          <CurrencyConverterFeature />;
        </CurrenciesProvider>
      </FormProvider>
    </div>
  );
}
