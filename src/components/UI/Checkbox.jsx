import { styled } from "@mui/material";
import { Checkbox as MuiCheckbox } from "@mui/material";

export const Checkbox = ({ checked, onChange, disabled, color, ...props }) => {
  return (
    <StyledCheckbox
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      {...props}
    />
  );
};

const StyledCheckbox = styled(MuiCheckbox)(() => ({
  color: "#000000",

  "&:hover": {
    color: "#3772FF",
  },
}));
