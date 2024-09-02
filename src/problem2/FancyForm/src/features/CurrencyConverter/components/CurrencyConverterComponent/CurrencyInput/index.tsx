import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ICurrencyForm } from "../../../../../interfaces";
import { CurrencyInputType } from "../../../../../interfaces/types";

export function CurencyInput({ name, title, register, errors }: CurrencyInputType) {
  return (
    <div className="flex-col w-full">
      <label htmlFor="custom-select" className="block text-sm font-medium text-gray-700 mb-2">
        {title}
      </label>
      <div className="relative text-gray-400 w-full">
        <input
          {...register(name, { required: "Required field" })}
          type="number"
          step="any"
          name={name}
          id={name}
          className="bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4"
        />
      </div>
      {errors && <p className="text-red-500 text-sm mt-1">{errors[name]?.message?.toString()}</p>}
    </div>
  );
}
