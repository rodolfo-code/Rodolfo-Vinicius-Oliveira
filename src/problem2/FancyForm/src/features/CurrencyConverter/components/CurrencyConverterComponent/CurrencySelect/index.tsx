import { useState } from "react";
import { Controller, FieldErrors, useFormContext } from "react-hook-form";
import ReactSelect from "react-select";
import { FormattedCurrencyOption, ICurrencyForm } from "../../../../../interfaces";
import { customStyles } from "./customStyle";
import { CurrencySelectProps } from "../../../../../interfaces/types";

export function CurrencySelect({ data, icon, title, name, errors }: CurrencySelectProps) {
  const { control } = useFormContext();

  const formatOptionLabel = ({ label, icon }: FormattedCurrencyOption, { context }: any) => {
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        {context === "menu" ? <img src={icon} alt={label} style={{ marginRight: "8px", width: "20px", height: "20px" }} /> : null}
        {label}
      </div>
    );
  };

  return (
    <div className="flex-col w-2/6">
      <label htmlFor="custom-select" className="block text-sm font-medium text-gray-700 mb-2">
        {title}
      </label>
      <div className="flex w-full bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400  rounded-l-lg py-2 px-4">
        <img src={icon} className="z-50 w-8" />
        <Controller
          name={name}
          control={control}
          rules={{
            validate: (value) => {
              return value && value.value ? true : "Required field";
            },
          }}
          render={({ field }) => (
            <ReactSelect
              {...field}
              options={data || []}
              placeholder=""
              formatOptionLabel={formatOptionLabel}
              className="ml-2 rounded-[40px] border-[#EBEBEB] w-[100%]"
              styles={customStyles}
            />
          )}
        />
      </div>
      {errors && <p className="text-red-500 text-sm mt-1">{errors[name]?.message?.toString()}</p>}
    </div>
  );
}
