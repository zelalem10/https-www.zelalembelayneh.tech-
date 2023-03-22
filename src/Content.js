// import images
import Hero_person from "./assets/images/Hero/person.png";

import java from "./assets/images/Skills/java.png";
import aws from "./assets/images/Skills/aws.png";
import Spring from "./assets/images/Skills/Spring.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import mySQL from "./assets/images/Skills/mySql.png";
import html from "./assets/images/Skills/HTML.png";
import css from "./assets/images/Skills/CSS3.png";
import js from "./assets/images/Skills/JS.png";

import services_logo1 from "./assets/images/Services/logo1.png";


import Booking from "./assets/images/Projects/ET-Booking.jpg";
import shebamiles from "./assets/images/Projects/shebamiles.jpg";
import ethiopianpassport from "./assets/images/Projects/ET-Booking.jpg";
import person_project from "./assets/images/Projects/person.png";

import Michael from "./assets/images/Testimonials/Michael.jpg";
import Digafe from "./assets/images/Testimonials/dgafe.jpg";
import Alazar from "./assets/images/Testimonials/alazar.jpg";


// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Software Engineer",
    firstName: "Zelalem",
    LastName: "Tsige",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "5",
        text: "Years of Experinse in Web development",
      },
      {
        count: "10+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY SKILLS",
    skills_content: [
      {
        name: "Java",
        para: "Lorem ipsum text  dummy",
        logo: java,
      },
    
      {
        name: "Spring Framworks",
        para: "Lorem ipsum text  dummy",
        logo: Spring,
      },
      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "HTML5",
        para: "Lorem ipsum text  dummy",
        logo: html,
      },

      {
        name: "CSS3",
        para: "Lorem ipsum text  dummy",
        logo: css,
      },
      {
        name: "JavaScript",
        para: "Lorem ipsum text  dummy",
        logo: js,
      },
      {
        name: "Node js",
        para: "Lorem ipsum text  dummy",
        logo: nodejs,
      },

      {
        name: "AWS",
        para: "Lorem ipsum text  dummy",
        logo: aws,
      },
      {
        name: "mySQL",
        para: "Lorem ipsum text  dummy",
        logo: mySQL,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Frontend ReactJs Developer",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "Java Backend Developer",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "Full Stack Developer",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Ethiopian Airlines Booking website",
        image: Booking,
        link: "https://www.ethiopianairlines.com"
      },
      {
        title: "Ethiopian Shebamiles",
        image: shebamiles,
        link:"https://shebamiles.ethiopianairlines.com"
      },
      {
        title: "Ethiopian Passport systems",
        image: ethiopianpassport,
        link: "https://www.ethiopianpassportservices.gov.et/#/"
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "Colleague Testimonials",
    testimonials_content: [
      {
        review:
          "“Zelalem did an outstanding job in my Web Applications Programming course in October of 2022 at MIU. He had an excellent midterm and an almost flawless final exam. I found him super easy to work with, always on time for meetings and clear in all communications. It was great having him in class and I'm certain he'll do well wherever he chooses to go next.”",
        img: Michael,
        name: "Michael Zijlstra (Assistant Professor at MIU)",
      },
   
      {
        review:
          "“I have known Zelalem since the beginning of his career in Ethiopian airlines. He is an exceptional developer who possesses all the skills one would want in an excellent software developer. he masters the top programming languages. He was a great resource to my company and my clients. He did an incredible job on all projects, making timely deliveries and helping me nurture long-term relationships with my clients. His work is always top-notch, and he is always welcoming to feedback and making improvements. Plus, He is self-motivated and a great team player. I can only recommend him for any similarly complex project!”",
        img: Digafe,
        name: "Digafe Urgecha (Team Leader Project Management Office at Ethiopian Airlines, Project Manager)",
      },
      {
        review:
          "“Zelalem is passionate about writing code and solving clients’ problems through the development of creative and innovative software. He can thoroughly focus on every project and is not easily distracted.He is dedicated to providing quality work and strives to make his programs as user-friendly as possible understanding that not everyone is an expert. I found him super easy to work with, always on time for work, and clear in all communications. It was great having him as a colleague and I'm certain he'll do well wherever he chooses to go next.”",
        img: Alazar,
        name: "Alazar Yilma (software Engineer at Ethiopian Airlines)",
      },

    ],
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "zelalembe10@gmail.com",
        icon: GrMail,
        link: "mailto:zelalembe1010@gmail.com",
      },
      {
        text: "+1-641-819-1421",
        icon: MdCall,
        link: "https://wa.me/+16418191421",
      },
      {
        text: "Linkedin",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/zelalem-belayneh/",
      },
      {
        text: "Github",
        icon: BsGithub,
        link: "https://github.com/zelalem10",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2023",
  },
};
