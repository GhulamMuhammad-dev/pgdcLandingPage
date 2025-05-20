import { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isExpired, setIsExpired] = useState(false);

  function calculateTimeLeft() {
    const difference = new Date(targetDate) - new Date();
    return {
      days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: Math.max(0, Math.floor((difference / 1000 / 60) % 60)),
      seconds: Math.max(0, Math.floor((difference / 1000) % 60)),
      expired: difference < 0
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      setIsExpired(newTimeLeft.expired);
      
      if (newTimeLeft.expired) {
        clearInterval(timer);
        // Optional: Trigger callback here
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Animation class when under 1 minute
  const underOneMinute = timeLeft.minutes === 0 && !isExpired;
  const pulseClass = underOneMinute ? 'animate-pulse' : '';

  return (
    <section className={`bg-offwhite rounded-xl p-6 md:p-8 ${pulseClass}`}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Countdown Timer */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <TimeUnit value={timeLeft.days} label="DAYS" isExpired={isExpired} />
          <TimeUnit value={timeLeft.hours} label="HOURS" isExpired={isExpired} />
          <TimeUnit value={timeLeft.minutes} label="MINUTES" isExpired={isExpired} />
          <TimeUnit value={timeLeft.seconds} label="SECONDS" isExpired={isExpired} />
        </div>

        {/* Call to Action */}
        <div className="text-center md:text-right">
          <h3 className="text-lg md:text-xl font-bold uppercase text-accent mb-1">
            BOOK YOUR TICKET NOW!
          </h3>
          <p className={`text-sm ${isExpired ? 'text-red-500 font-medium' : 'text-gray-500'}`}>
            {isExpired ? 'EVENT HAS STARTED!' : 'Time is running out.'}
          </p>
          
          {/* Optional Button */}
          <button 
            className="mt-4 bg-magenta-500 hover:bg-magenta-600 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            aria-label="Buy tickets before time runs out"
          >
            Buy Tickets
          </button>
        </div>
      </div>
    </section>
  );
};

// Time Unit Sub-component
const TimeUnit = ({ value, label, isExpired }) => {
  return (
    <div className="text-center" aria-label={`${value} ${label}`}>
      <div className={`text-3xl md:text-5xl font-bold ${isExpired ? 'text-gray-400' : 'text-magenta-500'}`}>
        {value.toString().padStart(2, '0')}
      </div>
      <div className={`text-xs md:text-sm font-bold uppercase mt-1 ${isExpired ? 'text-gray-400' : 'text-teal-500'}`}>
        {label}
      </div>
    </div>
  );
};

export default CountdownTimer;