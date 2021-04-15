import '../reset.css';
import '../fonts/fonts.css';
import styled from 'styled-components';
import { useRef } from 'preact/hooks';
import { desktopBreakpoint, desktopVw } from '../styles';
import Footer from '../components/Footer';
import Hero2 from '../components/Hero2';
import Header from '../components/Header';

const Index = () => {
  const hoi = 0;

  return (
    <>
      {/* <Header /> */}
      <Hero2 title="KW1CINEMA" />
      {/* <Footer /> */}
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
  z-index: 1;
  display: none;

  @media (min-width: ${desktopBreakpoint}) {
    display: block;
  }
`;

export default Index;
