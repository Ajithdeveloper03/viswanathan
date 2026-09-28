'use client';
import React from 'react';
import Image from 'next/image';

export interface WhyItem {
  icon: React.ReactNode;
  /** Bold keyword/phrase shown first */
  title: string;
  /** Optional lighter description shown inline after the title */
  desc?: string;
}

interface WhyChooseUsSectionProps {
  heading: string;
  subheading?: string;
  items: WhyItem[];          // ideally 4–8 items; split evenly left/right
  imageUrl: string;
  imageAlt?: string;
  /** 'navy' uses subtle white translucency, 'gold' uses accent color gradients */
  theme?: 'navy' | 'gold';
}

const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({
  heading,
  subheading = 'Why Choose Us',
  items,
  imageUrl,
  imageAlt = 'Professional team',
  theme = 'navy',
}) => {
  const mid   = Math.ceil(items.length / 2);
  const left  = items.slice(0, mid);
  const right = items.slice(mid);

  const Card = ({ item }: { item: WhyItem }) => {
    // Huge glassmorphism with subtle gold (accent) gradient color theory
    const cardBg = 'bg-white/5 bg-gradient-to-br from-white/5 to-accent-500/10 hover:from-white/10 hover:to-accent-500/20 border-white/10 hover:border-accent-400/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-blur-2xl';
    
    const iconColor = 'text-accent-400';

    return (
      <div className={`flex-1 border rounded-2xl p-6 transition-all duration-500 ${cardBg} group`}>
        <div className={`w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-5 shadow-inner border border-white/10 flex-shrink-0 group-hover:scale-110 transition-transform duration-500 ${iconColor}`}>
          {item.icon}
        </div>
        <p className="text-sm leading-relaxed text-white">
          <strong className="font-bold text-base block mb-1">{item.title}</strong>
          {item.desc && <span className="font-normal text-secondary-300"> {item.desc}</span>}
        </p>
      </div>
    );
  };

  return (
    <section className="py-16 lg:py-24 bg-primary-900 relative overflow-hidden">
      {/* Ambient glow orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        {/* Section heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 border border-accent-500/40 text-accent-400 font-bold text-xs tracking-[0.18em] uppercase px-4 py-2 rounded-full mb-6">
            {subheading}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[52px] font-extrabold text-white leading-[1.2] max-w-3xl mx-auto">
            {heading}
          </h2>
        </div>

        {/* Bento grid: left cards | center image | right cards */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px_1fr] xl:grid-cols-[1fr_360px_1fr] gap-4">

          {/* Left column */}
          <div className="flex flex-col gap-4">
            {left.map((item, i) => <Card key={i} item={item} />)}
          </div>

          {/* Center image — hidden on mobile */}
          <div className="relative rounded-3xl overflow-hidden min-h-[320px] hidden lg:block shadow-2xl">
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="object-cover"
            />
            {/* subtle inner vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent pointer-events-none" />
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4">
            {right.map((item, i) => <Card key={i} item={item} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
