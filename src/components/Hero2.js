import styled from 'styled-components';
import {
  colors, desktopBreakpoint, desktopVw, fonts, mobileVw,
} from '../styles';
import Blaadje from '../../assets/remko.jpg';

const Hero2 = ({ title, img }) => (
  <StyledHero2>
    <Styledimg src={img || 'https://images.unsplash.com/photo-1618487593906-06e42a881e77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'} />
    <StyledTitle>{title}</StyledTitle>
  </StyledHero2>
);

const StyledHero2 = styled.div`
  position: relative;
`;

const Styledimg = styled.img`
  height: 100vh;
  display: block;
  width: 100%;
  object-fit: cover;

    @media (min-width: ${desktopBreakpoint}) {
      height: 100vh;
    }
`;

const StyledTitle = styled.h1`
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%,-50%);
  color: #fff;
  z-index: 11;
  font-family: sans-serif;
  font-size: ${mobileVw(40)};

  @media (min-width: ${desktopBreakpoint}) {
    font-size: ${desktopVw(40)};
  }
`;

export default Hero2;
