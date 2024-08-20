"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-400">
              Hello, I&#39;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Jeferson",
                1000,
                "Front-End Developer",
                1000,
                "Mobile Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I am dedicated to crafting clean and efficient code, constantly
            refining my skills to bring innovative solutions to the table.
            Passionate about turning ideas into digital experiences, each
            project represents a step forward in my journey as a developer.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-600 to-secondary-400 hover:shadow-md hover:shadow-primary-600 hover:font-medium hover:from-secondary-400 hover:to-primary-600 text-white font-medium"
            >
              Hire Me
            </Link>
            <Link
              href="https://docs.google.com/document/d/1ts2SyWAFE_zg0xFovOZSnVY1yjvVKHCh9hKv4mrnGQM/edit?usp=sharing"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-600 to-secondary-400 hover:shadow-md hover:shadow-primary-600 hover:font-medium hover:from-secondary-400 hover:to-primary-600 font-medium text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-[#12121280] rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative shadow-secondary-400 shadow-sm">
            <Image
              src="/images/hero-image.jpg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
