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
        <li>Sistemas de informação, Uniaraxá</li>
      </ul>
    ),
  },
  {
    title: "soft-skills",
    id: "soft-skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Trabalho em equipe</li>
        <li>Relacionamentos interpessoais</li>
        <li>Criatividade</li>
        <li>Perseverança</li>
        <li>Habilidades de comunicação</li>
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
          <h2 className="text-4xl font-bold text-white mb-4">Sobre Mim</h2>
          <p className="text-base lg:text-lg ">
            Sou Jeferson, Desenvolvedor Front-End e Mobile apaixonado por criar interfaces fluidas e apps móveis de alto desempenho.
            Especializado em React e React Native, meu trabalho vai além do código:
            é sobre entregar experiências que encantam usuários e resolvem problemas reais.
            <br />
            <br />
            Minha carreira começou da curiosidade em transformar ideias em realidade digital.
            Hoje, vivo em constante evolução, explorando ferramentas e metodologias para construir soluções escaláveis e inovadoras.
            <br />
            <br />
            Busco desafios que me tirem da zona de conforto, porque acredito que é assim que crescemos.
            Se você procura um dev comprometido com qualidade e impacto, vamos conversar!"
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Habilidades Técnicas{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("soft-skills")}
              active={tab === "soft-skills"}
            >
              {" "}
              Habilidades Comportamentais{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Educação{" "}
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
