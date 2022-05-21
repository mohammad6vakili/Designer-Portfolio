import { FC } from "react";
import Home from "../Pages/Home/Home";
import Skills from "../Pages/Skills/Skills";
import Projects from "../Pages/Projects/Projects";
import About from "../Pages/About/About";
import Single from "../Pages/Single/Single";

interface RoutesTypes {
  Path: string;
  Title: string;
  Component: FC;
}

interface SkillsTypes {
  label: string;
  value: number;
}

export const Routings: RoutesTypes[] = [
  {
    Path: "/",
    Title: "Home",
    Component: Home,
  },
  {
    Path: "/skills",
    Title: "Skills",
    Component: Skills,
  },
  {
    Path: "/projects",
    Title: "Projects",
    Component: Projects,
  },
  {
    Path: "/about",
    Title: "About",
    Component: About,
  },
  {
    Path: "/view/:id",
    Title: "View Design",
    Component: Single,
  },
];

export const SkillsData: SkillsTypes[] = [
  {
    label: "UX Design",
    value: 95,
  },
  {
    label: "UI Design",
    value: 100,
  },
  {
    label: "Prototyping and wireframing",
    value: 90,
  },
  {
    label: "Visual design",
    value: 95,
  },
  {
    label: "User research",
    value: 100,
  },
  {
    label: "Agile",
    value: 85,
  },
  {
    label: "Information architecture (IA)",
    value: 90,
  },
  {
    label: "UX writing",
    value: 90,
  },
  {
    label: "UI Components",
    value: 95,
  },
  {
    label: "Logo Design",
    value: 85,
  },
  {
    label: "Ads banner",
    value: 100,
  },
  {
    label: "English",
    value: 80,
  },
];