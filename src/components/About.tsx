import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl text-gray-900 text-center mb-16"
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700">
              I'm a creative professional with a passion for designing and building exceptional digital experiences. With expertise in modern web technologies and a keen eye for design, I bring ideas to life through clean code and thoughtful interfaces.
            </p>
            <p className="text-lg text-gray-700">
              My approach combines technical excellence with user-centered design principles, ensuring that every project not only looks great but also delivers real value to users.
            </p>
            <p className="text-lg text-gray-700">
              When I'm not coding or designing, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the community.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotate: 2 }}
              transition={{ duration: 0.3 }}
              className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative group"
            >
              <img
                src="/Profile.jpg"
                alt="DamiDesign Profile"
                className="w-full h-full object-cover"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-purple-600/20 to-pink-600/30"
              />
            </motion.div>
            {/* Decorative floating elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-xl opacity-70"
            />
            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full blur-xl opacity-70"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
