import styled from 'styled-components';
import {
  colors, desktopBreakpoint, desktopVw, fonts, mobileVw,
} from '../styles';

const Menu = ({ active, close, offset }) => {
  const handleClick = (index) => {
    window.scrollTo(0, offset[index].current.offsetTop - 50);
    close();
  };

  const data = ['Wat is het?', 'Hoe is het gemaakt?', 'Waar kan ik het kopen?', 'Vragen?'];

  return (
    <StyledMenu active={active}>
      <Overlay onClick={close} />
      <Container>
        <ul>
          {data.map((item, i) => (
            <li onClickCapture={() => handleClick(i)} key={item}>
              {item}
            </li>
          ))}
        </ul>
      </Container>

    </StyledMenu>
  );
};

const StyledMenu = styled.div`
	position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  z-index: 5;

  display: ${(props) => (props.active ? 'block' : 'none')};
`;

const Overlay = styled.div`
  background: #000;
  opacity: .15;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const Container = styled.div`
  z-index: 1;
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  background: ${colors.white};
  color: ${colors.title};
  font-family: ${fonts.black};
  font-size: ${mobileVw(18)};
  line-height: ${mobileVw(29)};
  text-transform: uppercase;
  z-index: 5;
  padding: ${mobileVw(50)} ${mobileVw(25)};
  width: calc(100% - 25px);

  @media (min-width: ${desktopBreakpoint}) {
    font-size: ${desktopVw(25)};
    line-height: ${desktopVw(29)};
    padding: ${desktopVw(50)};
    width: unset;
  }

  li {
    margin: 0 0 ${desktopVw(10)} 0;
    cursor: pointer;
  }
`;

export default Menu;
