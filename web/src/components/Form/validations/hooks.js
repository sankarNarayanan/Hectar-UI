import { useFormContext } from "react-hook-form";
import getValidator from ".";

export function useFormControl(name, validatorArray, errorMessage) {
  const { control, getFieldState, formState, getValues, setValue, watch } =
    useFormContext();
  // Subscribing for error state changes
  const fieldState = getFieldState(name, formState);
  const { error, isDirty, invalid } = fieldState;
  // Computing is Successful
  const isSuccess = isDirty && !invalid;
  // Computing isError
  const isError = invalid;

  let validatorConfig = {};
  // Prepare the validator config
  if (validatorArray && validatorArray.length) {
    validatorArray.forEach((validator) => {
      validatorConfig[validator] = getValidator(validator);
    });
  }

  //   Compute Error message from the message map
  const message = errorMessage?.[error?.type] || "this field is invalid";
  return {
    validatorConfig,
    error,
    control,
    message,
    isSuccess,
    isError,
    setValue,
    watch,
  };
}
