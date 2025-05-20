export default function Features() {
  const features = [
    {
      icon: "🎤",
      title: "Keynote Speakers",
      description: "Hear from industry pioneers and thought leaders.",
    },
    {
      icon: "🤝",
      title: "Networking",
      description: "Connect with peers and potential collaborators.",
    },
    {
      icon: "💡",
      title: "Workshops",
      description: "Hands-on sessions to level up your skills.",
    },
    {
      icon: "🏆",
      title: "Innovation Showcase",
      description: "Discover cutting-edge projects and startups.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-deepnavy">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-offwhite mb-16 text-center">
          Why Attend?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl shadow-md ${
                index % 2 === 0 ? "bg-oceanblue" : "bg-accent"
              } text-offwhite`}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-offwhite opacity-90">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}