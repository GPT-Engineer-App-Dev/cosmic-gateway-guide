import { Rocket, Sun } from "lucide-react";
import Index from "./pages/Index.jsx";
import SolarSystem from "./pages/SolarSystem.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Rocket className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Solar System",
    to: "/solar-system",
    icon: <Sun className="h-4 w-4" />,
    page: <SolarSystem />,
  },
];
