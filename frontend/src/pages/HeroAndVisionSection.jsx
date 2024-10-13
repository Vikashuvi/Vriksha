import React, { useRef } from "react";
import Hero from "./Hero";
import Vision from "./Vision";
import { useScroll, useTransform, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import Milestones from "./Milestones";
import logo from '../assets/logo.gif';  
import Milestones_Mobile from "./Milestones_Mobile";

const HeroAndVisionSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const full_ref = useRef();

  const full_ref_useScroll = useScroll({
    target: full_ref,
    offset: ["0 0", "1 0"],
  });

  const logo_top = useTransform(
    full_ref_useScroll?.scrollYProgress,
    [0, 0.27, 0.33, 0.45, 0.82, 0.9, 1],
    ["150%", "83%", "50%", "50%", "50%", "-30%", "-30%"]
  );

  const logo_scale = useTransform(
    full_ref_useScroll?.scrollYProgress,
    [0, 0.33, 0.35, 0.38, 0.52, 0.55, 0.82, 1],
    [0.25, 1, 1, 2, 2, 1, 1, 0.5]
  );

  const logo_opacity = useTransform(
    full_ref_useScroll?.scrollYProgress,
    [0, 0.3, 0.4, 0.5, 0.6, 0.7],
    [1, 1, 0.5, 0.3, 0.5, 1]
  );

  return (
    <div className="w-full h-fit" ref={full_ref}>
      <Hero />
      <Vision />
      {isMobile ? <Milestones_Mobile /> : <Milestones />}

      <motion.div
        style={{
          top: logo_top,
          scale: logo_scale,
          opacity: logo_opacity,
          left: "50%",
          x: "-50%",
          y: "-50%",
        }}
        className="fixed top-[50%] left-[50%] xl:w-[40vw] xl:h-[40vw] lg:w-[50vw] lg:h-[50vw] h-[60vw] w-[60vw] -translate-x-[50%] -translate-y-[50%] z-[0]"
      >
        <div className="relative w-full h-full flex flex-row justify-center items-center">
          <img src={logo} className="w-[75%] h-[75%] z-[2]" alt="Logo" />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroAndVisionSection;
