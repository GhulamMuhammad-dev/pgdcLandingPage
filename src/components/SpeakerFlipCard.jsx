import React from 'react'



const SpeakerFlipCard = ({ speaker }) => {
  return (
    <div className="flip-card h-64 w-56 md:h-80 md:w-64 perspective-1000">
      <div className="flip-card-inner relative w-full h-full transition-transform duration-500 transform-style-preserve-3d">
        {/* Front Side */}
        <div className="flip-card-front absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg p-4 flex flex-col items-center justify-center border-2 border-lightcyan">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-accent mb-4">
            <img 
              src={speaker.image} 
              alt={speaker.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-lg md:text-xl font-bold text-deepnavy text-center">{speaker.name}</h3>
          <p className="text-oceanblue text-sm md:text-base text-center">{speaker.role}</p>
        </div>

        {/* Back Side */}
        <div className="flip-card-back absolute w-full h-full backface-hidden bg-accent rounded-xl shadow-lg p-6 transform-rotate-y-180 flex items-center justify-center text-offwhite">
          <p className="text-sm md:text-base text-center">{speaker.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default SpeakerFlipCard
