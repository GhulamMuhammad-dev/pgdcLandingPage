import { useRef, useState, useEffect } from 'react';
import SpeakerFlipCard from './SpeakerFlipCard'; // Added missing import

const SpeakersSection = () => {
  const speakers = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      role: "AI Research Lead",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "Expert in neural networks and deep learning with 8+ years at Google Brain. Published 20+ papers in top AI conferences."
    },
    {
      id: 2,
      name: "James Rodriguez",
      role: "Blockchain Architect",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "Built decentralized systems for Fortune 500 companies. Ethereum core contributor since 2017."
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "UX Director",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      bio: "Human-centered design specialist. Led UX for 3 award-winning SaaS platforms serving 10M+ users."
    },
    {
      id: 4,
      name: "Marcus Wong",
      role: "Cloud Security Expert",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      bio: "Former AWS security engineer. Helps enterprises secure cloud infrastructure against modern threats."
    },
    {
      id: 5,
      name: "Aisha Johnson",
      role: "Data Science VP",
      image: "https://randomuser.me/api/portraits/women/90.jpg",
      bio: "Built predictive models for 3 unicorn startups. Forbes 30 Under 30 in Technology."
    }
  ];

  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToSpeaker = (index, e) => {
    if (e) e.preventDefault(); // Prevent default button behavior
    if (carouselRef.current) {
      const container = carouselRef.current;
      const card = container.children[index];
      const containerWidth = container.offsetWidth;
      const cardWidth = card.offsetWidth;
      const scrollPosition = card.offsetLeft - (containerWidth / 2) + (cardWidth / 2);
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % speakers.length;
      scrollToSpeaker(nextIndex);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, speakers.length]);

  return (
    <section className="py-16 bg-deepnavy" id="speakers">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-offwhite mb-4">
          Featured Speakers
        </h2>
        
        <div className="relative">
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-8 pb-8 px-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {speakers.map((speaker) => (
              <div 
                key={speaker.id} 
                className="flex-shrink-0 snap-center"
                style={{ scrollSnapAlign: 'center' }}
              >
                <SpeakerFlipCard speaker={speaker} />
              </div>
            ))}
          </div>

          {/* Navigation Arrows - Updated with preventDefault */}
          <button 
            onClick={(e) => scrollToSpeaker((currentIndex - 1 + speakers.length) % speakers.length, e)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-accent text-white p-3 rounded-full shadow-lg hover:bg-opacity-90 z-10"
            aria-label="Previous speaker"
          >
            {/* ... arrow icon ... */}
          </button>
          
          <button 
            onClick={(e) => scrollToSpeaker((currentIndex + 1) % speakers.length, e)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-accent text-white p-3 rounded-full shadow-lg hover:bg-opacity-90 z-10"
            aria-label="Next speaker"
          >
            {/* ... arrow icon ... */}
          </button>
        </div>

        {/* Indicator Dots - Updated with preventDefault */}
        <div className="flex justify-center mt-8 gap-2">
          {speakers.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.preventDefault();
                scrollToSpeaker(index);
              }}
              className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? 'bg-accent w-6' : 'bg-oceanblue'}`}
              aria-label={`Go to speaker ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection; // Added export to resolve fast refresh warning