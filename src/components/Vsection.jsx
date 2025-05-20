const Vsection = () => {
  return (
    <section className="py-12 md:py-20 bg-offwhite">
      <div className="container mx-auto px-4">
        {/* Mobile Title (hidden on larger screens) */}
        <h2 className="text-2xl font-bold uppercase text-accent mb-6 md:hidden">
          Venue
        </h2>
        
        <div className="flex flex-col lg:flex-row rounded-xl overflow-hidden shadow-lg">
          {/* Image Section (Left) */}
          <div className="lg:w-1/2 h-64 md:h-96 lg:h-auto relative bg-deepnavy">
            <div 
              className="absolute inset-0 bg-[url('/venue-image.jpg')] bg-cover bg-center"
              style={{
                backgroundImage: "linear-gradient(rgba(29, 53, 87, 0.7), rgba(29, 53, 87, 0.7)), url('images/airUniImg.webp')",
              }}
            >
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 flex items-center justify-center p-6 md:p-10 lg:hidden">
                <h3 className="text-2xl md:text-3xl font-bold text-white text-center">
                  Air University Islamabad Campus
                </h3>
              </div>
            </div>
          </div>
          
          {/* Content Section (Right) */}
          <div className="lg:w-1/2 bg-white p-6 md:p-10 flex flex-col justify-center">
            {/* Desktop Title (hidden on mobile) */}
            <h2 className="hidden md:block text-xl font-bold uppercase text-accent mb-4">
              Venue
            </h2>
            
            <h3 className="hidden lg:block text-3xl font-bold text-deepnavy mb-4">
              Air University Islamabad Campus
            </h3>
            
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start">
                <svg className="w-5 h-5 text-accent mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-600">
                  Air University Islamabad Campus , sector E-9 (PAF Complex) of Islamabad
                </p>
              </div>
              
              {/* Date */}
              <div className="flex items-center">
                <svg className="w-5 h-5 text-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="font-bold text-deepnavy">June 3, 2025</p>
              </div>
              
              {/* Time */}
              <div className="flex items-center">
                <svg className="w-5 h-5 text-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="font-bold text-deepnavy">9:00 AM - 5:00 PM</p>
              </div>
            </div>
            
            {/* CTA Button */}
            <button className="mt-8 w-full md:w-auto bg-accent hover:bg-accent-dark text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Buy Ticket
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vsection;