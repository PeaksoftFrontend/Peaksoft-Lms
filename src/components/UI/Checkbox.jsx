import { Checkbox as MuiCheckbox, FormControlLabel } from "@mui/material";

export const Checkbox = ({
  checked,
  label,
  onChange,
  disabled,
  color,
  ...props
}) => {
  return (
    <FormControlLabel
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      label={label}
      {...props}
      control={
        <MuiCheckbox
          sx={{
            color: "#000000",
            transition: "color 0.3s",

            "&:hover": {
              color: "#3772FF",
            },
            "&.Mui-checked": {
              color: "#3772FF",
            },
            "&.Mui-disabled": {
              color: "#1C1B1F1F",
            },
          }}
        />
      }
    />
  );
};
