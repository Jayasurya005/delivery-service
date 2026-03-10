export default function Footer() {

  return (
    <footer className="bg-black text-gray-400 py-10">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">

        <div>
          <h2 className="text-white text-xl font-bold mb-4">
            SwiftDelivery
          </h2>
          <p>
            Reliable delivery solutions for businesses and individuals.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2">
            <li><a href="#services">Services</a></li>
            <li><a href="#whyus">Why Us</a></li>
            <li><a href="#coverage">Coverage</a></li>
            <li><a href="#partner">Partner</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">
            Follow Us
          </h3>

          <p>Instagram</p>
          <p>Facebook</p>
          <p>LinkedIn</p>
        </div>

      </div>

      <div className="text-center mt-10 text-gray-500">
        © 2026 SwiftDelivery. All rights reserved.
      </div>

    </footer>
  );
}