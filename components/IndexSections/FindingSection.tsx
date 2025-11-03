export default function FindingsSection() {
  return (
    <section id="findings" className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
          What the Data Taught Us
        </h2>
        <blockquote className="border-l-4 border-primary pl-6 py-4 mb-8 italic text-xl text-foreground/90">
          After thorough market analysis and validation, we made the strategic, data-driven decision
          to discontinue the project. Our research showed the two-wheeler taxi model, dominated by
          competitors like Rapido, had created market saturation that made our initial launch
          unviable.
        </blockquote>
        <p className="text-lg text-foreground/80 leading-relaxed text-center">
          This project was a success in learning. It demonstrated our adaptability and commitment to
          data-driven decision-making over blind passion.
        </p>
      </div>
    </section>
  );
}