import React from "react";
import { Box, Grid, Stack, TextField } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from "@mui/system"

const theme = createTheme({
    palette: {
        primary: {
            main: "#FFF"
        }
    }
})

const Contact = () => {
    return (
        <SixthPart>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container px={4}>
                    <Grid item xs={12} lg={6}>
                        <SixthPartHead>Contact Us</SixthPartHead>
                        <Box sx={{ flexGrow: 1, marginTop: "65px" }}>
                            <Grid container>
                                <Grid item xs={2} lg={2}>
                                    <img src="/assets/img/email.svg" alt="This is the symbol svg." />
                                </Grid>
                                <Grid item xs={10} lg={10}>
                                    <SixPartSymbolHead>Chat with Us</SixPartSymbolHead>
                                    <SixthPartSymbolText>email address will be placed here</SixthPartSymbolText>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box sx={{ flexGrow: 1, marginTop: "60px" }}>
                            <Grid container>
                                <Grid item xs={2} lg={2}>
                                    <img src="/assets/img/phone.svg" alt="This is the symbol svg." />
                                </Grid>
                                <Grid item xs={10} lg={10}>
                                    <SixPartSymbolHead>Phone</SixPartSymbolHead>
                                    <SixthPartSymbolText>phonenumber will be placed here</SixthPartSymbolText>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box sx={{ flexGrow: 1, margin: "66px 0 32px" }}>
                            <Grid container>
                                <Grid item xs={2} lg={2}>
                                    <img src="/assets/img/home.svg" alt="This is the symbol svg." />
                                </Grid>
                                <Grid item xs={10} lg={10}>
                                    <SixPartSymbolHead>Office</SixPartSymbolHead>
                                    <SixthPartSymbolText>location will be placed here</SixthPartSymbolText>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Stack
                            component="form"
                            sx={{
                                width: "100%",
                            }}
                            spacing={6}
                            noValidate
                            autoComplete="off"
                        >
                            <ThemeProvider theme={theme}>
                                <TextField label="Your Name" variant="outlined" focused />
                                <TextField label="Your Email" variant="outlined" focused />
                                <TextField label="Subject" variant="outlined" focused />
                                <TextField label="Message" multiline rows={6} focused />
                            </ThemeProvider>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </SixthPart>
    )
}

export default Contact;

const SixthPart = styled(Box)(({ theme }) => ({
    marginTop: '240px',
    [theme.breakpoints.up(600)]: {
        width: '76%',
        margin: '0 auto',
        marginTop: '240px',
    },
    [theme.breakpoints.up(992)]: {
        width: '66%',
        margin: '0 auto',
        marginTop: '240px',
    },
    [theme.breakpoints.up(1200)]: {
        width: '100%',
        padding: '0 24px',
        marginTop: '240px',
    },
}))

const SixthPartHead = styled(Box)(({ theme }) => ({
    fontFamily: 'Montserrat',
    fontSize: '20px',
    fontWeight: '700',
    [theme.breakpoints.up(600)]: {
        fontSize: '24px'
    },
    [theme.breakpoints.up(768)]: {
        fontSize: '32px'
    },
    [theme.breakpoints.up(1200)]: {
        fontSize: '50px'
    },
}))

const SixPartSymbolHead = styled(Box)(({ theme }) => ({
    fontFamily: 'Montserrat',
    fontSize: '16px',
    fontWeight: '400',
    margin: '0',
    [theme.breakpoints.up(600)]:{
        fontSize: '20px'
    },
    [theme.breakpoints.up(1200)]:{
        fontSize: '32px'
    },
}))

const SixthPartSymbolText = styled(Box)(({theme})=>({
    fontFamily: 'Poppins',
    fontSize: '12px',
    fontWeight: '500',
    lineHeight: '36px',
    [theme.breakpoints.up(600)]:{
        fontSize: '16px'
    },
    [theme.breakpoints.up(768)]:{
        fontSize: '18px'
    },
}))