import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "MERN stack",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
 
  {
    name: "React JS",
    icon: reactjs,
  },
 
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
 
  {
    name: "git",
    icon: git,
  },
  
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Malla Reddy Engineering collage",
    company_name: "Hyderabad",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2024",
    points: [
      "Computer Science and Egineering - Cyber security",
      "CGPA:8.18",
      
    ],
  },
  {
    title: "Bharath junior college",
    company_name: "Madhira,Telangana",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2018 - April 2020",
    points: [
      "Intermediate-MPC ",
      "95.8(Percentage)",
      
    ],
  },
  {
    title: "Bharath Techno School",
    company_name: "Madhira,Telangana",
    icon: shopify,
    iconBg: "#383E56",
    date: "March-2018",
    points: [
      "Secondary School Of Certificate",
       "CGPA:8.8",
    ],
  },
  {
    title: "NxtWave Disruptive Technologies",
    company_name: "Full stack Developer",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Present",
    points: [
      "Developing and maintaining web applications using FullStack and other related technologies.",
     
    ],
  },
];

const testimonials = [
  {
    testimonial:
      " Industry Ready Certification in Full-stack Development",
    name: "Aug’22-ongoing ",
    designation: "",
    company: "NxtWave Disruptive Technologies",
    image: "https://edtimes.in/wp-content/uploads/2021/09/NxtWave-Logo-1068x712.png",
  },
  {
    testimonial:
      "Introduction to programming using Python",
    name: "April-2022",
    designation: "",
    company: "Microsoft",
    image: "https://www.mycomputercareer.edu/wp-content/uploads/2020/04/How-to-Get-a-Microsoft-Technology-Associate-MTA-Networking-Certificate.png",
  },
  {
    testimonial:
      "Data Structure using python",
    name: "Jan-2022",
    designation: "",
    company: "University of Michigan",
    image: "https://www.ranklogos.com/wp-content/uploads/2012/06/university-of-michigan.jpg",
  },
];

const projects = [
  {
    name: "E commerce",
    description:
      " Developed a E commerce website where user can login and order a products the premium user can have the access of extra benfits",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Jwt",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Typing test",
    description:
      "Developed an application which measuring time he took to complete given paragraph  Maintained timer by using APIs setTimeInterval, clearTimeInterval and Updated timer in the UI dynamically using JavaScript DOM operations for every 1 second.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Books Api Authentication",
    description:
      "A complete Backend Development Project designed Database and Rest API for Books  If anyone want to use this API they have to register if the user is authorized they can use this API and then user details stored in the Database",
    tags: [
      {
        name: "node js",
        color: "blue-text-gradient",
      },
      {
        name: "sqlite",
        color: "green-text-gradient",
      },
      {
        name: "third party packages",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
