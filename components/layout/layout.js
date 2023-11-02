import Navbar from '../navbar/navbar'
import Head from 'next/head';

export default function Layout({ children }) {
    const siteTitle = "Alex Harker Portfolio";
    return (
        <>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <Navbar />
            <div>{children}</div>
        </>
    )
}
