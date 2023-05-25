import { Link } from "react-router-dom";

// library
import { motion, AnimatePresence } from 'framer-motion';

const ToggleMenu = ({ isOpen, setIsOpen, links }) => {

    // animation
    const item = {
        exit: {
            opacity: 0,
            height: 0,
            transition: {
                ease: "easeInOut",
                duration: 0.3,
                // delay: .9
            }
        }
    }

    const handleToggle = () => {
        setIsOpen(false)
    }

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={item}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "100vh", opacity: 1 }}
                        transition={{ duration: .3 }}
                        exit="exit"
                        className=' bg-black p-10 text-white fixed w-full top-20 z-50 h-screen flex flex-col items-center gap-y-5 md:hidden'
                    >
                        <ul className='flex flex-col items-center gap-y-5'>
                            {links.map(({ id, link, url }) => {
                                return (
                                    <motion.li
                                        variants={item}
                                        initial={{ y: 80, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: .3 }}
                                        exit={{
                                            opacity: 0,
                                            y: 90,
                                            transition: {
                                                ease: "easeInOut",
                                                delay: .5
                                            }
                                        }}
                                        key={id}
                                        onClick={handleToggle}
                                    >
                                        <Link
                                            to={url}
                                            className=' font-["Poppins"] capitalize opacity-75 hover:border-b-2 hover:border-b-teal-500 md:text-sm'
                                        >
                                            {link}
                                        </Link>
                                    </motion.li>
                                )
                            })}
                        </ul>
                        <Link
                            className=' font-["Poppins"] opacity-75 border-2 border-teal-500 rounded px-4 py-1 md:text-sm'
                        >
                            Register
                        </Link>
                        {/* <Link
                            className=' font-["Poppins"] text-white opacity-75 bg-teal-500 border-2 border-teal-500 rounded px-4 py-1 md:text-sm'
                        >
                            Live courses
                        </Link> */}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default ToggleMenu;