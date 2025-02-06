import { motion } from "framer-motion";

const experience = [
    {
        role: "Senior Engineer - IT Software Development @ Alok Industries Ltd (Reliance)",
        duration: "April 2024 - Present",
        description: "Applications Development, Applications Deployment on the organization’s server using IIS Manager, ensuring seamless deployment and optimal performance. Maintain and support large-scale packaging applications to ensure functionality and performance. Collaborate with cross-functional teams to integrate various systems, ensuring seamless operation and cohesive functionality of all developed and maintained applications.",
    },
    {
        role: "Junior Developer @ R1 RCM",
        duration: "Oct 2022 - March 2024",
        description: "Developed and implemented responsive user interfaces using React.js, enhancing user experience. Built and deployed scalable RESTful APIs with Node.js and Express.js for backend operations. Created reusable code components to improve scalability. Provided ongoing support for deployed applications, including troubleshooting and implementing client feedback. Collaborated with clients and stakeholders to gather requirements, implement feature updates, and resolve issues promptly.",
    },
    {
        role: "Freelance Developer @ ProcureFlow",
        duration: "July 2022 - September 2022",
        description: "Revamped procurement workflows by streamlining PR/QR creation processes and integrating graphical dashboard overviews. Implemented RBAC for secure authorization and data integrity, while enhancing user experience with automated email alerts and downloadable quotations. Developed a robust backend with Node.js and Express.js, and utilized MongoDB for efficient data management.",
    },
    {
        role: "Freelance Developer @ Xipertech",
        duration: "March 2022 - June 2022",
        description: "Founded an innovative IT service start-up delivering cutting-edge solutions to diverse clients. Designed and implemented responsive frontends using React.js and Tailwind CSS, and built scalable backend services with Node.js and Express.js, leveraging MongoDB for dynamic data handling.",
    },
    {
        role: "Freelance Developer @ BGDFH",
        duration: "January 2022 - February 2022",
        description: "Developed a secure, scalable website for facilitating property transactions in the Delhi/NCR region. Created an intuitive user interface with React.js and Tailwind CSS, and engineered a robust backend with Node.js and Express.js, integrating MongoDB for seamless data management.",
    }
];

const Experience = () => {
    return (
        <section className="py-16 text-center bg-gray-900 text-white">
            <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
            <motion.div
                className="max-w-3xl mx-auto space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                {experience.map((job, index) => (
                    <motion.div
                        key={index}
                        className="p-6 bg-gray-800 rounded-lg shadow-lg text-left mx-4 md:mx-0"
                        whileHover={{ scale: 1.02 }}
                    >
                        <h3 className="text-xl font-semibold">{job.role}</h3>
                        <p className="text-gray-400">{job.duration}</p>
                        <p className="mt-3">{job.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Experience;
