import { CurrencyApiResponse, FormattedCurrencyOption } from "../interfaces";

export function mapCurrencyData(data: CurrencyApiResponse[]): FormattedCurrencyOption[] {
  let baseUrlIcon = "https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens";
  return data.map<FormattedCurrencyOption>(({ currency, price }) => ({
    value: price,
    label: currency,
    icon: `${baseUrlIcon}/${formatString(currency)}.svg`,
  }));
}

function formatString(input: string) {
  if (input.startsWith("ST") && input !== "STRD") {
    return input.replace(/^ST/, "");
  }

  if (input.startsWith("R")) {
    return input.replace(/^R/, "r");
  }
  return input;
}
