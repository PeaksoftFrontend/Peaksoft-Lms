import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Icons } from "../assets";
import { styled, Typography } from "@mui/material";

export const SideBar = () => {
  const list = (
    <Box
      sx={{
        width: 250,
        height: "100vh",
        backgroundColor: "#f9f9f9",
        borderRight: "1px solid #ddd",
        position: "fixed",
        top: 0,
        left: 0,
      }}
      role="presentation"
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
        {["Курсы"].map((text, index) => (
          <StyledListItem key={text}>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? (
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

  return <>{list}</>;
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
