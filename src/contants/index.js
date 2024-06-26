import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  viralprofit,
  seven11,
} from "../assets/icons";
import {
  apollo,
  hpicture,
  onemount,
  smartosc,
  waveasean,
  rikkei,
} from "../assets/images";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "PHP Developer",
    company_name: "Apollo English",
    icon: apollo,
    iconBg: "#accbe1",
    date: "Oct 2015 - Jan 2017",
    points: [
      "Development and maintenance of company system Sugar CRM",
      "Professional training to use the system for sales, admins, teachers",
      // "Technology used: PHP, Sugar CRM",
      // "Team size: 1 CTO, 2 PHP, 1 Database Engineer",
    ],
  },
  {
    title: "Fresher - Junior Frontend",
    company_name: "SmartOSC",
    icon: smartosc,
    iconBg: "#e1e1e1",
    date: "Jul 2017 - Sep 2019",
    points: [
      "Development and maintenance project for clients",
      "Slice HTML from XD and Zeplin files. Responsible for the website's responsive.",
    ],
  },
  {
    title: "Junior Frontend Angular",
    company_name: "Hanh Tinh (GLOBALTECH)",
    icon: hpicture,
    iconBg: "#000000",
    date: "Oct 2019 - Mar 2021",
    points: [
      "Develop a project for booking breakfast and lunch for internal company staff.",
      " Develop a Big Data project, collaborating with the QC team to fix UI errors.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "One Mount Consumer",
    icon: onemount,
    iconBg: "#e1e1e1",
    date: "Mar 2021 - Mar 2022",
    points: [
      "Develop a Q&A game application using the React.js library and integrate it into the VinID e-wallet",
      "Coordinate with the QC team to fix UI bugs on mobile devices.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "WAVE Asean",
    icon: waveasean,
    iconBg: "#e1e1e1",
    date: "Mar 2022 - Dec 2023",
    points: [
      "Lead a small team including Junior QC, Developers, and Designers",
      "Responsible for building the team, training, implementing Agile Scrum, and delivering company products.",
    ],
  },
  {
    title: "Senior Software Fullstack",
    company_name: "Rikkeisoft",
    icon: rikkei,
    iconBg: "#a60008",
    date: "Dec 2023 - Current",
    points: [
      "Develop and maintain the backend system for 7-11's Offline Engine solution in Hawaii, USA",
      "Develop, maintain, and fix frontend bugs for 7-11's Master Data Management System project along with the team in India. Execute test cases and write unit tests for features.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: viralprofit,
    theme: "btn-back-red",
    name: "Viral profit",
    description:
      "Develop systems for quizzes, checkout processes, viewing online course videos, and booking calendars, working with the Slack API. Position: Project Leader. Team size: 5 members. Tech stacks: React.js, Node.js, PostgreSQL, Vercel, Render.com.",
    link: "https://www.viralprofits.yt/quiz",
  },
  {
    iconUrl: seven11,
    theme: "btn-back-green",
    name: "Offline Engine",
    description:
      "Develop a system for handling promotional codes for stores. Implementing the code, whether online or offline, will synchronize with the latest promotional code data.",
    link: "none",
  },
  {
    iconUrl: seven11,
    theme: "btn-back-green",
    name: "Master Data Management System",
    description:
      "Develop, maintain, and fix frontend bugs for 7-11's Master Data Management System project along with the team in India.",
    link: "none",
  },
  {
    iconUrl: waveasean,
    theme: "btn-back-green",
    name: "Moa Group",
    description:
      "Building a dashboard system to manage the company, employees and members, channels, payments for the Chatting system.",
    link: "none",
  },
  {
    iconUrl: waveasean,
    theme: "btn-back-green",
    name: "IRROM",
    description:
      "Development of video calling feature in investor and presenter meeting.",
    link: "none",
  },
  {
    iconUrl: waveasean,
    theme: "btn-back-green",
    name: "Open chatting",
    description:
      "Develop web chat for travel sharing community in channels, groups and friends. Integrate into the project of restaurant booking, massage via chatbot.",
    link: "none",
  },
  {
    iconUrl: onemount,
    theme: "btn-back-yellow",
    name: "Q & A",
    description:
      "Develop a Q&A game application using the React.js library and integrate it into the VinID e-wallet. Coordinate with the QC team to fix UI bugs on mobile devices.",
    link: "none",
  },
  {
    iconUrl: hpicture,
    theme: "btn-back-yellow",
    name: "Hanh Tinh (GLOBALTECH)",
    description:
      "Develop a project for booking breakfast and lunch for the company's internal staff. Develop a Big Data project, collaborating with the QC team to fix UI errors.",
    link: "none",
  },
];
