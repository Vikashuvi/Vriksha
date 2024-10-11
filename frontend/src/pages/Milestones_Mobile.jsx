import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import mil1 from '../assets/brand1.jpg';
import mil2 from '../assets/brand2.jpg';
import mil3 from '../assets/brand3.jpg';
import mil4 from '../assets/brand4.jpg';

const MobileSection = styled.section`
  width: 100%;
  background-color: black;
  color: white;
  overflow-x: hidden;
`;

const ScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`;

const ImageContainer = styled.div`
  width: 90%;
  margin-bottom: 2rem;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.5s ease, transform 0.5s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Figure = styled.figure`
  width: 100%;
  margin: 0;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 0.375rem;
`;

const MilestoneText = styled.h2`
  font-size: 10vw;
  font-weight: 900;
  color: white;
  text-transform: uppercase;
  letter-spacing: -0.05em;
  line-height: 0.8;
  text-align: center;
  margin-bottom: 2rem;
`;

const MobileMillestones = () => {
  const images = [mil1, mil2, mil3, mil4];
  const containerRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    containerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      containerRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <MobileSection>
      <ScrollContainer>
        <MilestoneText>Milestone</MilestoneText>
        {images.map((image, index) => (
          <ImageContainer
            key={index}
            ref={(el) => (containerRefs.current[index] = el)}
          >
            <Figure>
              <Image src={image} alt={`Milestone ${index + 1}`} />
            </Figure>
          </ImageContainer>
        ))}
      </ScrollContainer>
    </MobileSection>
  );
};

export default MobileMillestones;
