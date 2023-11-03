import ExperienceCard from "./ExperienceCard";

export default function ExperienceGrid({ experiences }) {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 justify-center pt-10 pb-20 sm:pb-0'>
            {experiences.map((exp) => (
                <ExperienceCard {...exp} />
            ))}
        </div>
    )
}