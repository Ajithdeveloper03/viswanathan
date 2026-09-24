import { ArrowUpRight, LucideIcon } from 'lucide-react';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HoverImageCardProps {
  title: string;
  description: string;
  imageSrc: string;
  icon: LucideIcon;
  linkHref: string;
}

const HoverImageCard: React.FC<HoverImageCardProps> = ({
  title,
  description,
  imageSrc,
  icon: Icon,
  linkHref
}) => {
  return (
    <div className="group bg-white hover:bg-accent-500 rounded-3xl lg:rounded-[2.5rem] p-8 border border-secondary-100 hover:border-accent-500 transition-colors duration-500 shadow-sm hover:shadow-[0_20px_40px_rgba(245,177,51,0.25)] flex flex-col h-full relative overflow-hidden">
      
      {/* Top Section: Text & Arrow Button */}
      <div className="flex justify-between items-start mb-8 relative z-10">
        <div className="pr-6">
          <h3 className="text-2xl font-extrabold text-primary-900 group-hover:text-primary-900 mb-3 transition-colors">
            {title}
          </h3>
          <p className="text-secondary-600 group-hover:text-primary-900/80 text-sm leading-relaxed transition-colors">
            {description}
          </p>
        </div>
        
        {/* Arrow Button */}
        <Link 
          href={linkHref}
          className="w-12 h-12 rounded-full border border-secondary-200 bg-white flex items-center justify-center flex-shrink-0 group-hover:bg-primary-900 group-hover:border-primary-900 group-hover:text-white text-primary-900 transition-all duration-500"
        >
          <ArrowUpRight className="w-5 h-5" />
        </Link>
      </div>

      {/* Bottom Section: Image with overlay icon */}
      <div className="relative w-full h-[220px] mt-auto rounded-2xl lg:rounded-[2rem] overflow-hidden">
        <Image 
          src={imageSrc} 
          alt={title} 
          fill 
          className="object-cover group-hover:scale-110 transition-transform duration-700" 
        />
        
        {/* Icon Badge Bottom Left */}
        <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-accent-500 flex items-center justify-center text-white shadow-lg group-hover:bg-primary-900 transition-colors duration-500">
          <Icon className="w-6 h-6" />
        </div>
      </div>

    </div>
  );
};

export default HoverImageCard;
