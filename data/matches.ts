export type Team = {
  name: string;
  shortName: string;
  flag: string;
};

export type Match = {
  id: string;
  competition: string;
  venue: string;
  home: Team;
  away: Team;
  homeScore?: number;
  awayScore?: number;
  status: "live" | "upcoming" | "final";
  minute?: number;
  kickoff?: string;
  viewers: string;
  winProbability: { home: number; draw: number; away: number };
};

export const matches: Match[] = [
  {
    id: "mar-spa",
    competition: "World Cup · Group B",
    venue: "MetLife Stadium",
    home: { name: "Morocco", shortName: "MAR", flag: "🇲🇦" },
    away: { name: "Spain", shortName: "ESP", flag: "🇪🇸" },
    homeScore: 1,
    awayScore: 1,
    status: "live",
    minute: 67,
    viewers: "24.8K",
    winProbability: { home: 24, draw: 38, away: 38 },
  },
  {
    id: "arg-nga",
    competition: "World Cup · Group F",
    venue: "Hard Rock Stadium",
    home: { name: "Argentina", shortName: "ARG", flag: "🇦🇷" },
    away: { name: "Nigeria", shortName: "NGA", flag: "🇳🇬" },
    homeScore: 2,
    awayScore: 0,
    status: "live",
    minute: 42,
    viewers: "31.2K",
    winProbability: { home: 79, draw: 16, away: 5 },
  },
  {
    id: "usa-jpn",
    competition: "World Cup · Group D",
    venue: "SoFi Stadium",
    home: { name: "USA", shortName: "USA", flag: "🇺🇸" },
    away: { name: "Japan", shortName: "JPN", flag: "🇯🇵" },
    status: "upcoming",
    kickoff: "Today · 8:00 PM",
    viewers: "12.4K waiting",
    winProbability: { home: 42, draw: 29, away: 29 },
  },
  {
    id: "bra-ger",
    competition: "World Cup · Group H",
    venue: "Mercedes-Benz Stadium",
    home: { name: "Brazil", shortName: "BRA", flag: "🇧🇷" },
    away: { name: "Germany", shortName: "GER", flag: "🇩🇪" },
    status: "upcoming",
    kickoff: "Tomorrow · 3:00 PM",
    viewers: "18.1K waiting",
    winProbability: { home: 45, draw: 27, away: 28 },
  },
];

export const featuredMatch = matches[0];

export const insights = [
  { id: 1, tag: "Tactical shift", time: "Just now", icon: "↗", text: "Morocco is defending deeper and looking to counter through the wings." },
  { id: 2, tag: "Momentum", time: "64′", icon: "◎", text: "Spain is controlling possession but struggling to create clear chances." },
  { id: 3, tag: "Watch next", time: "62′", icon: "⌁", text: "The next 10 minutes are important—fatigue is opening space in midfield." },
];

export const stats = [
  { label: "Possession", home: 38, away: 62, suffix: "%" },
  { label: "Shots", home: 7, away: 11 },
  { label: "Shots on target", home: 3, away: 4 },
  { label: "Pass accuracy", home: 82, away: 91, suffix: "%" },
  { label: "Fouls", home: 12, away: 8 },
  { label: "Corners", home: 3, away: 6 },
];
