import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'
import img4 from '../assets/4.png'
import '../App.css'

// Import font files
import NohemiLightWoff2 from '../assets/Nohemi-Regular-BF6438cc579d934.woff';
import NohemiLightWoff from '../assets/Nohemi-Regular-BF6438cc579d934.woff';
import MaziusDisplayRegularWoff2 from '../assets/MAZIUSREVIEW20.09-Extraitalic.woff';
import MaziusDisplayRegularWoff from '../assets/MAZIUSREVIEW20.09-Extraitalic.woff';

// Create a style object with @font-face rules
const fontStyles = `
  @font-face {
    font-family: 'Nohemi';
    src: url(${NohemiLightWoff2}) format('woff2'),
         url(${NohemiLightWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Mazius Display';
    src: url(${MaziusDisplayRegularWoff2}) format('woff2'),
         url(${MaziusDisplayRegularWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

let src1 = img1;
let src2 = img2;
let src3 = img3;
let src4 = img4;

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 920 });
  const isMobile_Small = useMediaQuery({ maxWidth: 520 });

  const fullRef = useRef();

  // ------------------------

  const fullRef_useScroll = useScroll({
    target: fullRef,
    offset: ["0 0", "1 0"],
  });

  //------ Image 1 ---------------

  let left_array_one = isMobile
    ? isMobile_Small
      ? ["22%", "22%", "-5%", "-5%"]
      : ["25%", "25%", "0%", "0%"]
    : ["32%", "12%", "12%", "12%"];

  const left_full_one = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [0, 0.33, 0.66, 1],
    left_array_one
  );

  const top_full_one = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [0, 0.15, 0.8, 1],
    ["55%", "30%", "30%", "-100%"]
  );

  const rotateX_one = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [0, 0.1, 0.33, 1],
    [4, 12, 12, 12]
  );

  const rotateY_one = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [0, 0.1, 0.33, 1],
    [4, 20, 38, 38]
  );

  //------ Image 2 ------------------

  let left_array_two = isMobile
    ? isMobile_Small
      ? ["75%", "105%", "105%"]
      : ["70%", "105%", "105%"]
    : ["65%", "90%", "90%"];

  const left_full_two = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [0, 0.66, 1],
    left_array_two
  );

  const top_full_two = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [0, 0.15, 0.8, 1],
    ["55%", "30%", "30%", "-100%"]
  );

  const rotateX_two = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [0, 0.1, 0.33, 1],
    [-2, -10, -10, -10]
  );

  const rotateY_two = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [0, 0.1, 0.33, 1],
    [4, 20, 38, 38]
  );

  //------ Image 3 -------------------

  let left_array_three = isMobile
    ? isMobile_Small
      ? ["30%", "30%", "-7%", "-7%"]
      : ["35%", "35%", "-7%", "-7%"]
    : ["40%", "40%", "10%", "10%"];

  const left_full_three = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [0, 0.15, 0.66, 1],
    left_array_three
  );

  const top_full_three = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [0, 0.15, 0.8, 1],
    ["75%", "55%", "55%", "-100%"]
  );

  const rotateX_three = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [0, 0.33, 0.66, 1],
    [2, 5, 10, 10]
  );

  const rotateY_three = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [0, 0.33, 0.66, 1],
    [4, 20, 38, 38]
  );

  // ------ Image 4 ------------------

  let left_array_four = isMobile
    ? isMobile_Small
      ? ["70%", "70%", "107%", "107%"]
      : ["63%", "63%", "107%", "107%"]
    : ["62%", "62%", "92%", "92%"];

  const left_full_four = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [0, 0.15, 0.66, 1],
    left_array_four
  );

  const top_full_four = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [0, 0.15, 0.8, 1],
    ["75%", "55%", "55%", "-100%"]
  );

  const rotateX_four = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [0, 0.33, 0.66, 1],
    [-2, -5, -10, -10]
  );

  //----------------------------------

  const top_full_text = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [0, 0.33, 0.66, 0.8, 1],
    ["50%", "50%", "50%", "50%", "-100%"]
  );

  const scale_full_text = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [0, 0.33, 0.66, 0.8, 1],
    [0.7, 1, 1.5, 1.5, 1.5]
  );

  const rotateY_four = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [0, 0.33, 0.66, 1],
    [4, 20, 38, 38]
  );

  return (
    <>
      {/* Inject the font styles */}
      <style>{fontStyles}</style>

      <div className=" w-full h-[300vh]" ref={fullRef}>
        {/* ------ Image 1 ------- */}
        <motion.div
          style={{
            left: left_full_one,
            top: top_full_one,
            x: "-50%",
            y: "-50%",
            rotateX: rotateX_one,
            rotateY: rotateY_one,
          }}
          className=" fixed lg:w-[350px] lg:h-[300px] md:w-[275px] md:h-[275px] w-[200px] h-[200px] top-[55%] left-[35%]   z-[10]"
        >
          <img src={src1} className=" w-full h-full object-cover" />
        </motion.div>
        {/* ------- Image 2 ------ */}
        <motion.div
          style={{
            left: left_full_two,
            top: top_full_two,
            x: "-50%",
            y: "-50%",
            rotateX: rotateX_two,
            rotateY: rotateY_two,
          }}
          className=" fixed lg:w-[350px] lg:h-[300px] md:w-[275px] md:h-[275px] w-[200px] h-[200px] top-[55%] left-[70%] -translate-x-[50%] -translate-y-[50%] z-[10]"
        >
          <img src={src3} className=" w-full h-full object-cover" />
        </motion.div>

        {/* --------Image 3 ----- */}
        <motion.div
          style={{
            left: left_full_three,
            top: top_full_three,
            x: "-50%",
            y: "-50%",
            rotateX: rotateX_three,
            rotateY: rotateY_three,
          }}
          className=" fixed lg:w-[350px] lg:h-[300px] md:w-[275px] md:h-[275px] w-[200px] h-[200px] top-[75%] left-[45%] -translate-x-[50%] -translate-y-[50%] z-[20]"
        >
          <img src={src2} className=" w-full h-full object-cover" />
        </motion.div>
        {/* -------- Image 4 ----- */}
        <motion.div
          style={{
            left: left_full_four,
            top: top_full_four,
            x: "-50%",
            y: "-50%",
            rotateX: rotateX_four,
            rotateY: rotateY_four,
          }}
          className=" fixed lg:w-[350px] lg:h-[300px] md:w-[275px] md:h-[275px] w-[200px] h-[200px] top-[75%] left-[62.5%] -translate-x-[50%] -translate-y-[50%] z-[20]"
        >
          <img src={src4} className=" w-full h-full object-cover" />
        </motion.div>

        {/* --- Text Behind */}

        <motion.h1
          style={{
            top: top_full_text,
            scale: scale_full_text,
            left: "50%",
            x: "-50%",
            y: "-50%",
            fontFamily: "'Nohemi', sans-serif",
          }}
          className="lg:w-full w-[50%] md:text-[38px] text-[24px] text-[white] font-[100] fixed z-[5] text-center uppercase"
        >
          Vriksha Gives WINGS <br /> To Your <br />{" "}
          <span 
            style={{ fontFamily: "'Mazius Display', serif" }}
            className="text-[#ff516f] normal-case"
          >
            Child's Dream
          </span>
        </motion.h1>
      </div>
    </>
  );
};

export default Hero;
