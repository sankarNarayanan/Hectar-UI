import SelectBox from "react-tailwindcss-select";
import { Controller } from "react-hook-form";
import PropTypes from "prop-types";
import { useFormControl } from "./validations/hooks";
import Label from "./Label";

function Select({
  name,
  label: Label,
  validators,
  errorMessage,
  children,
  onChange,
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

  return (
    <label>
      <div className="relative w-full">
        <div className="absolute w-full left-0 top-0">
          {Label ? <Label /> : <div>Custom label</div>}
          <div className="text-lg font-medium text-black">
            {parsedValue?.value || "Select"}
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
              isSearchable={true}
              {...inputProps}
              classNames={{
                menuButton: ({ isDisabled }) => "opacity-0 w-full flex",
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
