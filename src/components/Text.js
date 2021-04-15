import styled from 'styled-components';
import parse from 'html-react-parser';
import {
  colors, desktopBreakpoint, desktopVw, fonts, mobileVw,
} from '../styles';

const Text = ({ title, paragraph }) => (
  <StyledText>
    <Title>
      {title}
    </Title>
    {parse(paragraph)}
  </StyledText>
);

const StyledText = styled.div`
  position: relative;
  font-family: ${fonts.regular};
  margin: 0 ${mobileVw(10)} ${mobileVw(25)};
  width: auto;
  text-align: left;
  word-wrap: break-word;

  @media (min-width: ${desktopBreakpoint}) {
    margin: 0 auto ${desktopVw(50)};
    width: ${desktopVw(576)};
    text-align: center;
  }

  p {
    font-size: ${mobileVw(16)};
    line-height: ${mobileVw(18)};
    margin: ${mobileVw(10)} 0 0;

    @media (min-width: ${desktopBreakpoint}) {
      font-size: ${desktopVw(14)};
      line-height: ${desktopVw(18)};
      margin: ${desktopVw(10)} 0 0;
    }
  }
`;

const Title = styled.h2`
  color: ${colors.title};
  font-family: ${fonts.black};
  font-size: ${mobileVw(22)};
  width: auto;
  line-height: ${mobileVw(29)};
  margin: 0 auto 0;

  @media (min-width: ${desktopBreakpoint}) {
    font-size: ${desktopVw(25)};
    width: ${desktopVw(500)};
    line-height: ${desktopVw(29)};
  }
`;

export default Text;
