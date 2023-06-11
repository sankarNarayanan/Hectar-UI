import Form from "./Form";
import TextField from "./TextField";
import Checkbox from "./Checkbox";
import Textarea from "./Textarea";
import Select from "./SelectBox";
import AutoComplete from "./AutoComplete";
import DatePicker from "./DatePicker";
import { Option } from "@material-tailwind/react";
// import { FormControlLabel } from "@mui/material";

Object.assign(Form, {
  TextField,
  Checkbox,
  Textarea,
  Select,
  Option,
  AutoComplete,
  DatePicker,
  // ControlLabel: FormControlLabel
});

export default Form;
export * from "react-hook-form";
