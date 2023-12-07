import { InView } from "react-intersection-observer";
import { delay, motion } from "framer-motion";

export default ({ title, className }) => {
  return (
    <>
      <InView triggerOnce threshold={1}>
        {({ inView, ref }) => (
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            ref={ref}
          >
            <div
              className={`relative flex justify-center items-center mt-20 mb-20 ${className}`}
            >
              <motion.h2
                className="text-4xl underline-offset-2 font-bold font-yatra custom-tailwind-class"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: inView ? 1 : 0,
                  y: inView ? 0 : 0,
                }}
                transition={{ delay: 0.2 }}
              >
                {title}
              </motion.h2>
              <div className="w-[250px] h-[50px] absolute rounded-full blur-2xl custom-gradient-class opacity-20 "></div>
            </div>
          </motion.div>
        )}
      </InView>
    </>
  );
};
