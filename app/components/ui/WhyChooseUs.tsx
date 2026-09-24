import { LucideIcon, Target } from 'lucide-react';
import React from 'react';

interface WhyChooseCard {
  title: string;
  desc: string;
  icon: LucideIcon;
}

interface WhyChooseUsProps {
  badgeText?: string;
  badgeIcon?: LucideIcon;
  titleBold: string;
  titleLight: string;
  description: string;
  cards: WhyChooseCard[];
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ 
  badgeText = "Why Choose Us", 
  badgeIcon: BadgeIcon = Target,
  titleBold, 
  titleLight, 
  description, 
  cards 
}) => {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white font-sans">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16 mb-16">
          
          {/* Left: Badge and Titles */}
          <div className="lg:w-1/2">
            <div className="flex items-center gap-2 text-accent-500 mb-6">
              <BadgeIcon className="w-5 h-5" />
              <span className="font-bold text-sm tracking-wide">{badgeText}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-900 leading-[1.2]">
              {titleBold} <br className="hidden md:block" />
              <span className="font-light text-secondary-500">{titleLight}</span>
            </h2>
          </div>

          {/* Right: Description */}
          <div className="lg:w-1/2 flex items-center">
            <p className="text-secondary-600 text-lg leading-relaxed border-l-2 border-secondary-100 pl-6 lg:pl-10">
              {description}
            </p>
          </div>
          
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div key={idx} className="bg-[#f8f9fa] rounded-3xl p-8 border border-secondary-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-accent-500 flex items-center justify-center text-white mb-8 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8" />
                </div>
                
                {/* Title */}
                <h4 className="text-lg font-bold text-primary-900 uppercase tracking-wide leading-tight mb-6 pr-4">
                  {card.title}
                </h4>
                
                {/* Separator Line */}
                <div className="w-full h-px bg-secondary-200 mb-6 group-hover:bg-accent-500 transition-colors duration-300"></div>
                
                {/* Description */}
                <p className="text-secondary-600 text-sm leading-relaxed">
                  {card.desc}
                </p>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
