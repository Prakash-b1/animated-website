/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './App.css'; // TailwindCSS classes or custom styles
import NavMenu from './component/NavMenu';
import HeroSection from './component/HeroSection';
import Portfolio from './component/Portfolio';
import Marquee from 'react-fast-marquee';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const footerRef = useRef(null);
  // Handle scroll event to adjust logo size
  const handleScroll = () => {
    if (window.scrollY < 100) {
      setScrolled(false); // Logo size = 100px when scroll position is less than 100
    } else {
      setScrolled(true); // Logo size = 50px when scroll position is more than 100
    }
  };

  // Setup IntersectionObserver to track footer visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when at least 50% of the footer is visible
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    // Cleanup observer when component is unmounted
    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="custom-cursor">
      <header className=" text-black w-full sticky top-0 left-0 z-50  ">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="text-4xl"
        >
          <NavMenu />
        </motion.h1>
      </header>

      <HeroSection />
      <Portfolio />

      <Marquee speed={300}>
        <div className='text-[250px] font-medium'>
          <span className='px-10'>
            mailto:hola@buenasuerte.cl
          </span>
          <span className='px-10'>
            mailto:hola@buenasuerte.cl
          </span>
        </div>
      </Marquee>

      {/* Footer */}
      <div ref={footerRef} className="layout border-t-2 border-black">
        {/* Left Side Links */}
        <div className="links">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer">
            Vimeo
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="#!" target="_blank" rel="noopener noreferrer">
            Web por Solitario
          </a>
        </div>

        {/* Right Side Logo */}
        <div
          id="fixed-flower"
          className={`transition-all ${
            scrolled && footerVisible ? 'w-[100px]' : 'w-[80px]'
          }`}
        >
          <svg className="fill-color3" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 210.5863037 314.8153335">
              <path
                d="m185.723938,206.614772c4.5460815-2.041748,8.7197876-4.8706055,12.3634644-8.5143433,10.4961548-10.4961548,14.6544189-26.1449585,11.4088745-42.9345703-2.7839355-14.4014893-10.7650757-28.7803955-22.4732666-40.487915-.0018311-.0015869.0013428.0015869-.0004883-.0002441-3.5120239-3.5114746-7.2059326-6.6309814-11.0131226-9.3740845,3.8063354-2.742981,7.5023193-5.8535156,11.0136108-9.3646851,11.7067871-11.7075195,19.6893311-26.0875244,22.4732666-40.4881592,3.2455444-16.7894287-.9127197-32.4384155-11.4088745-42.9345703-20.2865601-20.2865601-56.9301147-15.4286499-83.4234009,11.0628052-3.4661255,3.4660034-6.5961914,7.1704712-9.3709106,11.0360107-2.7747803-3.8655396-5.9049683-7.5700684-9.3712769-11.0361938C69.4298706-2.9122056,32.7854614-7.7703599,12.4989014,12.5162002,2.0027466,23.012355-2.1555176,38.6613418,1.0899658,55.4507705c2.7839966,14.4014893,10.7651367,28.7803955,22.4733276,40.4881592,3.4656372,3.4653931,7.1698608,6.5949097,11.0351562,9.3693237-3.8650513,2.774353-7.5690918,5.9039307-11.034729,9.3694458-.0009155.0009155.0004883-.0004272-.0004272.0002441-11.7072754,11.7075195-19.6893311,26.0872803-22.4733276,40.487915-3.2454834,16.7891846.9127808,32.4384155,11.4089355,42.9345703,3.644043,3.644043,7.8173218,6.4730225,12.362793,8.5148315C9.8182983,217.4745742,0,235.1433364,0,255.0725967c0,32.9422607,26.8002319,59.7427368,59.7425537,59.7427368,18.2380981,0,34.583313-8.223938,45.5505981-21.147644,10.9673462,12.9237061,27.3125,21.147644,45.5505981,21.147644,32.9423218,0,59.7425537-26.8004761,59.7425537-59.7427368,0-19.9295654-9.8186035-37.5985718-24.8623657-48.4578247Zm-80.4307861,9.8626709c-6.505127-7.6655273-14.9008789-13.6729736-24.4657593-17.2936401,5.2558594-3.3406372,10.3396606-7.3913574,15.0944214-12.1459961,3.4663086-3.4660034,6.5964966-7.1705322,9.3712769-11.0360718,2.7747192,3.8654785,5.9047852,7.5699463,9.3709106,11.0358887,4.7550659,4.7548828,9.838623,8.8057861,15.0940552,12.1465454-9.5646362,3.6206665-17.9598999,9.6279297-24.4649048,17.2932739Zm30.1130981-88.3078003c6.2754517,0,16.2019653,3.4695435,25.4290771,12.696167l.0004883.0004883c6.4404297,6.4401855,10.9233398,14.2142944,12.298584,21.3288574.8476562,4.3847656.3743286,8.1083984-1.2346802,9.7175903-3.5231323,3.5224609-17.9858398,1.9987183-31.0484619-11.0634766-6.4404907-6.4402466-10.9234009-14.2143555-12.298645-21.3288574-.8476562-4.3847656-.3743286-8.1083984,1.2346802-9.7174072,1.0343628-1.0343628,3.0113525-1.6333618,5.6189575-1.6333618Zm-60.2709961-.0160522c2.5479736,0,4.5828247.5682373,5.6637573,1.6491699,1.6089478,1.6092529,2.0823364,5.3328857,1.2346191,9.7176514-1.3752441,7.114502-5.8581543,14.8886108-12.2990112,21.3291016-13.0621948,13.0614624-27.5253906,14.5861206-31.0480957,11.0632324-1.6089478-1.6091919-2.0822754-5.3328247-1.2346191-9.7175903,1.3752441-7.114563,5.8581543-14.8886719,12.298584-21.3288574l.0004272-.0004883c6.4404907-6.4404297,14.2150269-10.9228516,21.3295288-12.2980957,1.4403687-.2782593,2.8088379-.4141235,4.0548096-.4141235Zm53.4173584-57.0571899c1.3752441-7.114502,5.8581543-14.8886108,12.298645-21.3290405,9.2284546-9.2277832,19.1549683-12.6966553,25.4299316-12.6966553,2.6067505,0,4.5846558.5992432,5.6185303,1.6331787,1.6090088,1.6091919,2.0823364,5.3328247,1.2346802,9.7175903-1.3752441,7.114563-5.8581543,14.8886719-12.2990723,21.3293457v.0001831c-13.0612793,13.0615234-27.5258179,14.5855103-31.0480347,11.0630493-1.6090088-1.6091919-2.0823364-5.3328247-1.2346802-9.7176514ZM38.6865234,38.7038833c1.0344238-1.0341797,3.0109253-1.6331787,5.6190186-1.6331787,6.2749634,0,16.2019653,3.4697876,25.4290771,12.6964111,6.4408569,6.4406738,10.9237671,14.2147827,12.2990112,21.3292847.8477173,4.3848267.3743286,8.1084595-1.2346191,9.7176514-1.609436,1.6091919-5.3328247,2.0827637-9.7185669,1.2351074-7.114502-1.3752441-14.8890381-5.857666-21.3295288-12.2981567v-.0001831c-6.4408569-6.4406738-10.9237671-14.2147827-12.2990112-21.3293457-.8476562-4.3847656-.3743286-8.1083984,1.2346191-9.7175903Zm21.0560303,239.076416c-12.5210571,0-22.7075195-10.1867065-22.7075195-22.7077026,0-12.5210571,10.1864624-22.7077026,22.7075195-22.7077026,12.5209961,0,22.7079468,10.1866455,22.7079468,22.7077026,0,12.5209961-10.1869507,22.7077026-22.7079468,22.7077026Zm91.1011963,0c-12.5210571,0-22.7079468-10.1867065-22.7079468-22.7077026,0-12.5210571,10.1868896-22.7077026,22.7079468-22.7077026,12.5209961,0,22.7074585,10.1866455,22.7074585,22.7077026,0,12.5209961-10.1864624,22.7077026-22.7074585,22.7077026Z" 
                
                />
            </svg>

        </div>
      </div>
    </div>
  );
};

export default App;
