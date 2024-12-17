import styled from "@emotion/styled";
import { Button as MuiButton } from "@mui/material";
export const Button = ({
  children,
  onClick,
  variant = "contained",
  disabled,
  ...rest
}) => {
  return (
    <StyledButton
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(MuiButton)(({ variant }) => ({
  color: "#FFFF",
  border: "none",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  ...(variant === "outlined" && {
    width: "100%",
    height: "40px",
    borderRadius: "8px",

    background: "#C91E1E",
    color: "#FFFF",
    fontSize: "14px",
    fontWeight: 500,

    "&:hover": {
      backgroundColor: "#B62727",
      color: "#FFFF",
      border: "none",
    },
    "&:active": {
      backgroundColor: " #E13A3A",
      color: "#FFFF",
    },
    ":disabled": {
      border: "none",
      color: "#FFF F",
      background: "rgba(28, 27, 31, 0.12)",
    },
  }),

  ...(variant === "contained" && {
    width: "100%",
    height: "40px",
    borderRadius: "8px",
    backgroundColor: "#3772FF",
    color: " #FFFF",
    fontSize: "14px",
    fontWeight: 500,

    "&:hover": {
      backgroundColor: "#1D60FF",
    },
    "&:active": {
      backgroundColor: " #6190FF",
    },
    ":disabled": {
      border: "none",
      color: "#FFFF",
      background: "rgba(28, 27, 31, 0.12)",
    },
  }),

  ...(variant === "save" && {
    width: "100%",
    height: "40px",
    borderRadius: "8px",
    backgroundColor: "#3772FF",
    color: " #FFFF",
    fontSize: "14px",
    fontWeight: 500,

    "&:hover": {
      backgroundColor: "#1D60FF",
    },
    "&:active": {
      backgroundColor: "#6190FF",
    },
    ":disabled": {
      border: "none",
      color: "#FFFF",
      background: "rgba(28, 27, 31, 0.12)",
    },
  }),

  ...(variant === "cancellation" && {
    width: "100%",
    height: "40px",
    borderRadius: "8px",
    color: "#3772FF",
    border: " 1px solid #3772FF",
    fontSize: "14px",

    ":hover": {
      border: "1px solid  #1D60FF",
      backgroundColor: "rgba(29, 96, 255, 0.1)",
    },
    ":active": {
      border: "1px solid #6190FF",
      backgroundColor: "rgba(97, 144, 255, 0.3)",
    },
    ":disabled": {
      borderRadius: "rgba(31, 31, 31, 0.12)",
      color: "rgba(28, 27, 31, 0.12)",
    },
  }),

  ...(variant === "savee" && {
    width: "58x",
    height: "58px",
    borderRadius: " 50%",
    backgroundColor: "#FA2B56",
    color: " #FFFF",
    fontSize: "14px",
    fontWeight: 500,

    "&:hover": {
      backgroundColor: "rgba(239, 11, 59, 0.5)",
    },
    "&:active": {
      backgroundColor: "rgba(237, 69, 94, 0.5)",
    },
    ":disabled": {
      border: "none",
      color: "#979799",
      background: "rgba(28, 27, 31, 0.12)",
    },
  }),
}));
