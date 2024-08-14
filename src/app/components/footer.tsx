import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between mx-auto">
        <Link
          href={"/"}
          className="text-xl md:text-4xl text-white font-semibold "
        >
          <span className="bg-gradient-to-r from-primary-600 to-secondary-400 inline-block text-transparent bg-clip-text">
            {"<JPires />"}
          </span>
        </Link>
        <p className="text-slate-600">Jeferson Pires</p>
        <p className="text-slate-600"> Copyright © 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
