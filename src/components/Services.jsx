export default function Services() {
  const services = [
    "Same Day Delivery",
    "Ecommerce Delivery",
    "Food Delivery",
    "Express Courier",
  ];

  return (
    <section className="py-20 bg-gray-100">
      <h2 className="text-center text-4xl font-bold mb-12">
        Our Services
      </h2>

      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((s) => (
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-xl">{s}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}