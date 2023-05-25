
// additional styles
import { styles } from "../../utils/styles";

import { ArrowRightIcon } from "@heroicons/react/24/solid"
import { CheckCircleIcon } from "@heroicons/react/24/solid"

import course1 from "../../images/certified cyber.png"
import course2 from "../../images/security training.png"

const CourseHighlight = () => {

    const courses = [
        {
            id: 1,
            img: course1,
            title: "Certified in Cybersecurity",
            description: "5 weeks of basic fundamentals of cyber security",
            descriptionTwo: "Introduction to Cybersecurity",
            descriptionThree: "Cybersecurity fundamentals",
            descriptionFour: "Threat landscape",
            // checkCircle: <CheckCircleIcon />
        },
        {
            id: 2,
            img: course2,
            title: "Security Plus training",
            description: "11 weeks of training including preperation for the certification and hands on training.",
            descriptionTwo: "Introduction to Cybersecurity and security+",
            descriptionThree: "Security Threats and Vulnerabilities",
            descriptionFour: "Identity and Access Management",
            // checkCircle: <CheckCircleIcon width={15} />
        }
    ]
    return (
        <div className={`${styles.paddingX} ${styles.paddingY}`}>
            <div className=" flex flex-col gap-y-5 items-center">
                <h1 className={`${styles.sectionHeading} `}>
                    Live Courses
                </h1>

                <div className=" flex flex-col gap-y-10 items-center md:flex-row md:items-stretch md:gap-x-40">
                    {courses.map(({ ...courses }) => {
                        return (
                            <div key={courses.id} className=" flex flex-col gap-y-5 items-center md:items-start md:basis-1/2">
                                <div className="">
                                    <img src={courses.img} alt="course" className=" rounded-md bg-black" />
                                </div>
                                <div className=" flex flex-col items-center gap-y-4 text-center md:items-start md:text-start">
                                    <h3 className=" font-bold uppercase text-lg lg:text-xl">{courses.title}</h3>
                                    <div className=" flex flex-col gap-y-2 h-64">
                                        <p className=" text-sm opacity-75 lg:text-lg flex">
                                            {courses.description}
                                        </p>
                                        <p className=" text-sm opacity-75 lg:text-lg">
                                            {courses.descriptionTwo}
                                        </p>
                                        <p className=" text-sm opacity-75 lg:text-lg">
                                            {courses.descriptionThree}
                                        </p>
                                        <p className=" text-sm opacity-75 lg:text-lg">
                                            {courses.descriptionFour}
                                        </p>
                                    </div>
                                    <button
                                        className=" bg-orange-500 px-5 py-1 rounded-md text-white flex items-center gap-x-2 font-medium lg:text-lg"
                                    >
                                        More
                                        <span>
                                            <ArrowRightIcon width={15} />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default CourseHighlight;