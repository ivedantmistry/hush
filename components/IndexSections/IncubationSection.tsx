import Image from "next/image";

// Removed the local import:
// import grantSanction from "@/assets/grant-sanction.jpg";

export default function IncubationSection() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
          Incubation
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              // 1. Updated the src to the Cloudinary URL
              src="https://res.cloudinary.com/dcwzstwur/image/upload/v1762179933/sanction_wmkfyc.jpg"
              alt="SSIP 2.0 Grant Sanction Letter"
              // 2. Updated className for correct scaling
              className="w-full h-auto rounded-lg shadow-xl"
              // 3. Added required width and height (approximating A4 paper ratio)
              width={850}
              height={1100}
              // 4. Removed placeholder="blur"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-primary">
              SSIP 2.0 Grant Sanction
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Official sanction of ₹2,40,000 for market research and validation.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              We applied Lean Startup principles to test our hypothesis. Our
              validation process was supported by this grant, which enabled us
              to conduct comprehensive market research, build a functional
              prototype, and validate real-world viability through data-driven
              analysis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
