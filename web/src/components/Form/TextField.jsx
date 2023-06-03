import { Input } from "@/components";
import { Controller } from "react-hook-form";
import PropTypes from "prop-types";
import { useFormControl } from "./validations/hooks";

export default function FormTextField({
  name,
  label,
  validators,
  errorMessage,
  ...inputProps
}) {
  const { error, control, validatorConfig, isSuccess, isError } = useFormControl(
    name,
    validators,
    errorMessage,
  );
  return (
    <Controller
      name={name}
      control={control}
      rules={{validate: validatorConfig}}
      render={({ field: { onChange, onBlur, value } }) => (
        <Input
          label={label}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          error={isError}
          success={isSuccess}
          {...inputProps}
        />
      )}
    />
  );
}

FormTextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  validators: PropTypes.array,
};
