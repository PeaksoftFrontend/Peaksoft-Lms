import { Radio as MuiRadio, FormControlLabel } from "@mui/material";

export const Radio = ({ color, label, value, onChange, ...props }) => {
  return (
    <FormControlLabel
      label={label}
      value={value}
      onChange={onChange}
      {...props}
      control={
        <MuiRadio
          sx={{
            "&.Mui-checked": {
              color: color ? color : "",
            },
          }}
        />
      }
    />
  );
};
