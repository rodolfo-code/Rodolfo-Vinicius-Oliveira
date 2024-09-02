import { ReactNode } from "react";
import { SpinnerIcon } from "../icons/SpinnerIcon";

type CurrencyConverterButton = {
  children: ReactNode;
  isLoading?: boolean;
  onClick?: () => void;
};

export function Button({ children, isLoading = false, onClick }: CurrencyConverterButton) {
  return (
    <>
      <button
        onClick={onClick}
        className="w-full h-14 bg-[#4979c1] text-gray-100 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-300 hover:bg-[#426eaf]  font-semibold py-2 px-4 shadow hover:shadow-md"
      >
        {isLoading ? (
          <div className="flex justify-center items-center">
            <SpinnerIcon />
            <p>Loading...</p>
          </div>
        ) : (
          <>{children}</>
        )}
      </button>
    </>
  );
}
