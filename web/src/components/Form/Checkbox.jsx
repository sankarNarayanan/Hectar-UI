import { Checkbox } from "@/components";
import { Controller, useFormContext } from "react-hook-form";
import PropTypes from "prop-types";

export default function FormCheckbox({ name, ...inputProps }) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Checkbox onChange={onChange} checked={!!value} {...inputProps} />
      )}
    />
  );
}

FormCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
}
