
import { Link } from "react-router-dom";

// library
import { motion, AnimatePresence } from "framer-motion";

// utilities
import { styles } from "../../utils/styles";

const Banner = () => {

    return (
        <div className=" min-h-screen bg-hero-desktop bg-no-repeat bg-fixed bg-cover relative pt-48 pb-10 md:pt-40 lg:pt-60">
            <div className=" overlay"></div>
            <AnimatePresence>
                <motion.div
                    initial={{ y: -400, opacity: 0 }}
                    animate={{ y: 0, opacity: 1, transition: { duration: 2, ease: "easeIn", delay: 1 } }}
                    className={` ${styles.paddingX} h-full flex flex-col justify-center lg:max-w-screen-lg lg:mx-auto`}
                >
                    <div className=" flex flex-col items-center gap-y-10 z-10 xl:gap-y-8">
                        <h1 className={` text-3xl text-center font-semibold text-white md:text-4xl lg:text-5xl xl:text-6xl`}>
                            Launch into the <br className=" md:hidden" /> <span className=" text-orange-500 font-bold">cyber field</span>
                        </h1>
                        <p className={`${styles.paragraphFont} text-center text-white md:text-lg`}>
                            We train the next tech generation on the most innovative and recent technologies
                        </p>
                        <p className={`${styles.paragraphFont} text-center text-white md:text-lg`}>
                            Certified in Cybersecurity | Security plus training
                        </p>
                        <div className=" flex flex-col items-center gap-y-5 w-full md:flex-row md:justify-center md:gap-x-5">
                            <Link
                                to="mentorship"
                                className=" bg-black px-4 py-2 rounded text-center text-white border-2 border-black w-40 md:text-xl hover:opacity-90"
                            >
                                Mentorship
                            </Link>
                            <Link
                                to="courses"
                                className=' text-white bg-orange-500 border-2 border-orange-500 rounded px-4 py-2 text-center w-40 md:text-xl hover:opacity-90'
                            >
                                Live courses
                            </Link>
                        </div>
                        <p className=" text-white font-medium">+1 (433) 888-6978</p>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default Banner;