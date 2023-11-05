import React, { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";

const pages = ["Home", "Our Services", "About us", "Contact Us"];

const Header: FC = () => {
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
        <AppBar position="static" color="transparent">
            <Container maxWidth="xl" >
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#"
                        sx={{
                            mr: 10,
                            ml: 5,
                            display: { xs: "none", md: "flex" },
                            textDecoration: "none",
                            color: "white",
                            fontSize: 40,
                            fontFamily: "Inter",
                            fontWeight: "500",
                            wordWrap: "break-word",
                        }}
                    >
                        LOGO
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
                            <MenuIcon sx={{color: "white"}} />
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
                                width: "100%",
                                height: "100%",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                gap: 32,
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
                        component="a"
                        href="#"
                        sx={{
                            mr: 8,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            textDecoration: "none",
                            color: "white",
                            fontSize: 28,
                            fontFamily: "Inter",
                            fontWeight: "500",
                            wordWrap: "break-word",
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box
                        component="div"
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                            gap: "22px",
                        }}
                    >
                        {pages.map((page) => (
                            <Typography
                                component="a"
                                href="#"
                                sx={{
                                    textAlign: "center",
                                    color: "white",
                                    fontSize: 18,
                                    fontFamily: "Montserrat",
                                    fontWeight: "500",
                                    wordWrap: "break-word",
                                    textDecoration: "none",
                                }}
                            >
                                {page}
                            </Typography>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Typography
                            component="a"
                            href="#"
                            sx={{
                                mr: 6,
                                textAlign: "center",
                                color: "white",
                                fontSize: 14,
                                fontFamily: "Inter",
                                fontWeight: "500",
                                wordWrap: "break-word",
                                textDecoration: "none",
                            }}
                        >
                            Sign In
                        </Typography>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
