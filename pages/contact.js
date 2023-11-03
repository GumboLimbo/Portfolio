import { ClipboardIcon, DocumentCheckIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import FadingDiv from '../components/FadingDiv/FadingDiv';
import SlidingDiv from '../components/SlidingDiv/SlidingDiv';
import { MinHeightViewMinusNav } from '../components/navbar/navbar';

export default function Contact() {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("alex.j.harker@gmail.com");

        setCopied(true);

        let t = setTimeout(() => {
            setCopied(false)
        }, 1000);
        return () => { clearTimeout(t); }
    };

    return (
        <div className={`overflow-x-hidden sm:overflow-hidden flex items-center justify-center px-5 ${MinHeightViewMinusNav} bg-gradient-to-br from-gray-700 to-gray-900 pb-20 sm:pb-0`}>
            <div className='text-center text-white pt-10'>
                <FadingDiv duration='duration-[1500ms]'>
                    <h1 className='text-6xl'>Glad you want to get in touch!</h1>
                </FadingDiv>
                <div className='sm:flex sm:justify-center sm:items-center mb-2'>
                    <SlidingDiv delay='delay-[500ms]' duration='duration-[1500ms]'>
                        <h3 className='text-2xl pt-20'>You can reach me at
                            <button onClick={handleCopyEmail} className="bg-black text-gray-300 p-1 hover:text-white hover:bg-gray-800 rounded-md mx-1">
                                <div className='flex flex-no-wrap items-center mx-1'>
                                    alex.j.harker@gmail.com
                                    {copied ?
                                        <DocumentCheckIcon className="button h-6 w-6" /> :
                                        <ClipboardIcon className="button h-6 w-6" />
                                    }
                                </div>
                            </button>
                        </h3>
                    </SlidingDiv>
                    <SlidingDiv fromLeft={false} delay='delay-[500ms]' duration='duration-[1500ms]'>
                        <h3 className='text-2xl pt-20'>
                            or message me on
                            <a
                                href="https://www.linkedin.com/in/alexander-harker/"
                                target="_blank"
                                className='bg-black text-gray-300 m-1 rounded-md px-1 py-1 hover:text-white hover:bg-gray-800'
                            >
                                Linkedin
                            </a>
                        </h3>
                    </SlidingDiv>
                </div>
            </div>
        </div>
    );
}
