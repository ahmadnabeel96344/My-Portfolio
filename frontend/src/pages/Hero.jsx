import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import profileImage from "../assets/Profile.jpg"; // Import your image
// import resume from "../assets/Nabeel Ahmad_latest resume1.pdf"; // Import your resume

// const words = ["MERN Stack | JavaScript | SQL"];

const words = ["MERN Stack Developer", "Full-Stack Engineer", "JavaScript Enthusiast"];


const Hero = () => {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const typingSpeed = 150; // Typing speed (slower)
    const deletingSpeed = 100; // Deleting speed (slower)
    const pauseDuration = 1000; // Pause before starting to delete

    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = '/Nabeel Ahmad_latest resume1.pdf'; // Make sure this path is correct
        link.download = 'Nabeel_Ahmad_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // useEffect(() => {
    //     const handleTyping = () => {
    //         if (!isDeleting && charIndex < words[wordIndex].length) {
    //             // Typing mode
    //             setText((prev) => prev + words[wordIndex][charIndex]);
    //             setCharIndex((prev) => prev + 1);
    //         } else if (isDeleting && charIndex > 0) {
    //             // Deleting mode
    //             setText((prev) => prev.slice(0, -1));
    //             setCharIndex((prev) => prev - 1);
    //         } else {
    //             // When the word is fully typed or deleted, switch to next step
    //             if (!isDeleting && charIndex === words[wordIndex].length) {
    //                 setIsDeleting(true);
    //                 setTimeout(() => setIsDeleting(false), pauseDuration);
    //             } else if (isDeleting && charIndex === 0) {
    //                 setWordIndex((prev) => (prev + 1) % words.length);
    //                 setTimeout(() => setIsDeleting(false), pauseDuration);
    //             }
    //         }
    //     };

    //     const typingTimeout = setTimeout(
    //         handleTyping,
    //         isDeleting ? deletingSpeed : typingSpeed
    //     );
    //     return () => clearTimeout(typingTimeout);
    // }, [charIndex, isDeleting, wordIndex]);


    useEffect(() => {
        const handleTyping = () => {
            if (!isDeleting && charIndex < words[wordIndex].length) {
                setText((prev) => prev + words[wordIndex][charIndex]);
                setCharIndex((prev) => prev + 1);
            } else if (isDeleting && charIndex > 0) {
                setText((prev) => prev.slice(0, -1));
                setCharIndex((prev) => prev - 1);
            } else {
                setIsDeleting((prev) => !prev);
                if (!isDeleting) {
                    setTimeout(() => setIsDeleting(true), 1000);
                } else {
                    setWordIndex((prev) => (prev + 1) % words.length);
                    setCharIndex(0);
                }
            }
        };

        const typingTimeout = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(typingTimeout);
    }, [charIndex, isDeleting, wordIndex]);

    return (
        <section className="h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left relative">
            {/* Gradient Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900/80 to-beige dark:to-gray-900 z-0"></div>

            {/* Left Side - Text & Buttons */}
            <div className="md:w-1/2 space-y-6 z-10 relative ml-20">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl font-bold text-white">
                        Hi, I'm <span className="text-blue-500">Nabeel Ahmad</span>
                    </h1>
                    <p className="text-lg text-gray-400 mt-4">
                        <span className="text-blue-400">{text}</span>
                        <span className="text-blue-500">|</span>
                    </p>
                </motion.div>

                {/* Call-to-Action Buttons */}
                <motion.div
                    className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <button
                        onClick={downloadResume}
                        className="px-6 py-3 border border-blue-500 text-blue-500 font-semibold rounded-lg"
                    >
                        Download Resume
                    </button>
                </motion.div>
            </div>

            {/* Right Side - Profile Image */}
            <motion.div
                className="md:w-1/2 flex justify-center mt-8 md:mt-0 order-first md:order-none z-10 relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <img
                    src={profileImage}
                    alt="Nabeel Ahmad"
                    className="w-20 h-20 md:w-80 md:h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-blue-500 shadow-lg"
                />
            </motion.div>

            {/* Floating Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 text-gray-400 z-10"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
                Scroll Down ↓
            </motion.div>
        </section>
    );
};

export default Hero;
