import { Textarea } from "@/components";
import { Controller, useFormContext } from "react-hook-form";
import PropTypes from "prop-types";

export default function FormTextArea({ name, label, ...inputProps }) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Textarea
          label={label}
          onChange={onChange}
          value={value}
          {...inputProps}
        />
      )}
    />
  );
}

FormTextArea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
