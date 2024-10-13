import React, { useEffect, useRef, useState } from 'react';


const advantagesData = [
  {
    title: "MODERN MICROCOSM",
    description: "A MICROCOSM OF THE MODERN WORLD, PREPARING STUDENTS FOR GLOBAL CHALLENGES."
  },
  {
    title: "FAMILY ATMOSPHERE",
    description: "A WELCOMING AND FAMILY-LIKE ATMOSPHERE THAT NURTURES STUDENTS' WELL-BEING."
  },
  {
    title: "HIGH STANDARDS",
    description: "SETTING AND MAINTAINING HIGH STANDARDS FOR STUDENT ACHIEVEMENT AND EXCELLENCE."
  },
  {
    title: "FOSTERING CURIOSITY",
    description: "FOSTERING LIVELY INTEREST AND CURIOSITY TO INSPIRE LIFELONG LEARNING."
  },
  {
    title: "INCLUSIVE ENVIRONMENT",
    description: "NURTURING A SUPPORTIVE AND INCLUSIVE ENVIRONMENT FOR ALL STUDENTS."
  },
  {
    title: "PERSONAL GROWTH",
    description: "ENCOURAGING PERSONAL AND ACADEMIC GROWTH TO DEVELOP WELL-ROUNDED INDIVIDUALS."
  }
];

const Advantages = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Adjust this breakpoint as needed
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Skip scroll effect for mobile

    let rafId = null;
    let lastScrollTop = 0;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;
      const windowHeight = window.innerHeight;

      // Calculate how far through the section we've scrolled (0 to 1)
      const newScrollProgress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)));

      // Only update if the change is significant
      if (Math.abs(newScrollProgress - scrollProgress) > 0.01) {
        setScrollProgress(newScrollProgress);
      }
    };

    const smoothScroll = () => {
      const currentScrollTop = window.pageYOffset;
      if (lastScrollTop === currentScrollTop) {
        rafId = requestAnimationFrame(smoothScroll);
        return;
      }
      lastScrollTop = currentScrollTop;
      handleScroll();
      rafId = requestAnimationFrame(smoothScroll);
    };

    smoothScroll();

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [scrollProgress, isMobile]);

  useEffect(() => {
    if (isMobile) {
      // Reset card positions for mobile
      cardsRef.current.forEach(card => {
        if (card) card.style.transform = 'translateX(0)';
      });
      return;
    }

    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      
      const isUpperRow = index < 3;
      const maxMove = 150; // increased for more noticeable effect
      
      // Apply easing to the movement
      const easeInOutCubic = t => t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1;
      const easedProgress = easeInOutCubic(scrollProgress);
      
      // Calculate the movement based on scroll progress
      const movement = easedProgress * maxMove * (isUpperRow ? 1 : -1);
      
      card.style.transform = `translateX(${movement}px)`;
    });
  }, [scrollProgress, isMobile]);

  return (
    <section ref={sectionRef} className="bg-black min-h-screen flex items-center justify-center py-12 overflow-hidden relative mt-12">
      <div className="container mx-auto px-4">
        {/* Mobile heading */}
        <h1 className="text-4xl font-bold text-white mb-8 text-center md:hidden">Advantages</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative max-w-4xl mx-auto">
          {advantagesData.map((advantage, index) => (
            <div 
              key={index} 
              ref={el => cardsRef.current[index] = el}
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-gray-200 border-opacity-20 rounded-lg p-4 md:p-6 sm:p-5 flex flex-col justify-between h-64 transition-transform duration-300 ease-out hover:bg-opacity-20"
            >
              <h2 className="text-3xl sm:text-lg md:text-3xl font-bold mb-2 uppercase text-white px-3 py-2">{advantage.title}</h2>
              <p className="text-lg md:text-xs sm:text-sm leading-tight text-gray-300 px-3 py-8">{advantage.description}</p>
            </div>
          ))}
          
          {/* Circular element with larger rotating text and smaller central text */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 hidden md:block">
            <div className="relative w-full h-full bg-white rounded-full">
              <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                <defs>
                  <path id="circlePath" 
                    d="M 50, 50 m -37, 0 a 37,37 0 0,1 74,0 a 37,37 0 0,1 -74,0" 
                    fill="none" />
                </defs>
                <text fill="black" fontSize="5">
                  <textPath xlinkHref="#circlePath" startOffset="0">
                  VRIKSHA GIVES WINGS
TO
YOUR CHILD'S DREAM • VRIKSHA GIVES WINGS
TO
YOUR CHILD'S DREAM •
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-black text-sm font-bold text-center leading-tight">ADVANTAGES</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
