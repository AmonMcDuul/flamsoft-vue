import emdrImg from "@/assets/images/emdrproject.png";
import ss2d from "@/assets/images/ss2dproject.png";
import pvdb from "@/assets/images/pvdbproject.png";
import st from "@/assets/images/spacetraderproject.png";
import sw from "@/assets/images/starwatchr.png";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: "starwatchr",
    title: "StarWatchr",
    description:
      "Astronomie tool voor weersvoorspelling en actuele informatie over hemelverschijningen zoals het zonnestelsel, starhop kaarten, messier en caldwell objecten.",
    image: sw,
    tech: "Angular · WebGl · dotnet",
    category: "Astronomy weather, solar system and dso",
  },
  {
    id: "emdr",
    title: "EMDR Tool",
    description:
      "De EMDR Therapy Tool is speciaal ontwikkeld voor therapeuten om effectieve EMDR-sessies te kunnen uitvoeren, zowel in persoonlijke consulten als tijdens online therapie. De tool biedt een intuïtieve interface met aanpasbare parameters voor optimale behandeling.",
    image: emdrImg,
    tech: "Websockets · Angular · dotnet",
    category: "Therapie software",
  },
  {
    id: "pvdb",
    title: "Website GZ-psycholoog",
    description:
      "De website voor Praktijk van der Boom is ontworpen om zowel patiënten als verwijzers te informeren over de behandelmethoden en diensten van de praktijk. Het strakke, rustige design draagt bij aan een professionele uitstraling die vertrouwen wekt. ",
    image: pvdb,
    tech: "Angular · SEO · Planner",
    category: "Website, SEO",
  },
  {
    id: "spacetraders",
    title: "SpaceTraders",
    description:
      "Een strategische trading game geïnspireerd op klassiekers zoals Drug Wars en Elite, waar je als ruimtehandelaar je fortuin bouwt tussen de sterren.",
    image: st,
    tech: "Angular · Game · Strategy",
    category: "Browser game",
  },
  {
    id: "sketch",
    title: "Sketch App",
    description:
      "Minimalistische tekenapp in de browser. Bedoeld om snel concepten te visualiseren. De tool combineert eenvoud met krachtige functies voor professioneel gebruik. ",
    image: ss2d,
    tech: "Canvas · Angular",
    category: "Teken en visualisatie software",
  },
];
