export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-deepnavy to-oceanblue text-offwhite py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          The Future of Tech <span className="text-accent">Starts Here</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10">
          Join the most innovative minds in technology for a transformative
          conference experience.
        </p>
        <button className="bg-accent hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105">
          Get Your Tickets Now
        </button>
      </div>
    </section>
  );
}