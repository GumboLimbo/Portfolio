export default function ExperienceCard({ name, description, techStack, fromColor, toColor, github, inAction, paper }) {
    return (
        <div className={`transition-all duration-[200ms] ${fromColor} ${toColor} justify-self-center hover:shadow-xl w-11/12 max-h-fit hover:scale-105 hover:scale-105 mx-2 my-4 bg-gradient-to-br rounded-md`}>
            <div className='grid grid-cols-3 min-h-[48px]'>
                {github &&
                    <a href={github} target='_blank'
                        className="relative rounded-full py-1 px-2 text-gray-400 hover:text-white"
                    >
                        <img src="/images/github-mark.png" className='transition-all duration-[200ms] h-8 w-8 hover:h-10 hover:w-10 rounded-full' alt="Github" />
                    </a>
                }
                {!github && <div/>}

                <div className='text-2xl'>
                    {name}
                </div>

                <div className='justify-self-end text-sm'>
                    {inAction &&
                        <a href={inAction} target='_blank'
                            className="p-1 flex transition-all duration-[200ms] max-h-min max-w-fit text-center align-items-center rounded-md my-1 mx-2 text-gray-800 hover:text-white hover:bg-purple-800">
                            See it in action!</a>
                    }
                    {paper &&
                        <a href={paper} target='_blank'
                            className="p-1 flex transition-all duration-[200ms] max-h-min max-w-fit text-center align-items-center rounded-md my-1 mx-2 text-gray-800 hover:text-white hover:bg-purple-800">
                            Research Paper</a>
                    }
                </div>
            </div>

            <div className='text-xl'>
                {description}
            </div>

            <div className='text-md border-t border-black mx-5'>
                {techStack}
            </div>
        </div>
    )
}