'use client';
import { Zap, Code, Cloud, CreditCard, Landmark, Plane, Utensils, Activity, ShoppingCart, Briefcase, Factory, Mountain, Heart, Brain, Building } from 'lucide-react';
import { useEffect, useRef } from 'react';

const industryGroups = [
  {
    category: 'ENERGY',
    icon: Zap,
    items: [
      { name: 'Mining Industry', icon: Mountain },
      { name: 'Power Plants', icon: Zap },
    ]
  },
  {
    category: 'TECH',
    icon: Code,
    items: [
      { name: 'Software', icon: Code },
      { name: 'Software as a Service (SaaS)', icon: Cloud },
      { name: 'Artificial Intelligence (AI)', icon: Brain },
    ]
  },
  {
    category: 'FINANCE',
    icon: Landmark,
    items: [
      { name: 'Financial Technology (FinTech)', icon: CreditCard },
      { name: 'Non-Banking Financial Company (NBFC)', icon: Landmark },
    ]
  },
  {
    category: 'HEALTH',
    icon: Heart,
    items: [
      { name: 'Hospitals', icon: Activity },
      { name: 'Healthcare', icon: Heart },
    ]
  },
  {
    category: 'HOSPITALITY',
    icon: Building,
    items: [
      { name: 'Hotels', icon: Building },
      { name: 'Restaurants', icon: Utensils },
      { name: 'Fast-Moving Consumer Goods (FMCG)', icon: ShoppingCart },
    ]
  },
  {
    category: 'TRANSPORT',
    icon: Plane,
    items: [
      { name: 'Airlines', icon: Plane },
    ]
  },
  {
    category: 'INFRA',
    icon: Factory,
    items: [
      { name: 'Manufacturing Industries', icon: Factory },
    ]
  },
  {
    category: 'SERVICES',
    icon: Briefcase,
    items: [
      { name: 'Service Industry', icon: Briefcase },
    ]
  },
];

const WaveShape = () => (
  <svg 
    className="absolute top-0 right-0 w-28 h-28 pointer-events-none rounded-tr-2xl" 
    viewBox="0 0 100 100" 
    preserveAspectRatio="none"
  >
    <path d="M 10 0 C 40 30 60 80 100 100 L 100 0 Z" fill="#38bdf8" opacity="0.3" />
    <path d="M 30 0 C 55 20 75 65 100 80 L 100 0 Z" fill="#34d399" opacity="0.3" />
  </svg>
);

const CategoryCard = ({ category, icon: CategoryIcon, items, index }: any) => (
  <div 
    className="relative bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-secondary-100 hover:shadow-[0_15px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full p-6 sm:p-7 overflow-hidden group reveal-up" 
    style={{ animationDelay: `${(index % 4) * 100}ms` }}
  >
    <WaveShape />
    
    <div className="relative z-10 flex items-center gap-3 mb-5 pb-4 border-b border-secondary-100/80">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100/50 flex items-center justify-center shrink-0 border border-primary-100/50 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
        <CategoryIcon className="w-5 h-5 text-primary-600" strokeWidth={2} />
      </div>
      <h3 className="text-[16px] font-extrabold text-secondary-900 tracking-wide uppercase">
        {category}
      </h3>
    </div>

    <div className="relative z-10 flex-1 flex flex-col gap-3.5">
      {items.map((item: any, i: number) => (
        <div key={i} className="flex items-center gap-3 group/item cursor-pointer">
          <div className="w-7 h-7 rounded-full bg-secondary-50 flex items-center justify-center shrink-0 group-hover/item:bg-primary-50 transition-colors duration-200">
            <item.icon className="w-3.5 h-3.5 text-secondary-400 group-hover/item:text-primary-600 transition-colors duration-200" strokeWidth={2} />
          </div>
          <span className="text-secondary-600 text-[14px] font-medium group-hover/item:text-primary-700 transition-colors duration-200">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export function Industries() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), (i % 4) * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 md:py-24 bg-[#f8fafc] relative overflow-hidden" ref={ref}>
      <div className="container-custom relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary-100 text-secondary-600 text-xs font-bold tracking-widest uppercase rounded-full border border-secondary-200 mb-4 shadow-sm">
            Cross-Industry Expertise
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 leading-tight drop-shadow-sm mb-4">
            Industries <span className="text-accent-600">We Serve</span>
          </h2>
          <p className="text-secondary-500 text-[15px] md:text-base max-w-2xl">
            We provide specialized financial advisory, valuation, and optimization services tailored exactly to the unique challenges of your industry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industryGroups.map((group, index) => (
            <CategoryCard
              key={group.category}
              category={group.category}
              icon={group.icon}
              items={group.items}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Industries;
