import React from 'react';
import { styled } from "@mui/system";
import Header from "../layout/header";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const SignIn = () => {
    return (
        <SignPart>
            <Header />
            <SignCover>
                <SignInBox>
                    <Box
                        component="form"
                        sx={{
                            "& .MuiTextField-root": { my: 1, width: "100%" },
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
                        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                            <PersonIcon sx={{ backgroundColor: "rgba(0,0,0,0.21)" }} />
                            <TextField
                                id="filled-username-input"
                                label="Username"
                                variant="outlined"
                            />
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                            <KeyIcon sx={{ backgroundColor: "rgba(0,0,0,0.21)" }} />
                            <TextField
                                id="filled-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                variant="outlined"
                            />
                        </Box>
                        <Box>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Remember Me"
                                sx={{ color: "white" }}
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
                            Sign In
                        </Button>
                        <Box
                            sx={{
                                display: { xs: "flex" },
                                justifyContent: "space-between",
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
                                Forgot password?
                            </Typography>
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
                                <Link to="/register">Sign Up</Link>
                            </Typography>
                        </Box>
                    </Box>
                </SignInBox>
            </SignCover>
        </SignPart>
    );
}

export default SignIn;

const SignPart = styled(Box)(({ theme }) => ({
    backgroundImage: `url('/assets/img/landing.png')`,
    width: '100%',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
}))

const SignCover = styled(Box)(({ theme }) => ({
    background: 'linear-gradient(183deg, rgba(0, 0, 0, 0.00) 2.86%, #000 113.36%)',
    width: '100%',
    height: '100vh',
}))

const SignInBox = styled(Box)(({ theme }) => ({
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