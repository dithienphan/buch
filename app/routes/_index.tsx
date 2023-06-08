import type { V2_MetaFunction } from '@remix-run/node';
import IndexStyles from '~/styles/index.css';
import Home from './home';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return <Home />;
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: IndexStyles,
    },
  ];
}
