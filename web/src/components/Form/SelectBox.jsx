import SelectBox from "react-tailwindcss-select";
import { Controller } from "react-hook-form";
import PropTypes from "prop-types";
import { useFormControl } from "./validations/hooks";
import Label from "./Label";

import ChevronDownIcon from "@/assets/svg/chevron-down.svg";

function RenderValue({
  variant,
  parsedValue,
  isMultiple,
  icon: Icon,
  label = "select",
  reset,
}) {
  const getRenderedText = () => {
    return (
      <div className="flex items-center px-2 w-full">
        {Icon && <Icon className="text-[#DBDAE1] mr-2" />}
        {/* Render Value if value is selected else render Label text */}
        <p className="truncate">{parsedValue?.value || label}</p>
      </div>
    );
  };

  const getRenderedTextBorder = () => parsedValue?.value || <></>;

  if (variant === "bordered") return getRenderedTextBorder();

  return getRenderedText();
}

function Select({
  name,
  label,
  validators,
  errorMessage,
  children,
  onChange,
  icon,
  variant = "",
  isMultiple = false,
  placeholder = "Select...",
  ...inputProps
}) {
  const {
    error,
    control,
    options,
    validatorConfig,
    isSuccess,
    isError,
    setValue,
    watch,
    message,
    resetField,
  } = useFormControl(name, validators, errorMessage);

  const value = watch(name);
  const parsedValue = value && JSON.parse(value);
  const handleChange = (value, onChangeFromController) => {
    // caling the onChange from the controller
    typeof onChangeFromController === "function" &&
      onChangeFromController(value);
    setValue(name, JSON.stringify(value));

    // Call the onChange from props if passed and is a function
    typeof onChange === "function" && onChange(value);
  };

  const reset = () => {
    resetField(name);
  };

  return (
    <label>
      <div className="relative w-full min-w-[120px] z-10">
        <div className="absolute w-full left-0 top-[10px] px-2">
          <div className="flex justify-between items-center w-full">
            <RenderValue
              label={label}
              icon={icon}
              variant={variant}
              parsedValue={parsedValue}
              isMultiple={isMultiple}
              reset={reset}
            />
            {/* Do not render chevron drop down for multiple cases */}
            {!isMultiple && (
              <div>
                <ChevronDownIcon className="relative right-2.5" />
              </div>
            )}
          </div>
        </div>

        <Controller
          name={name}
          control={control}
          rules={{ validate: validatorConfig }}
          render={({ field: { onChange, onBlur, value: inputValue } }) => (
            <SelectBox
              onChange={(value) => handleChange(value, onChange)}
              onBlur={onBlur}
              value={inputValue && JSON.parse(inputValue)}
              options={options}
              isMultiple={isMultiple}
              placeholder={placeholder}
              {...inputProps}
              classNames={{
                menuButton: ({ isDisabled }) => {
                  if (variant === "bordered")
                    return "border border-gray-400 w-full flex rounded-lg";

                  return "opacity-0 w-full flex";
                },
                menu: "absolute z-10 w-full bg-white shadow-lg border rounded py-1 mt-1.5 text-sm text-gray-700",
              }}
            >
              {children}
            </SelectBox>
          )}
        />
        {isError && <div className="text-red-500 text-sm pt-2">{message}</div>}
      </div>
    </label>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  validators: PropTypes.array,
  errorMessage: PropTypes.object,
  onChange: PropTypes.func,
  icon: PropTypes.object,
};

Object.assign(Select, {
  Label,
});

export default Select;
