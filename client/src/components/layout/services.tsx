import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/system";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
  },
});

const Services = () => {
  return (
    <div>
      <SecondPart>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container px={2} spacing={12}>
            <Grid item xs={12} lg={6}>
              <img alt="this is the security png." className="png_second" />
            </Grid>
            <Grid item xs={12} lg={6}>
              <SecondPartHead>Our Services</SecondPartHead>
              <SecondPartText1>
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </SecondPartText1>
              <SecondPartText2>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </SecondPartText2>
              <ThemeProvider theme={theme}>
                <Button
                  variant="outlined"
                  sx={{
                    fontFamily: "Montserrat",
                    fontWeight: 500,
                    padding: "15px 60px",
                  }}
                >
                  Get Started
                </Button>
              </ThemeProvider>
            </Grid>
          </Grid>
        </Box>
      </SecondPart>
    </div>
  );
};

export default Services;

const SecondPart = styled(Box)(({ theme }) => ({
  marginTop: "260px",
  [theme.breakpoints.up(600)]: {
    width: "76%",
    margin: "0 auto",
    marginTop: "260px",
  },
  [theme.breakpoints.up(992)]: {
    width: "66%",
    margin: "0 auto",
    marginTop: "260px",
  },
  [theme.breakpoints.up(1200)]: {
    width: "100%",
    padding: "0 24px",
    marginTop: "260px",
  },
}));

const SecondPartHead = styled(Box)(({ theme }) => ({
  fontFamily: "Montserrat",
  fontSize: "24px",
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

const SecondPartText1 = styled(Box)(({ theme }) => ({
  fontFamily: "Poppins",
  fontSize: "12px",
  fontWeight: "500",
  lineHeight: "36px",
  margin: "30px 0",
  [theme.breakpoints.up(600)]: {
    fontSize: "16px",
  },
  [theme.breakpoints.up(768)]: {
    fontSize: "18px",
  },
}));

const SecondPartText2 = styled(Box)(({ theme }) => ({
  fontFamily: "Poppins",
  fontSize: "12px",
  fontWeight: "500",
  lineHeight: "36px",
  margin: "30px 0",
  [theme.breakpoints.up(600)]: {
    fontSize: "16px",
  },
  [theme.breakpoints.up(768)]: {
    fontSize: "18px",
  },
}));
