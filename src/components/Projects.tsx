import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Figma } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce solution with seamless checkout experience and inventory management.",
    image:
      "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMG9ubGluZXxlbnwxfHx8fDE3NjgwNTY0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Figma", "UI/UX", "Design System"],
    figma:
      "https://www.figma.com/design/KjOZGzZld2HTFtUWm3SBLl/JIFFY?m=auto&t=XFIP2dfk4VeY3oiI-1",
  },
  {
    id: 2,
    title: "Real Estate",
    description:
      "Modern real estate platform featuring property listings, virtual tours, and smart search functionality.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwcHJvcGVydHl8ZW58MXx8fHwxNzY4MDMxOTA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Figma", "UI/UX", "Design System"],
    figma:
      "https://www.figma.com/design/uWOBJDnD56OFHv5fkOfTtd/DamiDesign-Estate?m=auto&t=XFIP2dfk4VeY3oiI-1",
  },
  {
    id: 3,
    title: "NFT Card Design",
    description:
      "Creative NFT card designs with dynamic animations and unique digital art collections.",
    image:
      "https://images.unsplash.com/photo-1654183818269-22495f928eb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZnQlMjBkaWdpdGFsJTIwYXJ0fGVufDF8fHx8MTc2ODAyMDIyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["NFT", "Digital Art", "Branding"],
    figma:
      "https://www.figma.com/design/FIMx1w3utCVQThX75YCNn8/TYCOON-NFT-Card?m=auto&t=XFIP2dfk4VeY3oiI-1",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl text-gray-900 text-center mb-16"
        >
          Featured Projects
        </motion.h2>
        {/* Projects Card */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.figma}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              aria-labelledby={`project-title-${project.id}`}
              aria-describedby={`project-desc-${project.id}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -12,
                  rotate: [0, -1, 1, 0],
                  transition: { duration: 0.3 },
                }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
              >
                <div className="aspect-video overflow-hidden relative">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full"
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center pb-4"
                  >
                    <motion.span
                      initial={{ y: 20 }}
                      whileHover={{ y: 0 }}
                      className="text-white px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm"
                    >
                      View Details
                    </motion.span>
                  </motion.div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-2xl text-gray-900">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-sm cursor-default"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-4">
                    <div
                      className="flex items-center gap-2 text-gray-900 hover:text-gray-700 transition-all duration-300 ease-in-out"
                      aria-hidden="true"
                    >
                      <Figma size={20} />
                      Figma
                    </div>
                  </div>
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
