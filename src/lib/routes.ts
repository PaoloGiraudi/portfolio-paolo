interface Route {
  name: string;
  href: string;
}

type Routes = Route[];

export const routes: Routes = [
  { name: 'Home', href: '/' },
  { name: 'Work', href: '/work' },
  { name: 'Contact', href: '/contact' }
];
