import React, { useEffect, useRef } from 'react';

const Portfolio = () => {
  // Centralized project data

  const leftRef = useRef(null);
  const middleRef = useRef(null);
  const rightRef = useRef(null);
  let isSyncing = false; // To prevent recursive scroll events


  const projects = [
    {
      id: "project-1386",
      title: "Toro",
      subtitle: "Gusano",
      bgColor: "bg-[#7e8984]",
      imgSrc: "https://buenasuerte.cl/web2024/wp-content/uploads/2023/08/00-P-Toro-600x375.png",
      link: "https://buenasuerte.cl/proyectos/toro/",
    },
    {
      id: "project-1585",
      title: "La Jauría",
      subtitle: "Fábula",
      bgColor: "bg-[#939393]",
      imgSrc: "https://buenasuerte.cl/web2024/wp-content/uploads/2023/09/P-Jauria-600x375.png",
      link: "https://buenasuerte.cl/proyectos/la-jauria/",
    },
    {
      id: "project-1614",
      title: "Vik NFT",
      subtitle: "Vik",
      bgColor: "bg-[#b3cdd8]",
      imgSrc: "https://buenasuerte.cl/web2024/wp-content/uploads/2023/10/00-P-Vik-NFT-600x375.png",
      link: "https://buenasuerte.cl/proyectos/vik-nft/",
    },
    {
      id: "project-1456",
      title: "Nido",
      subtitle: "Nestle",
      bgColor: "bg-[#f2c454]",
      imgSrc: "https://buenasuerte.cl/web2024/wp-content/uploads/2023/08/P-Nido-600x375.png",
      link: "https://buenasuerte.cl/proyectos/nido/",
    },
    {
      id: "project-1582",
      title: "CMPC",
      subtitle: "Atómica",
      bgColor: "bg-[#febb2f]",
      imgSrc: "https://buenasuerte.cl/web2024/wp-content/uploads/2023/09/01-W-PN-CMPC-600x375.png",
      link: "https://buenasuerte.cl/proyectos/cmpc/",
    },
    {
      id: "project-1314",
      title: "Ardiente Paciencia",
      subtitle: "Fábula",
      bgColor: "bg-[#f9e026]",
      imgSrc: "https://buenasuerte.cl/web2024/wp-content/uploads/2023/07/P-Ardiente-600x375.png",
      link: "https://buenasuerte.cl/proyectos/ardiente-paciencia/",
    },
    {
      id: "project-1591",
      title: "Señorita 89",
      subtitle: "Fábula",
      bgColor: "bg-[#4a2793]",
      imgSrc: "https://buenasuerte.cl/web2024/wp-content/uploads/2023/10/00-W-P-Senorita-89-600x375.png",
      link: "https://buenasuerte.cl/proyectos/senorita-89/",
    },
    {
      id: "project-1623",
      title: "Buena Suerte Reel",
      subtitle: "",
      bgColor: "bg-[#ffffff]",
      videoSrc: "https://buenasuerte.cl/web2024/wp-content/uploads/2023/10/BS-2024-W-Trebol-prismado-2-Low.mp4",
      poster: "https://buenasuerte.cl/web2024/wp-content/uploads/2023/10/00-W-BS-Portada-600x706.png",
      link: "https://buenasuerte.cl/proyectos/reel/",
    },
    {
      id: "project-1625",
      title: "La Memoria Infinita",
      subtitle: "Fábula",
      bgColor: "bg-[#a4d1dd]",
      imgSrc: "https://buenasuerte.cl/web2024/wp-content/uploads/2023/10/00-W-P-Memoria-Infinita-600x375.png",
      link: "https://buenasuerte.cl/proyectos/la-memoria-infinita/",
    },
    {
      id: "project-1454",
      title: "La Luz Del Mundo",
      subtitle: "Mezcla",
      bgColor: "bg-[#4c6f85]",
      imgSrc: "https://buenasuerte.cl/web2024/wp-content/uploads/2023/08/00-W-P-Luz-Del-Mundo-600x375.png",
      link: "https://buenasuerte.cl/proyectos/la-luz-del-mundo/",
    },
    {
      id: "project-1365",
      title: "Jacked",
      subtitle: "Concha y Toro",
      bgColor: "bg-[#41612a]",
      imgSrc: "https://buenasuerte.cl/web2024/wp-content/uploads/2023/08/00-W-P-Jacked-600x375.png",
      link: "https://buenasuerte.cl/proyectos/jacked/",
    },
    {
      id: "project-1298",
      title: "Los Colonos",
      subtitle: "Quijote",
      bgColor: "bg-[#ff0000]",
      imgSrc: "https://buenasuerte.cl/web2024/wp-content/uploads/2023/07/00-W-PN-Los-Colonos-600x600.png",
      link: "https://buenasuerte.cl/proyectos/los-colonos/",
    },
    {
      id: "project-1927",
      title: "Enigma",
      subtitle: "Spotify",
      bgColor: "bg-[#5e59b8]",
      imgSrc: "https://buenasuerte.cl/web2024/wp-content/uploads/2023/11/WP-Enigma-01-600x375.png",
      link: "https://buenasuerte.cl/proyectos/enigma/",
    },
    {
      id: "project-1399",
      title: "El Futuro",
      subtitle: "Le Mat",
      bgColor: "bg-[#afa86a]",
      imgSrc: "https://buenasuerte.cl/web2024/wp-content/uploads/2023/08/00-W-P-El-Futuro-600x600.png",
      link: "https://buenasuerte.cl/proyectos/el-futuro/",
    },
    {
      id: "project-1630",
      title: "Quemar Tu Casa",
      subtitle: "Spotify",
      bgColor: "bg-[#000000]",
      imgSrc: "https://buenasuerte.cl/web2024/wp-content/uploads/2023/10/00-W-P-Quemar-Tu-Casa-600x600.png",
      link: "https://buenasuerte.cl/proyectos/quemar-tu-casa/",
    },
    {
      id: "project-1410",
      title: "UOIEA",
      subtitle: "Identidad",
      bgColor: "bg-[#ff5315]",
      imgSrc: "https://buenasuerte.cl/web2024/wp-content/uploads/2023/08/WP-00-UOIEA-600x375.png",
      link: "https://buenasuerte.cl/proyectos/uoiea/",
    },
    {
      id: "project-1619",
      title: "Fidocs 24",
      subtitle: "Fidocs",
      bgColor: "bg-[#96ff50]",
      imgSrc: "https://buenasuerte.cl/web2024/wp-content/uploads/2023/10/P-Fidocs-600x375.png",
      link: "https://buenasuerte.cl/proyectos/fidocs/",
    },
  ];




  // Section assignments
  const sections = {
    left: [
      "project-1386", // Toro
      "project-1585", // La Jauría
      "project-1614", // Vik NFT
      "project-1456", // Nido
      "project-1582", // CMPC
      "project-1314", // Ardiente Paciencia
      "project-1591", // Señorita 89
      "project-1410", // UOIEA
      "project-1619", // Fidocs 24
    ],
    middle: [
      "project-1298", // Los Colonos
      "project-1927", // Enigma
      "project-1399", // El Futuro
      "project-1630", // Quemar Tu Casa

    ],
    right: [
      "project-1623", // Buena Suerte Reel
      "project-1625", // La Memoria Infinita
      "project-1454", // La Luz Del Mundo
      "project-1365", // Jacked

    ],
  };



  const handleScroll = (e) => {
    if (isSyncing) return; // Avoid recursive calls
    isSyncing = true;

    const scrollTop = e.target.scrollTop;

    // Use requestAnimationFrame for smoothness
    requestAnimationFrame(() => {
      if (leftRef.current !== e.target) leftRef.current.scrollTop = scrollTop;
      if (middleRef.current !== e.target) middleRef.current.scrollTop = scrollTop;
      if (rightRef.current !== e.target) rightRef.current.scrollTop = scrollTop;
      isSyncing = false; // Reset the sync flag
    });
  };

  // Attach scroll listeners
  useEffect(() => {
    const left = leftRef.current;
    const middle = middleRef.current;
    const right = rightRef.current;

    left.addEventListener("scroll", handleScroll);
    middle.addEventListener("scroll", handleScroll);
    right.addEventListener("scroll", handleScroll);

    return () => {
      left.removeEventListener("scroll", handleScroll);
      middle.removeEventListener("scroll", handleScroll);
      right.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Card Component
  const ProjectCard = ({ project }) => (
    <div className={`overflow-hidden shadow-md ${project.bgColor} border border-black relative group`}>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="block relative">
        {project.videoSrc ? (
          <video
            className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
            autoPlay
            loop
            muted
            playsInline
            poster={project.poster}
          >
            <source src={project.videoSrc} type="video/mp4" />
          </video>
        ) : (
          <img
            src={project.imgSrc}
            alt={project.title}
            className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
        <div className={`${project.bgColor} absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
        <div className="absolute hii top-0 left-0 right-0 p-4 bg-opacity-70 text-black">
          <h3 className="text-[30px] font-medium  ">{project.title}</h3>
          {project.subtitle && <p className="text-[30px] font-medium  ">{project.subtitle}</p>}
        </div>
      </a>
    </div>
  );

  return (
    <section
      id="portfolio"
      className="flex flex-wrap lg:flex-nowrap bg-color1 z-10 overflow-hidden hidesidebar h-[1200px]"
    >
      <div
        id="port-left"
        ref={leftRef}
        className="port w-full lg:w-1/4 hidesidebar h-[1200px] overflow-y-auto"
      >
        {sections.left.map((id) => {
          const project = projects.find((p) => p.id === id);
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
      <div
        id="port-middle"
        ref={middleRef}
        className="port w-full lg:w-1/4 hidesidebar h-[1200px] overflow-y-auto"
      >
        {sections.middle.map((id) => {
          const project = projects.find((p) => p.id === id);
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
      <div
        id="port-right"
        ref={rightRef}
        className="port w-full lg:w-1/2 hidesidebar h-[1200px] overflow-y-auto"
      >
        {sections.right.map((id) => {
          const project = projects.find((p) => p.id === id);
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </section>
  );
};

export default Portfolio;