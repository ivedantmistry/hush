import Image from "next/image";
import grantSanction from "@/assets/grant-sanction.jpg";

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
              src={grantSanction}
              alt="SSIP 2.0 Grant Sanction Letter"
              className="w-full rounded-lg shadow-xl"
              placeholder="blur"
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
