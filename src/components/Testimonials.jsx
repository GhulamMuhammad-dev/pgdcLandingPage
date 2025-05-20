import { useState } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "This conference changed my perspective on technology and connected me with amazing people.",
      author: "Alex Johnson, Senior Developer",
    },
    {
      quote:
        "The workshops were incredibly valuable. I implemented what I learned the very next week!",
      author: "Sam Lee, Product Manager",
    },
    {
      quote:
        "Best tech conference I've attended. The energy and ideas were inspiring.",
      author: "Taylor Smith, Startup Founder",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-20 px-4 bg-offwhite">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-deepnavy mb-16 text-center">
          What People Are Saying
        </h2>
        <div className="relative">
          <div className="bg-deepnavy p-8 md:p-12 rounded-xl shadow-lg text-center">
            <blockquote className="text-xl md:text-2xl italic text-offwhite mb-6">
              "{testimonials[currentTestimonial].quote}"
            </blockquote>
            <p className="text-lg font-medium text-gray-400">
              — {testimonials[currentTestimonial].author}
            </p>
          </div>
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-oceanblue text-white p-2 rounded-full shadow-md hover:bg-opacity-90 transition-all"
            aria-label="Previous testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-oceanblue text-white p-2 rounded-full shadow-md hover:bg-opacity-90 transition-all"
            aria-label="Next testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}