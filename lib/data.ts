import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "High School",
    location: "Himachal Pradesh,India",
    description:
      "I have completed my high school from Dayanand Adarsh Vidyalaya Solan.My major was Non-medical.",
    icon: React.createElement(LuGraduationCap),
    date: "2017",
  },
  {
    title: "University Graduated",
    location: "Himachal Pradesh University,India",
    description:
      "I am about to complete my graduation in 2021 .I studied computer science and learnt a lot new technologies which i have mentioned in my projects section.",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Pune",
    description:
      "I'm worked as a full-stack Nextjs developer for an organisation named trident-technorats fr 6 months. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB",
    icon: React.createElement(FaReact),
    date: "2021 - 2021",
  },
  {
    title: "Associate Full-Stack Developer",
    location: "Chandigarh",
    description:
      "I worked in a early startup called 75 Way technology for 2 years, got a great learning there and they made me a good team player working in teams",
    icon: React.createElement(FaReact),
    date: "2021 - 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Remote",
    description:
      "I'm now a full-stack developer working as a freelancer",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "AI Interview Tool",
    description:
      "I worked as a full-stack NextJs developer on this  project. Users can select the category to which they want to give interview of , an AI agent will take interview",
    tags: ["Next.js", "MongoDB" ,"Open-AI"],
    imageUrl:"/ai-interview.png",
    deployed:"https://youtu.be/NLxKJ8Iaf58?si=6nhBEYiTDPdkZze8",
  },
  {
    title: "Gradial",
    description:
      "I worked as a full stack developer , Data is driven through Contentful-CMS using GrpahQL API's , Seattle startup Gradial raises $13M for AI marketing tech that automates content operations",
    tags: ["React", "TypeScript", "SCSS", "Contentfull CMS"],
    imageUrl:"/gradial-ai.png",
    deployed:"https://gradial.ai",
  },
  {
    title: "Popup Audio",
    description:
      "A I worked as a Full satck React Native developer . basically a audio sharing app in which user can join and host the event , Also added stripe integration",
    tags: ["React Native","Agora API's" , "Firebase"],
    imageUrl: "/popupaudio.png",
    deployed:"https://apps.apple.com/au/app/popup-audio/id1601759961",
  },
  {
    title: "Montreal Tires",
    description:
      "A I worked as a Full satck NextJs  developer . US- based - tires showcasing website with filters applied",
    tags: ["NextJs"],
    imageUrl: "/montreal-tire.png",
    deployed:"https://montrealtire.us",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Contentfull CMS",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "SCSS",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Framer Motion",
  "GSAP"
] as const;
