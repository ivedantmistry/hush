"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { pitchDeckSlides } from "@/lib/data";

export default function PitchDeckSection() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
          The 'Hush' Pitch Deck
        </h2>
        <Carousel className="w-full">
          <CarouselContent>
            {pitchDeckSlides.map((slideUrl, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Image
                    src={slideUrl}
                    alt={`Pitch Deck Slide ${index + 1}`}
                    className="w-full h-auto rounded-lg shadow-2xl"
                    width={1280}
                    height={720}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 -translate-x-12" />
          <CarouselNext className="right-0 translate-x-12" />
        </Carousel>
        <p className="text-center text-sm text-muted-foreground mt-6">
          Key slides from our pitch deck, outlining the problem, our solution,
          and the business model.
        </p>

        {/* --- Added Credits --- */}
        {/* --- Updated Credits Section (Both in Same Line) --- */}
        <div className="mt-4 text-sm text-foreground/80 text-center">
          <h4 className="font-semibold text-muted-foreground mb-2">
            Pitch Deck Credits:
          </h4>
          <div className="flex justify-center items-center flex-wrap gap-x-6">
            <p>
              Design by{" "}
              <a
                href="https://www.linkedin.com/in/mahipal9/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline underline-offset-4"
              >
                Mahipal Chauhan ↗
              </a>{" "}
              and Market Research by{" "}
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
    </section>
  );
}
