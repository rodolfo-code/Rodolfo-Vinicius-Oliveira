import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormattedCurrencyOption, ICurrencyForm } from ".";

export type CurrencySelectProps = {
  data: FormattedCurrencyOption[] | null;
  name: keyof ICurrencyForm;
  icon: string;
  title: string;
  errors: FieldErrors<ICurrencyForm>;
};

export type CurrencyInputType = {
  name: keyof ICurrencyForm;
  title: string;
  register: UseFormRegister<ICurrencyForm>;
  errors: FieldErrors<ICurrencyForm>;
};
