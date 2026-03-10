export default function WhyUs() {

  const features = [
    {
      title: "Fast Delivery",
      desc: "Lightning fast deliveries across cities."
    },
    {
      title: "Live Tracking",
      desc: "Track every shipment in real-time."
    },
    {
      title: "Affordable Pricing",
      desc: "Best rates for businesses and individuals."
    },
    {
      title: "24/7 Support",
      desc: "Our support team is always available."
    }
  ];

  return (
    <section id="whyus" className="py-20 bg-white">

      <h2 className="text-4xl font-bold text-center mb-12">
        Why Choose Us
      </h2>

      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">

        {features.map((f, i) => (
          <div
            key={i}
            className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="font-bold text-xl mb-3">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}

      </div>

    </section>
  );
}