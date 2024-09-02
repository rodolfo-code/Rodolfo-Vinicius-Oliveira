import { useForm } from "react-hook-form";
import { ICurrencyForm } from "../../../interfaces";

const defaultValues = {
  amountToConvert: "",
  fromCurrency: {
    value: "",
    label: "",
    icon: "",
  },
  toCurrency: {
    value: "",
    label: "",
    icon: "",
  },
  exchangeRate: "",
};

export const useFormCurrency = () => {
  const { ...rest } = useForm<ICurrencyForm>({
    criteriaMode: "all",
    mode: "all",
    defaultValues: {
      ...defaultValues,
    },
  });

  return {
    ...rest,
  };
};
