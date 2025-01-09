import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Icons } from "../assets";
import { styled, Typography } from "@mui/material";

export const SideBar = () => {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <StyledTypograpy
        variant="h1"
        sx={{
          color: "rgba(31,110,212,1)",
          fontWeight: "700",
          fontFamily: "Poppins",
          fontSize: "24px",
          lineHeight: "36px",
        }}
      >
        <StyledDiv></StyledDiv>
        PEAKSOFT
      </StyledTypograpy>

      <StyledList>
        {["Курсы "].map((text, index) => (
          <StyledListItem key={text}>
            <ListItemButton>
              <ListItemIcon>
                {index % 0 === 0 ? (
                  <Icons.PeopleUsers />
                ) : (
                  <Icons.UserStudent />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </StyledListItem>
        ))}
      </StyledList>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

const StyledListItem = styled(ListItem)({
  "&:hover": {
    color: "rgba(31,110,212,1)",
  },
  "& .MuiButtonBase-root": {
    "&:hover": {
      background: "rgba(221, 233, 249, 1)",
    },
  },
});
const StyledList = styled(List)({
  "&:hover": {
    color: "rgba(221,233,249,1)",

    "& svg path": {
      fill: "rgba(31,110,212,1)",
    },
  },
});
const StyledTypograpy = styled(Typography)({
  margin: "38px 59px 80px 49px",
});

const StyledDiv = styled("div")({
  width: "10px",
  height: "10px",
  borderRadius: "10px",
  background: "red",
  marginLeft: "130px",
});
