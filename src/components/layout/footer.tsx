import React from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";

const Footer = () => {
    return (
        <FooterPart>
            <FooterCover>
                <FinalPartContent>
                    <Grid container px={2}>
                        <Grid item xs={12} py={4} lg={5}>
                            <img
                                src="/assets/img/footer_png.png"
                                alt="This is the footer png."
                                width={150}
                                style={{ display: "block", margin: "0 auto" }}
                            />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                            <FooterSideBar>Home</FooterSideBar>
                            <FooterSideBar>Our Services</FooterSideBar>
                            <FooterSideBar>About Us</FooterSideBar>
                            <FooterSideBar>Clients Say</FooterSideBar>
                            <FooterSideBar>Contact Us</FooterSideBar>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <FooterSymbolContent1 sx={{ flexGrow: 1, marginTop: "65px" }}>
                                <Grid container>
                                    <Grid item xs={2} lg={2}>
                                        <img
                                            src="/assets/img/email.svg"
                                            alt="This is the footer symbol svg."
                                        />
                                    </Grid>
                                    <Grid item xs={10} lg={10}>
                                        <FooterSymbolHead>Chat with Us</FooterSymbolHead>
                                        <FooterSymbolText>
                                            email address will be placed here
                                        </FooterSymbolText>
                                    </Grid>
                                </Grid>
                            </FooterSymbolContent1>
                            <FooterSymbolContent2>
                                <Grid container>
                                    <Grid item xs={2} lg={2}>
                                        <img
                                            src="/assets/img/phone.svg"
                                            alt="This is the footer symbol svg."
                                        />
                                    </Grid>
                                    <Grid item xs={10} lg={10}>
                                        <FooterSymbolHead>Phone</FooterSymbolHead>
                                        <FooterSymbolText>
                                            phonenumber will be placed here
                                        </FooterSymbolText>
                                    </Grid>
                                </Grid>
                            </FooterSymbolContent2>
                            <FooterSymbolContent3>
                                <Grid container>
                                    <Grid item xs={2} lg={2}>
                                        <img
                                            src="/assets/img/home.svg"
                                            alt="This is the footer symbol svg."
                                        />
                                    </Grid>
                                    <Grid item xs={10} lg={10}>
                                        <FooterSymbolHead>Office</FooterSymbolHead>
                                        <FooterSymbolText>
                                            location will be placed here
                                        </FooterSymbolText>
                                    </Grid>
                                </Grid>
                            </FooterSymbolContent3>
                        </Grid>
                    </Grid>
                    <hr />
                    <FooterBottomText>All rights @ 2023</FooterBottomText>
                </FinalPartContent>
            </FooterCover>
        </FooterPart>
    );
};

export default Footer;

const FooterPart = styled(Box)(({ theme }) => ({
    position: "relative",
    width: "100%",
    height: "1216px",
    backgroundImage: `url('/assets/img/footer.png')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    [theme.breakpoints.up(1200)]:{
        height: '700px'
    }
}));

const FooterCover = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.3))",
}));

const FinalPartContent = styled(Box)(({ theme }) => ({
    flexGrow: '1',
    marginTop: '184px',
    [theme.breakpoints.up(600)]: {
        width: '76%',
        margin: '184px auto 0'
    },
    [theme.breakpoints.up(992)]: {
        margin: '184px auto 0',
        width: '76%',
    },
    [theme.breakpoints.up(1200)]: {
        width: '100%',
        margin: '184px auto 0',
        padding: '0 24px'
    },
}))

const FooterSideBar = styled(Box)(({ theme }) => ({
    fontFamily: "Montserrat",
    fontSize: "16px",
    fontWeight: "400",
    margin: "32px 0",
    [theme.breakpoints.up(1200)]:{
        fontSize: '32px'
    },
}));

const FooterSymbolHead = styled(Box)(({ theme }) => ({
    fontFamily: "Montserrat",
    fontSize: "16px",
    fontWeight: "400",
    [theme.breakpoints.up(1200)]:{
        fontSize: '32px'
    },
}));

const FooterSymbolText = styled(Box)(({ theme }) => ({
    fontFamily: "Poppins",
    fontSize: "12px",
    fontWeight: "500",
    lineHeight: "36px",
    [theme.breakpoints.up(768)]:{
        fontSize: '20px'
    },
}));

const FooterBottomText = styled(Box)(({ theme }) => ({
    fontFamily: "Montserrat",
    fontSize: "16px",
    fontWeight: "400",
    textAlign: "center",
    paddingBottom: "42px",
    [theme.breakpoints.up(1200)]:{
        paddingBottom: '20px'
    }
}));

const FooterSymbolContent1 = styled(Box)(({theme})=>({
    flexGrow: '1',
    marginTop: '65px',
    [theme.breakpoints.up(1200)]:{
        marginTop: '20px'
    }
}))

const FooterSymbolContent2 = styled(Box)(({theme})=>({
    flexGrow: '1',
    marginTop: '60px',
    [theme.breakpoints.up(1200)]:{
        marginTop: '20px'
    }
}))

const FooterSymbolContent3 = styled(Box)(({theme})=>({
    flexGrow: '1',
    marginTop: '66px',
    [theme.breakpoints.up(1200)]:{
        marginTop: '20px'
    }
}))