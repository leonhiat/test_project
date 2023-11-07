import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from '@mui/system';

const Why = () => {
    return (
        <ThirdPart>
            <ThirdPartHead>Why you should choose us</ThirdPartHead>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container px={2} spacing={8}>
                    <Grid item xs={12} lg={4}>
                        <img src="/assets/img/why_1.png" alt="This is the Third png." className="thirdPartPng" />
                        <ThirdWhyHead>Effective</ThirdWhyHead>
                        <ThirdWhyText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy
                            text ever since
                        </ThirdWhyText>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <img src="/assets/img/why_2.png" alt="This is the Third png." className="thirdPartPng" />
                        <ThirdWhyHead>Professional</ThirdWhyHead>
                        <ThirdWhyText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy
                            text
                        </ThirdWhyText>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <img src="/assets/img/why_3.png" alt="This is the Third png." className="thirdPartPng" />
                        <ThirdWhyHead>Diverse</ThirdWhyHead>
                        <ThirdWhyText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy
                            text
                        </ThirdWhyText>
                    </Grid>
                </Grid>
            </Box>
        </ThirdPart>
    )
}

export default Why;

const ThirdPart = styled(Box)(({ theme }) => ({
    marginTop: '180px',
    [theme.breakpoints.up(600)]:{
        width: '76%',
        margin: '0 auto',
        marginTop: '180px',
    },
    [theme.breakpoints.up(992)]:{
        width: '66%',
        margin: '0 auto',
        marginTop: '180px'
    },
    [theme.breakpoints.up(1200)]:{
        width: '96%',
        margin: '0 24px',
        marginTop: '180px'
    },
}))

const ThirdPartHead = styled(Box)(({ theme }) => ({
    marginBottom: '126px',
    fontFamily: 'Montserrat',
    fontSize: '20px',
    fontWeight: '700',
    textAlign: 'center',
    [theme.breakpoints.up(600)]:{
        fontSize: '24px'
    },
    [theme.breakpoints.up(768)]:{
        fontSize: '32px'
    },
    [theme.breakpoints.up(1200)]:{
        fontSize: '50px',
    }
}))

const ThirdWhyHead = styled(Box)(({ theme }) => ({
    fontFamily: 'Montserrat',
    fontWeight: '700',
    margin: '39px 0 37px',
    [theme.breakpoints.up(600)]:{
        fontSize: '20px'
    },
    [theme.breakpoints.up(768)]:{
        fontSize: '28px'
    },
    [theme.breakpoints.up(1200)]:{
        fontSize: '40px',
    }
}))

const ThirdWhyText = styled(Box)(({ theme }) => ({
    fontFamily: 'Poppins',
    fontSize: '12px',
    fonWeight: '500',
    lineHeight: '36px',
    [theme.breakpoints.up(600)]:{
        fontSize: '16px'
    },
    [theme.breakpoints.up(768)]:{
        fontSize: '20px'
    },
}))