import { TextField } from "@mui/material";

const Input = ({
  label,
  type = "text",
  value,
  onChange,
  name,
  error = false,
  helperText = "",
  fullWidth = true,
  ...props
}) => {
  return (
    <TextField
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      error={error}
      helperText={helperText}
      fullWidth={fullWidth}
      variant="outlined"
      {...props}
    />
  );
};

export default Input;
