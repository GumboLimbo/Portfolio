import Link from 'next/link';
import FadingDiv from '../components/FadingDiv/FadingDiv';
import { MaxHeightViewMinusNav, MinHeightViewMinusNav } from '../components/navbar/navbar';
import Head from 'next/head';

export default function Home() {
  const experience = [
    { name: 'Shade Protocol\'s ShadeSwap', fromColor: "from-purple-300", toColor: "to-purple-500", description: "Researched, built, and managed the audit of a crypto exchange. Successfully managed > $10M. Also built supporting cloud infrastructure and db.", techStack: "Rust, Smart Contracts, AWS, PostgresDB, Terraform, Vue.js, Python", github: "https://github.com/securesecrets/shadeswap", inAction: "https://app.shadeprotocol.io/swap/", paper: "https://arxiv.org/abs/2302.07822" },
    { name: 'Infinite Campus', fromColor: "from-green-300", toColor: "to-green-500", description: "", techStack: "", github: "", inAction: "", paper: "" },
    { name: 'This Website', fromColor: "from-gray-300", toColor: "to-gray-500", description: "", techStack: "", github: "", inAction: "", paper: "" },
    { name: 'Arbitrage Bot', fromColor: "from-yellow-300", toColor: "to-yellow-500", description: "", techStack: "", github: "", inAction: "", paper: "" },
  ];

  return (
    <>
      <Head>
        <style>{`body {overflow: hidden}`}</style>
      </Head>
      <div className={`md:snap-y md:snap-mandatory ${MaxHeightViewMinusNav} ${MinHeightViewMinusNav} overflow-y-scroll`}>
        <section className={`md:snap-start md:snap-always ${MinHeightViewMinusNav} bg-gradient-to-br from-gray-700 to-gray-900`}>
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
              <img className='max-h-80' src="/images/Headshot-Sm.png" />
            </FadingDiv>
          </div>

        </section>
        <section className={`md:snap-start md:snap-always bg-gradient-to-br from-gray-300 to-gray-100 ${MinHeightViewMinusNav}`}>
          <div className='pt-4 text-center text-black'>
            <FadingDiv duration='duration-[2000ms]'>
              <h1 className='text-6xl mb-5'>Experience:</h1>
              <div className='text-xl'>
                (View <Link href="/resume" className='text-red-600 underline'>Resume</Link> for More Detail)
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 justify-center pt-10 pb-20 md:pb-0'>
                {experience.map((exp) => (
                  <div className={`transition-all duration-[200ms] ${exp.fromColor} ${exp.toColor} justify-self-center hover:shadow-xl w-11/12 max-h-fit hover:scale-105 hover:scale-105 mx-2 my-4 bg-gradient-to-br rounded-md`}>
                    <div className='grid grid-cols-3 min-h-[48px]'>
                      <a href={exp.github} target='_blank'
                        className="relative rounded-full py-1 px-2 text-gray-400 hover:text-white"
                      >
                        <img src="/images/github-mark.png" className='transition-all duration-[200ms] h-8 w-8 hover:h-10 hover:w-10 rounded-full' alt="Github" />
                      </a>
                      <div className='text-2xl'>
                        {exp.name}
                      </div>
                      <div className='justify-self-end text-sm'>
                        {exp.inAction &&
                          <a href={exp.inAction} target='_blank'
                            className="flex transition-all duration-[200ms] max-h-min max-w-fit text-center align-items-center rounded-md my-1 mx-2 text-gray-800 hover:text-white hover:bg-purple-800">
                            See it in action!</a>
                        }
                        {exp.paper &&
                          <a href={exp.paper} target='_blank'
                            className="flex transition-all duration-[200ms] max-h-min max-w-fit text-center align-items-center rounded-md my-1 mx-2 text-gray-800 hover:text-white hover:bg-purple-800">
                            Research Paper</a>
                        }
                      </div>
                    </div>
                    <div className='text-xl'>
                      {exp.description}
                    </div>
                    <div className='text-md border-t border-black mx-5'>
                      {exp.techStack}
                    </div>
                  </div>
                ))}
              </div>
            </FadingDiv>
          </div>
        </section>
      </div>
    </>
  );
}
