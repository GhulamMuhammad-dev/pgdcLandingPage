export default function Contact() {
  return (
    <section className="py-20 px-4 bg-deepnavy text-offwhite" id="Connect">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Stay Updated
        </h2>
        <p className="text-xl text-center mb-12 opacity-90">
          Join our mailing list for conference updates and announcements.
        </p>
        <form className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg bg-oceanblue border border-lightcyan focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg bg-oceanblue border border-lightcyan focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="your.email@example.com"
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-3 rounded-lg bg-oceanblue border border-lightcyan focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Your message or questions..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-accent hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-[1.01]"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}