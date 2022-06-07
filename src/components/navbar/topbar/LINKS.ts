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
    url: '/',
    icon: 'chart',
    title: 'Dashboard',
  },
];
