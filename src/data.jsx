import { v4 as uuid } from "uuid";
import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaDiceD6,
  FaPaintBrush,
} from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { BsBuildingFillLock } from "react-icons/bs";

import ChinoyTv from "./assets/chinoyTv.webp";
import OmniPayApp from "./assets/omnipayApp.webp";
import TDB from "./assets/the-digital-banker.webp";
import SDMS from "./assets/sdms.webp";
import ComfortCasket from "./assets/comfortcasket.webp";
import Paranaque from "./assets/paranaque.webp";
import PartnerPortal from "./assets/partnerportal.webp";
import ReactPic from "./assets/react.webp";
import Nike from "./assets/nike.webp";
import ComfySloth from "./assets/comfySloth.webp";
import Jobify from "./assets/jobify.webp";
import FastReactPizza from "./assets/fast-react-pizza.webp";
import BPS from "./assets/bps.webp";
import Voam from "./assets/voam.webp";
import SuccessfulResume from "./assets/successful-resume.webp";
import Santoku from "./assets/santoku.webp";
import Smartzhongyi from "./assets/smartzhongyi.webp";
import Bonjour from "./assets/bonjour.webp";
import Durian from "./assets/durian.webp";
import SmmileWpPackage from "./assets/smmile-wordpress-package.webp";
import DiviLightbox from "./assets/divi-lightbox.webp";
import DiviVideoLightbox from "./assets/divi-video-lightbox.webp";
import FinancityHomeLoan from "./assets/financity-homeloan.webp";
import PsgDrb from "./assets/psg-drb.webp";
import SelfDrop from "./assets/selfdrop.webp";
import SuperSale from "./assets/super-sale.webp";
import HotbitPartnership from "./assets/hotbit-partnership.webp";
import StoxPartnership from "./assets/stox-partnership.webp";
import WiphServices from "./assets/wiph-services.webp";

import Theme10 from "./assets/dark-green.png";
import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Default from "./assets/default.png";

export const links = [
  {
    id: uuid(),
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: uuid(),
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: uuid(),
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: uuid(),
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: uuid(),
    title: "First Name : ",
    description: "Omar",
  },

  {
    id: uuid(),
    title: "Last Name : ",
    description: "Danga",
  },

  {
    id: uuid(),
    title: "Age : ",
    description: "31",
  },

  {
    id: uuid(),
    title: "Nationality : ",
    description: "Filipino",
  },
  {
    id: uuid(),
    title: "Email : ",
    description: "omardanga@yahoo.com",
  },

  {
    id: uuid(),
    title: "Country : ",
    description: "Philippines",
  },

  {
    id: uuid(),
    title: "Phone : ",
    description: "+63 970 100 7032",
  },
  {
    id: uuid(),
    title: "Languages : ",
    description: "Tagalog, English",
  },
  {
    id: uuid(),
    title: "Skype : ",
    description: "xhacker14x1",
  },
];

export const stats = [
  {
    id: uuid(),
    no: "10+",
    title: "Years of <br /> Experience",
  },
];

export const resume = [
  {
    id: uuid(),
    category: "experience",
    icon: <FaBriefcase />,
    year: "Mar 2020 - PRESENT",
    title: "Web Developer / Designer<span> SMMILE Digital</span>",
    desc: "Singapore (home-based)",
  },

  {
    id: uuid(),
    category: "experience",
    icon: <FaBriefcase />,
    year: "Dec 2018 - Feb 2020",
    title: "Web Developer / Designer<span> Web Innovation PH</span>",
    desc: "Ortigas, Philippines",
  },

  {
    id: uuid(),
    category: "experience",
    icon: <FaBriefcase />,
    year: "Jun 2016 - Nov 2018",
    title: "Front-End Developer <span> Bastion Payment Systems </span>",
    desc: "Makati, Philippines",
  },
  {
    id: uuid(),
    category: "experience",
    icon: <FaBriefcase />,
    year: "May 2013 - Mar 2016",
    title: "Web & Graphic Designer <span> Asiatravel </span>",
    desc: "Ortigas, Philippines",
  },
  {
    id: uuid(),
    category: "education",
    icon: <FaGraduationCap />,
    year: "Jun 2009 - Apr 2013",
    title: "BSIT <span> Our Lady of Fatima University </span>",
    desc: "Antipolo, Philippines",
  },

  {
    id: uuid(),
    category: "education",
    icon: <FaGraduationCap />,
    year: "Forgot the dates :(",
    title: "High School <span> San Isidro National High School </span>",
    desc: "Antipolo, Philippines",
  },

  {
    id: uuid(),
    category: "education",
    icon: <FaGraduationCap />,
    year: "Forgot the dates :(",
    title: "Elementary School <span> San Isidro National High School </span>",
    desc: "Antipolo, Philippines",
  },
];

