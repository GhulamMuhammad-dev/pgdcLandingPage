export default function About() {
  return (
    <section className="py-20 px-4 bg-offwhite">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-deepnavy mb-6">
              About The Conference
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              We bring together industry leaders, innovators, and tech
              enthusiasts to share knowledge, network, and shape the future of
              technology.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Our mission is to create an inclusive space where ideas flourish
              and collaborations begin. With over 50 sessions across multiple
              tracks, there's something for everyone.
            </p>
            <button className="bg-oceanblue hover:bg-opacity-90 text-white font-bold py-2 px-6 rounded-full transition-all">
              Learn More
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
              alt="Conference attendees"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}