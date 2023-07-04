import { Input } from "@/components";
import { Controller } from "react-hook-form";
import PropTypes from "prop-types";
import { useFormControl } from "./validations/hooks";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function FormTextField({
  name,
  label,
  validators,
  errorMessage,
  isLoading,
  ...inputProps
}) {
  const { error, control, validatorConfig, isSuccess, isError } =
    useFormControl(name, validators, errorMessage);

  if (isLoading) {
    return <Skeleton className="h-10" />;
  }
  return (
    <Controller
      name={name}
      control={control}
      rules={{ validate: validatorConfig }}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <Input
          label={label}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          error={isError}
          success={isSuccess}
          inputRef={ref}
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
