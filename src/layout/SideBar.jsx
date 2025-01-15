import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled, Typography } from "@mui/material";
import { ADMIN_SIDEBAR, USER_SIDEBAR } from "../utils/constants";

export const SideBar = ({ role = "ADMIN" }) => {
  // const location = useLocation();
  const location = "groups";

  // const navigate = useNavigate();
  const handleNavigate = (url) => {
    // navigate(url);
  };

  const LIST_TYPE = role === "ADMIN" ? ADMIN_SIDEBAR : USER_SIDEBAR;

  return (
    <StyledBox role="presentation">
      <StyledTypography variant="h1" onClick={() => handleNavigate("/")}>
        <StyledDiv />
        PEAKSOFT
      </StyledTypography>
      <Box>
        <StyledList>
          {LIST_TYPE.map((item) => (
            <StyledListItem
              key={item.id}
              onClick={() => handleNavigate(item.url)}
              className={location === item.url ? "active" : ""}
            >
              <StyledListItemIcon>
                <item.icon />
              </StyledListItemIcon>
              <ListItemText primary={item.title} />
            </StyledListItem>
          ))}
        </StyledList>
      </Box>
    </StyledBox>
  );
};

const StyledBox = styled(Box)({
  width: 250,
  height: "100vh",
  backgroundColor: "#FFFFFF",
  position: "fixed",
  top: 0,
  left: 0,
});

const StyledTypography = styled(Typography)({
  margin: "38px 59px 66px 49px",
  color: "rgba(31,110,212,1)",
  fontWeight: 700,
  fontFamily: "Poppins",
  fontSize: "24px",
  lineHeight: "36px",
});

const StyledDiv = styled("div")({
  width: "10px",
  height: "10px",
  borderRadius: "10px",
  background: "red",
  marginLeft: "130px",
});

const StyledList = styled(List)({
  display: "flex",
  flexDirection: "column",
  gap: "2px",
});

const StyledListItem = styled(ListItem)({
  width: "224px",
  cursor: "pointer",
  paddingLeft: "26px",
  borderLeft: "8px solid transparent",
  display: "flex",
  gap: "16px",
  "&.active": {
    borderLeft: "8px solid #1F6ED4",
    color: "rgba(31,110,212,1)",
    borderRadius: "0 10px 10px 0",
    background: "rgba(221, 233, 249, 1)",
    "& svg path": {
      fill: "rgba(31,110,212,1)",
    },
  },
  "&:hover": {
    color: "rgba(31,110,212,1)",
    background: "rgba(221, 233, 249, 1)",
    borderRadius: "0 10px 10px 0",
    borderLeft: "8px solid #1F6ED4",
    "& svg path": {
      fill: "rgba(31,110,212,1)",
    },
  },
});

const StyledListItemIcon = styled(ListItemIcon)({
  minWidth: "fit-content",
});
