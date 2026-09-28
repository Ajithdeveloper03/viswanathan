import React from 'react';

interface ClientLogosProps {
  hideHeader?: boolean;
}

const clients = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  name: `Trusted Client ${i + 1}`,
  logo: '/vrassociates/vr-logo.png'
}));

export default function ClientLogos({ hideHeader = false }: ClientLogosProps = {}) {
  return (
    <section className={`bg-white overflow-hidden ${hideHeader ? 'py-6 lg:py-8' : 'py-8 lg:py-12'}`}>
      <div className="container-custom">
        {!hideHeader && (
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary-900 mb-4">
              Brands That Trust <span className="text-accent-500">Viswanathan R Associates</span>
            </h2>
            <p className="text-lg text-secondary-600">
              Here are some of the businesses we have partnered with for their financial, corporate, and valuation needs:
            </p>
          </div>
        )}

        {/* Infinite Slider Wrapper */}
        <div className="relative overflow-hidden w-full flex items-center py-2">
          
          {/* Gradient Masks for fading effect */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="flex w-max animate-marquee gap-6 lg:gap-8 items-center px-4">
            
            {/* Set 1 */}
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="flex flex-col items-center group w-48 flex-shrink-0">
                <div className="w-full h-24 bg-white rounded-2xl border border-secondary-100 shadow-soft hover:shadow-soft-lg hover:border-accent-200 transition-all duration-300 p-4 flex items-center justify-center mb-3 relative overflow-hidden">
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="max-h-12 w-auto object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <span className="text-sm md:text-base font-bold text-secondary-900 text-center group-hover:text-accent-500 transition-colors">
                  {client.name}
                </span>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
