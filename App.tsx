
import React, { useState, useEffect } from 'react';
import { Book } from './components/Book';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate from 0 to 100
    const duration = 2500; // 2.5 seconds
    const interval = 20;
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress(prev => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800); // Wait a bit at 100% before unmounting
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div 
      className="fixed inset-0 z-50 bg-[#f8f8f8] text-black flex flex-col justify-between p-8 md:p-12 selection:bg-black selection:text-white font-eb-garamond"
    >
      {/* Top Row */}
      <div className="flex justify-between items-start">
        <h1 className="text-xs md:text-sm font-medium tracking-widest uppercase font-eb-garamond">Pham Xuan Sang</h1>
        <h1 className="text-xs md:text-sm font-medium tracking-widest uppercase font-eb-garamond">Portfolio 2025</h1>
      </div>

      {/* Center Percentage */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="overflow-hidden h-[20vh] md:h-[30vh] flex items-center">
             <span className="text-[15vh] p-6 md:text-[25vh] italic leading-none font-eb-garamond tracking-tighter transform translate-y-2 font-light">
                {Math.floor(progress)}%
             </span>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-1">
            <p className="text-[10px] md:text-xs font-medium tracking-widest text-zinc-600 font-eb-garamond">Open for new opportunities.</p>
        </div>
        
        <div className="flex items-center gap-3">
             <div className="w-1.5 h-1.5 bg-black animate-pulse rounded-full"></div>
             <p className="text-[10px] md:text-xs font-medium tracking-widest font-eb-garamond">Loading Resources</p>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    // Studio Grey Background with stronger vignette to highlight the book frame
    <div className="w-screen h-screen bg-[#e5e5e5] flex flex-col items-center justify-center overflow-hidden font-sans relative">
        
      {/* Radial Gradient for Studio Lighting - Focused center, darker edges */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#f5f5f5_0%,_#d4d4d4_60%,_#bfbfbf_100%)] pointer-events-none" />

      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Main Content (Fade in/Scale up when loaded) */}
      <main 
        className={`z-10 w-full h-full flex items-center justify-center transition-all duration-[1500ms] ease-out 
        ${isLoading ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'}`}
      >
        <Book />
      </main>
      
      {/* Texture Overlay (Noise) for realism */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.04] z-40 mix-blend-multiply"
        style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
}

export default App;
