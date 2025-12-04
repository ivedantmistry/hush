"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative py-24 px-6 text-center bg-card">
      <div className="max-w-4xl mx-auto">
        <Image
          src="https://res.cloudinary.com/dcwzstwur/image/upload/v1762184373/HUSH_tb0whs.png"
          alt="Hush Logo"
          width={256}
          height={64}
          className="mx-auto mb-8 h-auto w-48 md:w-64"
          priority
        />

        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
          A Data-Driven Entrepreneurial Experiment
        </h1>
        <h2 className="text-2xl md:text-3xl mb-8 text-muted-foreground font-light">
          Validating a novel, subscription-based ride-hailing model.
        </h2>
        <p className="text-lg mb-10 text-foreground/80 max-w-3xl mx-auto leading-relaxed">
          A project by{" "}
          <a
            href="https://www.vedantmistry.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary underline underline-offset-4"
          >
            Vedant Mistry ↗
          </a>{" "}
          and{" "}
          <a
            href="https://www.linkedin.com/in/hrishikesh-singh-702737264/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary underline underline-offset-4"
          >
            Hrishikesh Singh ↗
          </a>{" "}. 
          We tested a new business model for ride-hailing, secured a research
          grant, and made a data-driven decision to drop the idea.
        </p>
      </div>
    </section>
  );
}
