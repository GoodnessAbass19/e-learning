import { useRef } from "react";

// library
import { motion, AnimatePresence, useInView } from "framer-motion";

// utilities
import { styles } from "../../utils/styles";

// images
import illustrationOne from '../../images/no-exp.webp'
import illustrationTwo from '../../images/classes.webp'

const Benefits = () => {
    const benefits = [
        {
            id: 1,
            img: illustrationOne,
            heading: "Tailored to you",
            paragraph: "Regardless of your experience you will be able to learn even with no prior experience."
        },
        {
            id: 2,
            img: illustrationTwo,
            heading: "Bite-sized",
            paragraph: "Classes will be taken one step at a time with quizzess and assessments that follow to ensure you have complete understanding."
        },
        {
            id: 3,
            img: illustrationTwo,
            heading: "Get proof",
            paragraph: "Earn a certificate in 6 months to validate your newly acquired skills. Post it on social for others to see."
        }
    ]

    const ref = useRef(null)
    const isInView = useInView(ref);

    return (
        <div className={`${styles.paddingX} pb-14 md:pb-24`}>
            <div className=" flex flex-col items-center gap-y-4 lg:flex-row lg:justify-center lg:gap-x-10" ref={ref}>
                {benefits.map(({ id, img, heading, paragraph }) => {
                    return (
                        <div
                            style={{
                                // transform: isInView ? "none" : "translateY(400px)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 3s 0.5s"
                            }}
                            key={id}
                            className="p-10 bg-blue-50 rounded-md flex flex-col gap-y-5 lg:w-72 lg:h-[480px]"
                        >
                            <img src={img} alt="illustration" className=" w-96" />
                            <h3 className=" text-2xl">{heading}</h3>
                            <p className="">{paragraph}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Benefits;