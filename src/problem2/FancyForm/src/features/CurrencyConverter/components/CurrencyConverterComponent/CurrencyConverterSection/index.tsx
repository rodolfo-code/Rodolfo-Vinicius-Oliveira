import { ReactNode } from "react";

type CurrencyConverterSectionProps = {
  children: ReactNode;
};

export function CurrencyConverterSection({ children }: CurrencyConverterSectionProps) {
  return (
    <>
      <div className="flex justify-between items-center h-full w-full gap-4">{children}</div>
    </>
  );
}
