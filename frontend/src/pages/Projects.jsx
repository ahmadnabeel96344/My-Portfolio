import { motion } from "framer-motion";

const projects = [
  {
    title: "Visitors Record and Tracking App",
    description: "Developed a web application to efficiently record, manage, and track visitor details with real-time updates, ensuring seamless user interaction and data handling.",
    tech: ["React.js", "React-Redux", "Express.js", "SQL DB"],
    liveDemo: "#",
    repo: "#",
  },
  {
    title: "Asset Management App",
    description: "Designed a comprehensive system for tracking and managing IT hardware assets, enhancing operational efficiency and asset visibility.",
    tech: ["React.js", "Express.js", "SQL DB"],
    liveDemo: "#",
    repo: "#",
  },
  {
    title: "Vehicle Movement Records App",
    description: "Built an application to streamline and manage vehicle authentication and movement records, improving data accuracy and accessibility.",
    tech: ["React.js", "Express.js", "SQL DB"],
    liveDemo: "#",
    repo: "#",
  },
  {
    title: "Cone Label Printing App",
    description: "Created a desktop application for generating and printing cone labels, utilizing a combination of web and desktop technologies for enhanced functionality.",
    tech: ["React.js", "Express.js", "Electron"],
    liveDemo: "#",
    repo: "#",
  },
  {
    title: "Embroidery Plant Processes App",
    description: "Developed an intuitive web application to optimize and streamline various processes in an embroidery plant, ensuring ease of use and operational efficiency.",
    tech: ["React.js"],
    liveDemo: "#",
    repo: "#",
  },
];


const Projects = () => {
  return (
    <section id="projects" className="py-16 text-center bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-800 rounded-lg shadow-lg text-left w-full max-w-full"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-400 mt-2">{project.description}</p>
            <p className="mt-3 text-sm text-blue-400">{project.tech.join(" • ")}</p>
            {/* <div className="mt-4 flex gap-4">
              <a href={project.liveDemo} className="text-blue-500">Live Demo</a>
              <a href={project.repo} className="text-gray-400">GitHub Repo</a>
            </div> */}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
