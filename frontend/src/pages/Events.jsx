import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import event1 from "../assets/events/Event1.jpg";
import event2 from "../assets/events/Event2.jpg";
import event3 from "../assets/events/Event3.jpg";
import event4 from "../assets/events/Event4.jpg";

const CardWidth = 800; // Width of each card
const CardMargin = 20; // Margin between cards

const EventsWrapper = styled.div`
  height: 300vh;
  position: relative;
`;

const EventsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: transparent;
  position: sticky;
  top: 0;
  overflow: hidden;
  z-index: 20;
`;

const EventsText = styled.h1`
  font-size: 20vw;
  font-weight: 900;
  color: white;
  text-transform: uppercase;
  letter-spacing: -0.05em;
  line-height: 0.8;
  white-space: nowrap;
  transform: scaleY(1.2);
  position: absolute;
  z-index: 20;
`;

const ImageCardsContainer = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 100%; // Start off-screen to the right
  transform: translateY(-50%);
  transition: transform 0.1s ease-out;
  z-index: 30;
`;

const ImageCard = styled.div`
  width: 500px;
  height: 400px;
  margin-right: 20px;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
`;

const Events = () => {
  const imageUrls_with_content = [
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
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const containerElement = containerRef.current;
      if (containerElement) {
        const eventsWrapper = document.getElementById("events-wrapper");
        const wrapperRect = eventsWrapper.getBoundingClientRect();
        const wrapperStart = wrapperRect.top + window.scrollY;
        const wrapperEnd =
          wrapperStart + wrapperRect.height - window.innerHeight;

        const scrollProgress =
          (scrollPosition - wrapperStart) / (wrapperEnd - wrapperStart);
        const clampedProgress = Math.max(0, Math.min(1, scrollProgress));

        const totalCardsWidth =
          imageUrls_with_content.length * (CardWidth + CardMargin) - CardMargin;
        const containerWidth = window.innerWidth;
        const scrollDistance = totalCardsWidth - containerWidth;
        const translateX = -clampedProgress * scrollDistance;

        containerElement.style.transform = `translateY(-50%) translateX(${translateX}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [imageUrls_with_content.length]);

  return (
    <EventsWrapper id="events-wrapper">
      <EventsContainer>
        <EventsText>Events</EventsText>
        <ImageCardsContainer ref={containerRef}>
          {imageUrls_with_content.map((item, index) => (
            <ImageCard key={index} imageUrl={item?.image}>
              <div className=" w-full h-full flex flex-col justify-end">
                <div className=" w-full h-[25%] bg-black bg-opacity-60 ps-4 pe-4 pt-1 flex flex-col justify-start gap-[0.5rem] ">
                  <h1 className=" text-[24px] text-[white] font-bold  ">
                    {item?.title}
                  </h1>
                  <p className=" text-[14px] font-[500] text-[white]">
                    {item?.description}
                  </p>
                </div>
              </div>
            </ImageCard>
          ))}
        </ImageCardsContainer>
      </EventsContainer>
    </EventsWrapper>
  );
};

export default Events;
