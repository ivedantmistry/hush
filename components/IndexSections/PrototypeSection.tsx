import Image from "next/image";

export default function PrototypeSection() {
  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-primary">
          Prototype
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Column 1: Ad */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Original Concept Ad
            </h3>
            <div className="aspect-video bg-muted rounded-lg shadow-xl mb-4 overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/UrdTObsWnyk"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-sm text-muted-foreground">
              Our concept ad illustrating the 'Hush' brand and vision.
            </p>

            {/* --- Ad Credits --- */}
            <div className="mt-4 text-sm text-foreground/80">
              <h4 className="font-semibold text-muted-foreground mb-2">
                Ad Credits:
              </h4>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Hush Actor:{" "}
                  <a
                    href="https://www.linkedin.com/in/kavish-soni-3530602a2/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-primary underline underline-offset-4"
                  >
                    Kavish Soni ↗
                  </a>
                </li>
                <li>
                  Upset Actor:{" "}
                  <a
                    href="https://www.linkedin.com/in/manthanpatel24/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-primary underline underline-offset-4"
                  >
                    Manthan Patel ↗
                  </a>
                </li>
                <li>
                  Shot by:{" "}
                  <a
                    href="https://www.linkedin.com/in/krishna-chauhan-bb0641241/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-primary underline underline-offset-4"
                  >
                    Krishna Chauhan ↗
                  </a>
                </li>
                {/* --- Added Editor --- */}
                <li>
                  Edited by:{" "}
                  <a
                    href="https://www.linkedin.com/in/mahipal9/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-primary underline underline-offset-4"
                  >
                    Mahipal Chauhan ↗
                  </a>
                </li>
                <li>
                  Directed & Written by:{" "}
                  <a
                    href="https://www.linkedin.com/in/ivedantmistry/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-primary underline underline-offset-4"
                  >
                    Vedant Mistry ↗
                  </a>{" "}
                  &{" "}
                  <a
                    href="https://www.linkedin.com/in/amaan-tai-9a9370250/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-primary underline underline-offset-4"
                  >
                    Amaan Tai ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: Mobile App */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Mobile App
            </h3>
            <div className="flex gap-4 justify-center">
              <Image
                src="https://res.cloudinary.com/dcwzstwur/image/upload/v1762178928/iPhone_16_Pro_-_11_1_z6ad7r.png"
                alt="Hush App Login Screen"
                width={192} // Base width (md:w-48)
                height={384} // Base height (md:h-96)
                className="rounded-2xl shadow-xl border-4 border-muted-foreground/20 w-36 h-72 sm:w-40 sm:h-80 md:w-48 md:h-96"
              />
              <Image
                src="https://res.cloudinary.com/dcwzstwur/image/upload/v1762178927/iPhone_16_Pro_-_7_2x_xtz9la.png"
                alt="Hush App Home Screen"
                width={192} // Base width (md:w-48)
                height={384} // Base height (md:h-96)
                className="rounded-2xl shadow-xl border-4 border-muted-foreground/20 w-36 h-72 sm:w-40 sm:h-80 md:w-48 md:h-96"
              />
            </div>

            {/* --- Added Design Credits --- */}
            <div className="mt-4 text-sm text-foreground/80 text-center">
              <h4 className="font-semibold text-muted-foreground mb-2">
                Design Credits:
              </h4>
              <p>
                <a
                  href="https://www.linkedin.com/in/mahipal9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary underline underline-offset-4"
                >
                  Mahipal Chauhan ↗
                </a>{" "}
                &{" "}
                <a
                  href="https://www.linkedin.com/in/ivedantmistry/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary underline underline-offset-4"
                >
                  Vedant Mistry ↗
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
