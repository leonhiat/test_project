import React from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
            <Box className="Secondpart" sx={{ marginTop: "278px" }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container px={2} spacing={12}>
                        <Grid item xs={12} lg={6}>
                            <img />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <h2>Our Services</h2>
                            <p>
                                Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen book.
                            </p>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen book.
                            </p>
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
            </Box>
        </div>
    )
}

export default Services;