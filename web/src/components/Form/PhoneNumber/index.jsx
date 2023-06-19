import { Input } from "@/components";

import { useCountries } from "use-react-countries";
import { Controller } from "react-hook-form";

import { Menu, MenuHandler, MenuItem, MenuList } from "@/components";
import { useState } from "react";
import PropTypes from "prop-types";
import { useFormControl } from "../validations/hooks";

/**
 * The component to manage the Pnone Number field
 * @returns {jsx}
 */
export default function PhoneNumber({
  name,
  label,
  className,
  validators,
  errorMessage,
  ...inputProps
}) {
  // Getting the countries data from useCountries 3rd party Hook
  let { countries } = useCountries();
  // Sort the countries by country name
  countries = countries.sort((a, b) => a.name.localeCompare(b.name));
  // The state to remember the country code
  const [country, setCountry] = useState(0);
  // fetch the selected country name, flag icon and country code
  const { countryName, flags, countryCallingCode } = countries[country];
  validators.push("phone");
  const { error, control, validatorConfig, isSuccess, isError, setValue } =
    useFormControl(name, validators, errorMessage);

  // customizing the change handler to handle multiple things
  // 1. default behaviour of React Hook Form
  // 2. setting custom value to Hook Form
  // 3. User defined change handler
  const handleChange = (event, onChangeFromController) => {
    // caling the onChange from the controller
    typeof onChangeFromController === "function" &&
      onChangeFromController(event);

    // set the value in the hook form after prepending the country code
    setValue(
      name,
      // replacing the space in the country code
      `${countryCallingCode.replace(" ", "")} ${event.target.value}`
    );

    // Call the onChange from props if passed and is a function
    typeof onChange === "function" && onChange(value);
  };

  // customizing the text box class names along with user defined
  // TODO: need to prioritize user defined classes
  className += " rounded-l-none border-l-0 w-10";

  return (
    <>
      <div className="relative flex w-full">
        <Menu placement="bottom-start">
          <MenuHandler>
            <div
              className={`flex h-10 text-[11px] -mr-px .text-blue-gray-700 items-center gap-2 rounded-lg rounded-r-none border pl-3 w-100 ${
                isError
                  ? "border-red-500"
                  : isSuccess
                  ? "border-green-500"
                  : "border-blue-gray-200"
              } `}
            >
              <img
                src={flags.svg}
                alt={countryName}
                className="h-4 w-4 rounded-full object-cover"
              />
              {countryCallingCode}
            </div>
          </MenuHandler>
          <MenuList className="max-h-[20rem] max-w-[18rem] z-[10000]">
            {countries.map(
              ({ name: countryName, flags, countryCallingCode }, index) => {
                return (
                  <MenuItem
                    key={countryName}
                    value={countryName}
                    className="flex items-center gap-2"
                    onClick={() => setCountry(index)}
                  >
                    <img
                      src={flags.svg}
                      alt={countryName}
                      className="h-5 w-5 rounded-full object-cover"
                    />
                    {countryName}{" "}
                    <span className="ml-auto">{countryCallingCode}</span>
                  </MenuItem>
                );
              }
            )}
          </MenuList>
        </Menu>
        <Controller
          name={name}
          control={control}
          rules={{ validate: validatorConfig }}
          render={({ field: { onChange, onBlur, value = "", ref } }) => (
            <Input
              label={label}
              onChange={(value) => handleChange(value, onChange)}
              onBlur={onBlur}
              // removing the country code to display
              // assuming the first space will be between country code and phone number
              value={value.split(" ").slice(1).join("")}
              error={isError}
              success={isSuccess}
              inputRef={ref}
              className={className}
              labelProps={{
                className: "before:!rounded-none !top-[-7px]",
              }}
              {...inputProps}
            />
          )}
        />
      </div>
    </>
  );
}

PhoneNumber.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  validators: PropTypes.arrayOf(PropTypes.string),
  errorMessage: PropTypes.objectOf(PropTypes.string),
};
