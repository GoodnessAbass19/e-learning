import { Link } from "react-router-dom";

// library
import {ArrowRightIcon} from "@heroicons/react/24/solid"

// utils
import { styles } from "../../utils/styles";

import mentorship from '../../images/mentorship.jpg'

const Mentorship = () => {
    return (
        <div className={`${styles.paddingX} pb-8 flex flex-col-reverse gap-y-8 md:pb-14 lg:flex-row lg:gap-x-8`}>
            <div className=" flex flex-col items-center gap-y-5 md:items-start basis-1/2">
                <h1 className={`${styles.sectionHeading} text-center lg:text-start`}>
                    Our Mentorship Program
                </h1>

                <div className=" flex flex-col items-center gap-y-4 md:items-start">
                    <p className=" text-sm opacity-75 text-center md:text-start lg:text-lg">
                        This is a 5 week mentorship program in Career Development.
                        <br /> <br />
                        We help guide you in your professional career especially if you need next steps before or after getting certified.
                        <br /> <br />
                        Our instructors will provide you both technical and soft skills, and guidance on developing teamwork, communication, network building.
                    </p>

                    <Link
                        to="mentorship"
                        className="bg-orange-500 px-5 py-1 rounded-md text-white flex items-center gap-x-2"
                    >
                        More
                        <span>
                            <ArrowRightIcon width={15} />
                        </span>
                    </Link>
                </div>
            </div>
            <div className=" basis-1/2">
                <img src={mentorship} alt="" />
            </div>
        </div>
    );
}

export default Mentorship;