export const skills = [
  {
    id: uuid(),
    title: "HTML",
    percentage: "90",
  },
  {
    id: uuid(),
    title: "CSS",
    percentage: "87",
  },
  {
    id: uuid(),
    title: "Bootstrap",
    percentage: "82",
  },
  {
    id: uuid(),
    title: "Material UI",
    percentage: "80",
  },
  {
    id: uuid(),
    title: "Tailwind CSS",
    percentage: "83",
  },
  {
    id: uuid(),
    title: "Javascript",
    percentage: "78",
  },
  {
    id: uuid(),
    title: "React JS",
    percentage: "80",
  },
  {
    id: uuid(),
    title: "Node JS / Express JS",
    percentage: "72",
  },
  {
    id: uuid(),
    title: "MongoDB",
    percentage: "70",
  },
  {
    id: uuid(),
    title: "PHP",
    percentage: "76",
  },
  {
    id: uuid(),
    title: "MySQL",
    percentage: "74",
  },
  {
    id: uuid(),
    title: "Wordpress",
    percentage: "85",
  },
  {
    id: uuid(),
    title: "Elementor",
    percentage: "83",
  },
  {
    id: uuid(),
    title: "WooCommerce",
    percentage: "80",
  },
  {
    id: uuid(),
    title: "GIT / GitHub",
    percentage: "78",
  },
  {
    id: uuid(),
    title: "cPanel",
    percentage: "75",
  },
  {
    id: uuid(),
    title: "Adobe Photoshop",
    percentage: "85",
  },
  {
    id: uuid(),
    title: "Adobe Illustrator",
    percentage: "70",
  },
  {
    id: uuid(),
    title: "Adobe XD",
    percentage: "80",
  },
];

