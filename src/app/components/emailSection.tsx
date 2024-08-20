"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { FloatingDock } from "./ui/floating-dock";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { TextArea } from "./ui/textarea";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const LabelInputContainer = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div className={cn("flex flex-col space-y-2 w-full", className)}>
        {children}
      </div>
    );
  };

  const BottomGradient = () => {
    return (
      <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      </>
    );
  };

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      {/* <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-400 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div> */}
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials w-40">
          <FloatingDock items={links} />
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <div className="bg-gradient-to-br from-primary-600 to-secondary-400 p-0.5 rounded-md">
            <div className="bg-[#121212] p-4 rounded-md">
              <form className="flex flex-col" onSubmit={handleSubmit}>
                <div className="mb-6">
                  <LabelInputContainer>
                    <Label
                      htmlFor="email"
                      className="text-white block text-sm mb-2 font-medium"
                    >
                      Your Email
                    </Label>
                    <Input
                      name="email"
                      type="email"
                      id="email"
                      required
                      className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                      placeholder="Email@seuemail.com"
                    />
                  </LabelInputContainer>
                </div>
                <div className="mb-6">
                  <LabelInputContainer>
                    <Label
                      htmlFor="subject"
                      className="text-white block text-sm mb-2 font-medium"
                    >
                      Subject
                    </Label>
                    <Input
                      name="subject"
                      type="text"
                      id="subject"
                      required
                      className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                      placeholder="Just saying hi"
                    />
                  </LabelInputContainer>
                </div>
                <div className="mb-6">
                  <LabelInputContainer>
                    <Label
                      htmlFor="message"
                      className="text-white block text-sm mb-2 font-medium"
                    >
                      Message
                    </Label>
                    <TextArea
                      name="subject"
                      id="subject"
                      required
                      className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 h-20"
                      placeholder="Let's talk about..."
                    />
                  </LabelInputContainer>
                </div>
                <button
                  className="bg-gradient-to-br relative group/btn from-[#33353F]  text-white font-medium py-2.5 px-5 rounded-lg w-full mb-2"
                  type="submit"
                >
                  Send Message
                  <BottomGradient />
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
