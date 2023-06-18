import SelectBox from "react-tailwindcss-select";
import { Controller } from "react-hook-form";
import PropTypes from "prop-types";
import { useFormControl } from "./validations/hooks";
import Label from "./Label";
import { XMarkIcon } from "@heroicons/react/24/outline";

function RenderValue({ variant, parsedValue, isMultiple, Label, reset }) {
  if (!parsedValue) {
    return variant === "bordered" ? <></> : "Select";
  }
  if (isMultiple) {
    return null;
  }
  return parsedValue.value;
}

function Select({
  name,
  label: Label,
  validators,
  errorMessage,
  children,
  onChange,
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
      <div className="relative w-full">
        <div className="absolute w-full left-0 top-0">
          {variant !== "bordered" &&
            (Label ? <Label /> : <div>Custom label</div>)}
          <div
            className={
              variant === "bordered" ? "" : "text-lg font-medium text-black"
            }
          >
            <RenderValue
              Label={Label}
              variant={variant}
              parsedValue={parsedValue}
              isMultiple={isMultiple}
              reset={reset}
            />
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
              isSearchable={true}
              {...inputProps}
              classNames={{
                menuButton: ({ isDisabled }) => {
                  if (variant === "bordered")
                    return "border border-gray-400 w-full flex rounded-lg";

                  return "opacity-0 w-full flex";
                },
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
};

Object.assign(Select, {
  Label,
});

export default Select;
