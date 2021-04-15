import styled from 'styled-components';
import { useState } from 'preact/hooks';
import {
  colors, desktopBreakpoint, desktopVw, fonts, mobileVw,
} from '../styles';
import Socials from './Socials';
import Blik from '../../assets/Can_crash.png';
import Menu from './Menu';

const Hero = ({ offset }) => {
  const icon = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40.857' height='31.333' viewBox='0 0 40.857 31.333'%3E%3Cg transform='translate(-1015.574 -21.32)'%3E%3Cpath d='M1047.874,42.97a.772.772,0,0,1,1.337.006c.181.351.235.757.39,1.112s.271.73.4,1.095.282.726.381,1.1.177.756.242,1.141.258.754.288,1.146-.065.782-.069,1.177a3.391,3.391,0,0,1-.238,1.335,2.875,2.875,0,0,1-.841,1.07,2.2,2.2,0,0,1-1.262.5,2.228,2.228,0,0,1-1.022-.251,2.2,2.2,0,0,1-.783-.672,3.079,3.079,0,0,1-.562-.885,4.455,4.455,0,0,1-.247-1.035,8.665,8.665,0,0,1-.07-1.213,8.613,8.613,0,0,1,.248-1.189,10.086,10.086,0,0,1,.216-1.19c.121-.38.319-.739.478-1.111s.265-.762.45-1.124S1047.671,43.323,1047.874,42.97Z' fill='%230d0213'/%3E%3Cpath d='M1048.368,38.589a7.272,7.272,0,0,1-2.339-.293,8.072,8.072,0,0,1-2.082-1.111,11.381,11.381,0,0,1-1.946-1.99,15.017,15.017,0,0,1-1.645-2.23.548.548,0,0,1-.031-.414,2.711,2.711,0,0,1,.163-.819.482.482,0,0,1,.7-.269,6.831,6.831,0,0,1,.946.459,13.357,13.357,0,0,0,2.816,1.377,12.94,12.94,0,0,0,1.9.158,12.116,12.116,0,0,0,1.875.26,14.3,14.3,0,0,0,1.557-.282,13.806,13.806,0,0,0,2.015-.5,13.637,13.637,0,0,0,1.681-.6c.345-.152.655-.345.984-.526a1.432,1.432,0,0,1,1.317.351.723.723,0,0,1,.035.83,7.955,7.955,0,0,1-1.008,1.992,7.82,7.82,0,0,1-1.641,1.527,11.344,11.344,0,0,1-2.812,1.447A7.1,7.1,0,0,1,1048.368,38.589Z' fill='%230d0213'/%3E%3Cpath d='M1023.594,38.62a7.1,7.1,0,0,1-2.533-.506,8.387,8.387,0,0,1-2.33-1.148,12.013,12.013,0,0,1-1.721-1.838,14.8,14.8,0,0,1-1.346-2.1.774.774,0,0,1-.071-.563c.028-.256-.07-.52.038-.754a.664.664,0,0,1,.809-.42,6.852,6.852,0,0,1,.934.625,13.142,13.142,0,0,0,2.826,1.145,14.3,14.3,0,0,0,2.475.694,11.711,11.711,0,0,0,2.855-.322,12.8,12.8,0,0,0,2.371-.595,15.584,15.584,0,0,0,2.316-.845c.468-.249,1.292-.174,1.448.4.081.3-.109.55-.213.816a7.771,7.771,0,0,1-1.324,1.951,6.31,6.31,0,0,1-1.309,1.233,16.634,16.634,0,0,1-1.444,1.155,8.731,8.731,0,0,1-2.445.918A4.644,4.644,0,0,1,1023.594,38.62Z' fill='%230d0213'/%3E%3Cpath d='M1020.117,29.146a11.686,11.686,0,0,1-2.731-.431,3.987,3.987,0,0,1-.828-.319.34.34,0,0,1-.251-.339c-.014-.167-.041-.374.092-.452a2.706,2.706,0,0,1,.943-.287,14.584,14.584,0,0,0,2.136-.249,17.494,17.494,0,0,0,1.615-.807c.549-.236,1.079-.5,1.611-.774.65-.334,1.3-.651,1.928-1.028s1.306-.669,1.912-1.077c.731-.492,1.44-1.023,2.144-1.552.181-.136.306-.366.514-.453.419-.174.625.057.594.5a3.891,3.891,0,0,1-.689,2.113,14.46,14.46,0,0,1-1.979,2.34,10.9,10.9,0,0,1-1.584,1.285,10.381,10.381,0,0,1-1.882.781,9.025,9.025,0,0,1-1.725.528A11.269,11.269,0,0,1,1020.117,29.146Z' fill='%230d0213'/%3E%3Cpath d='M1052.092,28.957a9.958,9.958,0,0,1-2.652-.232,10.574,10.574,0,0,1-2.583-.934,10.917,10.917,0,0,1-2.155-1.706,12.7,12.7,0,0,1-2.089-2.359,3.581,3.581,0,0,1-.348-1.886c0-.44.189-.508.619-.321a6.179,6.179,0,0,1,1.292.684c.925.7,1.806,1.465,2.791,2.079.495.308,1.025.562,1.534.845s1.026.557,1.552.809a18.855,18.855,0,0,0,3.064,1.037,13.275,13.275,0,0,0,1.671.434,2.243,2.243,0,0,1,.8.425c.125.076.271.072.26.229-.014.182-.038.429-.209.5a5.979,5.979,0,0,1-1.362.409A10.28,10.28,0,0,1,1052.092,28.957Z' fill='%230d0213'/%3E%3C/g%3E%3C/svg%3E";
  const sticker = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='167.406' height='146.892' viewBox='0 0 167.406 146.892'%3E%3Cpath d='M212.8,112.522l-15.315,7.4,23.153,2.2-13.667,6.355,10.586,5.164-9.844,3.468,12.4,7.1-15.787,2.552,20.675,14-24.448-2.352,5.749,8.2-9.231-1.122,2.375,5.805-10.663-4.061,3.783,13.86-15.086-7.315,4.848,11.008-11.09-8.173.894,10.638-7.224-4.591,1.066,11.83-10.565-12.39,1.211,11.814-8.66-8.889-.762,12.747-7.563-9.718-3.441,12.331-6.685-12.707-15.267,20.186-2.45-16.708-12.154,14.12,3.211-16.489-9.064,7.563,5.5-16.278-14.363,9.213L94.2,173.483l-21.817,8.978L85.939,167.4l-12.157.258,12.4-10.42-15.792,2.42,11.738-8.53-15.864-.037,12.39-6.933L57.594,142.49l16.473-7.5L64.5,130.06l11.568-2.868-7.782-4.258,9.439-2.29L61.654,110.483l14.7.661-6.877-6.875,16.9,2.332-6.314-8.389L92,102.336l-3.762-9.69,14.027,6.838-6.038-18.6,18.979,14.876-.576-11.4,8.421,7.6-3.94-22.017,12.712,16.171-.468-11.864,7.6,11.157,1.953-13.653,6.753,9.669,7.569-20.466,6.091,19.01,8.812-13.041.569,13.325,13.453-17.486-2.493,16.016,16.944-8.972L187.948,88.328l11.532-4.089-8.821,10.214,18.482-5.047L195.8,102.148l20.878-.629L196.215,112.9Z' transform='translate(-57.594 -60.965)' fill='%230d0213'/%3E%3C/svg%3E";

  const [active, setActive] = useState(false);

  return (
    <>
      <StyledHero>
        <Background>
          <a target="_blank" rel="noreferrer" href="https://brouwerijhomeland.nl/volkschampagne-code/?target_id=1744">
            <Button>
              <Sticker alt="black background" src={sticker} />
              <p>
                KLIK HIER ALS JE EEN KOOPCODE HEBT.
              </p>
            </Button>
          </a>
          <Icon alt="icon" onClick={() => setActive(true)} src={icon} />
        </Background>
        <Container>
          <Text>Geen 18, geen alcohol</Text>
          <Socials size={29} />
        </Container>
        <Wrapper>
          <Title>
            LATEN WE
          </Title>
          <StyledImg alt="blikje" src={Blik} />
          <Title>
            TROOSTEN
          </Title>
        </Wrapper>
      </StyledHero>
      <Menu offset={offset} close={() => setActive(false)} active={active} />
    </>
  );
};

