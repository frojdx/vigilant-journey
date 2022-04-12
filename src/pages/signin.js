// // import React from 'react'
// // import SignIn from '../components/Signin';
// // import ScrollToTop from '../components/ScrollToTop';

// // const SignInPage = () => {
// //   return (
// //     <>
// //         <ScrollToTop />
// //         <SignIn />
// //     </>
// //   )
// // }

// // export default SignInPage;
// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { Modal } from '../components/Modal';
// import { GlobalStyle } from '../components/globalStyles';

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// `;

// const Button = styled.button`
//   min-width: 100px;
//   padding: 16px 32px;
//   border-radius: 4px;
//   border: none;
//   background: #141414;
//   color: #fff;
//   font-size: 24px;
//   cursor: pointer;
// `;

// function Login() {
//   const [showModal, setShowModal] = useState(false);

//   const openModal = () => {
//     setShowModal(prev => !prev);
//   };

//   return (
//     <>
//       <Container>
//         <Button onClick={openModal}>I'm a modal</Button>
//         <Modal showModal={showModal} setShowModal={setShowModal} />
//         <GlobalStyle />
//       </Container>
//     </>
//   );
// }

// export default Login;
