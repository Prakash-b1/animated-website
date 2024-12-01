import { motion, useViewportScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
  const { scrollY } = useViewportScroll();

  // Define the transformations for images, lines, and height based on scroll position
  const translateY1 = useTransform(scrollY, [0, 300], [0, 100]); // First image moves up
  const translateY2 = useTransform(scrollY, [0, 300], [0, -100]); // Second image moves down
  const lineTranslateY = useTransform(scrollY, [0, 300], [0, 50]); // Line moves upwards
  const sectionHeight = useTransform(scrollY, [0, 300], [560, 300]); // Section height decreases

  const transition = {
    type: 'tween', // Tween for smooth animation
    ease: 'easeInOut', // Ease-in-out effect
    duration: 1, // Duration of the animation
  };

  return (
    <motion.section
      style={{
        height: sectionHeight, // Dynamic height adjustment
        overflow: 'hidden', // Prevent elements from spilling outside
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="hero-section"
    >
      <div>
        {/* First Image */}
        <motion.div
          className="image-container"
          style={{
            y: translateY1, // Apply scroll-based animation to the first image
          }}
          transition={transition} // Apply ease-in-out transition
        >
          <img
            src="https://buenasuerte.cl/web2024/wp-content/themes/buenasuerte_2023/svg/buena.svg"
            alt="Buena"
            style={{
              objectFit: 'contain',
              width: '100%',
              height: '280px',
            }}
          />
        </motion.div>

        {/* Line Divider */}
        <motion.div
          className="line-divider"
          style={{
            y: lineTranslateY, // Apply scroll-based animation to the line
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
          }}
          transition={transition} // Apply ease-in-out transition
        >
          <div
            style={{
              position: 'absolute',
              bottom: '0',
              width: '100%',
              height: '1px',
              backgroundColor: 'black',
            }}
          />
        </motion.div>

        {/* Second Image */}
        <motion.div
          className="image-container"
          style={{
            y: translateY2, // Apply scroll-based animation to the second image
          }}
          transition={transition} // Apply ease-in-out transition
        >
          <img
            src="https://buenasuerte.cl/web2024/wp-content/themes/buenasuerte_2023/svg/suerte.svg"
            alt="Suerte"
            style={{
              objectFit: 'contain',
              width: '100%',
              height: '280px',
            }}
          />
        </motion.div>

        {/* Line Divider */}
        <motion.div
          className="line-divider"
          style={{
            y: lineTranslateY, // Apply scroll-based animation to the line
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
          }}
          transition={transition} // Apply ease-in-out transition
        >
          <div
            style={{
              position: 'absolute',
              bottom: '0',
              width: '100%',
              height: '1px',
              backgroundColor: 'black',
            }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
