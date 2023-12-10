import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/event.png";
import rmtdevImg from "@/public/calendar.jpg";
import wordanalyticsImg from "@/public/eng.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated From Comsats",
    location: "Attock, Pakistan",
    description:
      "I have graduated with 3.11 CGPA. I immediately found a job as a junior front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "React Js Developer",
    location: "Islamabad, Pakistan",
    description:
      "I worked as a junior React Js developer for 2 years, worked on several projects in React",
    icon: React.createElement(CgWorkAlt),
    date: "March 2021 - March 2023",
  },
  {
    title: "Frontend Developer",
    location: "Remote, Saudi Arabia",
    description:
      "I'm now a front-end developer working remote. My stack includes React, Next.js, TypeScript, Tailwind.",
    icon: React.createElement(FaReact),
    date: "March 2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Event Organizer",
    description:
      "This is a event Organizer Website, where users watch live and recorded videos events, also it have live questions and answers and live polls",
    tags: ["React", "Scss", "Css", "Material UI", "Mobile Responsive"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Plexaar is a CRM Application, where different businesses register themself and manage their clients and staff.",
    tags: ["React", "Material UI", "Scss", "Storybook Components", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Lyca Audit Firm",
    description:
      "This is a audit firm which manages and audit different companies through registering them as a client and doing their audit",
    tags: ["React", "Micro Frontend", "Redux", "Material UI", "Scss"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
] as const;
