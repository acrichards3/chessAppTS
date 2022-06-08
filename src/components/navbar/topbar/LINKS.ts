import { IconName } from "@blueprintjs/icons";

interface Link {
  id: number;
  url: string;
  title: string;
  active: boolean;
}

interface Icon {
  id: number;
  url: string;
  icon: IconName;
  title: string;
  active: boolean;
}

export const LINKS: Link[] = [
  {
    id: 0,
    url: '/',
    title: 'Dashboard',
    active: false,
  },
  {
    id: 1,
    url: '/stats',
    title: 'Stats',
    active: false,
  },
  {
    id: 2,
    url: '/rank',
    title: 'Rank',
    active: false,
  },
];

export const ICONS: Icon[] = [
  {
    id: 3,
    url: '/privacy-policy',
    icon: 'shield',
    title: 'Privacy Policy',
    active: false,
  },
  {
    id: 4,
    url: '/terms-and-conditions',
    icon: 'document',
    title: 'Terms & Conditions',
    active: false,
  },
  {
    id: 5,
    url: '/faq',
    icon: 'lightbulb',
    title: 'FAQ',
    active: false,
  },
];