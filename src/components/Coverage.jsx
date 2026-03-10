export default function Coverage() {

  const cities = [
    "Dubai",
    "Abu Dhabi",
    "Sharjah",
    "Ajman",
    "Ras Al Khaimah",
    "Fujairah"
  ];

  return (
    <section id="coverage" className="py-20 bg-gray-100">

      <h2 className="text-4xl font-bold text-center mb-12">
        Our Coverage
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 px-6">

        {cities.map((city, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow text-center"
          >
            {city}
          </div>
        ))}

      </div>

    </section>
  );
}