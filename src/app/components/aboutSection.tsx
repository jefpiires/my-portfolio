"use client";
import Image from "next/image";
import React, { useTransition, useState } from "react";
import TabButton from "./tabButton";

const TAB_DATA = [
  {
    title: "Skillls",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>React Native</li>
        <li>Typescript</li>
        <li>Tailwindcss</li>
        <li>Cypress</li>
        <li>NextJS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Information Systems, Uniaraxá</li>
      </ul>
    ),
  },
  {
    title: "soft-skills",
    id: "soft-skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Teamwork</li>
        <li>Interpersonal Relationships</li>
        <li>Creativity</li>
        <li>Perseverance</li>
        <li>Communication Skills</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.jpg"
          width={500}
          height={500}
          alt="about image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg ">
            I'm Jeferson, a Front-End and Mobile Developer with a strong
            background in creating intuitive interfaces and robust mobile
            applications. With expertise in React, React Native, and various
            other technologies, my focus is on delivering high-quality solutions
            that meet user needs and exceed expectations.
            <br />
            <br />
            My journey in development started with a deep interest in how
            technology can transform ideas into engaging digital experiences.
            Since then, I've been dedicated to honing my skills and exploring
            new tools and techniques that enable me to build more efficient and
            innovative products.
            <br />
            <br />
            My goal is to continuously seek new challenges that allow me to grow
            as a developer and contribute to projects that make a difference. I
            am committed to ongoing learning and adapting to industry trends to
            ensure that the solutions I provide are not only functional but also
            impactful and cutting-edge.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Hard Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("soft-skills")}
              active={tab === "soft-skills"}
            >
              {" "}
              Soft Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content ?? (
              <p>Content not found</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
