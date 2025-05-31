import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiJava,
  SiTypescript,
  SiCplusplus,
  SiMysql,
  SiPhp,
  SiPython,
} from "react-icons/si";

export const techIcons: { icon: JSX.Element; title: string }[] = [
  {
    icon: <SiJava className="w-7 h-7 2xl:w-10 2xl:h-10" />,
    title: "Java",
  },
  {
    icon: <SiCplusplus className="w-7 h-7 2xl:w-10 2xl:h-10" />,
    title: "C++",
  },
  {
    icon: <SiPython className="w-7 h-7 2xl:w-10 2xl:h-10" />,
    title: "Python",
  },
  {
    icon: <SiReact className="w-7 h-7 2xl:w-10 2xl:h-10" />,
    title: "ReactJS",
  },
  {
    icon: <SiJavascript className="w-7 h-7 2xl:w-10 2xl:h-10" />,
    title: "Javascript",
  },
  {
    icon: <SiTypescript className="w-7 h-7 2xl:w-10 2xl:h-10" />,
    title: "Typescript",
  },
  {
    icon: <SiTailwindcss className="w-7 h-7 2xl:w-10 2xl:h-10" />,
    title: "TailwindCSS",
  },
  {
    icon: <SiPhp className="w-7 h-7 2xl:w-10 2xl:h-10" />,
    title: "PHP",
  },
  {
    icon: <SiMysql className="w-7 h-7 2xl:w-10 2xl:h-10" />,
    title: "SQL",
  },
];
