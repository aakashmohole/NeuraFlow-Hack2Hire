import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-800 to-blue-900 py-8 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 md:flex md:justify-between">
        {/* Brand Section */}
        <div className="mb-6 md:mb-0">
          <motion.h2
            className="text-2xl font-bold text-white"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            NeuraFlow
          </motion.h2>
          <p className="text-gray-400 mt-2">
            Elevate your freelancing experience with smart, AI-driven talent
            matching.
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul>
            {["Home", "About", "Services", "Contact", "Blog"].map(
              (link, index) => (
                <motion.li
                  key={index}
                  className="hover:text-blue-300 transition duration-150"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  <a href="#" className="block py-1">
                    {link}
                  </a>
                </motion.li>
              )
            )}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p>123 Freelance Street, Remote City</p>
          <p>Email: contact@neuraflow.com</p>
          <p>Phone: +1 (555) 012-3456</p>
        </div>

        {/* <div>
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 mt-4">
            {[FaFacebook, FaTwitter, FaLinkedin, FaGithub].map(
              (Icon, index) => (
                <motion.a
                  href="#"
                  key={index}
                  className="text-2xl text-gray-400 hover:text-blue-400 transition duration-150"
                  whileHover={{ scale: 1.2, color: "#60A5FA" }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Icon />
                </motion.a>
              )
            )}
          </div>
        </div> */}
      </div>

      <div className="mt-8 text-center border-t border-gray-700 pt-4">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} NeuraFlow. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
