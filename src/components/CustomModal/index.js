import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { StyledModal, Backdrop, ModalBody, ModalWrapper, ModalInput, ModalH1, ModalLabel, ModalButton, ModalText,  } from './styled';

const CustomModal = ({open, onClose}) => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return(
        <StyledModal open={open} onClose={onClose} BackdropComponent={Backdrop}>
            <ModalBody>
                <ModalH1>Sign In To Your Account</ModalH1>
                <ModalWrapper>
                <ModalLabel htmlFor='for'>Username</ModalLabel>
                         <ModalInput placeholder='Username' type='email' required />
                         <ModalLabel htmlFor='for'>Password</ModalLabel>
                         <ModalInput placeholder='•••••••••••••'type='password' required />
                         <ModalText>Forgot password?</ModalText>
                         <ModalButton type='submit'>Continue</ModalButton>
                </ModalWrapper>
                <Checkbox {...label} defaultChecked size="small" value="Remember Me" />
                </ModalBody>
        </StyledModal>
    )
}

export default CustomModal;