'use client';
import { Star, ChevronRight } from 'lucide-react';

const testimonialsData = [
  {
    text: "I have been investing in their Fixed Deposits for 3 years. The returns are excellent and the staff is always helpful and transparent.",
    name: "Rajesh Kumar",
    role: "RETIRED TEACHER, COIMBATORE",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    text: "SGNL's savings scheme helped me start my tailoring unit with confidence. The team guided me through every step with patience and professionalism.",
    name: "Lakshmi Devi",
    role: "WOMEN ENTREPRENEUR, MADURAI",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    text: "The financial advisory services have been a game-changer for our family business. Highly recommended for their trust and reliability.",
    name: "Suresh Pillai",
    role: "BUSINESS OWNER, CHENNAI",
    image: "https://randomuser.me/api/portraits/men/78.jpg"
  }
];

export function Testimonials() {
  const scrollNext = () => {
    const slider = document.getElementById('testimonial-slider');
    if (slider) {
      const cardWidth = slider.firstElementChild?.clientWidth || 360;
      slider.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    const slider = document.getElementById('testimonial-slider');
    if (slider) {
      const cardWidth = slider.firstElementChild?.clientWidth || 360;
      slider.scrollBy({ left: -(cardWidth + 24), behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full border-t-[8px] border-[#1F2C50] bg-white overflow-hidden py-12 lg:py-16">
      
      {/* Background Image with Curved Left Edge */}
      <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full z-0 hidden lg:block">
         <div className="absolute inset-0 bg-gray-200">
           <img 
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=2000" 
              alt="Background" 
              className="w-full h-full object-cover grayscale opacity-25 mix-blend-multiply"
            />
         </div>
          {/* Curve overlap from left */}
          <div className="absolute top-0 left-0 w-[150px] h-full text-white">
             <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                <path d="M0,0 L100,0 C30,30 30,70 100,100 L0,100 Z" fill="currentColor" />
             </svg>
          </div>
      </div>

      <div className="container-custom relative z-10">
         <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left side text */}
            <div className="lg:col-span-4 pr-4 min-w-0">
              <span className="text-[#1F2C50] text-[13px] font-extrabold tracking-[0.2em] uppercase mb-4 block">
                Testimonials
              </span>
              <h2 className="text-4xl lg:text-[42px] font-extrabold text-[#0f172a] leading-[1.1] mb-6">
                Trusted by Members Across Tamil Nadu
              </h2>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                Hear from members who have chosen SGNL for their savings, investment and insurance needs.
              </p>
            </div>
            
            {/* Right side slider */}
            <div className="lg:col-span-8 relative group min-w-0">
               
               {/* Left Arrow */}
               <button 
                 onClick={scrollPrev} 
                 className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-full border border-gray-200 shadow-xl flex justify-center items-center hover:bg-gray-50 z-30 transition-all cursor-pointer opacity-0 md:opacity-100"
               >
                  <ChevronRight className="w-6 h-6 text-gray-700 rotate-180" strokeWidth={1.5} />
               </button>

               <div 
                 id="testimonial-slider" 
                 className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-6 scroll-smooth"
                 style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
               >
                  {testimonialsData.map((testimonial, i) => (
                    <div 
                      key={i} 
                      className="snap-start shrink-0 w-full md:w-[calc(50%-12px)] bg-white rounded-[40px] p-8 shadow-[0_12px_40px_rgba(0,0,0,0.06)] flex flex-col min-h-[260px] border border-gray-50"
                    >
                       {/* Stars */}
                       <div className="flex items-center gap-1.5 mb-5">
                         {[...Array(5)].map((_, idx) => (
                           <Star key={idx} className="w-5 h-5 fill-[#B28F52] text-[#B28F52]" />
                         ))}
                       </div>

                       {/* Quote Text */}
                       <p className="text-gray-500 text-[15px] leading-relaxed flex-1">
                         "{testimonial.text}"
                       </p>

                       {/* Author Info */}
                       <div className="flex items-center gap-4 mt-6">
                         <img 
                           src={testimonial.image} 
                           alt={testimonial.name} 
                           className="w-11 h-11 rounded-full object-cover shadow-sm"
                         />
                         <div>
                           <h4 className="text-[#0f172a] font-bold text-[14px]">{testimonial.name}</h4>
                           <p className="text-gray-400 text-[10px] font-bold tracking-widest uppercase mt-0.5">{testimonial.role}</p>
                         </div>
                       </div>
                    </div>
                  ))}
               </div>
               
               {/* Right Arrow */}
               <button 
                 onClick={scrollNext} 
                 className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-full border border-gray-200 shadow-xl flex justify-center items-center hover:bg-gray-50 z-30 transition-all cursor-pointer opacity-0 md:opacity-100"
               >
                  <ChevronRight className="w-6 h-6 text-gray-700" strokeWidth={1.5} />
               </button>
            </div>
         </div>
      </div>
      
      {/* Inline styles for hiding scrollbar */}
      <style dangerouslySetInnerHTML={{__html: `
        #testimonial-slider::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}

export default Testimonials;
