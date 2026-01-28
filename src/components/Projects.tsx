import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Figma } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Shopify Redesign",
    description: "A comprehensive redesign of the Shopify dashboard focusing on accessibility, modern aesthetics, and improved user flow for merchants.",
    image: "https://images.unsplash.com/photo-1667372393119-c81c0cda0a29?q=80&w=1932&auto=format&fit=crop", 
    tags: ["Figma", "UI/UX", "Prototyping"],
    figma: "https://www.figma.com/design/Tv1qlaS7hpKwTog9R5iOnr/Shopify?m=auto&t=PO5xDktF6RiXRYHN-6",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with seamless checkout experience and inventory management.",
    image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMG9ubGluZXxlbnwxfHx8fDE3NjgwNTY0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Figma", "UI/UX", "Design System"],
    figma: "https://www.figma.com/design/KjOZGzZld2HTFtUWm3SBLl/JIFFY?m=auto&t=XFIP2dfk4VeY3oiI-1",
  },
  {
    id: 3,
    title: "Real Estate",
    description: "Modern real estate platform featuring property listings, virtual tours, and smart search functionality.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwcHJvcGVydHl8ZW58MXx8fHwxNzY4MDMxOTA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Figma", "UI/UX", "Design System"],
    figma: "https://www.figma.com/design/uWOBJDnD56OFHv5fkOfTtd/DamiDesign-Estate?m=auto&t=XFIP2dfk4VeY3oiI-1",
  },
  {
    id: 4,
    title: "NFT Card Design",
    description: "Creative NFT card designs with dynamic animations and unique digital art collections.",
    image: "https://images.unsplash.com/photo-1654183818269-22495f928eb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZnQlMjBkaWdpdGFsJTIwYXJ0fGVufDF8fHx8MTc2ODAyMDIyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["NFT", "Digital Art", "Branding"],
    figma: "https://www.figma.com/design/FIMx1w3utCVQThX75YCNn8/TYCOON-NFT-Card?m=auto&t=XFIP2dfk4VeY3oiI-1",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl text-gray-900 dark:text-white text-center mb-16"
        >
          Featured Projects
        </motion.h2>

        {/* --- SCROLLING CONTAINER START --- */}
        <div className="relative">
          {/* Container for horizontal scroll */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-12 px-4 scrollbar-hide">
            
            {projects.map((project, index) => (
              <a
                key={project.id}
                href={project.figma}
                target="_blank"
                rel="noopener noreferrer"
                // Fixed width ensures the horizontal scrolling works
                className="flex-shrink-0 w-[85vw] md:w-[450px] snap-center block group"
                aria-labelledby={`project-title-${project.id}`}
                aria-describedby={`project-desc-${project.id}`}
              >
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
                >
                  {/* Image Area */}
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full"
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="opacity-0 group-hover:opacity-100 text-white px-6 py-2 rounded-full bg-black/50 backdrop-blur-md font-medium transition-all duration-300"
                      >
                        View Project
                      </motion.span>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="mt-auto flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium group-hover:gap-3 transition-all">
                      <Figma size={18} />
                      <span>Open in Figma</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </a>
            ))}

          </div>
          
          {/* Gradient fade on the right to indicate scrolling */}
          <div className="absolute right-0 top-0 bottom-12 w-24 bg-gradient-to-l from-gray-50 dark:from-gray-800 to-transparent pointer-events-none md:block hidden" />
        </div>
        {/* --- SCROLLING CONTAINER END --- */}

      </div>
    </section>
  );
}
