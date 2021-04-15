import '../reset.css';
import '../fonts/fonts.css';
import styled from 'styled-components';
import { useRef } from 'preact/hooks';
import { desktopBreakpoint, desktopVw } from '../styles';
import Footer from '../components/Footer';
import Hero2 from '../components/Hero2';
import Header from '../components/Header';

const About = () => {
  const js = 'dit is js';

  return (
    <>
      <Hero2 title="feosjioeijefis" img="https://images.unsplash.com/photo-1601581975053-7c899da7347e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3334&q=80" />
      <h1>Dit is een about pagina</h1>
    </>
  );
};

const StyledImg = styled.img`
  width: 100%;
  display: block;
  margin: 0 0 ${desktopVw(50)} 0;
`;

const Relative = styled.div`
  position: relative;
`;

const Blaadje = styled.img`
  display: inline-block;
  width: ${desktopVw(114)};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: ${desktopVw(108)};
  display: none;

  &:first-child {
    left: ${desktopVw(108)};
    right: unset;
  }

  @media (min-width: ${desktopBreakpoint}) {
    display: block;
  }
`;

const CircleImg = styled.img`
  width: ${desktopVw(114)};
  position: absolute;
  top: ${desktopVw(-27)};
  left: ${desktopVw(65)};
  display: none;

  @media (min-width: ${desktopBreakpoint}) {
    display: block;
  }
`;

const PlaatImg = styled.img`
  width: ${desktopVw(165)};
  position: absolute;
  top: ${desktopVw(-27)};
  right: ${desktopVw(52)};
  display: none;

  @media (min-width: ${desktopBreakpoint}) {
    display: block;
  }
`;

const CircleLogoImg = styled.img`
  width: ${desktopVw(119)};
  position: absolute;
  top: ${desktopVw(-30)};
  left: ${desktopVw(52)};
  z-About: 1;
  display: none;

  @media (min-width: ${desktopBreakpoint}) {
    display: block;
  }
`;

export default About;