const StyledHero = styled.div`
	position: relative;
`;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	margin: ${mobileVw(-330)} auto ${mobileVw(50)};
	justify-content: center;
	width: 100%;

	@media (min-width: ${desktopBreakpoint}) {
		margin: ${desktopVw(-235)} auto ${desktopVw(10)};
	}
`;

const StyledImg = styled.img`
	width: ${mobileVw(200)};

	@media (min-width: ${desktopBreakpoint}) {
		width: ${desktopVw(255)};
	}
`;

const Sticker = styled.img`
	width: ${mobileVw(140)};

	@media (min-width: ${desktopBreakpoint}) {
		width: ${desktopVw(167)};
	}
`;

const Title = styled.h1`
	font-family: ${fonts.black};
	color: ${colors.title};
	font-size: ${mobileVw(20)};
	/* display: none; */
	margin: ${mobileVw(40)} ${mobileVw(-50)} 0;

	@media (min-width: ${desktopBreakpoint}) {
		font-size: ${desktopVw(33)};
		display: block;
		margin: ${desktopVw(-20)} 0 0;
	}
`;

const Background = styled.h1`
  background: ${colors.pink};
	height: ${mobileVw(375)};
	
	@media (min-width: ${desktopBreakpoint}) {
		height: ${desktopVw(315)};
	}
