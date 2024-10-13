import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const src1 =
  "https://cdn.prod.website-files.com/655b7190087a6311406b7e18/655b7190087a6311406b7eb0_jakob-owens-5_dFX9aAfs8-unsplash.jpg";

const src2 =
  "https://cdn.prod.website-files.com/655b7190087a6311406b7e18/655b7190087a6311406b7ead_jakob-owens-5yN5Bz0_968-unsplash.jpg";

const Milestone_actual_animation = () => {
  const fullRef = useRef();

  const fullRef_useScroll = useScroll({
    target: fullRef,
    offset: ["0 1", "1 1"],
  });

  //----------------------------------------------------

  const image_one_rotate = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [0, 0.1, 0.24],
    [-90, 0, 90]
  );
  const image_one_top = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [0, 0.24],
    ["105%", "-5%"]
  );
  const scale_one_top = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [0, 0.08, 0.12, 0.24],
    [0.8, 1, 1, 0.8]
  );

  //-----------------------------------------------------

  const image_two_rotate = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [0.22, 0.3, 0.44],
    [-90, 0, 90]
  );
  const image_two_top = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [0.22, 0.44],
    ["105%", "-5%"]
  );
  const scale_two_top = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [0.22, 0.28, 0.32, 0.44],
    [0.8, 1, 1, 0.8]
  );

  //---------------------------------------------------

  const image_three_rotate = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [0.42, 0.5, 0.64],
    [-90, 0, 90]
  );
  const image_three_top = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [0.42, 0.64],
    ["105%", "-5%"]
  );
  const scale_three_top = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [0.42, 0.48, 0.52, 0.64],
    [0.8, 1, 1, 0.8]
  );

  //-------------------------------------------------------

  const image_four_rotate = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [0.64, 0.7, 0.84],
    [-90, 0, 90]
  );
  const image_four_top = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [0.62, 0.84],
    ["105%", "-5%"]
  );
  const scale_four_top = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [0.62, 0.68, 0.72, 0.84],
    [0.8, 1, 1, 0.8]
  );

  //---------------------------------------------------------

  const image_five_rotate = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [0.82, 0.9, 1],
    [-90, 0, 90]
  );
  const image_five_top = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [0.8, 1],
    ["105%", "-5%"]
  );
  const scale_five_top = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [0.82, 0.88, 0.92, 1],
    [0.8, 1, 1, 0.8]
  );

  //-----------------------------------------------------------

  const text_ref = useRef();

  const text_useScroll = useScroll({
    target: text_ref,
    offset: ["0 1", "0 0"],
  });

  const top_text = useTransform(
    text_useScroll.scrollYProgress,
    [0, 1],
    ["115%", "-30%"]
  );

  return (
    <>
      <div
        ref={text_ref}
        className=" relative text-[5vw]  w-full font-bold text-[white] h-[400px] text-center "
      >
        <motion.h1
          style={{
            x: "-50%",
            y: "-50%",
            left: "50%",
            top: top_text,
          }}
          className="text-[18vw] font-black text-white uppercase tracking-[-0.05em] leading-[0.8] whitespace-nowrap scale-y-[1.2] fixed z-[2] "
        >
          Milestone
        </motion.h1>
      </div>
      <div ref={fullRef} className=" w-full h-[300vh]">
        <motion.div
          style={{
            x: "-50%",
            y: "-50%",
            left: "50%",

            top: image_one_top,
            rotateX: image_one_rotate,
            scale: scale_one_top,
          }}
          className=" w-[550px] h-[400px] rounded-[30px]  fixed z-[20] overflow-hidden "
        >
          <img src={src1} className=" w-full h-full object-cover " />
        </motion.div>
        <motion.div
          style={{
            x: "-50%",
            y: "-50%",
            left: "50%",

            top: image_two_top,
            rotateX: image_two_rotate,
            scale: scale_two_top,
          }}
          className=" w-[550px] h-[400px] rounded-[30px]  fixed z-[20] overflow-hidden "
        >
          <img src={src2} className=" w-full h-full object-cover " />
        </motion.div>
        <motion.div
          style={{
            x: "-50%",
            y: "-50%",
            left: "50%",

            top: image_three_top,
            rotateX: image_three_rotate,
            scale: scale_three_top,
          }}
          className=" w-[550px] h-[400px] rounded-[30px]  fixed z-[20] overflow-hidden "
        >
          <img src={src1} className=" w-full h-full object-cover " />
        </motion.div>
        <motion.div
          style={{
            x: "-50%",
            y: "-50%",
            left: "50%",

            top: image_four_top,
            rotateX: image_four_rotate,
            scale: scale_four_top,
          }}
          className=" w-[550px] h-[400px] rounded-[30px]  fixed z-[20] overflow-hidden "
        >
          <img src={src2} className=" w-full h-full object-cover " />
        </motion.div>
        <motion.div
          style={{
            x: "-50%",
            y: "-50%",
            left: "50%",

            top: image_five_top,
            rotateX: image_five_rotate,
            scale: scale_five_top,
          }}
          className=" w-[550px] h-[400px] rounded-[30px]  fixed z-[20] overflow-hidden "
        >
          <img src={src1} className=" w-full h-full object-cover " />
        </motion.div>
      </div>
    </>
  );
};

export default Milestone_actual_animation;
