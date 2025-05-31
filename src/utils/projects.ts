import id_cards from "../assets/id_cards.png";
import academic from "../assets/academic.png";
import password from "../assets/password.png";
import printing from "../assets/printing.png";

const projects = [
  {
    title: "ID Cards Generation System",
    image: id_cards,
    techs: ["Vite", "TypeScript", "React", "shadcnui", "Tailwind CSS", "SQL"],
    links: {
      repository: "https://github.com/hakkiai/ID-CARDS-GENERATION-SYSTEM",
      deploy: "https://id-cards-generation-system.vercel.app/",
    },
  },
  {
    title: "Academic Performance Hub",
    image: academic,
    techs: ["Vite", "TypeScript", "React", "shadcnui", "Tailwind CSS", "SQL"],
    links: {
      repository: "https://github.com/hakkiai/Academic-Performance-hub",
      deploy: "https://academic-performance-hub.vercel.app/",
    },
  },
  {
    title: "Password Generator",
    image: password,
    techs: ["Svelte", "Vite", "TypeScript"],
    links: {
      repository: "https://github.com/hakkiai/Random-Password-Generator",
      deploy: "https://random-password-generator-pied.vercel.app/",
    },
  },
  {
    title: "Satyadeva Printing Cluster",
    image: printing,
    techs: ["PHP", "HTML", "CSS", "JavaScript", "SQL"],
    links: {
      repository: "https://github.com/hakkiai/Satyadeva-Printing-Cluster",
    },
  },
];

export default projects;
