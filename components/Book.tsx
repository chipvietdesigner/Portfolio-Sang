
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { PageLayout } from './PageLayout';
import { PORTFOLIO_DATA } from '../constants';

export const Book: React.FC = () => {
  const [flippedIndex, setFlippedIndex] = useState(0); 
  const sheetsRef = useRef<(HTMLDivElement | null)[]>([]);
  const totalSheets = PORTFOLIO_DATA.length;

  const handleFlip = (direction: 'next' | 'prev') => {
    if (direction === 'next' && flippedIndex < totalSheets) {
      setFlippedIndex(prev => prev + 1);
    } else if (direction === 'prev' && flippedIndex > 0) {
      setFlippedIndex(prev => prev - 1);
    }
  };

  useEffect(() => {
    PORTFOLIO_DATA.forEach((_, i) => {
      const sheet = sheetsRef.current[i];
      if (!sheet) return;

      const targetRotation = i < flippedIndex ? -180 : 0;
      
      gsap.to(sheet, {
        rotationY: targetRotation,
        duration: 1.6,
        ease: "power2.inOut",
        transformOrigin: "left center",
        onUpdate: function() {
            const currentAngle = gsap.getProperty(sheet, "rotationY") as number;
            // Z-index sorting: 
            // When < -90 (flipped to left), stacking order reverses (first page is bottom)
            // When > -90 (on right), stacking order is normal (first page is top)
            if (currentAngle <= -90) {
                sheet.style.zIndex = `${i + 1}`; 
            } else {
                sheet.style.zIndex = `${totalSheets - i}`;
            }
        }
      });
    });
  }, [flippedIndex, totalSheets]);

  useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
          if (e.key === 'ArrowRight') handleFlip('next');
          if (e.key === 'ArrowLeft') handleFlip('prev');
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
  }, [flippedIndex]);

  // Center Position Logic
  // When closed (index 0), shift left to center the cover.
  // When open, center (0).
  // When closed at end, shift right.
  let translateX = 0;
  if (flippedIndex === 0) translateX = -25;
  else if (flippedIndex === totalSheets) translateX = 25;
  
  // Shadow Calculation
  // Closed state: Darker shadow, tighter spread
  const isClosed = flippedIndex === 0 || flippedIndex === totalSheets;
  const shadowOpacity = isClosed ? 0.35 : 0.15;
  const shadowBlur = isClosed ? '40px' : '60px';
  const shadowY = isClosed ? '30px' : '50px';

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      
      {/* 
          Book Container 
          A3 Landscape Spread Aspect Ratio (~1.45:1)
      */}
      <div 
        className="relative perspective-container transition-transform duration-[1600ms] ease-in-out will-change-transform"
        style={{ 
            width: '85vw',
            maxWidth: '1400px', 
            aspectRatio: '1.45 / 1',
            maxHeight: '85vh',
            transform: `translateX(${translateX}%)`
        }}
      >
         {/* 
            DROP SHADOWS (Split into Left/Right to prevent artifacts)
         */}
         
         {/* LEFT SHADOW - Strictly hidden when book is closed (index 0) */}
         <div 
            className={`absolute top-[2%] h-[96%] bg-[#444] mix-blend-multiply transition-all duration-[1500ms] rounded-l-md ${flippedIndex === 0 ? 'opacity-0 hidden' : 'opacity-100'}`}
            style={{
                left: '2%',
                width: '48%', // Covers left half
                filter: `blur(${shadowBlur})`,
                opacity: flippedIndex === 0 ? 0 : shadowOpacity,
                transform: `translateY(${shadowY}) translateZ(-50px)`
            }}
         />

         {/* RIGHT SHADOW - Shifts slightly when closed */}
         <div 
            className="absolute top-[2%] h-[96%] bg-[#444] mix-blend-multiply transition-all duration-[1500ms] rounded-r-md"
            style={{
                left: flippedIndex === 0 ? '50.5%' : '50%', // Move slightly right when closed
                width: flippedIndex === 0 ? '47.5%' : '48%',
                filter: `blur(${shadowBlur})`,
                opacity: shadowOpacity,
                transform: `translateY(${shadowY}) translateZ(-50px)`
            }}
         />

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 -left-16 md:-left-24 -translate-y-1/2 z-50">
            <button 
                onClick={() => handleFlip('prev')} 
                disabled={flippedIndex === 0}
                className={`group p-4 md:p-8 rounded-full transition-all duration-500 disabled:opacity-0 ${flippedIndex === 0 ? 'pointer-events-none' : ''}`}
            >
                <div className="w-8 md:w-12 h-[2px] bg-black/20 group-hover:w-12 md:group-hover:w-16 group-hover:bg-black transition-all duration-300"></div>
            </button>
        </div>
        <div className="absolute top-1/2 -right-16 md:-right-24 -translate-y-1/2 z-50">
            <button 
                onClick={() => handleFlip('next')} 
                disabled={flippedIndex === totalSheets}
                className={`group p-4 md:p-8 rounded-full transition-all duration-500 disabled:opacity-0 ${flippedIndex === totalSheets ? 'pointer-events-none' : ''}`}
            >
                 <div className="w-8 md:w-12 h-[2px] bg-black/20 group-hover:w-12 md:group-hover:w-16 group-hover:bg-black transition-all duration-300"></div>
            </button>
        </div>

        {/* 
            HARDCOVER BACKING BOARD (Split into Left/Right to control visibility)
        */}
        {/* LEFT BOARD - Only render when book is NOT closed at start */}
        {flippedIndex > 0 && (
            <div 
                className="absolute top-1/2 -translate-y-1/2 bg-[#1a1a1a] rounded-l-[4px] shadow-2xl transition-opacity duration-1000"
                style={{
                    left: '-0.75%', 
                    right: '50%',
                    height: '102.5%',
                    zIndex: 0,
                    boxShadow: 'inset 10px 0 20px rgba(0,0,0,0.5)',
                    animation: 'fadeIn 1s ease-in-out'
                }}
            />
        )}
        
        {/* RIGHT BOARD - Only render when book is NOT closed at end */}
        {flippedIndex < totalSheets && (
            <div 
                className="absolute top-1/2 -translate-y-1/2 bg-[#1a1a1a] rounded-r-[4px] shadow-2xl transition-opacity duration-1000"
                style={{
                    left: '50%',
                    right: '-0.75%',
                    height: '102.5%',
                    zIndex: 0,
                    boxShadow: 'inset -10px 0 20px rgba(0,0,0,0.5)',
                    animation: 'fadeIn 1s ease-in-out'
                }}
            />
        )}

        {/* Center Spine Crease (Visual) */}
        <div 
          className="absolute left-1/2 top-[-1.5%] bottom-[-1.5%] w-[4px] bg-[#111] z-10 -translate-x-1/2 rounded-sm shadow-inner transition-opacity duration-500"
          style={{ opacity: (flippedIndex === 0 || flippedIndex === totalSheets) ? 0 : 1 }}
        />

        {/* Right half container (The "Table" for the pages) */}
        <div className="relative w-1/2 h-full ml-auto book-spread"> 
          
          {PORTFOLIO_DATA.map((sheetData, index) => {
             const isFirst = index === 0;
             const isLast = index === totalSheets - 1;

             // Dynamic Page Stack Shadows
             const rightStackShadow = `
                1px 0 0 #e5e5e5, 
                2px 0 0 #d4d4d4, 
                3px 0 0 #e5e5e5, 
                4px 0 0 #d4d4d4, 
                5px 0 0 #e5e5e5, 
                6px 2px 4px rgba(0,0,0,0.1)
             `;
             
             const leftStackShadow = `
                -1px 0 0 #e5e5e5, 
                -2px 0 0 #d4d4d4, 
                -3px 0 0 #e5e5e5, 
                -4px 0 0 #d4d4d4, 
                -5px 0 0 #e5e5e5, 
                -6px 2px 4px rgba(0,0,0,0.1)
             `;

             return (
            <div
              key={sheetData.id}
              ref={(el) => { sheetsRef.current[index] = el; }}
              className="page-leaf absolute top-0 left-0 w-full h-full cursor-pointer origin-left will-change-transform"
              onClick={() => {
                if (index >= flippedIndex) handleFlip('next');
                else handleFlip('prev');
              }}
              style={{ 
                zIndex: totalSheets - index,
              }}
            >
              {/* Front Face (Right Page) */}
              <div 
                className="page-face bg-[#fbfbfb]"
                style={{
                    boxShadow: isFirst ? 'inset 5px 0 15px rgba(0,0,0,0.4)' : rightStackShadow,
                    borderLeft: isFirst ? 'none' : '1px solid rgba(0,0,0,0.05)',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden'
                }}
              >
                <div className="w-full h-full relative overflow-hidden">
                    {/* Spine Gradient - Disable for black cover */}
                    {!isFirst && (
                         <div className="absolute left-0 top-0 bottom-0 w-[6%] bg-gradient-to-r from-black/15 to-transparent z-20 pointer-events-none mix-blend-multiply" />
                    )}
                    <PageLayout content={sheetData.front} side="right" />
                </div>
              </div>

              {/* Back Face (Left Page) */}
              <div 
                className="page-face page-back bg-[#fbfbfb]"
                style={{
                    boxShadow: isLast ? 'inset -3px 0 10px rgba(0,0,0,0.05)' : leftStackShadow,
                    borderRight: '1px solid rgba(0,0,0,0.05)',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden'
                }}
              >
                <div className="w-full h-full relative overflow-hidden">
                    {/* Spine Gradient */}
                    <div className="absolute right-0 top-0 bottom-0 w-[6%] bg-gradient-to-l from-black/15 to-transparent z-20 pointer-events-none mix-blend-multiply" />
                    <PageLayout content={sheetData.back} side="left" />
                </div>
              </div>
            </div>
          )}})}
        </div>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};
