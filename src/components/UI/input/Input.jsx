import { useState } from "react";
import { styled, TextField, InputAdornment, IconButton } from "@mui/material";
import { Icons } from "../../../assets";

const Input = ({
  label,
  type = "text",
  value,
  onChange,
  name,
  error = false,
  fullWidth = true,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <StyledInput
      label={label}
      type={type === "password" && showPassword ? "text" : type}
      value={value}
      onChange={onChange}
      name={name}
      error={error}
      fullWidth={fullWidth}
      variant="outlined"
      InputProps={{
        endAdornment: type === "password" && (
          <InputAdornment position="end">
            <IconButton
              onClick={togglePasswordVisibility}
              edge="end"
              style={{
                cursor: "pointer",
              }}
            >
              {showPassword ? <Icons.EyesGod /> : <Icons.Eyes />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};

export default Input;

const StyledInput = styled(TextField)(({ error }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    height: "42px",
    borderColor: error ? "red" : "inherit",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: error ? "red" : "inherit",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: error ? "red" : "#1976d2",
  },
}));
