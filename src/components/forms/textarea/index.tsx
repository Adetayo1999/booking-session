import React, { TextareaHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface CustomTextareaProps extends TextareaHTMLAttributes<any> {
  label?: string | React.ReactNode;
  error?: FieldError;
}

const CustomTextarea: React.FC<CustomTextareaProps> = React.forwardRef(
  ({ label, className, error, ...rest }, ref) => {
    const renderInputLabel = () => {
      if (typeof label === "string")
        return (
          <label
            className={` text-sm  font-semibold md:text-[#344054] text-gray-200 ${
              error && "text-red-500"
            }`}
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
            <textarea
              cols={30}
              rows={3}
              {...rest}
              ref={ref as any}
              className={`
                "outline-none  transition-all duration-200 text-sm outline-none border rounded-xl  px-4 py-3  bg-[#F8FAFC] w-full ${
                  error
                    ? "border-red-500"
                    : "border-[#CBD5E1]  focus:ring-2 focus:ring-primary focus:ring-opacity-40"
                } ${className || ""} `}
            ></textarea>
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

export default CustomTextarea;
