export default function Contact() {

  return (
    <section id="contact" className="py-20 bg-white">

      <h2 className="text-4xl font-bold text-center mb-12">
        Contact Us
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 px-6">

        <div>
          <h3 className="text-xl font-bold mb-4">Head Office</h3>

          <p className="text-gray-600">
            Dubai Logistics City <br/>
            UAE
          </p>

          <p className="mt-4 text-gray-600">
            Phone: +971 50 000000
          </p>

          <p className="text-gray-600">
            Email: info@swiftdelivery.com
          </p>
        </div>

        <form className="space-y-4">

          <input
            className="w-full border p-3 rounded"
            placeholder="Name"
          />

          <input
            className="w-full border p-3 rounded"
            placeholder="Email"
          />

          <textarea
            className="w-full border p-3 rounded"
            rows="4"
            placeholder="Message"
          />

          <button className="bg-yellow-500 px-6 py-3 rounded font-bold">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}