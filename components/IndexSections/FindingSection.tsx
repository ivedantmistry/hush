export default function FindingsSection() {
  return (
    <section id="findings" className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
          What the Data Taught Us
        </h2>
        <blockquote className="border-l-4 border-primary pl-6 py-4 mb-8 italic text-xl text-foreground/90">
          Our market validation revealed a critical insight: the ride-hailing
          market, particularly in our target cities, was already{" "}
          <strong>heavily saturated</strong> by competitors like Rapido. Their
          dominant two-wheeler taxi model created an insurmountable barrier to
          entry for our new platform.
        </blockquote>
        <p className="text-lg text-foreground/80 leading-relaxed text-center">
          Ultimately, the data showed our path was unviable. We made the tough,
          but correct, <strong>data-driven decision to discontinue</strong> the
          project. This experiment was a success in entrepreneurial learning,
          proving our team's adaptability and commitment to following the data.
        </p>
      </div>
    </section>
  );
}
