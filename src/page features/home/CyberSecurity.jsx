import { useRef } from "react";

import { useInView } from "framer-motion";

import { styles } from "../../utils/styles";

const CyberSecurity = () => {

    const ref = useRef(null)
    const isInView = useInView(ref);
    return (
        <div className={`${styles.paddingX} ${styles.paddingY}`}>
            <div className=" flex flex-col items-center gap-y-8 lg:max-w-screen-md lg:mx-auto">
                <h1 className={`${styles.sectionHeading}`}>
                    Salary for a CyberSecurity expert
                </h1>
                <p className=" text-sm text-center lg:text-lg">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus et fugit, aliquid doloremque sapiente vel commodi quia molestiae, dolorum repellat, nihil aliquam quas vero accusamus. Reprehenderit doloremque sit, cupiditate expedita, perferendis laudantium iusto nulla earum, odit dolor reiciendis incidunt explicabo distinctio necessitatibus corporis. Veniam sint excepturi dolore sed minus porro.
                </p>
            </div>
        </div>
    );
}

export default CyberSecurity;