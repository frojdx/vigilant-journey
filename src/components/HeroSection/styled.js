import styled, { css } from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
  transition: all 0.2s ease-in-out;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
  transition: all 0.2s ease-in-out;
`;

export const sharedStyles = css`
  /* background-color: #eee;
height: 40px;
border-radius: 5px;
border: 1px solid #ddd;
margin: 10px 0 10px 0;
padding: 10px;
box-sizing: border-box; */
  padding: 11px 11px;
  width: 300px;
  margin-bottom: 10px;
  border: none;
  border-radius: 6px;
  background: #f1f1f1;
`;

export const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
`;

export const StyledFormH2 = styled.h2`
  font-family: inherit;
  position: absolute;
  top: 20%;
`;
export const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 100px;
  /* background-color: #fff; */
  border-radius: 10px;
  box-sizing: border-box;
  /* box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2); */
  z-index: 5;
  margin-left: 850px;
`;
export const StyleInput = styled.input`
  display: block;
  width: 100%;

  ${sharedStyles}

  &:focus {
    outline: 1px solid #01bf71;
    box-shadow: none;
    transition: all 0.2s ease-in-out;
  }
`;

// const StyledTextArea = styled.textarea`

// `;

export const StyledButton = styled.button`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  width: 100%;

  &:hover {
    background: #fff;
  }
`;

export const StyledFieldset = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;

  legend {
    padding: 0 10px;
  }
  label {
    padding-right: 20px;
  }
  input {
    margin-right: 10px;
  }
`;

export const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;
