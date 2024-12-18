import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";

export const CustomCheckbox = ({
  checked,
  onChange,
  disabled,
  color,
  ...props
}) => {
  return (
    <StyledCheckbox
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      {...props}
    />
  );
};

const StyledCheckbox = styled(Checkbox)(() => ({
  color: "#000000",

  "&:hover": {
    color: "#3772FF",
  },
}));
