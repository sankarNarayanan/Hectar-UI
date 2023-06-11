import Image from "next/image";
import { useState } from "react";
import ReactDatepicker from "react-tailwindcss-datepicker";
import dateImage from "@/assets/svg/date.svg";
import moment from "moment";

export default function DatePicker(props) {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  return (
    <div className="relative px-20">
      <label>
        <div className="absolute top-0 left-0">
          <div className="flex">
            <Image src={dateImage} />
            <p className="ps-2 opacity-30 text-sm">date</p>
          </div>
          {/* The Date formatted */}
          <div className="text-xl font-medium">
            {moment(value.startDate).format("DD MMM'YY")}
          </div>
          {/* The Day of the Week */}
          <div className="text-sm font-medium">
            {moment(value.startDate).format("dddd")}
          </div>
        </div>
        <ReactDatepicker
          value={value}
          onChange={handleValueChange}
          inputClassName="opacity-0 absolute"
          toggleClassName="invisible"
          useRange={false}
          asSingle={true}
        />
      </label>
    </div>
  );
}
