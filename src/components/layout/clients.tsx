import React from "react";
import { Box, Grid } from '@mui/material'
import { styled } from '@mui/system'

const Clients = () => {
    return (
        <FifthPart className="fifthPart">
            <FifthPartHead>What clients say</FifthPartHead>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container px={2}>
                    <Grid
                        item
                        xs={12}
                        lg={4}
                        my={2}
                        py={2}
                        sx={{
                            borderRadius: "10px",
                            background: "rgba(18, 18, 18, 0.96)",
                            boxShadow: "0px 0px 80px 0px rgba(255, 255, 255, 0.50)",
                        }}
                    >
                        <img src="/assets/img/client1.png" alt="This is the client1 png." className="png_clients" />
                        <Box className="stars">
                            <img src="/assets/img/star.svg" alt="This is the star svg." />
                            <img src="/assets/img/star.svg" alt="This is the star svg." />
                            <img src="/assets/img/star.svg" alt="This is the star svg." />
                            <img src="/assets/img/star.svg" alt="This is the star svg." />
                            <img src="/assets/img/star.svg" alt="This is the star svg." />
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        lg={4}
                        my={2}
                        py={2}
                        sx={{
                            borderRadius: "10px",
                            background: "rgba(18, 18, 18, 0.96)",
                            boxShadow: "0px 0px 80px 0px rgba(255, 255, 255, 0.50)",
                        }}
                    >
                        <img src="/assets/img/client2.png" alt="This is the client2 png." className="png_clients" />
                        <Box className="stars">
                            <img src="/assets/img/star.svg" alt="This is the star svg." />
                            <img src="/assets/img/star.svg" alt="This is the star svg." />
                            <img src="/assets/img/star.svg" alt="This is the star svg." />
                            <img src="/assets/img/star.svg" alt="This is the star svg." />
                            <img src="/assets/img/star.svg" alt="This is the star svg." />
                        </Box>
                        <FifthPartText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer took a galley
                            of type and scrambled it to make a type specimen book.
                        </FifthPartText>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        lg={4}
                        my={2}
                        py={2}
                        sx={{
                            borderRadius: "10px",
                            background: "rgba(18, 18, 18, 0.96)",
                            boxShadow: "0px 0px 80px 0px rgba(255, 255, 255, 0.50)",
                        }}
                    >
                        <img src="/assets/img/client3.png" alt="This is the client3 png." className="png_clients" />
                        <Box className="stars">
                            <img src="/assets/img/star.svg" alt="This is the star svg." />
                            <img src="/assets/img/star.svg" alt="This is the star svg." />
                            <img src="/assets/img/star.svg" alt="This is the star svg." />
                            <img src="/assets/img/star.svg" alt="This is the star svg." />
                            <img src="/assets/img/star.svg" alt="This is the star svg." />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </FifthPart>
    )
}

export default Clients;

const FifthPart = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    marginTop: '220px',
    [theme.breakpoints.up(600)]:{
        width: '76%',
        margin: '0 auto',
        marginTop: '220px',
    },
    [theme.breakpoints.up(992)]:{
        width: '66%',
        margin: '0 auto',
        marginTop: '220px',
    },
    [theme.breakpoints.up(1200)]:{
        width: '100%',
        padding: '0 24px',
        marginTop: '220px',
    },
}))

const FifthPartHead = styled(Box)(({ theme }) => ({
    fontFamily: 'Montserrat',
    fontSize: '20px',
    fontWeight: '700',
    [theme.breakpoints.up(600)]:{
        fontSize: '24px'
    },
    [theme.breakpoints.up(768)]:{
        fontSize: '32px'
    },
    [theme.breakpoints.up(1200)]:{
        fontSize: '50px'
    },
}))

const FifthPartText = styled(Box)(({ theme }) => ({
    fontFamily: 'Poppins',
    fontSize: '12px',
    fontWeight: '500',
    lineHeight: '36px',
    margin: '0 24px',
    textAlign: 'initial',
    [theme.breakpoints.up(768)]:{
        fontSize: '20px'
    },
}))