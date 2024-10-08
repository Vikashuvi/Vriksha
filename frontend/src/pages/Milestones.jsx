import React from 'react';
import styled from 'styled-components';
import mil1 from '../assets/brand1.jpg';
import mil2 from '../assets/brand2.jpg';
import mil3 from '../assets/brand3.jpg';
import mil4 from '../assets/brand4.jpg';

const MilestonesSection = styled.section`
  width: 100%;
  background-color: black;
  color: white;
`;

const StickyContainer = styled.div`
  position: relative;
`;

const ImageContainer = styled.div`
  position: sticky;
  top: ${props => props.top};
  width: 100%;
`;

const Figure = styled.figure`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative; // Add this line
`;

const MilestoneText = styled.h2`
  position: absolute;
  font-size: 15vw;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  z-index: 1;
`;

const Image = styled.img`
  transition: all 0.3s;
  height: 80%;
  width: ${props => props.width};
  object-fit: cover;
  border-radius: 0.375rem; // Equivalent to rounded-md
  display: ${props => props.src ? 'block' : 'none'}; // Add this line
`;

const Milestones = () => {
  const images = [
    { src: '', width: '55%', top: '0' }, // Empty first image
    { src: mil1, width: '55%', top: '0' },
    { src: mil2, width: '60%', top: '2rem' },
    { src: mil3, width: '65%', top: '4rem' },
    { src: mil4, width: '70%', top: '6rem' },
  ];

  return (
    <MilestonesSection>
      <StickyContainer>
        {images.map((image, index) => (
          <ImageContainer key={index} top={image.top}>
            <Figure>
              {index === 0 && <MilestoneText>Milestone</MilestoneText>}
              {image.src && ( // Add this condition
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
