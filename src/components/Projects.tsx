import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Figma } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Shopify Redesign",
    description: "A comprehensive redesign of the Shopify dashboard focusing on accessibility, modern aesthetics, and improved user flow for merchants.",
    image: "https://images.unsplash.com/photo-1667372393119-c81c0cda0a29?q=80&w=1932&auto=format&fit=crop", // Beautiful abstract UI background
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
    description: "
