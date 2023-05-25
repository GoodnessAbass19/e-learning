import { styles } from "../../utils/styles";

import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa"

import testimonyOne from "../../images/testimonialOne.jpg"

const Testimonials = () => {
    const testimonies = [
        {
            id: 1,
            img: testimonyOne,
            p: "I want to give a huge shoutout to kingship technology! Their class helped me think like a true cyber security professional. I don’t know where I would be without their knowledge and their support. I’m glad I’ve found them truly life changing!",
            h4: "Ditter Mills"
        },
        {
            id: 2,
            img: testimonyOne,
            p: "My time attending the course was well worth it. The environment was welcoming. It was a fresh breeding ground for learning and participation. I wasn’t sure what to think initially signing up for the class, but now that that course has concluded, I can’t speak enough how much of a difference it has made for me in my professional career. The open discussion I was able to have with Dami and Tiroye really made it a positive experience. They go above and beyond to assist you in every way possible and put you in a position to succeed. If you are looking for a career change and have thought about going the Cyber security route then take the jump and attend this class. Fear and growth cannot exist in the same space. You won’t regret it",
            h4: "Steven Joy"
        },
        {
            id: 3,
            img: testimonyOne,
            p: "This class has truly helped me grow and expand my knowledge of the field. I came here not knowing much about cyber security but Dami and Tiroye did such a great job in training me and equipped me with all the information and tools i needed to start my cybersecurity career.",
            h4: "Val Alabre"
        },
        // {
        //     id: 4,
        //     img: testimonyOne,
        //     p: "This class helped me earn my Security+ certification on my first attempt! The instructors have a vast knowledge base and consistently provided explanations to any and all queries I posed. The additional labs and study materials, resources, and techniques bolstered my understanding significantly. My favorite aspect of the class is that the instructors find ways to make even the most complex topics seem fun and easy to understand",
        //     h4: "Antonio S."
        // }
    ]

    return (
        <div className={`${styles.paddingX} ${styles.paddingY}`}>
            <div>
                <h1 className={`${styles.sectionHeading} mb-10 text-center lg:mb-16`}>
                    Testimonials
                </h1>

                <div className=" grid grid-cols-1 items-center gap-y-5 md:grid-cols-2 md:items-stretch md:gap-x-5 lg:grid-cols-3">
                    {testimonies.map(({ id, img, p, h4 }) => {
                        return (
                            <div key={id} className=" flex flex-col items-center gap-y-5 boxShadow p-5 rounded-md">
                                <img src={img} alt="" className=" w-32 h-32 rounded-full" />
                                <div className=" flex flex-col items-center gap-y-3">
                                    <FaQuoteLeft size={30} color="gray" />
                                    <p className=" text-sm opacity-75 text-center">
                                        {p}
                                    </p>
                                    <FaQuoteRight size={30} color="gray" />
                                    <h4 className=" text-lg font-medium">
                                        {h4}
                                    </h4>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Testimonials;