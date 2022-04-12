import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../Button/ButtonElement";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  StyledFormWrapper,
  ArrowRight,
  StyledForm,
  StyledFormH2,
  StyleInput,
  StyledFieldset,
  StyledError,
  StyledButton
} from "./styled";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <StyledFormWrapper>
        <StyledForm>
          <StyledFormH2>Sign up Form</StyledFormH2>
          <label htmlFor="name">Full Name</label>
          <StyleInput placeholder="Name" type="text" required />
          <label htmlFor="email">Email</label>
          <StyleInput
            placeholder="example@tolltref.com"
            type="email"
            required
          />
          <label htmlFor="password">Password</label>
          <StyleInput placeholder="•••••••••••••" type="password" required />
          <StyledFieldset>
            <legend>Gender</legend>
            <label>
              <input type="radio" value="female" name="gender" />
              Female
            </label>
            <label>
              <input type="radio" value="male" name="gender" />
              Male
            </label>
          </StyledFieldset>
          <StyledError>
            <p>Error Message</p>
          </StyledError>
          <StyledButton type="submit">Submit</StyledButton>
        </StyledForm>
      </StyledFormWrapper>
      <HeroContent>
        <HeroH1>Find Your Match</HeroH1>
        <HeroP>Sign Up To Join Our Platform</HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
