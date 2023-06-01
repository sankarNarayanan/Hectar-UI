import Form from "./Form";
import TextField from "./TextField";
import Checkbox from "./Checkbox";
import Textarea from "./Textarea";
// import { FormControlLabel } from "@mui/material";

Object.assign(Form, {
  TextField,
  Checkbox,
  Textarea,
  // ControlLabel: FormControlLabel
});

export default Form;
export * from "react-hook-form";
