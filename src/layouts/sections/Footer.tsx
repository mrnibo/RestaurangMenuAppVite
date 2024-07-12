import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import defaultSettings from "@/data/general";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p>
            &copy; {new Date().getFullYear()} My Website. All rights reserved.
          </p>
        </div>
        <div className="flex justify-center space-x-4 items-center">
          <a
            href={defaultSettings.site.twitterLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-300 flex items-center"
          >
            <FaTwitter className="mr-2" /> Twitter
          </a>
          <a
            href={defaultSettings.site.facebookLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 flex items-center"
          >
            <FaFacebookF className="mr-2" /> Facebook
          </a>
          <a
            href={defaultSettings.site.instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-pink-300"
          >
            <FaInstagram className="mr-2" /> Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
