export function InvestorForm() {
  return (
    <form className="w-full max-w-xl text-black">
      <h2 className="text-[28px] mb-10">Request Private Investor Access</h2>

      <div className="lg:grid grid-cols-2 space-y-8 gap-x-8 gap-y-6">
        <Input label="Full Name*" />
        <Input label="Official Email Address*" />
        <Input label="Preferred Investment Range*" />
        <Input label="Sectors / Categories of Interest*" />
        <Input label="LinkedIn Profile (Optional)" />
        <Input label="Accreditation & Verification Details*" />
      </div>

      <label className="flex items-center gap-2 mt-8 text-sm">
        <input type="checkbox" />
        I agree to the Private Access Terms
      </label>

      <button
        type="submit"
        className="mt-8 px-10 py-3 font-editorial rounded-full border border-black"
      >
        Submit
      </button>
    </form>
  );
}

export function VisionForm() {
  return (
    <form className="w-full max-w-xl text-black">
      <h2 className="text-[28px] mb-10">Submit Your Vision for Curation</h2>

      <div className="lg:grid grid-cols-2 space-y-4 gap-x-8 gap-y-6">
        <Input label="Full Name*" />
        <Input label="Official Email Address*" />
        <Input label="Country of Operation*" />
        <Input label="Venture / Company Name*" />
        <Input label="Industry Category*" />
        <Input label="Funding Requirement (Amount Seeking)" />
      </div>

      <Input mt="8" label="Project Overview (Concise Summary)"/>
      <Input mt="8" label="Upload Dossier / Pitch Deck"/>

      <label className="flex items-center gap-2 mt-4 lg:mt-8 text-sm">
        <input type="checkbox" />
        I acknowledge the NDA & confidential review process
      </label>

      <button
        type="submit"
        className="mt-8 px-10 py-3 font-editorial rounded-full border border-black"
      >
        Submit
      </button>
    </form>
  );
}

function Input({ label, mt="" }) {
  return (
    <div className={`flex flex-col gap-1 mt-${mt}`}>
      <label className="text-sm opacity-70">{label}</label>
      <input
        className="bg-transparent border-b border-black outline-none py-1"
        type="text"
      />
    </div>
  );
}
