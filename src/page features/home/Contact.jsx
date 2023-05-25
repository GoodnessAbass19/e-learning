import { styles } from "../../utils/styles";

const Contact = () => {
    return (
        <div className={`${styles.paddingX} ${styles.paddingY}`}>
            <div>
                <div className=" flex flex-col gap-y-3 items-center mb-10 lg:mb-16">
                    <h1 className={`${styles.sectionHeading}`}>
                        Contact Us
                    </h1>
                    <p>
                        Looking to get into Cybersecurity? Have questions about our class or need mentorship?
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;