import HoverText from "../components/HoverText/HoverText";
import { MinHeightViewMinusNav, HeightViewMinusNav } from "../components/navbar/navbar";
import Head from "next/head";

export default function About() {
    let traits = [
        {title: "Fast Learner", innerText: "I pride myself on valuing new challenges as learning opportunites. I self taught programming from a young age, which made me appreciate the value of reaching beyond current limits. This attitude continues in my professional career."},
        {title: "Self Motivated", innerText: "If you can convince that your project is meaningful + would improve quality of life for many people, I'd love to contribute. I am deeply motivated when my work and values align."},
        {title: "Generalist", innerText: "I have many passions, both within the tech world and outside it. This contributes to my drive to always learn and grow. My hobbies are varied - including reading, scuba diving, hiking, golfing, running, bouldering, and programming side projects."},
        {title: "Direct Communicator", innerText: "In professional settings, I like to speak my mind - always with respect and humility. Direct communication makes it easy to get everyone on the same page and moving forward together."},
        {title: "Growth Seeking", innerText: "I always seek out and highly value meaningful feedback, whether it's positive or negative. In 1-on-1 meetings, I have a standing agenda of \"How can I improve?\" Advice from skilled coworkers is one of the fastest ways to grow."},
    ];
    return (
        <>
            <Head>
                <style>{`body {overflow: hidden}`}</style>
            </Head>
            <div className={`text-gray-200 px-5 ${MinHeightViewMinusNav} ${HeightViewMinusNav} bg-gradient-to-br from-gray-700 to-gray-900 text-center overflow-y-scroll overflow-x-hidden md:overflow-hidden`}>
                <div className="pt-5 text-2xl md:text-5xl md:h-[15%]">About me...</div>
                <div className="md:hidden text-xs">[Tap an item to read more]</div>
                <div className="grid grid-cols-1 md:h-[75%] gap-y-5 mt-10 mb-20 md:mb-0">
                    {traits.map((t) => (
                        <HoverText {...t} />
                    ))}
                </div>
            </div>
        </>
    );
}
