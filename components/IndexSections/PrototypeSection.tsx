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
              <div className="w-48 h-96 bg-muted rounded-2xl shadow-xl border-4 border-muted-foreground/20 flex items-center justify-center">
                <p className="text-muted-foreground text-sm">App Screen 1</p>
              </div>
              <div className="w-48 h-96 bg-muted rounded-2xl shadow-xl border-4 border-muted-foreground/20 flex items-center justify-center">
                <p className="text-muted-foreground text-sm">App Screen 2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
