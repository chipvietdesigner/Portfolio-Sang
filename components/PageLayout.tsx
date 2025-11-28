
import React from 'react';
import { PageContentProps } from '../types';

interface Props {
  content: PageContentProps;
  side?: 'left' | 'right';
}

export const PageLayout: React.FC<Props> = ({ content, side }) => {
  // Base classes with updated font defaults
  const baseClasses = "w-full h-full text-[#111] overflow-hidden relative selection:bg-black selection:text-white font-eb-garamond";
  
  // --- COVER PAGE (BLACK) ---
  if (content.type === 'cover') {
    return (
      <div className={`${baseClasses} bg-[#1c1c1c] text-neutral-200 flex flex-col justify-between p-12 md:p-16 relative overflow-hidden border-l border-white/5`}>
         {/* Grain Texture */}
         <div className="absolute inset-0 opacity-[0.12] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
         
         {/* Top Info */}
         <div className="z-10 flex justify-between items-start opacity-70">
             <span className="text-[9px] font-sans tracking-[0.2em] uppercase">Portfolio</span>
             <span className="text-[9px] font-sans tracking-[0.2em] uppercase">{content.details?.year}</span>
         </div>

         {/* Center Title */}
         <div className="z-10 text-center flex flex-col items-center">
             {/* Huge Debossed Text Behind */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
                  <span className="text-[60px] md:text-[80px] lg:text-[100px] font-sans font-bold leading-none tracking-tighter text-[#151515] opacity-100 drop-shadow-[1px_1px_0px_rgba(255,255,255,0.08)]" style={{ textShadow: '-1px -1px 0 rgba(0,0,0,0.8)' }}>
                     {content.details?.year}
                  </span>
             </div>

             <h1 className="relative z-10 text-5xl md:text-8xl font-cormorant italic font-medium tracking-wide leading-none mb-6 text-center text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-500">
                {content.title}
             </h1>
             <div className="relative z-10 w-8 h-[1px] bg-white/30 mx-auto mb-6"></div>
             <p className="relative z-10 text-xs font-sans uppercase tracking-[0.3em] text-neutral-400">{content.subtitle}</p>
         </div>

         {/* Bottom Detail */}
         <div className="z-10 text-center opacity-50">
             <p className="text-[8px] font-sans tracking-widest uppercase">{content.details?.location}</p>
         </div>
         
         {/* Decorative Minimal Frame */}
         <div className="absolute inset-5 border border-white/5 pointer-events-none"></div>
      </div>
    );
  }

  // --- SECTION TITLE PAGE (MINIMALIST DIVIDER) ---
  if (content.type === 'section-title') {
      return (
        <div className={`${baseClasses} bg-[#fbfbfb] flex flex-col items-center justify-center p-12 relative`}>
             <div className="absolute inset-0 m-[1px] border-[0.5px] border-black/5 pointer-events-none"></div>

             {/* Page Num */}
             <div className={`absolute top-12 ${side === 'left' ? 'left-12' : 'right-12'} z-20`}>
                <span className="font-sans text-[10px] text-zinc-400">/ {content.pageNumber}</span>
             </div>

             <div className="text-center z-10">
                 <h2 className="text-5xl md:text-6xl font-cormorant italic font-medium tracking-wider mb-6 text-zinc-900 leading-tight">
                    {content.title}
                 </h2>
                 <div className="w-12 h-[1px] bg-black/10 mx-auto mb-6"></div>
                 <p className="font-sans text-[9px] uppercase tracking-[0.3em] text-zinc-500">
                    {content.subtitle}
                 </p>
             </div>
        </div>
      )
  }

  // --- PROJECT INDEX PAGE ---
  if (content.type === 'project-index') {
    return (
        <div className={`${baseClasses} bg-[#fbfbfb] p-16 md:p-20 flex flex-col justify-center`}>
            <div className="absolute inset-0 m-[1px] border-[0.5px] border-black/5 pointer-events-none"></div>
            
            <div className={`absolute top-12 ${side === 'left' ? 'left-12' : 'right-12'} z-20`}>
                <span className="font-sans text-[10px] text-zinc-400">/ {content.pageNumber}</span>
             </div>

            <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-cormorant italic font-medium tracking-wide text-zinc-900 mb-2">{content.title}</h2>
                <div className="w-8 h-[1px] bg-black/20 mb-2"></div>
                <p className="font-sans text-[9px] uppercase tracking-[0.25em] text-zinc-400">{content.subtitle}</p>
            </div>

            <div className="flex flex-col gap-6">
                {content.description?.map((item, idx) => (
                    <div key={idx} className="flex items-baseline gap-4 group cursor-default">
                        <span className="font-sans text-[10px] text-zinc-300 font-bold group-hover:text-zinc-800 transition-colors">{(idx + 1).toString().padStart(2, '0')}</span>
                        <div className="flex-1 border-b border-zinc-100 pb-2 group-hover:border-zinc-300 transition-colors flex justify-between items-baseline">
                            <span className="font-cormorant text-xl md:text-2xl text-zinc-800 italic group-hover:translate-x-2 transition-transform duration-300">{item.split('|')[0]}</span>
                            <span className="font-sans text-[9px] uppercase tracking-wider text-zinc-400">{item.split('|')[1]}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
  }

  // --- RESUME PAGE (BOOK / BIOGRAPHY STYLE) ---
  if (content.type === 'resume') {
    return (
        <div className={`${baseClasses} bg-[#fbfbfb] p-10 md:p-12 flex flex-col gap-6`}>
             <div className="absolute inset-0 m-[1px] border-[0.5px] border-black/5 pointer-events-none"></div>

             {/* Header */}
             <div className="flex justify-between items-start shrink-0">
                {side === 'right' ? (
                     <>
                        <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-zinc-800">{content.title}</span>
                        <span className="font-sans text-[10px] text-zinc-400">/{content.pageNumber}</span>
                     </>
                ) : (
                    <>
                        <span className="font-sans text-[10px] text-zinc-400">/{content.pageNumber}</span>
                        <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-zinc-800">{content.title}</span>
                    </>
                )}
            </div>

            {/* Resume Content - Narrative Style */}
            <div className="flex-1 flex flex-col gap-6 justify-start">
                {content.resumeSections?.map((section, idx) => (
                    <div key={idx} className="group">
                        {/* Heading Group */}
                        {section.heading && (
                            <div className="flex flex-col items-center mb-4 text-center mt-2">
                                <h3 className="text-xl md:text-2xl font-cormorant font-semibold uppercase tracking-wider text-zinc-900 leading-none mb-2">
                                    {section.heading}
                                </h3>
                                <div className="flex items-center gap-2 text-[9px] font-sans uppercase tracking-widest text-zinc-500">
                                    {section.subheading && <span>{section.subheading}</span>}
                                    {section.subheading && section.date && <span>•</span>}
                                    {section.date && <span>{section.date}</span>}
                                </div>
                            </div>
                        )}

                        {/* Items */}
                        {section.items && (
                            <div className="text-[11px] md:text-[12px] leading-[1.65] text-zinc-800 font-eb-garamond text-justify hyphens-auto">
                                {section.items.map((item, i) => (
                                    <p key={i} className={`mb-2 ${i === 0 && section.heading ? 'first-letter:float-left first-letter:text-3xl first-letter:pr-2 first-letter:font-cormorant first-letter:leading-[0.8] first-letter:text-zinc-400' : 'indent-6'}`}>
                                        {item}
                                    </p>
                                ))}
                            </div>
                        )}
                        
                        {/* Decorative separator */}
                        {idx < (content.resumeSections?.length || 0) - 1 && section.heading && (
                            <div className="w-full flex justify-center mt-6 opacity-20">
                                <span className="font-cormorant text-xl">~</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
  }

  // --- PROJECT SINGLE PAGE (MAGAZINE STYLE OPENER) ---
  if (content.type === 'project-opener') {
    return (
      <div className={`${baseClasses} bg-[#fbfbfb] flex flex-col`}>
        <div className="absolute inset-0 m-[1px] border-[0.5px] border-black/5 pointer-events-none z-30"></div>

        {/* Top Image Section (65%) */}
        <div className="h-[65%] w-full relative overflow-hidden group">
            {/* Page number positioning based on side */}
            <div className={`absolute top-8 ${side === 'left' ? 'left-8' : 'right-8'} z-20 flex flex-col ${side === 'left' ? 'items-start' : 'items-end'}`}>
                <span className="font-sans text-[8px] uppercase tracking-[0.2em] text-white/80 mix-blend-difference mb-1">Selected Work</span>
                <span className="font-sans text-[10px] text-white mix-blend-difference">/{content.pageNumber}</span>
            </div>
            
            {content.imageSrc ? (
                 <img 
                 src={content.imageSrc} 
                 className="w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-105"
                 alt="Project Hero"
                />
            ) : (
                <div className="w-full h-full bg-zinc-200"></div>
            )}
            
            {/* Gradient Overlay for text readability at the edge */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#fbfbfb] to-transparent z-10"></div>
        </div>

        {/* Bottom Content Section (35%) */}
        <div className="flex-1 px-12 md:px-16 pb-12 flex flex-col justify-end relative z-20 -mt-10">
             <div className="mb-6">
                <p className="text-[10px] font-sans uppercase text-zinc-500 tracking-[0.3em] mb-3">
                    {content.subtitle}
                </p>
                <h1 className="text-6xl md:text-7xl font-cormorant font-medium uppercase tracking-tight leading-none text-zinc-900">
                    {content.title}
                </h1>
             </div>

             <div className="w-full h-[1px] bg-black/10 mb-6"></div>

             {/* Minimal Horizontal Specs */}
             <div className="flex flex-wrap gap-x-12 gap-y-4">
                 {content.details?.specs?.map((spec, i) => (
                    <div key={i} className="flex flex-col">
                        <span className="text-[8px] font-sans uppercase tracking-widest text-zinc-400 mb-1">{spec.label}</span>
                        {!spec.isLink ? (
                             <span className="text-[11px] font-serif italic text-zinc-800">{spec.value}</span>)
                             : <span className="text-[11px] font-serif italic text-zinc-800" onClick={(e) => {
                                e.stopPropagation();
                                window.open(spec.value, '_blank');
                             }} url={spec.value}>{spec.value}</span>}
                    </div>
                 ))}
             </div>
        </div>
      </div>
    );
  }

  // --- PROJECT DETAIL PAGE (Grid + Lists) ---
  if (content.type === 'project-detail') {
    return (
        <div className={`${baseClasses} bg-[#fbfbfb] p-10 md:p-12 flex flex-col`}>
             <div className="absolute inset-0 m-[1px] border-[0.5px] border-black/5 pointer-events-none"></div>
             
             {/* Header */}
             <div className="flex justify-between items-start mb-10 shrink-0">
                {side === 'right' ? (
                     <>
                        <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-zinc-800">{content.title}</span>
                        <span className="font-sans text-[10px] text-zinc-400">/{content.pageNumber}</span>
                     </>
                ) : (
                    <>
                        <span className="font-sans text-[10px] text-zinc-400">/{content.pageNumber}</span>
                        <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-zinc-800">{content.title}</span>
                    </>
                )}
            </div>
            
            <div className="flex-1 flex flex-col gap-10">
                {/* Horizontal Lists */}
                <div className="space-y-8">
                    {content.projectSections?.map((section, idx) => (
                        <div key={idx} className="flex flex-col gap-3">
                            <h4 className="text-sm font-cormorant italic font-semibold text-zinc-400 border-b border-zinc-100 pb-2 mb-2">
                                {section.heading}
                            </h4>
                            <div className="grid gap-3">
                                {section.items?.map((item, i) => (
                                    <div key={i} className="flex gap-4 items-start">
                                        <span className="font-cormorant italic text-zinc-300 text-xs shrink-0">
                                            {(i + 1).toString().padStart(2, '0')}
                                        </span>
                                        <p className="text-[13px] leading-relaxed text-zinc-800 font-eb-garamond">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Image Gallery (Bottom) */}
                <div className="mt-auto pt-8 border-t border-zinc-100">
                    <div className="grid grid-cols-3 gap-2 h-32 md:h-40">
                         {content.diagrams?.map((img, i) => (
                             <div key={i} className="relative overflow-hidden group border border-zinc-200">
                                 <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply z-10 pointer-events-none transition-opacity group-hover:opacity-0"></div>
                                 <img 
                                    src={img} 
                                    alt="Detail" 
                                    className="w-full h-full object-cover grayscale mix-blend-multiply opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110" 
                                />
                             </div>
                         ))}
                    </div>
                    <div className="flex justify-between items-center mt-2">
                        <span className="text-[8px] font-sans uppercase tracking-widest text-zinc-400">Project Artifacts</span>
                        <span className="text-[8px] font-sans uppercase tracking-widest text-zinc-300">Fig. 1.{content.pageNumber}</span>
                    </div>
                </div>
            </div>
        </div>
    );
  }

  // --- PROJECT RIGHT PAGE (Generic Full Image - fallback) ---
  if (content.type === 'project-right') {
    return (
      <div className={`${baseClasses} bg-[#fbfbfb]`}>
          <div className="absolute inset-0 m-[1px] border-[0.5px] border-black/5 pointer-events-none"></div>
          <div className="absolute top-12 right-12 z-20 flex justify-end w-full pr-0 pointer-events-none mix-blend-exclusion text-white/80">
              <span className="font-sans text-[10px]">/ {content.pageNumber}</span>
          </div>
          <div className="w-full h-full bg-zinc-100 flex items-center justify-center overflow-hidden relative group">
               <div className="absolute inset-8 md:inset-12 border border-white/20 z-10 pointer-events-none"></div>
               {content.imageSrc && (
                   <img 
                    src={content.imageSrc} 
                    className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-105"
                    alt="Render"
                   />
               )}
               {content.title && (
                   <div className="absolute inset-0 flex items-center justify-center bg-black/20 z-20 backdrop-blur-[1px]">
                       <h2 className="text-4xl font-cormorant italic font-medium text-white tracking-wider border-b border-white pb-3 pr-4 pl-4">{content.title}</h2>
                   </div>
               )}
          </div>
      </div>
    );
  }

  // --- INTRO / QUOTE PAGE ---
  if (content.type === 'intro') {
      return (
        <div className={`${baseClasses} bg-[#fbfbfb] p-24 flex flex-col justify-center items-center text-center`}>
            <div className="absolute inset-0 m-[1px] border-[0.5px] border-black/5 pointer-events-none"></div>
            
            <div className="w-16 h-[1px] bg-black mb-12"></div>
            <h1 className="text-xs font-sans uppercase tracking-[0.3em] mb-10 text-black">{content.title}</h1>
             <div className="max-w-lg space-y-8">
                {content.description?.map((text, i) => (
                    <p key={i} className="text-2xl md:text-3xl font-cormorant italic text-zinc-700 leading-normal">
                        {text}
                    </p>
                ))}
             </div>
        </div>
      )
  }

  // --- CONTACT PAGE ---
  if (content.type === 'contact') {
      return (
        <div className={`${baseClasses} bg-[#fbfbfb] p-16 md:p-24 flex flex-col justify-center items-center text-center`}>
             <div className="absolute inset-0 m-[1px] border-[0.5px] border-black/5 pointer-events-none"></div>
             
             <h1 className="text-xs font-sans uppercase tracking-[0.3em] mb-12 text-zinc-400">{content.title}</h1>
             
             {content.subtitle && (
                <p className="font-cormorant italic text-2xl text-zinc-600 mb-8">{content.subtitle}</p>
             )}

             {content.email && (
                 <a href={`mailto:${content.email}`} className="text-3xl md:text-4xl font-cormorant font-medium italic text-zinc-900 border-b border-zinc-900/10 hover:border-zinc-900/60 transition-all mb-12">
                     {content.email}
                 </a>
             )}

             {content.socials && (
                  <div className="flex items-center gap-10 mb-16">
                      {content.socials.map((link, idx) => (
                          <a 
                            key={idx} 
                            href={link.url} 
                            target="_blank" 
                            rel="noreferrer"
                            className="font-sans text-[9px] uppercase tracking-[0.2em] text-zinc-500 hover:text-black hover:scale-105 transition-all duration-300"
                          >
                              {link.label}
                          </a>
                      ))}
                  </div>
              )}

             <div className="flex flex-col gap-2 opacity-50">
                {content.description?.map((text, i) => (
                    <p key={i} className="text-[10px] font-sans uppercase tracking-widest text-zinc-800">
                        {text}
                    </p>
                ))}
             </div>
        </div>
      )
  }

  // --- END PAGE ---
  if (content.type === 'end') {
      return (
          <div className={`${baseClasses} bg-[#111] text-white flex flex-col justify-center items-center p-14 relative`}>
              <div className="absolute inset-4 border border-white/10 pointer-events-none" />
              
              <div className="flex-1 flex flex-col items-center justify-center">
                <h1 className="text-5xl md:text-6xl font-cormorant italic tracking-wide mb-8 text-center mix-blend-exclusion">{content.title}</h1>
                <div className="w-12 h-[1px] bg-white/20"></div>
              </div>

              <div className="mt-auto opacity-30 flex gap-4 text-[9px] font-sans uppercase tracking-widest">
                  <span>PHAM XUAN SANG</span>
              </div>
          </div>
      )
  }

  return null;
};
