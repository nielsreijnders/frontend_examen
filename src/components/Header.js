import styled from 'styled-components';
import { Link } from 'preact-router';
import {
  colors, desktopBreakpoint, desktopVw, fonts, mobileVw,
} from '../styles';
import Blaadje from '../../assets/remko.jpg';

const Header = () => (
  <StyledHeader>
    <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/overmij">About</Link></li>
      <li>Contact</li>
    </ul>
  </StyledHeader>
);

const StyledHeader = styled.div`
  position: relative;
  font-family: ${fonts.regular};

  ul {
    position: fixed;
    z-index: 2;
    color: #fff;
    left: 50%;
    transform: translateX(-50%);
    margin: ${desktopVw(20)} 0;

    li {
      display: inline-block;
      margin: 0 ${desktopVw(20)};

      a {
        color: red;
      }
    }
  }
`;

export default Header;