export const portfolio = [
  {
    id: uuid(),
    img: PartnerPortal,
    category: "Web Apps",
    title: "Bevootech Portal",
    details: [
      {
        icon: <FaDiceD6 />,
        desc: "Web Application",
      },
      {
        icon: <FaCode />,
        desc: "<span>react js</span><span>context api</span><span>rest api</span><span class='br'></span><span>material ui v4</span>",
      },
      {
        icon: <BsBuildingFillLock />,
        desc: "<div>SMMILE Digital<div>",
      },
      {
        icon: <FiExternalLink />,
        desc: "<a href='https://partnerportal.bevootech.com/#' target='_blank' classname='text-accent'>View Here</a>",
      },
    ],
  },

  {
    id: uuid(),
    img: ComfySloth,
    category: "Web Apps",
    title: "Comfy Sloth",
    details: [
      {
        icon: <FaDiceD6 />,
        desc: "Web Application",
      },
      {
        icon: <FaCode />,
        desc: "<span>react js</span><span>context api</span><span>rest api</span><span class='br'></span><span>styled components</span>",
      },
      {
        icon: <BsBuildingFillLock />,
        desc: "<div>Udemy Course<div>",
      },
      {
        icon: <FiExternalLink />,
        desc: "<a href='https://comfy-sloth-omar.netlify.app/' target='_blank' classname='text-accent'>View Here</a>",
      },
    ],
  },
  {
    id: uuid(),
    img: Jobify,
    category: "Web Apps",
    title: "Jobify",
    details: [
      {
        icon: <FaDiceD6 />,
        desc: "Web Application",
      },
      {
        icon: <FaCode />,
        desc: "<span>react js</span><span>react query</span><span>rest api</span><span class='br'></span><span>recharts</span><span>styled components</span>",
      },
      {
        icon: <BsBuildingFillLock />,
        desc: "<div>Udemy Course<div>",
      },
      {
        icon: <FiExternalLink />,
        desc: "<a href='https://jobify-app-omar.onrender.com/' target='_blank' classname='text-accent'>View Here</a>",
      },
    ],
  },
  {
    id: uuid(),
    img: FastReactPizza,
    category: "Web Apps",
    title: "Fast React Pizza",
    details: [
      {
        icon: <FaDiceD6 />,
        desc: "Web Application",
      },
      {
        icon: <FaCode />,
        desc: "<span>react js</span><span>redux toolkit</span><span>rest api</span><span class='br'></span><span>tailwind css</span>",
      },
      {
        icon: <BsBuildingFillLock />,
        desc: "<div>Udemy Course<div>",
      },
      {
        icon: <FiExternalLink />,
        desc: "<a href='https://fast-reat-pizza-omar.netlify.app/' target='_blank' classname='text-accent'>View Here</a>",
      },
    ],
  },
  {
    id: uuid(),
    img: Smartzhongyi,
    category: "Web Apps",
    title: "Smartzhongyi",
    details: [
      {
        icon: <FaDiceD6 />,
        desc: "Web Application",
      },
      {
        icon: <FaCode />,
        desc: "<span>php/mysql</span><span>html/css</span><span>javascript</span>",
      },
      {
        icon: <BsBuildingFillLock />,
        desc: "<div>SMMILE Digital<div>",
      },
      {
        icon: <FiExternalLink />,
        desc: "<a href='https://smartzhongyi.com/en/' target='_blank' classname='text-accent'>View Here</a>",
      },
    ],
  },
  {
    id: uuid(),
    img: TDB,
    category: "Websites",
    title: "The Digital Banker",
    details: [
      {
        icon: <FaDiceD6 />,
        desc: "Website",
      },
      {
        icon: <FaCode />,
        desc: "<span>wordpress</span><span>elementor</span><span>html/css</span>",
      },
      {
        icon: <BsBuildingFillLock />,
        desc: "<div>SMMILE Digital<div>",
      },
      {
        icon: <FiExternalLink />,
        desc: "<a href='https://thedigitalbanker.com/' target='_blank' classname='text-accent'>View Here</a>",
      },
    ],
  },
  {
    id: uuid(),
    img: SDMS,
    category: "Websites",
    title: "SDMS",
    details: [
      {
        icon: <FaDiceD6 />,
        desc: "Website",
      },
      {
        icon: <FaCode />,
        desc: "<span>wordpress</span><span>elementor</span><span>woocommerce</span><span classname='br'></span><span>html/css</span>",
      },
      {
        icon: <BsBuildingFillLock />,
        desc: "<div>SMMILE Digital<div>",
      },
      {
        icon: <FiExternalLink />,
        desc: "<a href='https://sunnydms.com/' target='_blank' classname='text-accent'>View Here</a>",
      },
    ],
  },
  {
    id: uuid(),
    img: ComfortCasket,
    category: "Websites",
    title: "Comfort Casket",
    details: [
      {
        icon: <FaDiceD6 />,
        desc: "Website",
      },
      {
        icon: <FaCode />,
        desc: "<span>wordpress</span><span>elementor</span><span>html/css</span>",
      },
      {
        icon: <BsBuildingFillLock />,
        desc: "<div>SMMILE Digital<div>",
      },
      {
        icon: <FiExternalLink />,
        desc: "<a href='https://comfortcasket.com.sg/' target='_blank' classname='text-accent'>View Here</a>",
      },
    ],
  },

  {
    id: uuid(),
    img: Santoku,
    category: "Websites",
    title: "Santoku BASF",
    details: [
      {
        icon: <FaDiceD6 />,
        desc: "Website",
      },
      {
        icon: <FaCode />,
        desc: "<span>wordpress</span><span>elementor</span><span>html/css</span>",
      },
      {
        icon: <BsBuildingFillLock />,
        desc: "<div>SMMILE Digital<div>",
      },
      {
        icon: <FiExternalLink />,
        desc: "<a href='https://www.santokubasf.com.sg/' target='_blank' classname='text-accent'>View Here</a>",
      },
    ],
  },
  {
    id: uuid(),
    img: SuccessfulResume,
    category: "Websites",
    title: "Successful Resume",
    details: [
      {
        icon: <FaDiceD6 />,
        desc: "Website",
      },
      {
        icon: <FaCode />,
        desc: "<span>wordpress</span><span>elementor</span><span>html/css</span>",
      },
      {
        icon: <BsBuildingFillLock />,
        desc: "<div>SMMILE Digital<div>",
      },
      {
        icon: <FiExternalLink />,
        desc: "<a href='https://successfulresumessingapore.com/' target='_blank' classname='text-accent'>View Here</a>",
      },
    ],
  },
  {
    id: uuid(),
    img: Voam,
    category: "Websites",
    title: "VOAM",
    details: [
      {
        icon: <FaDiceD6 />,
        desc: "Website",
      },
      {
        icon: <FaCode />,
        desc: "<span>wordpress</span><span>elementor</span><span>html/css</span>",
      },
      {
        icon: <BsBuildingFillLock />,
        desc: "<div>SMMILE Digital<div>",
      },
      {
        icon: <FiExternalLink />,
        desc: "<a href='https://voam.co/' target='_blank' classname='text-accent'>View Here</a>",
      },
    ],
  },
  {
    id: uuid(),
    img: Paranaque,
    category: "Websites",
    title: "Paranaque City Gov",
    details: [
      {
        icon: <FaDiceD6 />,
        desc: "Website",
      },
      {
        icon: <FaCode />,
        desc: "<span>wordpress</span><span>elementor</span><span>html/css</span>",
      },
      {
        icon: <BsBuildingFillLock />,
        desc: "<div>Web Innovation PH<div>",
      },
      {
        icon: <FiExternalLink />,
        desc: "<a href='https://paranaquecity.gov.ph/' target='_blank' classname='text-accent'>View Here</a>",
      },
    ],
  },
  {
    id: uuid(),
    img: ChinoyTv,
    category: "Mobile Apps",
    title: "ChinoyTV Mobile",
    details: [
      {
        icon: <FaDiceD6 />,
        desc: "Mobile Application",
      },
      {
        icon: <FaCode />,
        desc: "<span>angular js</span><span>ionic</span><span>soap api</span><span classname='br'></span><span>html/css</span>",
      },
      {
        icon: <BsBuildingFillLock />,
        desc: "<div>Bastion Payment Systems<div>",
      },
      {
        icon: <FiExternalLink />,
        desc: "<a href='https://play.google.com/store/apps/details?id=com.omnipay.chinoytv' target='_blank' classname='text-accent'>View Here</a>",
      },
    ],
  },
  {
    id: uuid(),
    img: OmniPayApp,
    category: "Mobile Apps",
    title: "OmniPay Mobile",
    details: [
      {
        icon: <FaDiceD6 />,
        desc: "Mobile Application",
      },
      {
        icon: <FaCode />,
        desc: "<span>angular js</span><span>ionic</span><span>soap api</span><span classname='br'></span><span>html/css</span>",
      },
      {
        icon: <BsBuildingFillLock />,
        desc: "<div>Bastion Payment Systems<div>",
      },
      {
        icon: <FiExternalLink />,
        desc: "<a href='https://play.google.com/store/apps/details?id=com.omnipay.mobile' target='_blank' classname='text-accent'>View Here</a>",
      },
    ],
  },

  {
    id: uuid(),
    img: BPS,
    category: "Websites",
    title: "BPS Website",
    details: [
      {
        icon: <FaDiceD6 />,
        desc: "Website",
      },
      {
        icon: <FaCode />,
        desc: "<span>html</span><span>bootstrap css</span><span>javascript</span>",
      },
      {
        icon: <BsBuildingFillLock />,
        desc: "<div>Bastion Payment Systems<div>",
      },
      {
        icon: <FiExternalLink />,
        desc: "<a href='https://www.bastionpaymentsystems.com/#' target='_blank' classname='text-accent'>View Here</a>",
      },
    ],
  },
  {
    id: uuid(),
    img: Nike,
    category: "Websites",
    title: "Nike",
    details: [
      {
        icon: <FaDiceD6 />,
        desc: "Website",
      },
      {
        icon: <FaCode />,
        desc: "<span>react js</span><span>tailwind css</span>",
      },
      {
        icon: <BsBuildingFillLock />,
        desc: "<div>YouTube Tutorial<div>",
      },
      {
        icon: <FiExternalLink />,
        desc: "<a href='https://nike-omar.netlify.app/' target='_blank' classname='text-accent'>View Here</a>",
      },
    ],
  },
  {
    id: uuid(),
    img: ReactPic,
    category: "Websites",
    title: "Data.",
    details: [
      {
        icon: <FaDiceD6 />,
        desc: "Website",
      },
      {
        icon: <FaCode />,
        desc: "<span>react js</span><span>tailwind css</span>",
      },
      {
        icon: <BsBuildingFillLock />,
        desc: "<div>YouTube Tutorial<div>",
      },
      {
        icon: <FiExternalLink />,
        desc: "<a href='https://data-omar.netlify.app/' target='_blank' classname='text-accent'>View Here</a>",
      },
    ],
  },
  {
    id: uuid(),
    img: Bonjour,
    category: "Graphics",
    title: "Bonjour Ad",
    details: [
      {
        icon: <FaDiceD6 />,
        desc: "Ad Design",
      },
      {
        icon: <FaPaintBrush />,
        desc: "<span>Adobe Photoshop</span>",
      },
      {
        icon: <BsBuildingFillLock />,
        desc: "<div>SMMILE Digital<div>",
      },
    ],
  },
  {
    id: uuid(),
    img: Durian,
    category: "Graphics",
    title: "SG Durian King Ad",
    details: [
      {
        icon: <FaDiceD6 />,
        desc: "Ad Design",
      },
      {
        icon: <FaPaintBrush />,
        desc: "<span>Adobe Photoshop</span>",
      },
      {
        icon: <BsBuildingFillLock />,
        desc: "<div>SMMILE Digital<div>",
      },
    ],
  },

  {
    id: uuid(),
    img: DiviLightbox,
    category: "Graphics",
    title: "Divi Lightbox",
    details: [
      {
        icon: <FaDiceD6 />,
        desc: "Ad Design",
      },
      {
        icon: <FaPaintBrush />,
        desc: "<span>Adobe Photoshop</span>",
      },
      {
        icon: <BsBuildingFillLock />,
        desc: "<div>SMMILE Digital<div>",
      },
    ],
  },
  {
    id: uuid(),
    img: DiviVideoLightbox,
    category: "Graphics",
    title: "Divi Video Lightbox",
    details: [
      {
        icon: <FaDiceD6 />,
        desc: "Ad Design",
      },
      {
        icon: <FaPaintBrush />,
        desc: "<span>Adobe Photoshop</span>",
      },
      {
        icon: <BsBuildingFillLock />,
        desc: "<div>SMMILE Digital<div>",
      },
    ],
  },
  {
    id: uuid(),
    img: FinancityHomeLoan,
    category: "Graphics",
    title: "FinanCity Home Loan",
    details: [
      {
        icon: <FaDiceD6 />,
        desc: "Ad Design",
      },
      {
        icon: <FaPaintBrush />,
        desc: "<span>Adobe Photoshop</span>",
      },
      {
        icon: <BsBuildingFillLock />,
        desc: "<div>SMMILE Digital<div>",
      },
    ],
  },
  {
    id: uuid(),
    img: SmmileWpPackage,
    category: "Graphics",
    title: "SMMILE Wordpress Packages",
    details: [
      {
        icon: <FaDiceD6 />,
        desc: "Flyer Design",
      },
      {
        icon: <FaPaintBrush />,
        desc: "<span>Adobe Photoshop</span>",
      },
      {
        icon: <BsBuildingFillLock />,
        desc: "<div>SMMILE Digital<div>",
      },
    ],
  },
  {
    id: uuid(),
    img: PsgDrb,
    category: "Graphics",
    title: "PSG DRB",
    details: [
      {
        icon: <FaDiceD6 />,
        desc: "Flyer Design",
      },
      {
        icon: <FaPaintBrush />,
        desc: "<span>Adobe Photoshop</span>",
      },
      {
        icon: <BsBuildingFillLock />,
        desc: "<div>SMMILE Digital<div>",
      },
    ],
  },
  {
    id: uuid(),
    img: SelfDrop,
    category: "Graphics",
    title: "Join Selfdrop",
    details: [
      {
        icon: <FaDiceD6 />,
        desc: "Ad Design",
      },
      {
        icon: <FaPaintBrush />,
        desc: "<span>Adobe Photoshop</span>",
      },
      {
        icon: <BsBuildingFillLock />,
        desc: "<div>Web Innovation PH<div>",
      },
    ],
  },
  {
    id: uuid(),
    img: SuperSale,
    category: "Graphics",
    title: "Super Sale",
    details: [
      {
        icon: <FaDiceD6 />,
        desc: "Ad Design",
      },
      {
        icon: <FaPaintBrush />,
        desc: "<span>Adobe Photoshop</span>",
      },
      {
        icon: <BsBuildingFillLock />,
        desc: "<div>Web Innovation PH<div>",
      },
    ],
  },
  {
    id: uuid(),
    img: HotbitPartnership,
    category: "Graphics",
    title: "Hotbit Partnership",
    details: [
      {
        icon: <FaDiceD6 />,
        desc: "Ad Design",
      },
      {
        icon: <FaPaintBrush />,
        desc: "<span>Adobe Photoshop</span>",
      },
      {
        icon: <BsBuildingFillLock />,
        desc: "<div>Web Innovation PH<div>",
      },
    ],
  },
  {
    id: uuid(),
    img: StoxPartnership,
    category: "Graphics",
    title: "Stox Partnership",
    details: [
      {
        icon: <FaDiceD6 />,
        desc: "Ad Design",
      },
      {
        icon: <FaPaintBrush />,
        desc: "<span>Adobe Photoshop</span>",
      },
      {
        icon: <BsBuildingFillLock />,
        desc: "<div>Web Innovation PH<div>",
      },
    ],
  },
  {
    id: uuid(),
    img: WiphServices,
    category: "Graphics",
    title: "WIPH Services",
    details: [
      {
        icon: <FaDiceD6 />,
        desc: "Ad Design",
      },
      {
        icon: <FaPaintBrush />,
        desc: "<span>Adobe Photoshop</span>",
      },
      {
        icon: <BsBuildingFillLock />,
        desc: "<div>Web Innovation PH<div>",
      },
    ],
  },
];

export const themes = [
  {
    id: uuid(),
    img: Default,
    color: "hsl(42, 100%, 50%)",
  },
  {
    id: uuid(),
    img: Theme10,
    color: "hsl(70, 27%, 35%)",
  },
  {
    id: uuid(),
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },
  {
    id: uuid(),
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },
  {
    id: uuid(),
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },
  {
    id: uuid(),
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },
  {
    id: uuid(),
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: uuid(),
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },
  {
    id: uuid(),
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },
  {
    id: uuid(),
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },
];
export const hibi = [
  { id: uuid(), name: "apple", num: "09567110041" },
  { id: uuid(), name: "arriane", num: "09764252797" },
];
