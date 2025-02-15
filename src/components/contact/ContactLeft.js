import React from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Mahad Hassan</h3>
        <p className="text-lg font-normal text-gray-400">
          Artificial Intelligence Engineer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Feel free to reach out for collaborations, AI projects, or any inquiries. 
          I'm always open to discussing new opportunities!
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+923426225425</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">mahadhassan095@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
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
    </div>
  );
}

export default ContactLeft;
