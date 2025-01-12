import { styled, TextField, InputAdornment, IconButton } from "@mui/material";

export const MultiInput = ({
  label,
  type = "text",
  value,
  onChange,
  name,
  error = false,
  fullWidth = true,
  onIconVisibility,
  Icon,
  ...props
}) => {
  return (
    <StyledInput
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      error={error}
      fullWidth={fullWidth}
      variant="outlined"
      InputProps={
        Icon
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={onIconVisibility}
                    edge="end"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    {Icon}
                  </IconButton>
                </InputAdornment>
              ),
            }
          : null
      }
      {...props}
    />
  );
};

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
