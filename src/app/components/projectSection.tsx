"use client";
import React, { useRef, useState } from "react";
import ProjectCard from "./projectCard";
import ProjectTag from "./projectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Barba Bruta",
    description: "Agendamento para barbearia",
    image: "/images/projects/1.webp",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/jefpiires/barba-brutal",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Spotify Tailwind",
    description: "Criando interface Spotify com Tailwind",
    image: "/images/projects/spotify-tailwind.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jefpiires/TailwindSpotify",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "in.Orbit",
    description: "Gerenciador de Metas",
    image: "/images/projects/in-orbit.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jefpiires/NLW-pocket",
    previewUrl: "https://nlw-pocket-bay.vercel.app/",
  },
];
//#6cd890

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section ref={ref} id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.5 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tag={project.tag}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
