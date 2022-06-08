import { IconName } from "@blueprintjs/icons";

interface Link {
  id: number;
  url?: string;
  icon?: IconName;
  title: string;
}

export const LINKS: Link[] = [
  {
    id: 0,
    url: '/',
    icon: 'chart',
    title: 'Dashboard',
  },
  {
    id: 1,
    url: '/',
    icon: 'chart',
    title: 'Stats',
  },
  {
    id: 2,
    url: '/',
    icon: 'chart',
    title: 'Rank',
  },
];
