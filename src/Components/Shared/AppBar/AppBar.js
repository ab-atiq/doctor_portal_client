import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link, NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import useAuth from "../../Hooks/useAuth";

const useStyles = makeStyles({
  navLink: {
    textDecoration: "none",
    color: "white",
  },
  decorationNone: {
    textDecoration: "none",
    color: "black",
  },
});

const ResponsiveAppBar = () => {
  const classes = useStyles();
  const { user, logOut } = useAuth();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Doctor Portal
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link to="/home" className={classes.decorationNone}>
                    Home
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <NavLink to="/about" className={classes.decorationNone}>
                    About
                  </NavLink>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <NavLink to="/appointment" className={classes.decorationNone}>
                    Appointment
                  </NavLink>
                </Typography>
              </MenuItem>
              {/* <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <NavLink to="/services" className={classes.decorationNone}>
                    Dental Services
                  </NavLink>
                </Typography>
              </MenuItem> */}
              {/* <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <NavLink to="/reviews" className={classes.decorationNone}>
                    Reviews
                  </NavLink>
                </Typography>
              </MenuItem> */}
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <NavLink to="/course" className={classes.decorationNone}>
                    Course
                  </NavLink>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <NavLink to="/blogs" className={classes.decorationNone}>
                    Blogs
                  </NavLink>
                </Typography>
              </MenuItem>
              {/* <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <NavLink to="/contact" className={classes.decorationNone}>
                    Contact Us
                  </NavLink>
                </Typography>
              </MenuItem> */}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Doctor Portal
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Typography textAlign="center">
                <Link to="/home" className={classes.navLink}>
                  Home
                </Link>
              </Typography>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Typography textAlign="center">
                <NavLink to="/about" className={classes.navLink}>
                  About
                </NavLink>
              </Typography>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Typography textAlign="center">
                <NavLink to="/appointment" className={classes.navLink}>
                  Appointment
                </NavLink>
              </Typography>
            </Button>
            {/* <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Typography textAlign="center">
                <NavLink to="/services" className={classes.navLink}>
                  Dental Services
                </NavLink>
              </Typography>
            </Button> */}
            {/* <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Typography textAlign="center">
                <NavLink to="/reviews" className={classes.navLink}>
                  Reviews
                </NavLink>
              </Typography>
            </Button> */}
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Typography textAlign="center">
                <NavLink to="/course" className={classes.navLink}>
                  Course
                </NavLink>
              </Typography>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Typography textAlign="center">
                <NavLink to="/blogs" className={classes.navLink}>
                  Blogs
                </NavLink>
              </Typography>
            </Button>
            {/* <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Typography textAlign="center">
                <NavLink to="/contact" className={classes.navLink}>
                  Contact Us
                </NavLink>
              </Typography>
            </Button> */}
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex" }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Typography textAlign="center">
                <NavLink to="/dashboard/home" className={classes.navLink}>
                  Dashboard
                </NavLink>
              </Typography>
            </Button>
            {user?.email ? (
              <Button onClick={logOut} className={classes.navLink}>
                Logout
              </Button>
            ) : (
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Typography textAlign="center">
                  <NavLink to="/login" className={classes.navLink}>
                    Login
                  </NavLink>
                </Typography>
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
