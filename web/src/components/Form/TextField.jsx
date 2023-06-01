import { Input } from "@/components";
import { Controller, useFormContext } from "react-hook-form";
import PropTypes from "prop-types";

export default function FormTextField({ name, label, ...inputProps }) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Input
          label={label}
          onChange={onChange}
          value={value}
          {...inputProps}
        />
      )}
    />
  );
}

FormTextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
