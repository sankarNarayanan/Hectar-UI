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
  } = useFormControl(name, validators, errorMessage);

  const value = watch(name);
  const parsedValue = value && JSON.parse(value);
  const handleChange = (value) => {
    console.log("value:", value);
    setValue(name, JSON.stringify(value));
  };

  return (
    <label>
      <div className="relative w-full">
        <div className="absolute w-full left-0 top-0 border border-gray-200 py-3 px-5">
          {Label ? <Label /> : <div>Custom label</div>}
          <div className="text-lg font-medium text-black">
            {parsedValue?.value || "Select"}
          </div>
        </div>

        <Controller
          name={name}
          control={control}
          rules={{ validate: validatorConfig }}
          onChange={() => console.log("This should not be called")}
          render={({ field: { onChange, onBlur, value: inputValue } }) => (
            <SelectBox
              onChange={handleChange}
              onBlur={onBlur}
              value={inputValue && JSON.parse(inputValue)}
              options={options}
              isSearchable={true}
              {...inputProps}
              classNames={{
                menuButton: ({ isDisabled }) => "opacity-0 w-full",
              }}
            >
              {children}
            </SelectBox>
          )}
        />
      </div>
    </label>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  validators: PropTypes.array,
  errorMessage: PropTypes.object,
};

Object.assign(Select, {
  Label,
});

export default Select;
