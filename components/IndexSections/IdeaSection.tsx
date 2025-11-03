import Image from "next/image";

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
                Our model aimed to fix the core problem: driver earnings.
                Instead of high, unpredictable commissions of 25-30%, drivers
                would pay a simple, flat subscription fee. This allowed them to
                keep 100% of their fares, providing a stable income and full
                financial control.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                The Sponsorship Model
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                For passengers, we offered lower, more predictable fares by
                creating an AI-enhanced advertising platform. Brands could
                sponsor rides by subsidizing a portion of the fare , creating a
                win-win: riders get cheaper rides, and advertisers get direct
                engagement.
              </p>
            </div>
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/dcwzstwur/image/upload/v1762169661/8_sc9snp.png"
              alt="Hush Model: Driver-Sponsor-Rider Relationship"
              className="w-full h-auto rounded-lg shadow-xl"
              width={1280}
              height={720}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
