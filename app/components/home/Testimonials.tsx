'use client';
import { Star, ChevronRight } from 'lucide-react';

const testimonialsData = [
  {
    text: "Their precise business valuation services were instrumental during our recent merger. The team's deep industry knowledge and professional approach gave us immense confidence.",
    name: "Arun Prakash",
    role: "MANAGING DIRECTOR, CHENNAI",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=200"
  },
  {
    text: "VRA's cost optimization strategies transformed our manufacturing operations. They identified critical inefficiencies and helped us implement actionable, sustainable solutions.",
    name: "Priya Natarajan",
    role: "CFO, COIMBATORE",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
  },
  {
    text: "The guidance we received on corporate governance and compliance was exceptional. They act not just as consultants, but as true strategic partners for our business.",
    name: "Karthik Subramanian",
    role: "FOUNDER & CEO, BENGALURU",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200"
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
    <section className="relative w-full bg-white overflow-hidden py-12 lg:py-16">
      
      {/* Background Image with Curved Left Edge */}
      <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full z-0 hidden lg:block">
         <div className="absolute inset-0 bg-gray-200">
           <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
              alt="Corporate Background" 
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
                Trusted by Industry Leaders
              </h2>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                Discover how our strategic financial advisory and valuation services have empowered businesses to achieve sustainable growth and operational excellence.
              </p>
            </div>
            
            {/* Right side slider */}
            <div className="lg:col-span-8 relative group min-w-0">
               
               {/* Left Arrow */}
               <button 
                 onClick={scrollPrev} 
                 className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full border border-gray-200 shadow-[0_4px_15px_rgba(0,0,0,0.1)] flex justify-center items-center hover:bg-gray-50 z-30 transition-all cursor-pointer"
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
                      className="snap-start shrink-0 w-full md:w-[calc(50%-12px)] bg-white rounded-[40px] px-12 py-8 md:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.06)] flex flex-col min-h-[260px] border border-gray-50"
                    >
                       {/* Stars */}
                       <div className="flex items-center gap-1.5 mb-5">
                         {[...Array(5)].map((_, idx) => (
                           <Star key={idx} className="w-5 h-5 fill-[#B28F52] text-[#B28F52]" />
                         ))}
                       </div>

                       {/* Quote Text */}
                       <p className="text-gray-500 text-[15px] leading-relaxed flex-1">
                         &quot;{testimonial.text}&quot;
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
                 className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full border border-gray-200 shadow-[0_4px_15px_rgba(0,0,0,0.1)] flex justify-center items-center hover:bg-gray-50 z-30 transition-all cursor-pointer"
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
