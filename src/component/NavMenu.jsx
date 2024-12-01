/* eslint-disable jsx-a11y/anchor-is-valid */
import { motion } from "framer-motion";
import { useState } from "react";
import Marquee from "react-fast-marquee";

const NavMenu = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredSubIndex, setHoveredSubIndex] = useState(null);

  const menuItems = [
    {
      label: "Menu",
      submenu: [
        { title: "Home" },
        { title: "PROJECTS" },
        { title: "STUDY" },
        { title: "Lab" },
        { title: "THE CLUB" },
        { title: "Contact" },
        { title: "Instagram" },
      ],
    },
    {
      label: "Projects",
      submenu: [
        { title: "Reel" },
        { title: "La Memoria Infinita" },
        { title: "Los Colonos" },
        { title: "Jacked" },
        { title: "La Señal Invisible" },
        { title: "Quemar Tu Casa" },
        { title: "Fidocs" },
        { title: "Señorita 89" },
        { title: "Reel" },
        { title: "La Memoria Infinita" },
        { title: "Los Colonos" },
        { title: "Jacked" },
        { title: "La Señal Invisible" },
        { title: "Quemar Tu Casa" },
        { title: "Fidocs" },
        { title: "Señorita 89" },
        { title: "Reel" },
        { title: "La Memoria Infinita" },
        { title: "Los Colonos" },
        { title: "Jacked" },
        { title: "La Señal Invisible" },
        { title: "Quemar Tu Casa" },
        { title: "Fidocs" },
        { title: "Señorita 89" },
        { title: "Reel" },
        { title: "La Memoria Infinita" },
        { title: "Los Colonos" },
        { title: "Jacked" },
        { title: "La Señal Invisible" },
        { title: "Quemar Tu Casa" },
        { title: "Fidocs" },
        { title: "Señorita 89" },
        { title: "Reel" },
        { title: "La Memoria Infinita" },
        { title: "Los Colonos" },
        { title: "Jacked" },
        { title: "La Señal Invisible" },
        { title: "Quemar Tu Casa" },
        { title: "Fidocs" },
        { title: "Señorita 89" },
      ],
    },
    { label: "Good Luck" },
    { label: "study" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <ul className="flex absolute w-full gap-4 justify-between font-bold uppercase bg-transparent ">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="w-[25%] text-[18px] hover:border-2 hover:bg-white hover:border-black text-center relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <a href={`#${item.label.toLowerCase()}`}>{item.label}</a>
            {hoveredIndex === index && item.submenu && (
              <motion.div
                className="absolute bg-white h-screen border-black text-black border w-full overflow-y-auto z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <ul>
                  {item.submenu.map((subItem, idx) => (
                    <li
                      key={idx}
                      className="border-b-2 bg-white border-black"
                      onMouseEnter={() => setHoveredSubIndex(idx)}
                      onMouseLeave={() => setHoveredSubIndex(null)}
                    >
                      <a className="text-black text-[35px]">
                        {item.label === "Projects" ? (
                          <div className="text-center">
                            {hoveredSubIndex === idx ? (
                              // Render repeated spans with marquee on hover
                              <Marquee>
                                <div className="overflow-hidden">
                                  {Array(15)
                                    .fill(0)
                                    .map((_, repeatIdx) => (
                                      <span
                                        key={repeatIdx}
                                        className="inline-block mx-1"
                                      >
                                        {subItem.title}/
                                      </span>
                                    ))}
                                </div>
                              </Marquee>
                            ) : (
                              // Render normal title by default
                              <span>{subItem.title}</span>
                            )}
                          </div>
                        ) : (
                          <span>{subItem.title}</span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </li>
        ))}
      </ul>
    </motion.nav >
  );
};

export default NavMenu;
