import Image from "next/image"; // Make sure this import is added

// This component now embeds the actual YouTube video
export default function PrototypeSection() {
  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
          Prototype
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">
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
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Mobile App
            </h3>
            <div className="flex gap-4 justify-center">
              {/* --- Replaced placeholder with Image component --- */}
              <Image
                src="https://res.cloudinary.com/dcwzstwur/image/upload/v1762178928/iPhone_16_Pro_-_11_1_z6ad7r.png"
                alt="Hush App Login Screen"
                width={192} // From original w-48 class (12rem * 16px)
                height={384} // From original h-96 class (24rem * 16px)
                className="rounded-2xl shadow-xl border-4 border-muted-foreground/20"
              />
              {/* --- Replaced placeholder with Image component --- */}
              <Image
                src="https://res.cloudinary.com/dcwzstwur/image/upload/v1762178927/iPhone_16_Pro_-_7_2x_xtz9la.png"
                alt="Hush App Home Screen"
                width={192} // From original w-48 class
                height={384} // From original h-96 class
                className="rounded-2xl shadow-xl border-4 border-muted-foreground/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
