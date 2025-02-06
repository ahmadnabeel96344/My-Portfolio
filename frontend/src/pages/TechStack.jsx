import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript, SiTailwindcss } from "react-icons/si";

const techStack = [
  { name: "React.js", icon: <FaReact className="text-blue-400" />, link: "https://reactjs.org" },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, link: "https://nodejs.org" },
  { name: "Express.js", icon: <SiExpress className="text-gray-500" />, link: "https://expressjs.com" },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, link: "https://www.mongodb.com" },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-300" />, link: "https://tailwindcss.com" },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" />, link: "https://git-scm.com" },
  { name: "Databases", icon: <FaDatabase className="text-purple-500" />, link: "https://en.wikipedia.org/wiki/Database" },
];

const TechStack = () => {
  return (
    <section className="py-16 text-center bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-6">Tech Stack I Use</h2>
      <motion.div 
        className="flex flex-wrap justify-center gap-6"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        {techStack.map((tech, index) => (
          <motion.div 
            key={index} 
            className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-800 shadow-lg w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44"
            whileHover={{ scale: 1.1 }}
          >
            {/* Link Wrapper */}
            <a 
              href={tech.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full h-full"
            >
              <div className="text-4xl sm:text-5xl">
                {tech.icon}
              </div>
              <p className="mt-2 text-xs sm:text-sm">{tech.name}</p>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TechStack;
