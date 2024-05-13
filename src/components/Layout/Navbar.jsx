import * as React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router";

const navItems = [{title : 'Home' , url : ''}, {title:"Create", url:'create'}, {title:"Done Tasks",url:'done'}];

function Navbar(props) {
  const { window } = props;
  const navigate = useNavigate()

  function handlePage(url){
    navigate(url)
  }
  
  return (
      <AppBar
        component="nav"
        sx={{ background: "#074955", }}
      >
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
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" },fontWeight:"600" }}
          >
            TODO
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item.title} onClick={()=>handlePage(`/${item.url}`)} sx={{ color: "#FFFFFF", fontSize: "medium", fontWeight:"500"}}>
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      // <nav>
      //   <Drawer
      //     container={container}
      //     variant="temporary"
      //     open={mobileOpen}
      //     onClose={handleDrawerToggle}
      //     ModalProps={{
      //       keepMounted: true, // Better open performance on mobile.
      //     }}
      //     sx={{
      //       display: { xs: "block", sm: "none" },
      //       "& .MuiDrawer-paper": {
      //         boxSizing: "border-box",
      //         width: drawerWidth,
      //       },
      //     }}
      //   >
      //     {drawer}
      //   </Drawer>
      // </nav>
    // {/* </Box> */}
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;