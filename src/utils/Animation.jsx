import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export const Reveal = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start("visible"); // ici on déclenche l'animation
    }
  }, [isInView]);
  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden" // on définit l'état initial de l'élément avant l'animation (ici on le cache)
        animate={animation} // on définit l'animation à utiliser
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
