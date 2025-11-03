import Image from "next/image";

export default function IncubationSection() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-primary">
          Incubation & Support 
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="https://res.cloudinary.com/dcwzstwur/image/upload/v1762179933/sanction_wmkfyc.jpg"
              alt="SSIP 2.0 Grant Sanction Letter"
              className="w-full h-auto rounded-lg shadow-xl"
              width={850}
              height={1100}
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-foreground">
             Funded for Market Validation 
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

            {/* --- ADDED THIS PARAGRAPH --- */}
            <p className="text-foreground/80 leading-relaxed pt-2">
              We are deeply grateful for this opportunity, which was facilitated
              by the{" "}
              <a
                href="https://guiitarstartupcouncil.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline underline-offset-4"
              >
                GUIITAR Council ↗
              </a>{" "}
              and{" "}
              <a
                href="https://gsfcuniversity.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline underline-offset-4"
              >
                GSFC University ↗
              </a>{" "}
              under the{" "}
              <a
                href="https://www.ssipgujarat.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline underline-offset-4"
              >
                SSIP 2.0 ↗
              </a>{" "}
              policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
