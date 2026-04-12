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
    id: "emdr",
    title: "EMDR Tool",
    description:
      "Professionele EMDR-software voor therapeuten. Real-time eye movement tracking, sessielogs en veilige dataopslag. Gebruikt door 50+ praktijken.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    tech: "React · Node · WebRTC",
    category: "Therapie software",
  },
  {
    id: "sketch",
    title: "Sketch App",
    description:
      "Minimalistische tekenapp in de browser. Ondersteunt lagen, penselen, export naar PNG/SVG. Perfect voor wireframes en creatieve schetsen.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    tech: "Canvas API · JavaScript",
    category: "Browser drawing tool",
  },
  {
    id: "flow",
    title: "Flow Dashboard",
    description:
      "Interactive dashboard voor bedrijfsdata. Realtime grafieken, KPI's en export naar PDF. Gebruikt door teams voor snelle inzichten.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    tech: "D3.js · React · Socket.io",
    category: "Analytics & inzicht",
  },
  {
    id: "mindful",
    title: "Mindful Notes",
    description:
      "Digitale journaling app met dagelijkse prompts en stemmingtracking. Privacy-first, end-to-end encrypted.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    tech: "Vue · IndexedDB · PWA",
    category: "Journaling app",
  },
  {
    id: "pulse",
    title: "Pulse Monitor",
    description:
      "Wearable-integratie voor hartslag en activiteit. Real-time meldingen en historische trends.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    tech: "Flutter · Firebase · Bluetooth LE",
    category: "Gezondheid & wearables",
  },
];
