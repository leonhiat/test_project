import React from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";

const About = () => {
  return (
    <FourthPart>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container px={2} spacing={12}>
          <Grid item xs={12} lg={6}>
            <FourthPartHead>About Us</FourthPartHead>
            <FourthPartText1>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </FourthPartText1>
            <FourthPartText2>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </FourthPartText2>
          </Grid>
          <Grid item xs={12} lg={6}>
            <img alt="This is the fourth part png." className="fourthPartPng" />
          </Grid>
        </Grid>
      </Box>
    </FourthPart>
  );
};

export default About;

const FourthPart = styled(Box)(({ theme }) => ({
  marginTop: "320px",
  [theme.breakpoints.up(600)]: {
    width: "76%",
    margin: "0 auto",
    marginTop: "320px",
  },
  [theme.breakpoints.up(992)]: {
    width: "66%",
    margin: "0 auto",
    marginTop: "320px",
  },
  [theme.breakpoints.up(1200)]: {
    width: "100%",
    padding: "0 24px",
    marginTop: "320px",
  },
}));

const FourthPartHead = styled(Box)(({ theme }) => ({
  fontFamily: "Montserrat",
  fontSize: "20px",
  fontWeight: "700",
  [theme.breakpoints.up(600)]: {
    fontSize: "24px",
  },
  [theme.breakpoints.up(768)]: {
    fontSize: "32px",
  },
  [theme.breakpoints.up(1200)]: {
    fontSize: "50px",
  },
}));

const FourthPartText1 = styled(Box)(({ theme }) => ({
  fontFamily: "Poppins",
  fonSize: "12px",
  fonWeight: "500",
  lineHeight: "36px",
  margin: "30px 0",
  [theme.breakpoints.up(600)]: {
    fontSize: "16px",
  },
  [theme.breakpoints.up(768)]: {
    fontSize: "20px",
  },
}));

const FourthPartText2 = styled(Box)(({ theme }) => ({
  fontFamily: "Poppins",
  fonSize: "12px",
  fonWeight: "500",
  lineHeight: "36px",
  margin: "30px 0",
  [theme.breakpoints.up(600)]: {
    fontSize: "16px",
  },
  [theme.breakpoints.up(768)]: {
    fontSize: "20px",
  },
}));
