import { Palette, Smartphone, Globe, Zap, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const skills = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating beautiful, intuitive interfaces with Figma and design systems',
    link: 'https://www.figma.com/files/team/1521043690168576257/recents-and-sharing?fuid=1186464531927577581',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Building mobile-first, responsive applications that work everywhere',
    link: 'https://www.figma.com/files/team/1521043690168576257/recents-and-sharing?fuid=1186464531927577581',
  },
  {
    icon: Sparkles,
    title: 'Branding',
    description: 'Crafting unique brand identities and visual experiences that resonate',
    link: 'https://www.figma.com/files/team/1521043690168576257/recents-and-sharing?fuid=1186464531927577581',
  },
  {
    icon: Globe,
    title: 'Web Performance',
    description: 'Optimizing applications for speed and excellent user experience',
  },
  {
    icon: Zap,
    title: 'Modern Tools',
    description: 'Git, CI/CD, testing frameworks, and development best practices',
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl text-gray-900 text-center mb-16"
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const CardContent = (
              <>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-purple-400/5 to-pink-400/0"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 shadow-lg relative z-10"
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Icon size={24} className="text-white" />
                  </motion.div>
                </motion.div>
                <h3 className="text-xl text-gray-900 mb-2 relative z-10">{skill.title}</h3>
                <p className="text-gray-600 relative z-10">{skill.description}</p>
              </>
            );

            const cardProps = {
              initial: { opacity: 0, scale: 0.8 },
              whileInView: { opacity: 1, scale: 1 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: index * 0.1 },
              whileHover: { 
                scale: 1.05,
                boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
              },
              className: `p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white hover:from-white hover:to-gray-50 transition-all border border-gray-100 hover:border-blue-200 relative overflow-hidden group ${skill.link ? 'cursor-pointer' : ''}`,
            };

            if (skill.link) {
              return (
                <motion.a
                  key={index}
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...cardProps}
                >
                  {CardContent}
                </motion.a>
              );
            }

            return (
              <motion.div
                key={index}
                {...cardProps}
              >
                {CardContent}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}