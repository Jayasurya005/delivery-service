import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black text-white z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        <h1 className="text-2xl font-bold text-yellow-400">
          SwiftDelivery
        </h1>

        <div className="hidden md:flex gap-8">
          <a href="#services">Services</a>
          <a href="#whyus">Why Us</a>
          <a href="#coverage">Coverage</a>
          <a href="#partner">Partner</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black text-center pb-4">
          <a className="block py-2" href="#services">Services</a>
          <a className="block py-2" href="#whyus">Why Us</a>
          <a className="block py-2" href="#coverage">Coverage</a>
          <a className="block py-2" href="#partner">Partner</a>
          <a className="block py-2" href="#contact">Contact</a>
        </div>
      )}
    </nav>
  );
}