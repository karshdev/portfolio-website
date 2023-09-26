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
    date: "2019",
  },
  {
    title: "University Graduated",
    location: "Himachal Pradesh University,India",
    description:
      "I am about to complete my graduation in 2024 .I studied computer science and learnt a lot new technologies which i have mentioned in my projects section.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "India",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Bloggy",
    description:
      "I worked as a full-stack developer on this  project. Users can post their blogs and can get a response through comments,It has features like filtering, sorting and pagination.",
    tags: ["React", "Next.js", "MongoDB", "Prisma"],
    imageUrl:"/blog.png",
    deployed:"https://my-next-blog-kohl.vercel.app",
  },
  {
    title: "Foody",
    description:
      "I worked as a full-stack developer on this  project. Users can order snacks of their taste through Foddy.Implemeted a payment gateway using Stripe. ",
    tags: ["React", "TypeScript", "Next.js", "Tailwind","Prisma","Postgresql","Zutstand"],
    imageUrl:"/burger.png",
    deployed:"https://restaurant-dwxj.vercel.app/",
  },
  {
    title: "Megamart",
    description:
      "A I worked as a Frontend developer in this project .I basically just created the UI and implemented features like Filtering,Sorting",
    tags: ["React","Redux"],
    imageUrl: "/mart.png",
    deployed:"https://friendly-gelato-aa70c3.netlify.app/",
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
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
