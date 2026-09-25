'use client';

import { Check } from 'lucide-react';

export function VisionMissionSection() {
  const originalPoints = [
    "Understand the true drivers of cost and profitability.",
    "Make informed strategic and investment decisions.",
    "Strengthen financial controls and corporate governance.",
    "Improve business processes and management reporting.",
    "Build resilient, efficient, and value-driven enterprises."
  ];

  return (
    <section className="py-8 lg:py-12 bg-[#f8fafc] overflow-hidden">
      <div className="container-custom">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0f172a]">
            Our Mission & Vision
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-8 items-stretch">
          
          {/* LEFT CARD */}
          <div className="bg-white rounded-[2rem] p-6 sm:p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-between border border-gray-100">
            
            {/* Mission & Vision Boxes */}
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
              {/* Mission Box */}
              <div className="bg-[#f8f9fa] rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-500 text-[14px] leading-relaxed">
                  To help organizations navigate complexity and achieve long-term success through expert financial visibility, robust cost discipline, and strategic insights.
                </p>
              </div>
              
              {/* Vision Box */}
              <div className="bg-[#dcfce7] rounded-2xl p-6">
                <h3 className="text-lg font-bold text-[#166534] mb-3">Our Vision</h3>
                <p className="text-[#15803d] text-[14px] leading-relaxed font-medium">
                  To be a trusted partner for businesses seeking stronger financial visibility, better cost discipline, effective governance, and sustainable growth.
                </p>
              </div>
            </div>

            {/* Approach Section (Replacing Trust Builders) */}
            <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-center sm:items-start">
              
              {/* List */}
              <div className="flex-1 w-full">
                <h3 className="text-xl font-bold text-gray-900 mb-4">How We Help Organizations</h3>
                <ul className="space-y-3">
                  {originalPoints.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" strokeWidth={3} />
                      <span className="text-gray-500 text-[14px] font-medium leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
          </div>

          {/* RIGHT CARD */}
          <div className="bg-[#1F2C50] rounded-[2rem] overflow-hidden relative flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
            
            {/* Large Image positioned at bottom */}
            <div className="relative flex-1 h-full w-full min-h-[400px]">
               <img 
                 src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200"
                 alt="Business Vision"
                 className="absolute inset-0 w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-[#1F2C50]/20 mix-blend-multiply"></div>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}

export default VisionMissionSection;
