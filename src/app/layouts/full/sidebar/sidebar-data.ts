import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-dashboard',
    route: '/dashboard',
  },
  {
    navCap: 'Tracking Money',
  },
  {
    displayName: 'Tracking Money',
    iconName: 'coins',
    route: '/ui-components/tracking-money',
  },
];
