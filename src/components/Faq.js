import styled from 'styled-components';
import { useState } from 'preact/hooks';
import parse from 'html-react-parser';
import Remko from '../../assets/remko.jpg';
import {
  colors, desktopBreakpoint, desktopVw, fonts, mobileVw,
} from '../styles';

const Faq = () => {
  const data = [
    { title: 'AAN WIE HEBBEN WE DEZE ELLENDE TE DANKEN?', description: 'WINK en Brouwerij Homeland hebben net als vele collega’s in de evenementenindustrie en Ho-reca een tegenvallend jaar. Juist daarom willen ze ‘Troosten op 2020’ met iedereen die niets te vieren heeft, als hart onder de riem om de romantiek van de onoverkomelijke tegenspoed te omarmen. Niet om ons verdriet weg te drinken maar juist om een bijzonder nationaal moment te creëren aan het eind van een jaar vol tegenspoed. Troosten op Falen en opstaan. Troosten op de veerkracht die ons mens maakt. Samen is het gelukt om 2020 blikken van net geen halve liter te brouwen.' },
    { title: 'WAAROM HEBBEN WIJ DIT BIER NODIG?', description: `Dit bijzondere bier geeft ons een prachtige gelegenheid om een moment te creëren waarin we open en accepterend leren omgaan met tegenslag en mislukkingen. Want volgens Remko van der Drift, Faalkundige en directeur van Het Instituut voor Faalkunde, ontstaat menselijk lijden doordat we als mens zo hard bezig zijn om tegenslag en mislukkingen te vermijden.<br><br> In onze zoektocht genaamd ‘leven’ piekeren we over het verleden, klagen we over het nu of maken we ons zorgen over de toekomst. We denken dat het leven pas beter wordt als er geen gedoe meer is. We denken ons comfortabel te moeten voelen, altijd en overal, en zijn daarbij kundig in onszelf weg te leiden van ongemak.<br><br> Somber door de coronacrisis? Koop dan bijvoorbeeld een nieuwe iPhone! We denken dan bij de aanschaf: ‘Nu ben ik weer gelukkig.’ Maar na twee dagen is de roes alweer wegge-appt en moeten we op zoek naar nieuwe geluks- en plezierveroorzakers.<br><br> Dit rusteloos hunkeren naar volmaaktheid en het vermijden van het ongemak, dat werkt natuurlijk niet. Want het leven is niet perfect, het verandert constant. Het geeft ons leuke én moeilijke dingen. Ieder mens krijgt te maken met nare emoties, ziektes en de dood. Niemand had een jaar geleden kunnen voorspellen dat de hele wereld nu al maanden in een pandemie zou zitten. En toch is deze tegenslag de werkelijkheid van het moment waar we mee te dealen hebben.<br><br> Het lijden dat we ervaren ontstaat dus niet zozeer uit de tegenslag zelf, maar vooral door de onrust die we in ons hoofd creëren. Onrust die ontstaat door het smachten naar plezier, geluk en betere tijden. Door het willen bestrijden van de smart. Het maakt ons neurotisch afhankelijk van comfort en geluk, en geeft ons hopeloze waanbeelden over hoe ons gelukkige leven eruit moet zien.<br><br> Om uit dit lijden te komen, om echt voluit te kunnen leven, zullen we het willen vermijden van tegenslag moeten opgeven. En de waanbeelden van perfectie en geluk als illusies moeten ontmaskeren. Tegenslag is geen straf, geluk is geen beloning.<br><br> En daarvoor is moed nodig. Moed om er niet meer van weg te lopen. Moed om ‘het beest’ recht in zijn bek aan te kijken. Moed om tegenslag te kunnen accepteren. Volkschampagne is een ondersteunend levenselixer waarmee we deze moed kunnen indrinken. Niet om de ellende weg te drinken. Maar juist om een bijzonder ondersteunend moment te creëren aan het eind van een jaar vol tegenspoed. Want met dit brouwsel kunnen we elkaar helpen om ons falend bestaan te omarmen: door het te vieren en elkaar daarmee te troosten.<br><br> Troosten op de vergankelijkheid van het bestaan. Troosten op de donkere kanten van het leven. Troosten op de veerkrachtigheid die ons mens maakt. Troosten op falen en opstaan.<br><br> Mislukkingen en tegenslag kunnen pijn doen – en wij kunnen het aan. Troost.<br><br> <img alt="Remko persfoto" src=${Remko}><br><br>Remko van der Drift, Faalkundige en directeur van Het Instituut voor Faalkunde ` },
    { title: 'WAAR KAN IK HET BIER KOPEN?', description: 'Het schaarse bier is gewoon moeilijk te verkrijgen, alleen te koop online met een unieke koopcode die via Volkschampagne Ambassadeurs wordt verspreid. Deze Volkschampagne Ambassadeurs vormen een dwarsdoorsnede van onze maatschappij: gewone mensen, ondernemers, freelancers, millennials en BN’ers, zoals <Insert naam> en <Insert naam>, die doorgaans baden in succes, maar door de pandemie bar weinig invloed hebben gehad op 2020. Met een koopcode kun je het bier kopen via Brouwerij Homeland <Link webshop>' },
    { title: 'WAT GEBEURT ER MET DE OPBRENGST VAN DE BIERVERKOOP?', description: 'Als we winst maken gaat al onze winst naar een goed doel. Wij dachten aan de Elfstedentocht. Zelfs al is het koud genoeg deze winter, dan zal het alsnog niet doorgaan. Het jammere is: ze nemen geen donaties aan. Dat past wel weer bij het verhaal achter ons treurbier: het is nogal een lauwe lijdensweg.' },
    { title: 'HOE WORD IK VOLKSCHAMPAGNE AMBASSADEUR?', description: 'Vind jij dat jij ook Volkschampagne Ambassadeur bent? Stuur ons dan een DM op Instagram of email naar <a href="mailto:nietstevieren@Volkschampagne.nl">nietstevieren@Volkschampagne.nl</a> en vertel ons wat jij niet te vieren hebt.' },
    { title: 'WIE HEEFT HET ETIKET ONTWORPEN?', description: 'Het etiket is ontworpen door <a href="https://www.trobbies.nl/" >Trobbies</a> een tatoeëerder en illustrator uit Den Haag. De eerste 150 bestellingen krijgen een gelimiteerde zakdoek van zijn hand. Ook geeft hij een tatoeage weg van het Volkschampagne-logo aan degene die het minst te vieren heeft gehad in 2020. Dus houd zijn <a href="https://www.instagram.com/trobbies/?hl=en">Instagram</a> in de gaten!' },
    { title: 'HEBBEN JULLIE EEN PERSMAP?', description: 'Yes, die staat <a href="https://www.dropbox.com/sh/t3a5ul1e5zz1ol0/AAD_3k9ukr2fN662_RX7Yk6xa?dl=0">hier</a>. Voor persaanvragen kun je bellen met Malou van Soest, <a href="mailto:malou@iconicstudios.amsterdam">malou@iconicstudios.amsterdam</a> +31 6 81113392.' },
    { title: 'GAAT HET ‘AAN ALLES KOMT EEN EIND’ VOLKSCHAMPAGNE FEEST DOOR?', description: 'Vanwege de aangescherpte Covid-19-regels is het ‘aan alles komt een eind’ Volkschampagne oudejaarsfeest tot onze grote spijt afgelast. Tickets kunnen helaas niet omgewisseld of gerestitueerd worden.' },
    { title: 'HOE KAN IK MEEDOEN AAN HET WERELD RECORD SOLONAISE?', description: 'Op 31 december 2020 gaan wij een officiële poging doen om het wereldrecord Solonaise te verbreken door met elkaar te Troosten. Meld jezelf aanwezig op de <a href="https://www.facebook.com/events/1043541009453454">event pagina</a> en wij zullen op de dag van de recordpoging een zoom-link delen.' },
    { title: 'HOE KAN IK MEEDOEN AAN DE IN HOME, OUT OF HOME CAMPAGNE?', description: 'Download deze beelden <a href="https://www.dropbox.com/sh/3j2l6pecr871obk/AAA6gz8LR6va9p1VIbedNLNKa?dl=0">hier</a> en vervang een fotolijstje in je eigen huis of hijack een fotolijstje bij iemand anders, maak een foto en tag @Volkschampagne #Nietstevieren #inhomeoutofhome op Instagram. Niet veel mensen weten dat dit de enige manier is om direct een koopcode in je DM te ontvangen.' },
    { title: 'WAT IS DE ZIN VAN HET LEVEN?', description: 'De zin van het leven is een diepere betekenis waar het bestaan mee beladen zou zijn volgens bepaalde visies. Het concept stelt de waarde van de periode tussen geboorte en dood centraal en eventueel ook het spiritueel bestaan dat de lichamelijke dood overstijgt. Wat ons betreft is dat te kunnen dromen zonder schuld.' },
    { title: 'JE VOUDRAIS FAIRE UNE RÉCLAMATION?', description: 'Vous pouvez envoyer un e-mail à <a href="mailto:nietstevieren@Volkschampagne.nl">nietstevieren@Volkschampagne.nl</a> ou appeler notre ligne des plaints Bart Elshof +31 6 54384491' },
  ];

  return (
    <StyledFaq>
      <Title>FAQ</Title>
      {data.map(({ title, description }) => {
        const [open, setOpen] = useState(false);

        const handleOnClick = () => {
          setOpen(!open);
        };

        return (
          <Item key={title}>
            <Atitle onClick={() => handleOnClick()}>{title}</Atitle>
            <Text display={open}>{parse(description)}</Text>
          </Item>
        );
      })}
    </StyledFaq>
  );
};

