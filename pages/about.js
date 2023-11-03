import HoverText from "../components/HoverText/HoverText";
import { MinHeightViewMinusNav, HeightViewMinusNav } from "../components/navbar/navbar";
import Head from "next/head";

export default function About() {
    let traits = [
        {title: "Fast Learner", innerText: "test test tests"},
        {title: "Self Motivated", innerText: "test test tests"},
        {title: "Generalist", innerText: "test test tests"},
        {title: "Direct Communicator", innerText: "test test tests"},
        {title: "Growth Seeking", innerText: "test test tests"},
    ];
    return (
        <>
            <Head>
                <style>{`body {overflow: hidden}`}</style>
            </Head>
            <div className={`text-gray-200 px-5 ${MinHeightViewMinusNav} ${HeightViewMinusNav} bg-gradient-to-br from-gray-700 to-gray-900 text-center overflow-y-scroll md:overflow-hidden`}>
                <div className="pt-5 md:text-5xl h-[15%]">About me...</div>
                <div className="grid grid-cols-1 h-[75%] gap-y-5 mt-10">
                    {traits.map((t) => (
                        <HoverText {...t} />
                    ))}
                </div>
            </div>
        </>
    );
}
