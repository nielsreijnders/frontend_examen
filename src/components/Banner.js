import styled from 'styled-components';
import {
  colors, desktopBreakpoint, desktopVw, fonts, mobileVw,
} from '../styles';

const Banner = ({ video }) => (
  <StyledBanner>
    <Border>
      <Video loop autoPlay muted controls>
        <source src={video} type="video/mp4" />
      </Video>
    </Border>
  </StyledBanner>
);

const StyledBanner = styled.div`
  position: relative;
  display: table;
  margin: 0 auto ${mobileVw(25)};
  border-bottom: ${mobileVw(9)} solid ${colors.black};
  border-left: ${mobileVw(9)} solid ${colors.black};

  @media (min-width: ${desktopBreakpoint}) {
    margin: 0 auto ${desktopVw(50)};
    border-bottom: ${desktopVw(18)} solid ${colors.black};
    border-left: ${desktopVw(18)} solid ${colors.black};
  }

  &:before {
    content: "";
    background: white;
    position: absolute;
    top: 0px;
    left: ${mobileVw(-9)};
    width: 0;
    border-top: ${mobileVw(10)} solid #fff;
    border-right: ${mobileVw(9)} solid #000;

    @media (min-width: ${desktopBreakpoint}) {
      left: ${desktopVw(-18)};
      border-top: ${desktopVw(25)} solid #fff;
      border-right: ${desktopVw(19)} solid #000;
    }
  }

  &:after {
    content: "";
    background: white;
    position: absolute;
    right: 0px;
    bottom: ${mobileVw(-9)};
    width: 0;
    border-bottom: ${mobileVw(9)} solid #fff;
    border-left: ${mobileVw(10)} solid #000;

    @media (min-width: ${desktopBreakpoint}) {
      bottom: ${desktopVw(-18)};
      border-bottom: ${desktopVw(19)} solid #fff;
      border-left: ${desktopVw(25)} solid #000;
    }
  }
`;

const Border = styled.div`
  border: ${mobileVw(2)} solid ${colors.black};
  background: ${colors.pink};

  @media (min-width: ${desktopBreakpoint}) {
    border: ${desktopVw(2)} solid ${colors.black};
  }
`;

const Video = styled.video`
  width: ${mobileVw(260)};
  height: ${mobileVw(150)};
  border: ${mobileVw(15)} solid ${colors.pink};
  box-sizing: content-box;
  outline: none;
  object-fit: cover;

  @media (min-width: ${desktopBreakpoint}) {
    width: ${desktopVw(774)};
    height: ${desktopVw(441)};
    border: ${desktopVw(36)} solid ${colors.pink};
  }
`;

export default Banner;
