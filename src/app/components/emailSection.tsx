"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Image from "next/image";
import { FloatingDock } from "./ui/floating-dock";
import { cn } from "@/lib/utils";

const EmailSection = () => {

  const links = [
    {
      title: "GitHub",
      icon: <Image src={GithubIcon} alt="Github Icon" />,
      href: "https://github.com/jefpiires",
    },
    {
      title: "Linkedin",
      icon: <Image src={LinkedinIcon} alt="Linkedin Icon" />,
      href: "https://www.linkedin.com/in/jeferson-piires/",
    },
  ];

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   console.log('form', form.subject.value);
  //   // console.log(form.message.value);
  //   const data = {
  //     email: form.email.value,
  //     subject: form.subject.value,
  //     message: form.message.value,
  //   };
  //   console.log(data);
  //   const JSONdata = JSON.stringify(data);
  //   const endpoint = "/api/send";

  //   // Form the request for sending data to the server.
  //   const options = {
  //     // The method is POST because we are sending data.
  //     method: "POST",
  //     // Tell the server we're sending JSON.
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     // Body of the request is the JSON data we created above.
  //     body: JSONdata,
  //   };

  //   const response = await fetch(endpoint, options);
  //   const resData = await response.json();

  //   if (response.status === 200) {
  //     console.log("Message sent.");
  //     setEmailSubmitted(true);
  //   }
  // };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      {/* <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-400 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div> */}
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Entre em contato!
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">

          No momento, estou buscando novas oportunidades, e minha caixa de entrada está sempre aberta.
          Se você tiver alguma dúvida ou só quiser dar um oi, farei o possível para responder!
        </p>
        <div className="socials w-40">
          <FloatingDock items={links} />
        </div>
      </div>

    </section>
  );
};

export default EmailSection;
