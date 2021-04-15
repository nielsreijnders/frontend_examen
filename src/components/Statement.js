import styled from 'styled-components';
import { setCookie, getCookie } from 'koekie';
import gsap, { Power3 } from 'gsap';
import { useState, useEffect, useRef } from 'preact/hooks';
import {
  colors,
  desktopBreakpoint, desktopVw, fonts, mobileVw,
} from '../styles';
import BladRight from '../../assets/blad_right.svg';
import BladLeft from '../../assets/blad_left.svg';

const Statement = ({ size }) => {
  const [visibility, setVisibility] = useState(false);
  const [animation, setAnimation] = useState(true);
  const cookie = 'statement_closed';

  useEffect(() => {
    if (getCookie(cookie)) setVisibility(false);
    else {
      setTimeout(() => {
        setVisibility(true);
      }, 20);
    }
  }, []);

  const close = () => {
    setVisibility(false);
    setCookie(cookie, true, {
      expires: 2,
      in: 'minutes',
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

  const arr = ['De tegenspoed is compleet, onze geliefde Volkschampagne moet uit de schappen.Producentenvereniging Comité interprofessionnel du vin de Champagne heeft ons dwingend geadviseerd om af te zien van de naam Volkschampagne om juridische stappen te voorkomen.', 'Het comite kan bij onze actie geen oog dichtknijpen. Hoe sympathiek het idee ook bedoeld is, Het is inbreuk op de oorsprongsbenaming Champagne en diens reputatie. Champagne is een beschermde merknaam en de vereniging voert al jaren juridische acties om de naam beschermd te laten blijven. Volgens Europese regels mag de naam Champagne alleen gebruikt worden voor producten uit de Champagnestreek die aan zeer strenge productie- en kwaliteitseisen moeten voldoen en daar voldoen wij dus niet aan.', 'Namens Brouwerij Homeland en WINK bieden wij en plein publique onze oprechte excuses aan het Comité interprofessionnel du vin de Champagne. Het was nooit de bedoeling om de draak te steken met de goede reputatie van Champagne, Volkschampagne was slechts een knipoog om gezamenlijk de tegenspoed te omarmen. Om een bijzonder ondersteunend moment te creëren aan het eind van een jaar vol tegenspoed.', 'Een hart onder de riem voor een ieder die niets te vieren had in 2020. Een ondersteunend levenselixer waarmee we moed konden indrinken. Niet om de ellende weg te drinken. Maar om ‘het beest van 2020’ recht in zijn bek aan te kijken om ons falend bestaan te omarmen.   Vieren dat we niets te vieren hebben.', 'Wij zullen per direct de verkoop van Volkschampagne in de huidige vorm staken en de naam Volkschampagne veranderen naar Volksch. Dit voeren wij door op al onze kanalen en uitingen. Wij verhuizen onze website naar Volksch.nl. Hier zijn momenteel druk mee bezig. Daarnaast bieden wij onszelf als creatieven en brouwers aan om kosteloos 1 dag mee te denken met een campagne die de reputatie van champagne ten goede komt.', 'Ondanks deze grote tegenslag willen we alsnog samen met een ieder die niets te vieren had dit jaar Troosten op 2020. Troosten op de vergankelijkheid van het bestaan. Troosten op de donkere kanten van het leven. Troosten op de veerkrachtigheid die ons mens maakt. Troosten op falen en opstaan. Of je nu Champagne, Kinder cola of bier in je hand hebt.', 'Troost op 2020.'];

  const icons = [
    { url: 'https://brouwerijhomeland.nl/', name: 'homeland', svg: "%3Csvg xmlns='http://www.w3.org/2000/svg' width='108.642' height='78.512' viewBox='0 0 108.642 78.512'%3E%3Cg transform='translate(-312.318 -4257.792)'%3E%3Cpath d='M331.377,4322.575a5.021,5.021,0,1,0,5.014,5.04A5.056,5.056,0,0,0,331.377,4322.575Zm0,7.264a2.163,2.163,0,0,1-2.168-2.224,2.162,2.162,0,1,1,4.32,0A2.148,2.148,0,0,1,331.377,4329.839Z' fill='%230d0213'/%3E%3Cpath d='M335.535,4333.78h-8.394a.372.372,0,0,0-.4.346v1.852a.37.37,0,0,0,.4.326h8.394a.391.391,0,0,0,.422-.326v-1.852A.392.392,0,0,0,335.535,4333.78Z' fill='%230d0213'/%3E%3Cpath d='M322.283,4322.889h-2.126a.384.384,0,0,0-.4.346v4.962h-4.487v-4.962a.39.39,0,0,0-.422-.346H312.72a.384.384,0,0,0-.4.346v12.743a.384.384,0,0,0,.4.326h2.126a.391.391,0,0,0,.422-.326v-4.987h4.487v4.987a.384.384,0,0,0,.4.326h2.126a.393.393,0,0,0,.422-.326v-12.743A.392.392,0,0,0,322.283,4322.889Z' fill='%230d0213'/%3E%3Cpath d='M344.223,4317.513h1.164a.22.22,0,0,0,.232-.176v-2.756h.628l1.239,2.818a.283.283,0,0,0,.2.114H349c.17,0,.242-.124.188-.25,0,0-1.134-2.494-1.356-2.968a1.95,1.95,0,0,0,1.3-1.96c0-2.182-2.185-2.2-2.617-2.2h-2.288a.2.2,0,0,0-.212.18v7.026A.2.2,0,0,0,344.223,4317.513Zm1.39-5.874h.959c.125,0,.929-.028.929.732,0,.684-.808.684-.929.684h-.959Z' fill='%230d0213'/%3E%3Cpath d='M388.773,4312.335c0-2.182-2.186-2.2-2.618-2.2h-2.288a.193.193,0,0,0-.21.18v7.026a.2.2,0,0,0,.21.176h1.164a.218.218,0,0,0,.232-.176v-2.756h.626l1.242,2.818a.28.28,0,0,0,.2.114h1.308c.168,0,.242-.124.19-.25,0,0-1.138-2.494-1.358-2.968A1.95,1.95,0,0,0,388.773,4312.335Zm-2.556.72h-.96v-1.416h.96c.124,0,.928-.028.928.732C387.145,4313.055,386.337,4313.055,386.217,4313.055Z' fill='%230d0213'/%3E%3Cpath d='M391.033,4314.585h1.148a.212.212,0,0,0,.224-.19v-4.08a.213.213,0,0,0-.224-.19h-1.148a.21.21,0,0,0-.22.19v4.08A.21.21,0,0,0,391.033,4314.585Z' fill='%230d0213'/%3E%3Cpath d='M381.313,4311.639a.211.211,0,0,0,.22-.19v-1.122a.212.212,0,0,0-.22-.192h-4.586a.2.2,0,0,0-.219.192v7.01a.2.2,0,0,0,.219.176h4.67a.215.215,0,0,0,.232-.176v-1.142a.214.214,0,0,0-.232-.188h-3.278v-1.414h2.7a.2.2,0,0,0,.21-.18v-1.166a.2.2,0,0,0-.21-.192h-2.7v-1.416Z' fill='%230d0213'/%3E%3Cpath d='M348.726,4295.806l14.366,8.294a7.865,7.865,0,0,0,7.094,0l14.367-8.294a7.866,7.866,0,0,0,3.544-6.142v-16.589a7.87,7.87,0,0,0-3.544-6.144l-14.367-8.3a7.887,7.887,0,0,0-7.094,0l-14.366,8.3a7.87,7.87,0,0,0-3.547,6.144v16.589A7.867,7.867,0,0,0,348.726,4295.806Zm7.775-26.858a.753.753,0,0,1,.788-.672h4.15a.765.765,0,0,1,.824.672v9.654h8.751v-9.654a.753.753,0,0,1,.788-.672h4.15a.764.764,0,0,1,.824.672v24.875a.766.766,0,0,1-.824.636H371.8a.754.754,0,0,1-.788-.636V4284.1h-8.751v9.723a.767.767,0,0,1-.824.636h-4.15a.754.754,0,0,1-.788-.636Z' fill='%230d0213'/%3E%3Cpath d='M387.359,4322.813a.467.467,0,0,0-.788,0c-1.738,4.216-3.618,8.816-5.356,13.033-.1.228.04.458.382.458h2.272a.428.428,0,0,0,.424-.23v.02l.528-1.364h4.3l.532,1.364v-.02a.408.408,0,0,0,.384.23h2.312c.3,0,.466-.23.364-.458Zm-1.566,9.394.676-1.828a11.77,11.77,0,0,0,.506-1.78,12.943,12.943,0,0,0,.484,1.78l.682,1.828Z' fill='%230d0213'/%3E%3Cpath d='M396.411,4315.163v-4.848a.209.209,0,0,0-.212-.19h-1.16a.21.21,0,0,0-.22.19v4.848c0,.652-.6.968-1.2.968a1.235,1.235,0,0,1-1-.476.335.335,0,0,0-.292-.148h-1.278a.18.18,0,0,0-.164.246,2.615,2.615,0,0,0,2.734,1.9A2.514,2.514,0,0,0,396.411,4315.163Z' fill='%230d0213'/%3E%3Cpath d='M379.049,4333.567h-4.311v-10.332a.385.385,0,0,0-.4-.346h-2.148a.384.384,0,0,0-.4.346v12.743a.384.384,0,0,0,.4.326h6.861a.393.393,0,0,0,.422-.326v-2.066A.393.393,0,0,0,379.049,4333.567Z' fill='%230d0213'/%3E%3Cpath d='M406.114,4322.889h-2.105a.374.374,0,0,0-.406.346v7.78c-1.934-2.778-3.7-5.232-5.614-7.992a.487.487,0,0,0-.326-.134H395.5a.386.386,0,0,0-.406.346v12.743a.387.387,0,0,0,.406.326h2.146a.385.385,0,0,0,.4-.326v-7.817c1.972,2.816,3.64,5.212,5.6,8.009a.48.48,0,0,0,.326.134h2.145a.37.37,0,0,0,.4-.326v-12.743A.371.371,0,0,0,406.114,4322.889Z' fill='%230d0213'/%3E%3Cpath d='M372.522,4317.585l2.752-7.216c.054-.136-.01-.252-.188-.252h-1.244a.228.228,0,0,0-.2.116l-1.316,3.652c-.454-1.3-.854-2.356-1.308-3.652a.209.209,0,0,0-.2-.116H369.54a.2.2,0,0,0-.19.116l-1.318,3.652c-.462-1.3-.844-2.356-1.306-3.652-.012-.062-.106-.116-.2-.116h-1.232a.19.19,0,0,0-.2.252l2.73,7.216a.231.231,0,0,0,.412,0c.63-1.72,1.3-3.448,1.94-5.186l1.96,5.186A.212.212,0,0,0,372.522,4317.585Z' fill='%230d0213'/%3E%3Cpath d='M413.084,4322.889h-2.128a.384.384,0,0,0-.4.346v12.743a.384.384,0,0,0,.4.326h2.128c3.336,0,7.876-.976,7.876-6.707C420.96,4323.637,416.36,4322.889,413.084,4322.889Zm.422,10.6v-7.781c2.548-.038,4.484,1.054,4.484,3.89C417.99,4333.3,415.058,4333.545,413.506,4333.488Z' fill='%230d0213'/%3E%3Cpath d='M353.668,4309.963a2.762,2.762,0,1,0,2.756,2.772A2.781,2.781,0,0,0,353.668,4309.963Zm0,3.994a1.19,1.19,0,0,1-1.194-1.222,1.188,1.188,0,1,1,2.374,0A1.179,1.179,0,0,1,353.668,4313.957Z' fill='%230d0213'/%3E%3Cpath d='M355.952,4316.127h-4.616a.2.2,0,0,0-.222.19v1.02a.2.2,0,0,0,.222.176h4.616a.212.212,0,0,0,.232-.176v-1.02A.213.213,0,0,0,355.952,4316.127Z' fill='%230d0213'/%3E%3Cpath d='M354.236,4322.869H352.09a.552.552,0,0,0-.384.212l-4.254,9.122-4.485-9.122a.532.532,0,0,0-.364-.212h-2.184a.344.344,0,0,0-.384.346v12.763a.341.341,0,0,0,.384.326h2.146a.384.384,0,0,0,.4-.326v-6.419l3.126,6.037v-.02a.5.5,0,0,0,.361.21h2.014a.53.53,0,0,0,.344-.21c.958-1.936,1.936-3.871,2.894-5.807v6.209a.391.391,0,0,0,.422.326h2.108a.391.391,0,0,0,.422-.326v-12.763A.39.39,0,0,0,354.236,4322.869Z' fill='%230d0213'/%3E%3Cpath d='M342.087,4315.323a1.648,1.648,0,0,0-.97-1.508,1.591,1.591,0,0,0,.864-1.53c0-2.2-2.552-2.15-2.552-2.15h-2.338a.206.206,0,0,0-.222.192v7.01a.2.2,0,0,0,.222.176h2.338C339.927,4317.513,342.087,4317.421,342.087,4315.323Zm-3.616-3.684h.958c.126,0,.928-.028.928.732,0,.684-.806.684-.928.684h-.958Zm1.07,4.374h-1.072V4314.6h1.072c.126,0,.928-.026.928.732C340.469,4316.013,339.663,4316.013,339.541,4316.013Z' fill='%230d0213'/%3E%3Cpath d='M361.138,4317.649a2.512,2.512,0,0,0,2.794-2.486v-4.848a.207.207,0,0,0-.21-.19h-1.16a.209.209,0,0,0-.22.19v4.848c0,.652-.6.968-1.2.968a1.175,1.175,0,0,1-1.212-.99v-4.826a.211.211,0,0,0-.222-.19h-1.148a.209.209,0,0,0-.22.19v4.848A2.562,2.562,0,0,0,361.138,4317.649Z' fill='%230d0213'/%3E%3Cpath d='M367.588,4333.561h-5.962v-2.57h4.908a.366.366,0,0,0,.384-.326v-2.122a.368.368,0,0,0-.384-.346h-4.908v-2.576h5.808a.384.384,0,0,0,.4-.346v-2.04a.384.384,0,0,0-.4-.346H359.1a.372.372,0,0,0-.4.346v12.743a.371.371,0,0,0,.4.326h8.492a.391.391,0,0,0,.422-.326v-2.071A.39.39,0,0,0,367.588,4333.561Z' fill='%230d0213'/%3E%3C/g%3E%3C/svg%3E" },
    { url: 'https://www.welcometowink.com/', name: 'wink', svg: "%3Csvg xmlns='http://www.w3.org/2000/svg' width='84.417' height='75.669' viewBox='0 0 84.417 75.669'%3E%3Cg transform='translate(-643.085 -4259.214)'%3E%3Cpath d='M668.425,4283.329,660,4295.367l8.457,12.013,8.425-12.035Zm33.766-.043-8.424,12.036,8.458,12.016,8.424-12.039ZM651.512,4259.3l-8.427,12.036,8.458,12.014,8.425-12.036Zm33.766-.045-8.426,12.038,8.457,12.014,8.427-12.038Zm33.766-.043-8.426,12.036,8.457,12.013,8.427-12.035Zm-56.053,72.929-1.6-6.345h-2.18l-1.661,6.241-1.37-6.241H654.31l2.166,9.085h1.99l1.8-6.793,1.809,6.793h1.945l2.206-9.085h-1.846Zm13.667,2.739h1.833V4325.8h-1.833Zm20.12-3.017-3.717-6.067h-1.787v9.085h1.7v-5.926l3.667,5.926h1.839V4325.8h-1.7Zm19.316-6.067h-2.466l-3.706,4.033V4325.8h-1.836v9.085h1.836v-2.745l1.486-1.519,2.5,4.264h2.371l-3.607-5.548Z' fill='%230d0213'/%3E%3C/g%3E%3C/svg%3E" },
  ];

  return (
    <div>
      <Close onClick={() => close()} visibility={visibility} />
      <Animation ref={refContainer}>
        <StyledStatement>
          <Border>
            <Wrapper>
              <Title>STATEMENT</Title>
              <Blaadje className="left" alt="blaadje" src={BladLeft} />
              <Blaadje alt="blaadje" src={BladRight} />
              <Content>
                <strong>Oui, c'est fini,</strong>
                {arr.map((item) => <p key={item}>{item}</p>)}
              </Content>
              <Container>
                {icons.map(({ svg, name, url }) => <a target="_blank" rel="noreferrer" href={url}><img key={name} alt={name} src={`data:image/svg+xml,${svg}`} /></a>)}
              </Container>
              <Text>Geen 18, geen alcohol</Text>
            </Wrapper>
          </Border>
        </StyledStatement>
      </Animation>
    </div>
  );
};

const StyledStatement = styled.div`
	position: absolute;
  left: 50%;
  z-index: 2;
  width: ${mobileVw(300)};
  /* height: ${mobileVw(200)}; */
  background: ${colors.white};
  /* border: ${desktopVw(2)} solid ${colors.black}; */
  /* bottom: ${mobileVw(25)}; */
  transform: translateX(-50%);
  top: ${mobileVw(25)};

  /* border-bottom: ${mobileVw(9)} solid ${colors.black};
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
  } */

  @media (min-width: ${desktopBreakpoint}) {
    width: ${desktopVw(819)};
    /* height: calc(100vh - 15vh); */
    height: inherit;
    transform: translateX(-50%);
    top: ${desktopVw(50)};
    bottom: unset;
  }
`;

const Border = styled.div`
  border: ${mobileVw(2)} solid ${colors.black};
  background: ${colors.pink};
  padding: ${mobileVw(10)};

  @media (min-width: ${desktopBreakpoint}) {
    border: ${desktopVw(2)} solid ${colors.black};
    padding: ${desktopVw(35)};
  }
`;

const Close = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.4);
  z-index: 1;

  display: ${(props) => !props.visibility && 'none'};
`;

const Container = styled.div`
  display: flex;
  margin: ${mobileVw(15)} 0 0;

  @media (min-width: ${desktopBreakpoint}) {
    margin: 0;
  }

  img {
    display: block;
    margin: 0 ${mobileVw(15)};
    height: ${mobileVw(40)};
    width: auto;

    @media (min-width: ${desktopBreakpoint}) {
      margin: 0 ${desktopVw(25)};
      height: ${desktopVw(80)};
    }
  }
`;

const Blaadje = styled.img`
  display: inline-block;
  width: ${desktopVw(114)};
  position: absolute;
  top: ${desktopVw(55)};
  /* transform: translateY(-50%); */
  right: ${desktopVw(140)};
  display: none;

  &.left {
    left: ${desktopVw(140)};
    right: unset;
  }

  @media (min-width: ${desktopBreakpoint}) {
    display: block;
  }
`;

const Animation = styled.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  visibility: hidden;
`;

const Text = styled.div`
  font-family: ${fonts.italic};
  /* margin: ${mobileVw(10)} 0 0; */
  font-size: ${mobileVw(10)};
  width: 100%;
  padding: ${mobileVw(15)} ${mobileVw(15)};
  text-align: right;

  @media (min-width: ${desktopBreakpoint}) {
    /* margin: ${desktopVw(80)} 0 0; */
    font-size: ${desktopVw(20)};
    padding: ${desktopVw(20)} ${desktopVw(30)};
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
  border: 1px solid black;

  @media (min-width: ${desktopBreakpoint}) {
    border: 3px solid black;
  }
  background: white;
`;

const Title = styled.div`
  font-family: ${fonts.black};
  font-size: ${mobileVw(26)};
  margin: ${mobileVw(35)} auto ${mobileVw(10)};
  display: table;

  @media (min-width: ${desktopBreakpoint}) {
    font-size: ${desktopVw(40)};
    margin: ${desktopVw(110)} auto ${desktopVw(40)};
  }
`;

const Content = styled.div`
  font-family: ${fonts.regular};
  text-align: center;
  font-size: ${mobileVw(14)};
  line-height: ${mobileVw(16)};
  margin: 0 ${mobileVw(15)};

  @media (min-width: ${desktopBreakpoint}) {
    font-size: ${desktopVw(14)};
    line-height: ${desktopVw(16)};
    margin: 0 ${desktopVw(125)};
  }

  p, strong {
    margin: 0 0 ${mobileVw(15)} 0;
    display: block;

    @media (min-width: ${desktopBreakpoint}) {
      margin: 0 0 ${desktopVw(25)} 0;
    }
  }

  strong {
    font-family: ${fonts.italic};
    /* font-weight: 900; */
  }
`;

export default Statement;
