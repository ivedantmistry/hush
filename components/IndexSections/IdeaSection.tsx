import Image from "next/image";
import modelDiagram from "@/assets/model-diagram.jpg";

export default function IdeaSection() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
          A New Model: Fair for Drivers, Sponsored for Riders
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                The Subscription Model
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Our model was simple: drivers would pay a flat daily subscription fee to use the
                platform, allowing them to keep 100% of their earnings from every ride.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                The Sponsorship Model
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                To make rides more affordable, fares were partially subsidized by corporate
                sponsors. A rider might pay ₹80, and a local sponsor would pay the remaining ₹20,
                creating a win-win.
              </p>
            </div>
          </div>
          <div>
            <Image
              src={modelDiagram}
              alt="Driver-Sponsor-Rider Relationship"
              className="w-full rounded-lg shadow-xl"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </section>
  );
}