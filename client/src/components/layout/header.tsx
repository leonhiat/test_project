import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const pages = ["Home", "Our Services", "About Us", "Contact Us"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="absolute" color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 12,
              display: { xs: "none", lg: "flex" },
              fontSize: "40px",
              fontFamily: "Inter",
              fontWeight: 500,
              color: "#FFF",
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            <Link to="/">LOGO</Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", lg: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "white" }}
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
                display: { xs: "block", lg: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
            sx={{
              display: { xs: "flex", lg: "none" },
              flexGrow: 1,
              fontSize: "28px",
              fontFamily: "Inter",
              fontWeight: 500,
              color: "#FFF",
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            <Link to="/">LOGO</Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" } }}>
            {pages.map((page) => (
              <Button
                className="Header-Buttons"
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 4,
                  mx: 2,
                  color: "white",
                  display: "block",
                  fontSize: 16,
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", lg: "flex" },
              my: 4,
              mx: 2,
              color: "white",
              fontSize: 16,
            }}
          >
            <ConnectButton />
          </Box>
          
          <Box sx={{ flexGrow: 0 }}>
            <Link to="/login">
              <Button
                variant="text"
                sx={{
                  my: 2,
                  color: "white",
                  fontSize: "20px",
                  fontWeight: 500,
                  fontFamily: "Inter",
                }}
              >
                Sign In
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
