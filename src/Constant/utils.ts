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
