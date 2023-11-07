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

const SignInBox = styled("div")(({ theme }) => ({
    position: "absolute",
    top: "55%",
    width: "100%",
    padding: "24px",
    transform: "translate(0, -50%)",
    [theme.breakpoints.up("sm")]: {
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
    [theme.breakpoints.up("xl")]: {
        left: "calc((100% - 1536px)/2 + 230px)",
    },
}));

const SignIn = () => {
    return (
        <div className='signIn'>
            <Header />
            <Box className="login">
                <div className='cover_landing'>
                    <SignInBox>
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
                                    {/* <Link to="/"> */}
                                    Forgot password?
                                    {/* </Link> */}
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
                                    <Link to="/signup">Sign up</Link>
                                </Typography>
                            </Box>
                        </Box>
                    </SignInBox>
                </div>
            </Box>
        </div>
    );
}

export default SignIn;