const StyledFaq = styled.div`
  position: relative;
  margin: 0 ${mobileVw(10)};
  text-align: center;

  @media (min-width: ${desktopBreakpoint}) {
    margin: 0 ${desktopVw(108)};
  }
`;

const Title = styled.h2`
  font-family: ${fonts.black};
  color: ${colors.title};
  font-size: ${mobileVw(25)};
  margin: 0 0 ${mobileVw(15)} 0;

  @media (min-width: ${desktopBreakpoint}) {
    font-size: ${desktopVw(25)};
    margin: 0 0 ${desktopVw(15)} 0;
  }
`;

const Text = styled.p`
  font-size: ${mobileVw(16)};
  line-height: ${mobileVw(18)};
  font-family: ${fonts.regular};
  display: ${(props) => (props.display ? 'block' : 'none')};
  width: auto;
  margin: 0 ${mobileVw(10)};
  padding: 0 0 ${mobileVw(15)} 0;
  
  @media (min-width: ${desktopBreakpoint}) {
    font-size: ${desktopVw(16)};
    line-height: ${desktopVw(18)};
    width: ${desktopVw(507)};
    padding: 0 0 ${desktopVw(15)} 0;
    margin: 0 auto;
  }
`;

const Item = styled.div`  
  background: ${colors.pink};
  margin: 0 0 ${mobileVw(10)} 0;
  border: ${mobileVw(2)} solid ${colors.black};

  @media (min-width: ${desktopBreakpoint}) {
    margin: 0 0 ${desktopVw(18)} 0;
    border: ${desktopVw(2)} solid ${colors.black};
  }
`;

const Atitle = styled.button`
  color: ${colors.title};
  font-size: ${mobileVw(16)};
  font-family: ${fonts.black};
  line-height: ${mobileVw(20)};
  padding: ${mobileVw(7)} ${mobileVw(10)};
  background: transparent;
  border: none;
  width: 100%;
  outline: none;
  cursor: pointer;

  @media (min-width: ${desktopBreakpoint}) {
    font-size: ${desktopVw(23)};
    line-height: ${desktopVw(29)};
    padding: ${desktopVw(7)} 0;
  }
`;

export default Faq;
