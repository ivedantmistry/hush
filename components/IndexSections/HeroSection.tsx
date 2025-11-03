"use client"; // Needs to be a client component for the onClick handler

import Image from "next/image";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

export default function HeroSection() {
    const scrollToFindings = () => {
        const findingsSection = document.getElementById("findings");
        findingsSection?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative py-24 px-6 text-center bg-card">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                    Hush: A Data-Driven Entrepreneurial Experiment
                </h1>
                <h2 className="text-2xl md:text-3xl mb-8 text-muted-foreground font-light">
                    Validating a novel, subscription-based ride-hailing model.
                </h2>
                <p className="text-lg mb-10 text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                    A project by <span className="font-semibold">Vedant Mistry</span> and{" "}
                    <span className="font-semibold">Hrishikesh Singh</span>. We tested a new business model for
                    ride-hailing, secured a research grant, and made a data-driven decision to pivot. This is
                    what we learned.
                </p>
                <Button
                    size="lg"
                    onClick={scrollToFindings}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
                >
                    See Our Findings
                </Button>
            </div>
            <div className="mt-16 max-w-6xl mx-auto">
                <Image
                    src={heroImage}
                    alt="Hush Concept Visualization"
                    className="w-full rounded-lg shadow-2xl"
                    priority // Good to add for LCP (Largest Contentful Paint) images
                    placeholder="blur"
                />
            </div>
        </section>
    );
}