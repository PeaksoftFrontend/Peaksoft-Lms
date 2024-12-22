import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material";
import { Icons } from "../../assets";

export const MeatBallsList = ({ items = [] }) => {
  const [menuAnchor, setMenuAnchor] = React.useState(null);
  const isOpen = Boolean(menuAnchor);

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  return (
    <>
      <Button
        id="menu-button"
        aria-controls={isOpen ? "menu" : undefined}
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : undefined}
        onClick={handleMenuOpen}
      >
        <Icons.OptionIcon />
      </Button>
      <MenuContainer
        id="menu"
        anchorEl={menuAnchor}
        open={isOpen}
        onClose={handleMenuClose}
        MenuListProps={{
          "aria-labelledby": "menu-button",
        }}
      >
        <MenuContent>
          {items?.map((item) => (
            <MenuItemStyled key={item.id} value={item.value}>
              {item.label}
            </MenuItemStyled>
          ))}
        </MenuContent>
      </MenuContainer>
    </>
  );
};

export const MenuContent = styled("div")({
  width: "218px",
});

export const MenuItemStyled = styled(MenuItem)({
  borderBottom: "1px solid #D4D4D4",
  height: "44px",
  display: "flex",
  alignItems: "center",
  gap: "12px",
  "&:hover": {
    backgroundColor: "#f0f0f0",
    color: "#1976d2",
    "& svg path": {
      fill: "#1976d2",
    },
  },
  "&:last-of-type": {
    borderBottom: "none",
  },
});

export const MenuContainer = styled(Menu)({
  borderRadius: "10px",
  boxShadow: "2px 2px 8px rgba(34, 60, 80, 0.1)",
  position: "fixed",
  display: "flex",
  flexDirection: "column",
  cursor: "pointer",
});
