import FadingDiv from '../components/FadingDiv/FadingDiv';
import { NavbarHeight } from '../components/navbar/navbar';

export default function Resume() {
    return (
        <div className={`px-5 min-h-[calc(100vh-${NavbarHeight})] bg-gradient-to-br from-gray-700 to-gray-900`}>
            <div className='text-center text-white pt-10'>
                <FadingDiv duration='duration-[1500ms]'>
                    <h3 className='text-2xl pt-20 pb-20'>Want a brief summary of my experience?</h3>
                    <a href="/docs/Resume.pdf" download="AlexHarkerResume.pdf" target="_blank">
                        <button className='text-2xl text-red-300 underline'>Download Resume</button>
                    </a>
                </FadingDiv>
            </div>
        </div>
    )
}