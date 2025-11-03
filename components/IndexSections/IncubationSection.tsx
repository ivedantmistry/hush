import Image from "next/image";

export default function IncubationSection() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-primary">
          Incubation & Support
        </h2>

        {/* --- Image Grid --- */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Sanction Letter */}
          <div>
            <Image
              src="https://res.cloudinary.com/dcwzstwur/image/upload/v1762179933/sanction_wmkfyc.jpg"
              alt="SSIP 2.0 Grant Sanction Letter"
              className="w-full h-auto rounded-lg shadow-xl border"
              width={850}
              height={700}
            />
            <p className="text-center text-sm text-muted-foreground mt-3">
              SSIP 2.0 Sanction Letter
            </p>
          </div>
          {/* YC Rejection */}
          <div>
            <Image
              // --- TODO: Replace this placeholder with your YC rejection image URL ---
              src="https://res.cloudinary.com/dcwzstwur/image/upload/v1762189340/YC_co1bgf.png"
              alt="Y Combinator Rejection Email"
              className="w-full h-auto rounded-lg shadow-xl border"
              width={850}
              height={1100}
            />
            <p className="text-center text-sm text-muted-foreground mt-3">
              Y Combinator Rejection (Spring 2025)
            </p>
          </div>
        </div>

        {/* --- Text Content --- */}
        <div className="max-w-4xl mx-auto space-y-4">
          <h3 className="text-2xl font-semibold text-foreground text-center">
            Funded for Validation, Rejected with Experience
          </h3>
          <p className="text-lg text-foreground/80 leading-relaxed text-center">
            We were thrilled to be sanctioned ₹2,40,000 for market research
            and validation.
          </p>

          {/* --- Updated YC Paragraph --- */}
          <p className="text-foreground/80 leading-relaxed">
            Alongside our local incubation, we also aimed high by applying to
            the Y Combinator (Spring 25) batch. While we were ultimately rejected, the
            process of articulating our vision for a global audience was an
            invaluable learning experience in itself.
          </p>

          <p className="text-foreground/80 leading-relaxed">
            This grant allowed us to apply Lean Startup principles to test our
            hypothesis, build a functional prototype, and validate real-world
            viability through data-driven analysis.
          </p>

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
    </section>
  );
}
