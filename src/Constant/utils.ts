import { FC } from "react";
import Home from "../Pages/Home/Home";
import Skills from "../Pages/Skills/Skills";
import Single from "../Pages/Single/Single";

interface RoutesTypes {
  Path: string;
  Title: string;
  Component: FC;
}

export const Routes: RoutesTypes[] = [
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
    Path: "/view/:id",
    Title: "View Design",
    Component: Single,
  },
];
