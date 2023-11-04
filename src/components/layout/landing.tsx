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
      <div className="about">
        <div className="about_container">
          <div className="text_container">
            <div className="text_container_header">About Us</div>
            <div className="text_container_text1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
            <div className="text_container_text2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>
          <img
            src={"/assets/img/about.png"}
            alt="This is the about png."
            className="png_about"
          />
        </div>
      </div>
      <div className="clients">
        <div className="clients_header">What clients say</div>
        <div className="client1">
          <img
            src={"/assets/img/client1.png"}
            alt="This is the client1 png."
            className="png_client1"
          />
          <div className="stars">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 53 53"
              fill="none"
            >
              <path
                d="M34.3653 18.5083L29.4653 2.375C28.4987 -0.791667 24.032 -0.791667 23.0987 2.375L18.1653 18.5083H3.33199C0.0986578 18.5083 -1.23468 22.675 1.39866 24.5417L13.532 33.2083L8.76532 48.575C7.79866 51.675 11.3987 54.175 13.9653 52.2083L26.2653 42.875L38.5653 52.2417C41.132 54.2083 44.732 51.7083 43.7653 48.6083L38.9987 33.2417L51.132 24.575C53.7653 22.675 52.432 18.5417 49.1987 18.5417H34.3653V18.5083Z"
                fill="#FFFF00"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 53 53"
              fill="none"
            >
              <path
                d="M34.3653 18.5083L29.4653 2.375C28.4987 -0.791667 24.032 -0.791667 23.0987 2.375L18.1653 18.5083H3.33199C0.0986578 18.5083 -1.23468 22.675 1.39866 24.5417L13.532 33.2083L8.76532 48.575C7.79866 51.675 11.3987 54.175 13.9653 52.2083L26.2653 42.875L38.5653 52.2417C41.132 54.2083 44.732 51.7083 43.7653 48.6083L38.9987 33.2417L51.132 24.575C53.7653 22.675 52.432 18.5417 49.1987 18.5417H34.3653V18.5083Z"
                fill="#FFFF00"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 53 53"
              fill="none"
            >
              <path
                d="M34.3653 18.5083L29.4653 2.375C28.4987 -0.791667 24.032 -0.791667 23.0987 2.375L18.1653 18.5083H3.33199C0.0986578 18.5083 -1.23468 22.675 1.39866 24.5417L13.532 33.2083L8.76532 48.575C7.79866 51.675 11.3987 54.175 13.9653 52.2083L26.2653 42.875L38.5653 52.2417C41.132 54.2083 44.732 51.7083 43.7653 48.6083L38.9987 33.2417L51.132 24.575C53.7653 22.675 52.432 18.5417 49.1987 18.5417H34.3653V18.5083Z"
                fill="#FFFF00"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 53 53"
              fill="none"
            >
              <path
                d="M34.3653 18.5083L29.4653 2.375C28.4987 -0.791667 24.032 -0.791667 23.0987 2.375L18.1653 18.5083H3.33199C0.0986578 18.5083 -1.23468 22.675 1.39866 24.5417L13.532 33.2083L8.76532 48.575C7.79866 51.675 11.3987 54.175 13.9653 52.2083L26.2653 42.875L38.5653 52.2417C41.132 54.2083 44.732 51.7083 43.7653 48.6083L38.9987 33.2417L51.132 24.575C53.7653 22.675 52.432 18.5417 49.1987 18.5417H34.3653V18.5083Z"
                fill="#FFFF00"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 53 53"
              fill="none"
            >
              <path
                d="M34.3653 18.5083L29.4653 2.375C28.4987 -0.791667 24.032 -0.791667 23.0987 2.375L18.1653 18.5083H3.33199C0.0986578 18.5083 -1.23468 22.675 1.39866 24.5417L13.532 33.2083L8.76532 48.575C7.79866 51.675 11.3987 54.175 13.9653 52.2083L26.2653 42.875L38.5653 52.2417C41.132 54.2083 44.732 51.7083 43.7653 48.6083L38.9987 33.2417L51.132 24.575C53.7653 22.675 52.432 18.5417 49.1987 18.5417H34.3653V18.5083Z"
                fill="#FFFF00"
              />
            </svg>
          </div>
        </div>
        <div className="client2">
          <img
            src={"/assets/img/client2.png"}
            alt="This is the client2 png."
            className="png_client2"
          />
          <div className="stars">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 53 53"
              fill="none"
            >
              <path
                d="M34.3653 18.5083L29.4653 2.375C28.4987 -0.791667 24.032 -0.791667 23.0987 2.375L18.1653 18.5083H3.33199C0.0986578 18.5083 -1.23468 22.675 1.39866 24.5417L13.532 33.2083L8.76532 48.575C7.79866 51.675 11.3987 54.175 13.9653 52.2083L26.2653 42.875L38.5653 52.2417C41.132 54.2083 44.732 51.7083 43.7653 48.6083L38.9987 33.2417L51.132 24.575C53.7653 22.675 52.432 18.5417 49.1987 18.5417H34.3653V18.5083Z"
                fill="#FFFF00"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 53 53"
              fill="none"
            >
              <path
                d="M34.3653 18.5083L29.4653 2.375C28.4987 -0.791667 24.032 -0.791667 23.0987 2.375L18.1653 18.5083H3.33199C0.0986578 18.5083 -1.23468 22.675 1.39866 24.5417L13.532 33.2083L8.76532 48.575C7.79866 51.675 11.3987 54.175 13.9653 52.2083L26.2653 42.875L38.5653 52.2417C41.132 54.2083 44.732 51.7083 43.7653 48.6083L38.9987 33.2417L51.132 24.575C53.7653 22.675 52.432 18.5417 49.1987 18.5417H34.3653V18.5083Z"
                fill="#FFFF00"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 53 53"
              fill="none"
            >
              <path
                d="M34.3653 18.5083L29.4653 2.375C28.4987 -0.791667 24.032 -0.791667 23.0987 2.375L18.1653 18.5083H3.33199C0.0986578 18.5083 -1.23468 22.675 1.39866 24.5417L13.532 33.2083L8.76532 48.575C7.79866 51.675 11.3987 54.175 13.9653 52.2083L26.2653 42.875L38.5653 52.2417C41.132 54.2083 44.732 51.7083 43.7653 48.6083L38.9987 33.2417L51.132 24.575C53.7653 22.675 52.432 18.5417 49.1987 18.5417H34.3653V18.5083Z"
                fill="#FFFF00"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 53 53"
              fill="none"
            >
              <path
                d="M34.3653 18.5083L29.4653 2.375C28.4987 -0.791667 24.032 -0.791667 23.0987 2.375L18.1653 18.5083H3.33199C0.0986578 18.5083 -1.23468 22.675 1.39866 24.5417L13.532 33.2083L8.76532 48.575C7.79866 51.675 11.3987 54.175 13.9653 52.2083L26.2653 42.875L38.5653 52.2417C41.132 54.2083 44.732 51.7083 43.7653 48.6083L38.9987 33.2417L51.132 24.575C53.7653 22.675 52.432 18.5417 49.1987 18.5417H34.3653V18.5083Z"
                fill="#FFFF00"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 53 53"
              fill="none"
            >
              <path
                d="M34.3653 18.5083L29.4653 2.375C28.4987 -0.791667 24.032 -0.791667 23.0987 2.375L18.1653 18.5083H3.33199C0.0986578 18.5083 -1.23468 22.675 1.39866 24.5417L13.532 33.2083L8.76532 48.575C7.79866 51.675 11.3987 54.175 13.9653 52.2083L26.2653 42.875L38.5653 52.2417C41.132 54.2083 44.732 51.7083 43.7653 48.6083L38.9987 33.2417L51.132 24.575C53.7653 22.675 52.432 18.5417 49.1987 18.5417H34.3653V18.5083Z"
                fill="#FFFF00"
              />
            </svg>
          </div>
        </div>
        <div className="client3">
          <img
            src={"/assets/img/client3.png"}
            alt="This is the client3 png."
            className="png_client3"
          />
          <div className="stars">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 53 53"
              fill="none"
            >
              <path
                d="M34.3653 18.5083L29.4653 2.375C28.4987 -0.791667 24.032 -0.791667 23.0987 2.375L18.1653 18.5083H3.33199C0.0986578 18.5083 -1.23468 22.675 1.39866 24.5417L13.532 33.2083L8.76532 48.575C7.79866 51.675 11.3987 54.175 13.9653 52.2083L26.2653 42.875L38.5653 52.2417C41.132 54.2083 44.732 51.7083 43.7653 48.6083L38.9987 33.2417L51.132 24.575C53.7653 22.675 52.432 18.5417 49.1987 18.5417H34.3653V18.5083Z"
                fill="#FFFF00"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 53 53"
              fill="none"
            >
              <path
                d="M34.3653 18.5083L29.4653 2.375C28.4987 -0.791667 24.032 -0.791667 23.0987 2.375L18.1653 18.5083H3.33199C0.0986578 18.5083 -1.23468 22.675 1.39866 24.5417L13.532 33.2083L8.76532 48.575C7.79866 51.675 11.3987 54.175 13.9653 52.2083L26.2653 42.875L38.5653 52.2417C41.132 54.2083 44.732 51.7083 43.7653 48.6083L38.9987 33.2417L51.132 24.575C53.7653 22.675 52.432 18.5417 49.1987 18.5417H34.3653V18.5083Z"
                fill="#FFFF00"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 53 53"
              fill="none"
            >
              <path
                d="M34.3653 18.5083L29.4653 2.375C28.4987 -0.791667 24.032 -0.791667 23.0987 2.375L18.1653 18.5083H3.33199C0.0986578 18.5083 -1.23468 22.675 1.39866 24.5417L13.532 33.2083L8.76532 48.575C7.79866 51.675 11.3987 54.175 13.9653 52.2083L26.2653 42.875L38.5653 52.2417C41.132 54.2083 44.732 51.7083 43.7653 48.6083L38.9987 33.2417L51.132 24.575C53.7653 22.675 52.432 18.5417 49.1987 18.5417H34.3653V18.5083Z"
                fill="#FFFF00"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 53 53"
              fill="none"
            >
              <path
                d="M34.3653 18.5083L29.4653 2.375C28.4987 -0.791667 24.032 -0.791667 23.0987 2.375L18.1653 18.5083H3.33199C0.0986578 18.5083 -1.23468 22.675 1.39866 24.5417L13.532 33.2083L8.76532 48.575C7.79866 51.675 11.3987 54.175 13.9653 52.2083L26.2653 42.875L38.5653 52.2417C41.132 54.2083 44.732 51.7083 43.7653 48.6083L38.9987 33.2417L51.132 24.575C53.7653 22.675 52.432 18.5417 49.1987 18.5417H34.3653V18.5083Z"
                fill="#FFFF00"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 53 53"
              fill="none"
            >
              <path
                d="M34.3653 18.5083L29.4653 2.375C28.4987 -0.791667 24.032 -0.791667 23.0987 2.375L18.1653 18.5083H3.33199C0.0986578 18.5083 -1.23468 22.675 1.39866 24.5417L13.532 33.2083L8.76532 48.575C7.79866 51.675 11.3987 54.175 13.9653 52.2083L26.2653 42.875L38.5653 52.2417C41.132 54.2083 44.732 51.7083 43.7653 48.6083L38.9987 33.2417L51.132 24.575C53.7653 22.675 52.432 18.5417 49.1987 18.5417H34.3653V18.5083Z"
                fill="#FFFF00"
              />
            </svg>
          </div>
          <div className="client_say">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
        </div>
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
`;
