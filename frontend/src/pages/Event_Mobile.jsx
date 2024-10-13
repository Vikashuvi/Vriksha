import React from "react";
import { motion } from "framer-motion";


import event1 from "../assets/events/Event1.jpg";
import event2 from "../assets/events/Event2.jpg";
import event3 from "../assets/events/Event3.jpg";
import event4 from "../assets/events/Event4.jpg";

const EventsMobile = () => {
  const events = [
    {
      image: event1,
      title: "15th State level chess tournament",
      description: "9TH DEC, 2019",
    },
    {
      image: event2,
      title: "Utsav 2019",
      description: "9TH DEC, 2019",
    },
    {
      image: event3,
      title: "Vriksha Junior Sport Event",
      description: "9TH DEC, 2019",
    },
    {
      image: event4,
      title: "Vriksha Junior Sport Meet",
      description: "9TH DEC, 2019",
    },
  ]

  return (
    <section className="py-8">
      <h2 className="text-4xl font-bold text-white text-center mb-6">
        EVENT GALLERY
      </h2>
      <div className="px-4 space-y-4">
        {events.map((item) => (
          <motion.div
            className="w-full h-[200px] bg-white rounded-lg shadow-md overflow-hidden relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={item.image}
              alt={`Event ${item?.title}`}
              className="w-full h-full object-cover"
            />

            <div className=" absolute top-0 left-0 w-full h-full flex flex-col justify-end">
              <div className=" w-full h-[35%] bg-black bg-opacity-60 ps-4 pe-4 pt-1 flex flex-col justify-start gap-[0.2rem] ">
                <h1 className=" text-[14px] text-[white] font-bold  ">
                  {item?.title}
                </h1>
                <p className=" text-[10px] font-[500] text-[white]">
                  {item?.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EventsMobile;
