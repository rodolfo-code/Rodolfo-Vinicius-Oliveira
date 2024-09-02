import React, { ReactNode } from "react";

export function CurrencyConverterRoot({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-auto w-5/6 md:w-1/2 xl:w-2/5 2xl:w-2/6 3xl:w-1/3 mx-auto p-5 md:p-6 2xl:p-8 3xl:p-9 bg-[#ffffff] rounded-2xl shadow-lg gap-5">
      {children}
    </div>
  );
}
