import React from "react";
import styled from "styled-components";
import mil1 from "../assets/brand1.jpg";
import mil2 from "../assets/brand2.jpg";
import mil3 from "../assets/brand3.jpg";
import mil4 from "../assets/brand4.jpg";
import { useMediaQuery } from "react-responsive";

const MilestonesSection = styled.section`
  width: 100%;
  background-color: black;
  color: white;
  z-index: 20;
`;

const StickyContainer = styled.div`
  position: relative;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0; // Reduced padding
  }
`;

const ImageContainer = styled.div`
  position: sticky;
  top: ${(props) => props.top};
  width: 100%;
  z-index: 20;

  @media (max-width: 768px) {
    position: static;
    width: 100%; // Changed from 90% to 100%
    margin-bottom: 1rem; // Reduced margin
  }
`;

const Figure = styled.figure`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  z-index: 20;

  @media (max-width: 768px) {
    height: 100%;
  }
`;

const MilestoneText = styled.h2`
  position: absolute;
  font-size: 14vw;
  font-weight: 900;
  color: white;
  text-transform: uppercase;
  letter-spacing: -0.05em;
  line-height: 0.8;
  white-space: nowrap;
  transform: scaleY(1.2);

  left: 0;
  right: 0;
  text-align: center;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 10vw;
    position: static;
  }
`;

const Image = styled.img`
  transition: all 0.3s;
  height: 80%;
  width: ${(props) => props.width};
  object-fit: cover;
  border-radius: 0.375rem;

  display: ${(props) => (props.src ? "block" : "none")};

  @media (max-width: 768px) {
    width: 90%; // Changed from 100% to 90%
    height: auto; // Changed from 100% to auto
    aspect-ratio: 1 / 1; // Added to maintain a square aspect ratio
  }
`;

const Milestones = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const images = [
    { src: "", width: "50%", top: "0" },
    { src: mil1, width: "55%", top: "0" },
    { src: mil2, width: "60%", top: "2rem" },
    { src: mil3, width: "65%", top: "4rem" },
    { src: mil4, width: "70%", top: "6rem" },
  ];

  // if (isMobile) {
  //   return <MobileMillestones />;
  // }

  return (
    <MilestonesSection>
      <StickyContainer>
        {images.map((image, index) => (
          <ImageContainer key={index} top={image.top}>
            <Figure>
              {index === 0 && <MilestoneText>e-Milestone-M</MilestoneText>}
              {image.src && (
                <Image
                  src={image.src}
                  alt={`Milestone ${index + 1}`}
                  width={image.width}
                />
              )}
            </Figure>
          </ImageContainer>
        ))}
      </StickyContainer>
    </MilestonesSection>
  );
};

export default Milestones;
