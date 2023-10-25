import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import Navbar from '../components/navbar/navbar';

const siteTitle = "Alex Harker Portfolio";

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
      </section>
    </>
  );
}