`;

const Button = styled.h1`
	font-family: ${fonts.black};
	color: ${colors.pink};
	position: absolute;
	font-size: ${mobileVw(12)};
	margin: ${mobileVw(10)} 0 0 ${mobileVw(10)};

	@media (min-width: ${desktopBreakpoint}) {
		font-size: ${desktopVw(17)};
		margin: ${desktopVw(50)} 0 0 ${desktopVw(40)};
	}

	p {
		position: absolute;
		top: 50%;
		left: 50%;
		width: ${mobileVw(80)};
		transform: translate(-50%,-50%) rotate(337deg);
		text-align: center;
		line-height: ${mobileVw(16)};

		@media (min-width: ${desktopBreakpoint}) {
			width: ${desktopVw(96)};
			line-height: ${desktopVw(18)};
		}
	}
`;

const Icon = styled.img`
	float: right;
	margin: ${mobileVw(21)} ${mobileVw(23)} 0 0;
	width: ${mobileVw(40)};
	cursor: pointer;

	@media (min-width: ${desktopBreakpoint}) {
		margin: ${desktopVw(21)} ${desktopVw(23)} 0 0;
		width: ${desktopVw(40)};
	}	
`;

const Container = styled.div`
	padding: ${mobileVw(50)} ${mobileVw(10)} 0;
	justify-content: space-between;
	position: relative;
	width: 100%;
	/* display: none; */

	@media (min-width: ${desktopBreakpoint}) {
		padding: ${desktopVw(20)} ${desktopVw(40)} 0;
		display: flex;
		position: absolute;
	}
`;

const Text = styled.p`
	font-family: ${fonts.italic};
	font-size: ${mobileVw(16)};

	@media (min-width: ${desktopBreakpoint}) {
		font-size: ${desktopVw(20)};
	}

	@media (max-width: ${desktopBreakpoint}) {
		line-height: ${mobileVw(26)};
	}
`;

export default Hero;
