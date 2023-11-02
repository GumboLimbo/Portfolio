import Link from 'next/link';
import FadingDiv from '../components/FadingDiv/FadingDiv';
import { NavbarHeight } from '../components/navbar/navbar';

export default function Home() {
  const experience = [
    { name: 'Shade Protocol', fromColor: "from-purple-300", toColor: "to-purple-500", description: "", techStack: "", github: "" },
    { name: 'Infinite Campus', fromColor: "from-green-300", toColor: "to-green-500", description: "", techStack: "", github: "" },
    { name: 'This Website', fromColor: "from-gray-300", toColor: "to-gray-500", description: "", techStack: "", github: "" },
    { name: 'Arbitrage Bot', fromColor: "from-yellow-300", toColor: "to-yellow-500", description: "", techStack: "", github: "" },
  ];

  return (
    <div className={`md:snap-y md:snap-mandatory md:max-h-[calc(100vh-${NavbarHeight})] md:min-h-[calc(100vh-${NavbarHeight})] md:overflow-scroll`}>
      <section className='md:snap-start md:snap-always'>
        <div className={`md:min-h-[calc(100vh-${NavbarHeight})] md:max-h-[calc(100vh-${NavbarHeight})] bg-gradient-to-br from-gray-700 to-gray-900`}>
          <div className='text-center text-white pt-10 max-h-2/6'>
            <FadingDiv duration='duration-[1500ms]'>
              <h1 className='text-6xl mb-5'>Hi! I'm Alex.</h1>
            </FadingDiv>
            <FadingDiv delay='delay-[500ms]' duration='duration-[1500ms]'>
              <h1 className='text-6xl mb-5'>I design and build cool tech.</h1>
            </FadingDiv>
          </div>
          <div className='flex justify-center items-center w-full'>
            <FadingDiv delay='delay-1000' duration='duration-[1500ms]'>
              <img className='max-h-80' src="/images/Headshot.png" />
            </FadingDiv>
          </div>

        </div>
      </section>
      <section className='md:snap-end md:snap-always'>
        <div className={`min-h-[calc(100vh-${NavbarHeight})] max-h-[calc(100vh-${NavbarHeight})] bg-gradient-to-br from-gray-300 to-gray-100`}>
          <div className='text-center text-black pt-10'>
            <FadingDiv duration='duration-[1500ms]'>
              <h1 className='text-6xl mb-5'>Experience:</h1>
              <div className='text-xl'>
                (View <Link href="/resume" className='text-red-600 underline'>Resume</Link> for More Detail)
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 justify-center pt-10'>
                {experience.map((exp) => (
                  <div className={`transition-all duration-[200ms] ${exp.fromColor} ${exp.toColor} justify-self-center hover:shadow-xl w-11/12 h-5/6 hover:h-[90%] hover:w-[95%] mx-2 my-4 bg-gradient-to-br rounded-md`}>
                    <div className='grid grid-cols-3 min-h-[48px]'>
                      <a href={exp.github} target='_blank'
                        className="relative rounded-full py-1 px-2 text-gray-400 hover:text-white"
                      >
                        <img src="/images/github-mark.png" className='transition-all duration-[200ms] h-8 w-8 hover:h-10 hover:w-10 rounded-full' alt="Github" />
                      </a>
                      <div className='text-2xl'>
                        {exp.name}
                      </div>
                    </div>
                    <div className='text-xl'>
                      Description: {exp.description}
                    </div>
                    <div className='text-xl'>
                      Tech Stack: {exp.techStack}
                    </div>
                  </div>
                ))}
              </div>
            </FadingDiv>
          </div>
        </div>
      </section>
    </div>
  );
}
