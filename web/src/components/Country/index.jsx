import Image from "next/image";
import Form from "../Form";
import { useCountries } from "use-react-countries";
import {
  Button as MyButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@/components";
import { useState } from "react";
import { Button } from "@material-tailwind/react";

export default function CountryPhone({
  name,
  label,
  className,
  ...inputProps
}) {
  let { countries } = useCountries();
  countries = countries.sort((a, b) => a.name.localeCompare(b.name));
  const [country, setCountry] = useState(0);
  const { countryName, flags, countryCallingCode } = countries[country];

  className += " rounded-r-none border-r-0 w-10";
  return (
    <>
      <div className="relative flex w-full">
        <Menu placement="bottom-start">
          <MenuHandler>
            <div className="flex h-10 items-center gap-2 rounded-lg rounded-r-none border border-r-0 border-blue-gray-200 pl-3 w-100">
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
        <Form.TextField
          name="businessnumber"
          label="BUSINESS Phone Number"
          className="rounded-l-none"
          labelProps={{
            className: "before:!rounded-none",
          }}
          validators={["required"]}
        />
      </div>
    </>
  );
}
