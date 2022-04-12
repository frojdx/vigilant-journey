import React from 'react';
import Icon1 from '../../Images/svg-4.svg';
import Icon2 from '../../Images/svg-5.svg';
import Icon3 from '../../Images/svg-6.svg';

import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './styled'
const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Reduce Expenses</ServicesH2>
                <ServicesP>We help you find a match as fast as you think.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Privacy</ServicesH2>
                <ServicesP>You can access our platform online anywhere in the world.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Premium Benefits</ServicesH2>
                <ServicesP>Join our special card that premium on you`re date.</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services