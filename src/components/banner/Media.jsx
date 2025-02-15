import React from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiScikitlearn, SiPandas, SiNumpy, SiTensorflow } from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      {/* Social Links */}
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href="https://github.com/mahadhassan2003" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/mahad_hasssan" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/mahad-hassan" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Skills Section */}
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Best Skill On</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <SiScikitlearn />
          </span>
          <span className="bannerIcon">
            <SiPandas />
          </span>
          <span className="bannerIcon">
            <SiNumpy />
          </span>
          <span className="bannerIcon">
            <SiTensorflow />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Media;
