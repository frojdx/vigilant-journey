import { ModalUnstyled } from "@mui/base";
import styled from 'styled-components'


const StyledModal = styled(ModalUnstyled) `
    position: fixed;
    z-index: 2000;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    text-align: center;
`
const Backdrop = styled.div`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: #000000B2;
  -webkit-tap-highlight-color: transparent;

`;

const ModalBody = styled.div`
    background: #fff;
    min-width: 500px;
    min-height: 500px;
    border-radius: 10px;
    box-shadow: 5px 10px 0, 0, 0, 0.2;

    @media screen and (max-width: 500px){
    min-width: 300px;

  }
`;

export const ModalH1 = styled.h1`
     color: #000;
     font-size: 26px;
     font-weight: bold;
     text-align: center;
     margin-top: 50px;

@media screen and (max-width: 480px) {
       font-size: 20px;
     }
 `;

const ModalWrapper = styled.div`
    background-color: #fff;
    width: 100%;
    height: 100%;
    display: grid;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 60px;

`

export const ModalInput = styled.input`
    padding: 11px 11px;
    width: 350px;
    margin-bottom: 10px;
    border: none;
    border-radius: 6px;
    background: #f1f1f1;

   &:focus{
     outline: 1px solid #01bf71;
     box-shadow: none;
     transition: all 0.2s ease-in-out;
   } 

@media screen and (max-width: 500px){
  width: 270px;
}
`;
export const ModalButton = styled.button`
    background: #01bf71;
    width: 100%;
    padding: 14px 0;
    border: none;
    border-radius: 50px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    margin-top: 30px;

  &:hover {
    color: #000;
    background: #f1f1f1;
    transition: all 0.2s ease-in-out;
    border: 1px solid #01bf71;
  }  
`;
export const ModalLabel = styled.label`
    margin-bottom: 8px;
    font-size: 11px;
    color: #000;
    display: flex;
    justify-content: flex-start;
`
export const ModalText = styled.span`
    text-align: center;
    color: #000;
    font-size: 12px;
    display: flex;
    justify-content: flex-start;
    cursor: pointer;
    margin-left: 5px;

   &:hover {
     color: green;
     transition: all 0.2s ease-in-out;
   }
`;
export const CheckboxLabel = styled.span`
  color: #000;
`
// export const Checkbox = styled.input`
//   background: red;
// `

export {StyledModal, Backdrop, ModalBody,  ModalWrapper, };