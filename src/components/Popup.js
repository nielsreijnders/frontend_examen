import styled from 'styled-components';
import { setCookie, getCookie } from 'koekie';
import gsap, { Power3 } from 'gsap';
import { useState, useEffect, useRef } from 'preact/hooks';
import {
  colors,
  desktopBreakpoint, desktopVw, fonts, mobileVw,
} from '../styles';

const Popup = ({ size }) => {
  const [visibility, setVisibility] = useState(false);
  const [animation, setAnimation] = useState(true);
  const cookie = 'pop_up_closed';

  useEffect(() => {
    if (getCookie(cookie)) setVisibility(false);
    else {
      setTimeout(() => {
        setVisibility(true);
      }, 5000);
    }
  }, []);

  const close = () => {
    setVisibility(false);
    setCookie(cookie, true, {
      expires: 2,
      in: 'days',
      path: '/',
    });
  };

  const refContainer = useRef(null);

  const [tl] = useState(gsap.timeline({ paused: true }));

  useEffect(() => {
    tl.fromTo(
      refContainer.current,
      0.2,
      { autoAlpha: 0, y: -5 },
      { autoAlpha: 1, ease: Power3.easeInOut, y: 0 },
    )
      .fromTo(
        refContainer.current.children,
        0.4,
        { autoAlpha: 0, y: -5 },
        {
          autoAlpha: 1, ease: Power3.easeInOut, y: 0,
        },
      );
  }, []);

  if (visibility && animation) {
    setAnimation(false);
    tl.play();
  } else if (!visibility && !animation) {
    setAnimation(true);
    tl.reverse(0);
  }

  return (
    <Animation ref={refContainer}>
      <StyledPopup>
        <Wrapper>
          <Title>IK HEB</Title>
          <Container>
            <a href="https://www.youtube.com/watch?v=zbEnOYtsXHA">
              <Border>
                <Button>
                  EEN TOEKOMST
                  <span>Jonger dan 18 jaar</span>
                </Button>
              </Border>
            </a>
            <Border onClick={() => close()}>
              <Button>
                GEEN TOEKOMST
                <span>Ouder dan 18 jaar</span>
              </Button>
            </Border>
          </Container>
          <Text>Geen 18, geen alcohol</Text>
        </Wrapper>
      </StyledPopup>
    </Animation>
  );
};

const StyledPopup = styled.div`
	position: fixed;
  left: 50%;
  z-index: 2;
  width: ${mobileVw(300)};
  height: ${mobileVw(200)};
  background: ${colors.white};
  border: ${desktopVw(2)} solid ${colors.black};
  bottom: ${mobileVw(25)};
  transform: translateX(-50%);

  @media (min-width: ${desktopBreakpoint}) {
    width: ${desktopVw(819)};
    height: calc(100vh - 15vh);
    transform: translate(-50%,-50%);
    top: 50%;
    bottom: unset;
  }
`;

const Animation = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  visibility: hidden;
`;

const Text = styled.div`
  font-family: ${fonts.italic};
  margin: ${mobileVw(10)} 0 0;
  font-size: ${mobileVw(20)};

  @media (min-width: ${desktopBreakpoint}) {
    margin: ${desktopVw(80)} 0 0;
    font-size: ${desktopVw(20)};
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Title = styled.div`
  font-family: ${fonts.black};
  font-size: ${mobileVw(26)};
  margin: 0 auto ${mobileVw(10)};
  display: table;

  @media (min-width: ${desktopBreakpoint}) {
    font-size: ${desktopVw(33)};
    margin: 0 auto ${desktopVw(40)};
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  outline: none;
  border: ${mobileVw(2)} solid ${colors.black};
  width: ${mobileVw(100)};
  height: ${mobileVw(75)};
  background: ${colors.pink};
  font-family: ${fonts.black};
  font-size: ${mobileVw(18)};
  line-height: ${mobileVw(18)};
  cursor: pointer;
  
  @media (min-width: ${desktopBreakpoint}) {
    border: ${desktopVw(2)} solid ${colors.black};
    width: ${desktopVw(243)};
    height: ${desktopVw(147)};
    font-size: ${desktopVw(33)};
    line-height: ${desktopVw(31)};
  }

  span {
    display: block;
    font-size: ${mobileVw(12)};
    font-family: ${fonts.regular};

    @media (min-width: ${desktopBreakpoint}) {
      font-size: ${desktopVw(17)};
    }
  }
`;

const Border = styled.div`
  box-shadow: -4px 4px 0px rgb(0 0 0);
  position: relative;
  box-sizing: content-box;
  margin: 0 ${mobileVw(10)};
  transition: .3s ease;

  /* &:before {
    content: "";
    background: white;
    position: absolute;
    top: 0px;
    left: -8px;
    width: 0;
    border-top: ${desktopVw(10)} solid #fff;
    border-right: 8px solid #000;
  }

  &:after {
    content: "";
    background: white;
    position: absolute;
    right: 0px;
    bottom: -8px;
    width: 0;
    border-bottom: 8px solid #fff;
    border-left: ${desktopVw(10)} solid #000;
    transition: .4s ease;
    z-index: 0;
  } */

  @media (min-width: ${desktopBreakpoint}) {
    margin: 0 ${desktopVw(40)};
    box-shadow: -8px 8px 0px rgb(0 0 0);
  }


  &:hover {
    box-shadow: 0 0 0px rgb(0 0 0);

    &:after {
      bottom: 0;
    }
  }
`;

export default Popup;
