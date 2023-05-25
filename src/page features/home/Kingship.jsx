import { Link } from "react-router-dom";
import { styles } from "../../utils/styles";

// library
import { FaYoutube, FaFacebookF, FaTwitter } from 'react-icons/fa'

const Kingship = () => {
    const socials = [
        {
            id: 1,
            socialMedia: <FaYoutube />
        },
        {
            id: 2,
            socialMedia: <FaFacebookF />
        },
        {
            id: 3,
            socialMedia: <FaTwitter />
        }
    ]

    return (
        <div className={`${styles.paddingX} ${styles.paddingY} relative bg-benefits-banner bg-no-repeat bg-fixed bg-cover flex flex-col items-center gap-y-10 lg:flex-row lg:gap-x-20`}>
            <div className=" overlay"></div>
            <div className=" flex flex-col items-center gap-y-5 z-30 lg:items-start">
                {/* <h1 className={`${styles.sectionHeading}`}>
                    Why Kingship
                </h1> */}
                <div className=" flex flex-row items-center gap-x-4">
                    {socials.map(({ id, socialMedia }) => {
                        return (
                            <Link
                                key={id}
                                className=" text-2xl"
                            >
                                {socialMedia}
                            </Link>
                        )
                    })}
                </div>
            </div>

            <div className=" flex flex-col items-center gap-y-5 lg:flex-row lg:gap-x-20 z-30">
                <div className=" bg-gray-200 rounded-sm p-5 flex flex-col gap-y-2">
                    <h3>
                        Goal Oriented
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae nemo voluptate eum veniam animi inventore mollitia fugit laboriosam obcaecati sit?
                    </p>
                </div>

                <div className=" flex flex-col gap-y-5">
                    <div className=" bg-gray-200 rounded-sm p-5 flex flex-col gap-y-2">
                        <h3>
                            Promising
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae nemo voluptate eum veniam animi inventore mollitia fugit laboriosam obcaecati sit?
                        </p>
                    </div>
                    <div className=" bg-gray-200 rounded-sm p-5 flex flex-col gap-y-2">
                        <h3>
                            Fun
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae nemo voluptate eum veniam animi inventore mollitia fugit laboriosam obcaecati sit?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Kingship;