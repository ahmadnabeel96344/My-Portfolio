import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="py-16 text-center bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
      <motion.div 
        className="flex justify-center space-x-6"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        <a href="mailto:ahmadnabeel487@gmail.com" className="text-blue-400" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope text-blue-400 text-4xl"></i>
        </a>
        <a href="https://www.linkedin.com/in/nabeel-ahmad-332450178?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="text-blue-400" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin text-blue-400 text-4xl"></i>
        </a>
        <a href="https://github.com/ahmadnabeel96344" className="text-blue-400" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github text-blue-400 text-4xl"></i>
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
