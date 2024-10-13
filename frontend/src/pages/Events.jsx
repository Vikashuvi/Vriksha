import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import eve1 from "../assets/brand1.jpg";
import eve2 from "../assets/brand2.jpg";
import eve3 from "../assets/brand3.jpg";
import eve4 from "../assets/brand4.jpg";
import eve5 from "../assets/brand1.jpg";
import eve6 from "../assets/brand2.jpg";

const CardWidth = 610; // Width of each card
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
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
`;

const Events = () => {
  const imageUrls = [eve1, eve2, eve3, eve4, eve5, eve6];
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const containerElement = containerRef.current;
      if (containerElement) {
        const eventsWrapper = document.getElementById("events-wrapper");
        const wrapperRect = eventsWrapper.getBoundingClientRect();
        const wrapperStart = wrapperRect.top + window.scrollY;
        const wrapperEnd = wrapperStart + wrapperRect.height - window.innerHeight;
        
        const scrollProgress = (scrollPosition - wrapperStart) / (wrapperEnd - wrapperStart);
        const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
        
        const totalCardsWidth = imageUrls.length * (CardWidth + CardMargin) - CardMargin;
        const scrollDistance = totalCardsWidth - window.innerWidth + CardWidth;
        const translateX = -clampedProgress * scrollDistance;
        
        containerElement.style.transform = `translateY(-50%) translateX(${translateX}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [imageUrls.length]);

  return (
    <EventsWrapper id="events-wrapper">
      <EventsContainer>
        <EventsText>Events</EventsText>
        <ImageCardsContainer ref={containerRef}>
          {imageUrls.map((url, index) => (
            <ImageCard key={index} imageUrl={url} />
          ))}
        </ImageCardsContainer>
      </EventsContainer>
    </EventsWrapper>
  );
};

export default Events;
