import Welcome from '../../components/slides/welcome/Welcome';
import XPlusTen from '../../components/slides/assignments/x-plus-ten/XPlusTen';
import XPlusTenCode from '../../components/slides/assignments/x-plus-ten-code/XPlusTenCode';
import WhoAreWe from '../../components/slides/who-are-we/WhoAreWe';
import ContentPurpose from '../../components/slides/content-purpose/ContentPurpose';
import OurBackground from '../../components/slides/our-background/OurBackground';
import OurFocus from '../../components/slides/our-focus/OurFocus';
import InspirationBrilliant from '../../components/slides/inspiration-brilliant/InspirationBrilliant';
import GamificationPurpose from '../../components/slides/gamification-purpose/GamificationPurpose';
import InspirationCodingPirates from '../../components/slides/inspiration-coding-pirates/InspirationCodingPirates';
import TeamingUp from '../../components/slides/teaming-up/TeamingUp';
import Collaboration from '../../components/slides/constallations/Collaboration';
import ITUImage from '../../assets/ITU.jpg';
import codingPirates from '../../assets/coding_pirates.png';
import ContactInfo from '../../components/slides/contact-info/ContactInfo';
import OurFramework from '../../components/slides/our-framework/OurFramework';

type ISlide = {
  title?: string;
  subtitle?: string;
  content: JSX.Element;
  backgroundImage?: {
    src: string;
    opacity?: number;
  };
};

const slides: ISlide[] = [
  {
    title: 'Vi præsenterer',
    subtitle: 'Et opgaveframework som kombinere matematik og programmering',
    content: <Welcome />,
  },
  {
    title: 'Hvem er vi?',
    subtitle: 'Et nystartet indie udviklingsfirma',
    content: <WhoAreWe />,
  },
  {
    title: 'Vores baggrund',
    backgroundImage: {
      src: ITUImage,
      opacity: 0.25,
    },
    content: <OurBackground />,
  },
  {
    title: 'Vores fokus',
    backgroundImage: {
      src: ITUImage,
      opacity: 0.25,
    },
    content: <OurFocus />,
  },
  {
    title: 'Idéen: Samspil mellem matematik og programmering',
    subtitle: 'Ikke abstrakt, men praktisk og virkelighedsnært\n\n\n\n\n> Eleven lærer på dansk, men koden kan auto-oversættes til Node.js',
    content: <ContentPurpose className='mt-3' />,
  },
  {
    title: 'Konstruer en funktion',
    subtitle: 'som er ens med den blå streg',
    content: <XPlusTen />,
  },
  {
    title: 'Programmér en funktion',
    subtitle: 'som fortæller hvorvidt koordinatet (x,y) er et gyldigt punkt på grafen f(x)=x+10 fra før',
    content: <XPlusTenCode />,
  },
  {
    title: 'Inspireret af Brilliant',
    subtitle: 'Vi måler os selv efter deres kvalitetsniveau',
    content: <InspirationBrilliant />,
  },
  {
    title: 'Vores framework faciliterer',
    content: <OurFramework />,
  },
  {
    title: 'Et anvendelseseksempel: Læringsspil',
    subtitle: 'En underholdende oplevelse der vækker interesse og spænding',
    content: <GamificationPurpose />,
  },
  {
    title: 'Inspireret af Coding Pirates oplevelsen',
    subtitle: 'De har kæmpe succes med at gøre læring spændende for børn',
    backgroundImage: {
      src: codingPirates,
      opacity: 0.6,
    },
    content: <InspirationCodingPirates />,
  },
  {
    title: 'Vi ønsker en samarbejdspartner',
    subtitle: 'Der vil skabe fagligt indhold gennem vores framework',
    content: <TeamingUp />,
  },
  {
    title: 'Samarbejd med os',
    content: <Collaboration />,
  },
  {
    title: 'Fang os på',
    content: <ContactInfo />,
  },
];
export default slides;
