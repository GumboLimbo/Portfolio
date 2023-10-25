import '../styles/global.css';
import Layout from '../components/layout/layout';
import { useState } from 'react';

export default function App({ Component, pageProps }) {
  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ];

  const [navState, setNavState] = useState(navigation);

  return <>
    <Layout navState={navState} setNavState={setNavState}>
      <Component {...pageProps} />
    </Layout>
  </>
}
