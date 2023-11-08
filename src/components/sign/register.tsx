import React from 'react';
import { styled } from "@mui/system";
import Header from "../layout/header";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <RegisterPart>
            <Header />
            <RegisterCover>
                <RegisterBox>
                    <Box
                        component="form"
                        sx={{
                            "& .MuiTextField-root": { m: 1, mx: 0, width: "100%" },
                            "& .MuiInputLabel-root": {
                                color: "#d0d0d0",
                            },
                            "& .MuiInputBase-root": { backgroundColor: "rgba(0,0,0,0.21)" },
                            "& .MuiSvgIcon-root": {
                                color: "white",
                                my: 1,
                                p: 1,
                                width: "50px",
                                height: "56px",
                            },
                        }}
                    >
                        <Box sx={{ display: "flex" }}>
                            <PersonIcon sx={{ backgroundColor: "rgba(0,0,0,0.21)" }} />
                            <TextField
                                id="filled-username-input"
                                label="Username"
                                variant="outlined"
                            />
                        </Box>
                        <Box sx={{ display: "flex" }}>
                            <KeyIcon sx={{ backgroundColor: "rgba(0,0,0,0.21)" }} />
                            <TextField
                                id="filled-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                variant="outlined"
                            />
                        </Box>
                        <Box sx={{ display: "flex" }}>
                            <KeyIcon sx={{ backgroundColor: "rgba(0,0,0,0.21)" }} />
                            <TextField
                                id="filled-password-input"
                                label="Confirm Password"
                                type="password"
                                autoComplete="current-password"
                                variant="outlined"
                            />
                        </Box>
                        <Button
                            variant="text"
                            sx={{
                                width: "100%",
                                color: "white",
                                backgroundImage:
                                    "linear-gradient(268deg, rgba(166, 0, 207, 0.21) 16.92%, rgba(143, 151, 220, 0.21) 95.44%);",
                            }}
                        >
                            Sign Up
                        </Button>
                        <Box
                            sx={{
                                display: { xs: "flex" },
                                justifyContent: "flex-end",
                            }}
                        >
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                sx={{
                                    my: 2,
                                    fontFamily: "Inter",
                                    color: "#FFF",
                                    fontSize: "16px",
                                }}
                            >
                                <Link to="/signIn">Sign In</Link>
                            </Typography>
                        </Box>
                    </Box>
                </RegisterBox>
            </RegisterCover>
        </RegisterPart>
    );
}

export default Register;

const RegisterPart = styled(Box)(({ theme }) => ({
    backgroundImage: `url('/assets/img/landing.png')`,
    width: '100%',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
}))

const RegisterCover = styled(Box)(({ theme }) => ({
    background: 'linear-gradient(183deg, rgba(0, 0, 0, 0.00) 2.86%, #000 113.36%)',
    width: '100%',
    height: '100vh',
}))

const RegisterBox = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: "55%",
    width: "100%",
    padding: "24px",
    transform: "translate(0, -50%)",
    [theme.breakpoints.up(600)]: {
        width: "70%",
        left: "15%",
    },
    [theme.breakpoints.up(768)]: {
        width: "60%",
        left: "20%",
    },
    [theme.breakpoints.up(1440)]: {
        width: "500px",
        left: "230px",
    },
}))