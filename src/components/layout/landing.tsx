import React, { FC } from "react";

import styled from "styled-components";

const Landing: FC = () => {
  return (
    <div className="landing">
      <div className="home">
        <div className="cover_home"></div>
        <LogoText className="logo_text">LOGO</LogoText>
        <Navbar className="navbar">
          <nav className="nav_text">Home</nav>
          <nav className="nav_text">Our Services</nav>
          <nav className="nav_text">About Us</nav>
          <nav className="nav_text">Contact Us</nav>
        </Navbar>
        <SignInText className="signIn_text">Sign In</SignInText>
        <LandingBigText className="big_home_text">
          Phoniex Security Service
        </LandingBigText>
        <LandingSmallText className="small_home_text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an
        </LandingSmallText>
        <ButtonStart>
          <p className="button_text">Get Started</p>
        </ButtonStart>
      </div>
      <div className="our_services">
        <img
          src={"/assets/img/security.png"}
          alt="this is the services png"
          className="png_services"
        />
        <ServiceContainer>
          <ServiceHeader>Our Services</ServiceHeader>
          <ServiceFirstText>
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </ServiceFirstText>
          <ServiceSecondText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </ServiceSecondText>
          <ServiceStartButton>
            <ServiceStartBorder>
              <ServiceStarterText>Get Started</ServiceStarterText>
            </ServiceStartBorder>
          </ServiceStartButton>
        </ServiceContainer>
      </div>
      <div className="why">
        <WhyHeader>Why you should choose us</WhyHeader>
        <WhyContainer className="img_flex">
          <div>
            <img
              src={"/assets/img/why_1.png"}
              alt="This is the why img1."
              className="why_img"
            />
            <div className="why_img_head">Effective</div>
            <div className="why_img_text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since
            </div>
          </div>
          <div>
            <img
              src={"/assets/img/why_2.png"}
              alt="This is the why img2."
              className="why_img"
            />
            <div className="why_img_head">Professional</div>
            <div className="why_img_text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </div>
          </div>
          <div>
            <img
              src={"/assets/img/why_3.png"}
              alt="This is the why img3."
              className="why_img"
            />
            <div className="why_img_head">Diverse</div>
            <div className="why_img_text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </div>
          </div>
        </WhyContainer>
      </div>
    </div>
  );
};

export default Landing;

const LogoText = styled.h1`
  color: #fff;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Navbar = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 32px;
  color: white;
  font-weight: 500;
  line-weight: 5000;
  line-height: normal;
`;

const SignInText = styled.p`
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const LandingBigText = styled.h1`
  color: #fff;
  text-shadow: 0px 5px 20px rgba(255, 255, 255, 0.5),
    0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Montserrat;
  font-size: 52px;
  font-weight: 700;
  width: 800px;
`;

const LandingSmallText = styled.p`
  color: #fff;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  width: 600px;
`;

const ButtonStart = styled.div`
  width: 220px;
  height: 95px;
  background: url("/assets/img/landing_start.png");
  background-repeat: no-repeat;
  position: absolute;
  top: 488px;
  left: 119px;
`;

const ServiceContainer = styled.div`
  width: 640px;
  height: 380px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
  position: relative;
  top: -270px;
  left: 220px;
`;

const ServiceHeader = styled.h1`
  color: white;
  font-size: 40px;
  font-family: Montserrat;
  font-weight: 700;
  word-wrap: break-word;
`;

const ServiceFirstText = styled.p`
  color: #c6c6c6;
  font-size: 20px;
  font-family: Poppins;
  word-wrap: break-word;
  width: 640px;
`;

const ServiceSecondText = styled.p`
  color: #c6c6c6;
  font-size: 20px;
  font-family: Poppins;
  word-wrap: break-word;
`;

const ServiceStartButton = styled.div`
  position: relative;
  top: 30px;
  width: 100%;
  height: 100px;
`;

const ServiceStartBorder = styled.div`
  width: 239px;
  height: 55px;
  border: 1px white solid;
`;

const ServiceStarterText = styled.div`
  width: 119px;
  position: absolute;
  left: 88px;
  top: 20px;
  color: white;
  font-size: 20;
  font-family: Montserrat;
  word-wrap: break-word;
`;

const WhyContainer = styled.div`
  margin-top: 80px;
  margin-left: 140px;
  width: 1300px;
  height: 600px;
  display: flex;
`;

const WhyHeader = styled.div`
  color: white;
  font-size: 40px;
  font-family: Montserrat;
  font-weight: 700;
  word-wrap: break-word;
  text-align: center;
`