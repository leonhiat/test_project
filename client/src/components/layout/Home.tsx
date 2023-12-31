import React from "react";
import { styled } from "@mui/system";
import { Box, Button, Modal, TextField } from "@mui/material";

const Home = () => {
  return (
    <FirstPart>
      <ImageCover>
        <FirstPartContent>
          <FirstHead>Phoniex Security Service</FirstHead>
          <FirstText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an
          </FirstText>
          <GetStarted>
            <GetStartText>Get Started</GetStartText>
          </GetStarted>
        </FirstPartContent>
      </ImageCover>
    </FirstPart>
  );
};

export default Home;

const FirstPart = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  backgroundImage: `url('/assets/img/landing.png')`,
  backgroundPosition: "center",
  backgroundSize: "cover",
}));

const ImageCover = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundImage: `linear-gradient(180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 0.85) 85%)`,
}));

const FirstPartContent = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "30vh",
  textAlign: "center",
  padding: "0 12px",
  [theme.breakpoints.up("sm")]: {
    width: "76%",
    left: "12.5%",
  },
  [theme.breakpoints.up(992)]: {
    left: "0",
    textAlign: "initial",
    padding: "0 32px",
  },
  [theme.breakpoints.up(1200)]: {
    width: "940px",
    padding: "0 36px",
  },
}));

const FirstHead = styled(Box)(({ theme }) => ({
  textShadow:
    "0px 5px 20px rgba(255, 255, 255, 0.5), 0px 4px 4px rgba(0, 0, 0, 0.25)",
  fontFamily: "Montserrat",
  fontSize: "64px",
  fontWeight: 700,
  lineHeight: "170%",
  [theme.breakpoints.down("sm")]: {
    fontSize: "24px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "28px",
  },
  [theme.breakpoints.up(768)]: {
    fontSize: "36px",
  },
  [theme.breakpoints.up(1200)]: {
    fontSize: "64px",
    marginBottom: "30px",
  },
}));

const FirstText = styled(Box)(({ theme }) => ({
  fontFamily: "Poppins",
  fontWeight: "400",
  lineHeight: "36px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.up(768)]: {
    fontSize: "20px",
  },
}));

const GetStarted = styled(Box)(({ theme }) => ({
  marginTop: "10%",
  position: "relative",
  display: "inline-block",
  backgroundImage: `url('/assets/img/landing_start.png')`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "189px",
  height: "84px",
}));

const GetStartText = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "44%",
  left: "50%",
  width: "80%",
  transform: "translate(-50%, -50%)",
  fontFamily: "Montserrat",
  fontSize: "16px",
  fontWeight: 500,
  borderRadius: "20px",
  [theme.breakpoints.up(768)]: {
    fontSize: "20px",
  },
  [theme.breakpoints.up(992)]: {
    left: "60%",
  },
}));
