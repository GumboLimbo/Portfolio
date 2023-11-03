import Link from 'next/link';
import FadingDiv from '../components/FadingDiv/FadingDiv';
import { MaxHeightViewMinusNav, MinHeightViewMinusNav } from '../components/navbar/navbar';
import Head from 'next/head';
import ExperienceCard from '../components/Experience/ExperienceCard';
import ExperienceGrid from '../components/Experience/ExperienceGrid';

export default function Home() {
  const experience = [
    { name: 'Shade Protocol\'s ShadeSwap', fromColor: "from-purple-300", toColor: "to-purple-500", description: "Researched, built, and managed the audit of a crypto exchange which successfully managed > $10M. Also built supporting cloud infrastructure and db.", techStack: "Rust, Smart Contracts, AWS, PostgresDB, Terraform, Vue.js, Python", github: "https://github.com/securesecrets/shadeswap", inAction: "https://app.shadeprotocol.io/swap/", paper: "https://arxiv.org/abs/2302.07822" },
    { name: 'Infinite Campus', fromColor: "from-green-300", toColor: "to-green-500", description: "Upgraded SAML user auth, internal security systems, and UI design in a school information system.", techStack: "Java, XML / XSLT, Angular, SQL", github: "", inAction: "", paper: "" },
    { name: 'This Website', fromColor: "from-gray-300", toColor: "to-gray-500", description: "My first React project. I like challenging myself with new tech stacks, and I previously only had Angular, Vue.js, and Svelte exposure for FE frameworks.", techStack: "React, Next.js, Vercel", github: "https://github.com/GumboLimbo/Portfolio", inAction: "", paper: "" },
    { name: 'Arbitrage Bot', fromColor: "from-yellow-300", toColor: "to-yellow-500", description: "Secret Network automated arbitrage trading bot. Still WIP as it's somewhat inefficient, but fully functional.", techStack: "Typescript, SecretJS, Node.js, Yarn", github: "https://github.com/GumboLimbo/arb-public/", inAction: "", paper: "" },
  ];

  return (
    <>
      <Head>
        <style>{`body {overflow: hidden}`}</style>
      </Head>
      <div className={`sm:snap-y sm:snap-mandatory ${MaxHeightViewMinusNav} ${MinHeightViewMinusNav} overflow-y-scroll`}>
        <section className={`sm:snap-start sm:snap-always ${MinHeightViewMinusNav} bg-gradient-to-br from-gray-700 to-gray-900`}>
          <div className='pt-4 text-center text-white max-h-2/6'>
            <FadingDiv duration='duration-[1500ms]'>
              <h1 className='text-6xl mb-5'>Hi! I'm Alex.</h1>
            </FadingDiv>
            <FadingDiv delay='delay-[500ms]' duration='duration-[1500ms]'>
              <h1 className='text-5xl pb-5 bg-gradient-to-br from-yellow-300 to-orange-600 text-transparent bg-clip-text'>I design and build cool tech.</h1>
            </FadingDiv>
          </div>
          <div className='flex justify-center items-center w-full'>
            <FadingDiv delay='delay-1000' duration='duration-[1500ms]'>
              <img className='max-h-80' src="/images/Headshot-sm.png" />
            </FadingDiv>
          </div>

        </section>
        <section className={`sm:snap-start sm:snap-always bg-gradient-to-br from-gray-300 to-gray-100 ${MinHeightViewMinusNav}`}>
          <div className='pt-4 text-center text-black'>
            <FadingDiv duration='duration-[2000ms]'>
              <h1 className='text-6xl mb-5'>Experience:</h1>
              <div className='text-xl'>
                (View <Link href="/resume" className='text-red-600 underline'>Resume</Link> for More Detail)
              </div>
              <ExperienceGrid experiences={experience}/>
            </FadingDiv>
          </div>
        </section>
      </div>
    </>
  );
}
