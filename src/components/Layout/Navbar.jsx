import React from "react";
import PropTypes from "prop-types";
import { Popper } from "@mui/base/Popper";
import { styled, css } from "@mui/system";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "@mui/material";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/authSlice";

const navItems = [
  { title: "Home", url: "" },
  { title: "Create", url: "create" },
  { title: "Done Tasks", url: "done" },
];

function Navbar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch(); // Initialize dispatch
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleLogout = () => {
    dispatch(logout()); // Dispatch action to clear authentication state
    navigate("/signin"); // Redirect to sign-in page
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  function handlePage(url) {
    navigate(url);
  }

  return (
    <AppBar component="nav" sx={{ background: "#074955" }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            display: { xs: "none", sm: "block" },
            fontWeight: "600",
          }}
        >
          TODO
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" }, display: "flex" }}>
          {navItems.map((item) => (
            <Button
              key={item.title}
              onClick={() => handlePage(`/${item.url}`)}
              sx={{ color: "#FFFFFF", fontSize: "small", fontWeight: "700" }}
            >
              {item.title}
            </Button>
          ))}
          <div>
            <TriggerButton
              aria-describedby={id}
              type="button"
              onClick={handleClick}
              sx={{ marginLeft: "16px" }}
            >
              user name
            </TriggerButton>
            <Popper id={id} open={open} anchorEl={anchorEl}>
              <StyledPopperDiv>
                <Button onClick={handleLogout}>
                  {" "}
                  {/* Handle logout */}
                  <Link
                    href="/signin"
                    variant="body2"
                    sx={{ mr: 1, textDecoration: "none" }}
                  >
                    {"Logout"}
                  </Link>
                  <LogoutIcon />
                </Button>
              </StyledPopperDiv>
            </Popper>
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#99CCF3",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  800: "#004C99",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const TriggerButton = styled("button")(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  background-color: ${blue[500]};
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: 1px solid ${blue[500]};
  box-shadow: 0 2px 1px ${
    theme.palette.mode === "dark"
      ? "rgba(0, 0, 0, 0.5)"
      : "rgba(45, 45, 60, 0.2)"
  }, inset 0 1.5px 1px ${blue[400]}, inset 0 -2px 1px ${blue[600]};

  &:hover {
    background-color: ${blue[600]};
  }

  &:active {
    background-color: ${blue[700]};
    box-shadow: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${
      theme.palette.mode === "dark" ? blue[300] : blue[200]
    };
    outline: none;
  }

  &.disabled {
    opacity: 0.4;
    cursor: not-allowed;
    box-shadow: none;
    &:hover {
      background-color: ${blue[500]};
    }
  }
`
);

const StyledPopperDiv = styled("div")(
  ({ theme }) => css`
    background-color: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: ${theme.palette.mode === "dark"
      ? `0px 4px 8px rgb(0 0 0 / 0.7)`
      : `0px 4px 8px rgb(0 0 0 / 0.1)`};
    /* padding: 0.25rem; */
    color: ${theme.palette.mode === "dark" ? grey[100] : grey[700]};
    font-size: 14px;
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 500;
    opacity: 1;
    margin: 0.25rem 0;
    margin-top: 16px;
  `
);
