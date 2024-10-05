import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { Tooltip } from "flowbite-react";

const SocialMedia = ({ className, top = "mt-10" }) => {
  const socialMediaLinks = [
    {
      icon: "fa-brands fa-github",
      url: "https://github.com/muhismail015",
      title: "GitHub",
    },
    {
      icon: "fa-brands fa-linkedin",
      url: "https://www.linkedin.com/in/muhismail015/",
      title: "LinkedIn",
    },
    {
      icon: "fa-brands fa-facebook-f",
      url: "https://www.facebook.com/ismailhere.7/",
      title: "Facebook",
    },
    {
      icon: "fa-brands fa-instagram",
      url: "https://www.instagram.com/muhh.ismail__/",
      title: "Instagram",
    },
    {
      icon: "fa-brands fa-whatsapp",
      url: "https://wa.me/6289687601023",
      title: "WhatsApp",
    },
    {
      icon: "fa-brands fa-telegram",
      url: "https://t.me/muhismaiil",
      title: "Telegram",
    },
  ];

  return (
    <div className={`lg:mt-auto ${top} flex`}>
      <ul className="flex items-center text-3xl">
        {socialMediaLinks.map((link, index) => (
          <li key={index} className="transition hover:text-slate-300">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <Tooltip className="text-xs" content={link.title} trigger="hover">
                <Link to={link.url} target="_blank" title={link.title}>
                  <FontAwesomeIcon className={className} icon={link.icon} />
                </Link>
              </Tooltip>
            </motion.div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMedia;
