import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Icons } from "../assets";
import { styled, Typography } from "@mui/material";

export const SideBar = () => {
  const ADMIN_SIDEBAR = [
    {
      icon: Icons.PeopleUsers,
      title: "Группы",
      id: "1",
    },
    {
      icon: Icons.UserStudent,
      title: "Курсы",
      id: "2",
    },
  ];

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
        <StyledDiv />
        PEAKSOFT
      </StyledTypograpy>
      <StyledBox>
        <StyledList>
          {ADMIN_SIDEBAR.map((item) => (
            <StyledListItem key={item.id}>
              <StyleBoxBlue></StyleBoxBlue>

              <ListItemIcon>
                <item.icon />
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </StyledListItem>
          ))}
        </StyledList>
      </StyledBox>
    </Box>
  );

  return <>{list}</>;
};

const StyleBoxBlue = styled("div")({
  width: "8px",
  height: "51px",
  background: "red",
  "&:hover": {
    background: "blue !important",
    border: "1px solid green",
  },
});
const StyledBox = styled(Box)({
  // display: "flex"
  // alignItems:"center"
});

const StyledListItem = styled(ListItem)({
  // display: "flex",
  // justifyContent: "end",
  width: "224px",
  "&.MuiListItem-root:hover": {
    color: "rgba(31,110,212,1)",
    background: "rgba(221, 233, 249, 1)",
    borderRadius: "10px",
  },

  "& .MuiButtonBase-root:hover": {
    background: "none",
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
