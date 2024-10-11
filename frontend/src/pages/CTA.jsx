import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import Std1 from '../assets/brand1.jpg';
import Std2 from '../assets/brand2.jpg';
import Std3 from '../assets/brand3.jpg';
import Std4 from '../assets/brand4.jpg';

const CTAContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background-color: #000000;
  position: relative;
  min-height: 100vh; // Changed from height to min-height
  overflow: hidden; // Add this to hide overflowing content
`;

const Title = styled.h2`
  font-size: clamp(1.5rem, 5vw, 2rem);
  text-align: center;
  color: white;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%; // Reduced from 100% to give some side padding
  z-index: 0;
  opacity: 0;
  transition: opacity 0.5s ease;
  white-space: normal; // Changed from nowrap to normal
  word-wrap: break-word;
  hyphens: auto;
  
  @media (max-width: 768px) {
    font-size: clamp(2rem, 4vw, 1.5rem);
    top: 42%; // Adjust vertical position for mobile
  }
`;

const JoinButton = styled.button`
  position: absolute;
  top: 54%;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 24px;
  font-size: 1.2rem;
  font-weight: bold;
  color: black;
  background-color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 0;

  &:hover {
    background-color: #f0f0f0;
    transform: translateX(-50%) scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const CardContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  perspective: 1000px;
  z-index: 1; // Added z-index to ensure cards are above text and button
`;

const StudentCard = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 24px;
  overflow: hidden;
  transition: transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.8s ease;
  backface-visibility: hidden;

  &:hover {
    transform: scale(1.05) translateZ(20px);
  }
`;

const StudentImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CTA = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldSpread, setShouldSpread] = useState(false);
  const [showText, setShowText] = useState(false);
  const sectionRef = useRef(null);
  const students = [
    { id: 1, name: 'Student 1', image: Std1 },
    { id: 2, name: 'Student 2', image: Std2 },
    { id: 3, name: 'Student 3', image: Std3 },
    { id: 4, name: 'Student 4', image: Std4 },
    { id: 5, name: 'Student 5', image: Std1 },
    { id: 6, name: 'Student 6', image: Std2 },
    { id: 7, name: 'Student 7', image: Std3 },
    { id: 8, name: 'Student 8', image: Std4 },
  ];

  const presetPositions = [
    { x: -25, y: -25, scale: 0.75 },   // Top left, large
    { x: 30, y: -25, scale: 0.4 },      // Top right
    { x: 8, y: -30, scale: 0.8 },    // Top center, small
    { x: -36, y: 10, scale: 0.6 },    // Middle left
    { x: 0, y: 35, scale: 0.8 },      // Bottom center, large
    { x: 20, y: 30, scale: 0.5 },    // Bottom right
    { x: -20, y: 25, scale: 0.4 },   // Bottom left
    { x: 35, y: 5, scale: 0.75 },     // Middle right, small
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionHeight = rect.height;
        const sectionTop = rect.top;
        const viewportHeight = window.innerHeight;
        
        if (sectionTop <= viewportHeight && sectionTop > -sectionHeight) {
          setIsVisible(true);
          const scrolledPastSection = Math.max(0, viewportHeight - sectionTop);
          const progress = Math.min(1, scrolledPastSection / (sectionHeight + viewportHeight));
          setScrollProgress(progress);
        } else if (sectionTop > viewportHeight) {
          setIsVisible(false);
          setScrollProgress(0);
        } else {
          setIsVisible(false);
          setScrollProgress(1);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    let spreadTimer;
    let textTimer;
    if (isVisible) {
      spreadTimer = setTimeout(() => {
        setShouldSpread(true);
      }, 1000);

      // Start fading in the text earlier
      textTimer = setTimeout(() => {
        setShowText(true);
      }, 1500); // Reduced from 2000 to 1500

      return () => {
        clearTimeout(spreadTimer);
        clearTimeout(textTimer);
      };
    } else {
      setShouldSpread(false);
      setShowText(false);
    }

    return () => {
      clearTimeout(spreadTimer);
      clearTimeout(textTimer);
    };
  }, [isVisible]);

  const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

  const getCardPosition = (index) => {
    if (!shouldSpread) {
      return {
        transform: 'translate3d(0, 0, 0) scale(1)',
        opacity: 1,
      };
    }

    const { x, y, scale } = presetPositions[index % presetPositions.length];
    
    const easedProgress = easeInOutCubic(scrollProgress);
    const spreadFactor = 1 + easedProgress * 1.5; // Reduced from 2 to 1.5
    
    // Use Math.min to limit the spread
    let xPixels = Math.min((x / 100) * window.innerWidth * easedProgress * spreadFactor, window.innerWidth / 2);
    let yPixels = Math.min((y / 100) * window.innerHeight * easedProgress * spreadFactor, window.innerHeight / 2);
    const z = 50 * easedProgress;

    const minScale = 0.6;
    const currentScale = scale - (scale - minScale) * easedProgress;
    
    return {
      transform: `translate3d(${xPixels}px, ${yPixels}px, ${z}px) scale(${currentScale})`,
      opacity: 1 - easedProgress * 0.5,
    };
  };

  const handleJoinClick = () => {
    // Add your join logic here
    console.log('Join button clicked');
  };

  return (
    <CTAContainer ref={sectionRef}>
      <Title style={{ opacity: showText ? 1 : 0 }}>
        Are You Ready To Give Wings To Your Child?
      </Title>
      <JoinButton onClick={handleJoinClick} style={{ opacity: showText ? 1 : 0 }}>
        Join Now
      </JoinButton>
      <CardContainer>
        {students.map((student, index) => (
          <StudentCard
            key={student.id}
            style={{
              ...getCardPosition(index),
              zIndex: students.length - index,
            }}
          >
            <StudentImage src={student.image} alt={student.name} />
          </StudentCard>
        ))}
      </CardContainer>
    </CTAContainer>
  );
};

export default CTA;