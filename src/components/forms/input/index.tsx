import React, { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface CustomInputProps extends InputHTMLAttributes<any> {
  label?: string | React.ReactNode;
  error?: FieldError;
}

const CustomInput: React.FC<CustomInputProps> = React.forwardRef(
  ({ label, className, error, type, name, ...rest }, ref) => {
    const renderInputLabel = () => {
      if (typeof label === "string")
        return (
          <label
            className={` text-xs md:text-sm  font-semibold text-[#344054] `}
          >
            {label}
          </label>
        );
      return label;
    };

    return (
      <div>
        <div className="flex flex-col gap-y-2 mb-1">
          {label && renderInputLabel()}
          <div className="relative">
            <input
              className={`${
                className || ""
              } outline-none  transition-all duration-200 text-sm border rounded-xl  px-4 py-3 h-[2.5rem]  md:h-[3rem] bg-[#F8FAFC]    w-full border-[#CBD5E1]  focus:ring-2 focus:ring-primary focus:ring-opacity-40 `}
              type={type}
              name={name}
              {...rest}
              ref={ref as any}
            />
          </div>
        </div>
        <div className="h-4">
          {error && (
            <span className="text-xs text-red-500 font-bold">
              {error.message || "field required"}
            </span>
          )}
        </div>
      </div>
    );
  }
);

export default CustomInput;
