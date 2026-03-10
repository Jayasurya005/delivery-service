import { useState } from "react";
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";

export default function PartnerForm() {

  const [form, setForm] = useState({
    name:"",
    phone:"",
    city:"",
    vehicle:""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(collection(db,"partners"), form);

    alert("Application submitted!");
  };

  return (
    <section className="py-20 bg-black text-white">

      <h2 className="text-center text-4xl font-bold mb-10">
        Become a Delivery Partner
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto space-y-4"
      >

        <input
          className="w-full p-3 rounded text-black"
          placeholder="Name"
          onChange={(e)=>setForm({...form,name:e.target.value})}
        />

        <input
          className="w-full p-3 rounded text-black"
          placeholder="Phone"
          onChange={(e)=>setForm({...form,phone:e.target.value})}
        />

        <input
          className="w-full p-3 rounded text-black"
          placeholder="City"
          onChange={(e)=>setForm({...form,city:e.target.value})}
        />

        <select
          className="w-full p-3 rounded text-black"
          onChange={(e)=>setForm({...form,vehicle:e.target.value})}
        >
          <option>Bike</option>
          <option>Car</option>
          <option>Van</option>
        </select>

        <button className="bg-yellow-500 w-full py-3 rounded font-bold">
          Apply Now
        </button>

      </form>
    </section>
  );
}