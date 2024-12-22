import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material";
import { Icons } from "../../assets";

export const MeatballsList = ({ menu = [] }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Icons.Delete />
      </Button>
      <StyledUl
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <StyledDiv>
          {menu?.map((item) => (
            <StyledLi key={item.id} />
          ))}
        </StyledDiv>
      </StyledUl>
    </>
  );
};

export const StyledDiv = styled("div")({
  width: "218px",
});
export const StyledLi = styled(MenuItem)({
  borderBottom: "1px solid #D4D4D4",
  height: "44px",
  display: "flex",
  alignItems: "center",
  gap: "12px",
  "&:hover": {
    backgroundColor: "#f0f0f0",
    width: "100%",
    color: "#1976d2",
  },
  "&:hover ": {
    color: "#1976d2",
    background: "#f0f0f0",
    "& svg path": {
      fill: "#1976d2",
    },
  },
});
export const StyledUl = styled(Menu)({
  borderRadius: "10px",
  boxShadow: "3px 2px 12px 0px rgba(34, 60, 80, 0.2)",
  position: "fixed",
  display: "flex",
  flexDirection: "column",
  cursor: "pointer",
});
