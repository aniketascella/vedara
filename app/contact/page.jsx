'use client'

import Footer from '@/components/Footer';
import {useState}  from 'react'

function Input({ label, ...props }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[12px] font-medium">{label}</label>
      <input
        {...props}
        className="h-[38px] bg-[#FFFFFF] rounded-[5px] opacity-17 px-3 text-[13px] outline-none text-black"
      />
    </div>
  );
}

function Textarea({ label, dotted = false, ...props }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[12px]">{label}</label>
      <textarea
        {...props}
        rows={4}
        className={`bg-[#FFFFFF] opacity-17 px-3 py-2 text-[13px] resize-none outline-none rounded-[5px] ${
          dotted ? "border-b border-dotted border-[#6B6B6B]" : ""
        }`}
      />
    </div>
  );
}

const page = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    movement: "",
    methodology: "",
    success: "",
    industry: "",
    budget: "",
    referral: "",
  });

  function updateField(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
    // integrate API / form backend here
  }

  return (
    <div>
      <div className='flex flex-col items-center justify-center gap-y-7 py-51'>
        <div className="absolute inset-0 w-full h-[2201px] -z-1">
          <img
            src="/rovineArt.png"
            alt="bg overlay"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <h1 className="w-[350px] lg:w-[440px] text-[24px] tlg:ext-[36px] text-center italic">
          Together, we architect cultural immortality.
        </h1>
        <p className='text-center lg:w-[570px] text-[14px] lg:text-[16px]'>
          Are you ready to transcend competition and birth a movement that commands reverence? Initiate your sovereignty.
        </p>

        <section className="min-h-screen w-[400px] lg:w-[612px] rounded-2xl flex justify-center items-start bg-primary py-20">
          <form
            onSubmit={handleSubmit}
            className="w-full px-10 lg:px-20 flex flex-col gap-6 text-black"
          >
            {/* Header */}
            <div className="flex flex-col gap-4 w-[340px] lg:w-[456px]">
              <p className="text-[18px] lg:text-[22px] font-medium">
                The Cultural Sovereignty Assessment™
              </p>
              <p className="text-[14px] leading-relaxed font-light">
                We serve 12 cultural empire builders each quarter, not from
                artificial limitation, but from our covenant to provide the
                generational thinking and territorial precision that dynasty
                creation demands.
              </p>
            </div>

            {/* Inputs */}
            <Input
              label="Name"
              name="name"
              value={form.name}
              onChange={updateField}
            />

            <Input
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={updateField}
            />

            <Textarea
              label="Describe the cultural movement you're building, not just the business you're running."
              name="movement"
              value={form.movement}
              onChange={updateField}
            />

            <Textarea
              label="What wisdom, methodology, or perspective do you possess that no competitor can authentically replicate."
              name="methodology"
              value={form.methodology}
              onChange={updateField}
              dotted
            />

            <Textarea
              label="How do you define success in terms of cultural impact rather than financial metrics?"
              name="success"
              value={form.success}
              onChange={updateField}
            />

            <Input
              label="Industry"
              name="industry"
              value={form.industry}
              onChange={updateField}
            />

            <Input
              label="Project Budget"
              name="budget"
              value={form.budget}
              onChange={updateField}
            />

            <Input
              label="How did you hear about us?"
              name="referral"
              value={form.referral}
              onChange={updateField}
            />

            {/* Submit */}
            <button
              type="submit"
              className="mt-4 h-11 w-full bg-[#2A2927] rounded-[5px] text-[#F3F2EE] text-[14px] tracking-wide hover:opacity-90 transition"
            >
              Submit
            </button>
          </form>
        </section>
      </div>

      <Footer/>
    </div>
  )
}

export default page