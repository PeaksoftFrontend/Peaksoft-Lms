import { Radio as MuiRadio, FormControlLabel } from "@mui/material";

export const Radio = ({ color, value, onChange, ...props }) => {
  return (
    <FormControlLabel
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
