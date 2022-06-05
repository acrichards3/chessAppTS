import { IconName } from "@blueprintjs/icons";

interface Link {
  id: number;
  url?: string;
  icon?: IconName;
  title: string;
  bold: boolean;
}

export const LINKS: Link[] = [
  {
    id: 0,
    title: 'Information',
    bold: true,
  },
  {
    id: 1,
    url: '/',
    icon: 'chart',
    title: 'Dashboard',
    bold: false,
  },
  {
    id: 2,
    title: 'For Beginners',
    bold: true,
  },
  {
    id: 3,
    url: '/principles',
    icon: 'bookmark',
    title: 'Principles',
    bold: false,
  },
  {
    id: 4,
    url: '/rules',
    icon: 'learning',
    title: 'Rules of Chess',
    bold: false,
  },
  {
    id: 5,
    title: 'Openings',
    bold: true,
  },
  {
    id: 6,
    url: '/beginner-openings',
    icon: 'snowflake',
    title: 'Beginner',
    bold: false,
  },
  {
    id: 7,
    url: '/intermediate-openings',
    icon: 'flame',
    title: 'Intermediate',
    bold: false,
  },
  {
    id: 8,
    url: '/advanced-openings',
    icon: 'predictive-analysis',
    title: 'Advanced',
    bold: false,
  },
  {
    id: 9,
    title: 'Extras',
    bold: true,
  },
  {
    id: 10,
    url: '/game-of-the-week',
    icon: 'crown',
    title: 'Game of the Week',
    bold: false,
  },
  {
    id: 11,
    url: '/demo',
    icon: 'ninja',
    title: 'Demo',
    bold: false,
  },
  {
    id: 12,
    url: '/contact',
    icon: 'phone',
    title: 'Contact',
    bold: false,
  },
];
