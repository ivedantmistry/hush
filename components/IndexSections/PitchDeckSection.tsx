"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import pitchSlide1 from "@/assets/pitch-slide-1.jpg";
import pitchSlide2 from "@/assets/pitch-slide-2.jpg";
import pitchSlide3 from "@/assets/pitch-slide-3.jpg";
import pitchSlide4 from "@/assets/pitch-slide-4.jpg";
import pitchSlide5 from "@/assets/pitch-slide-5.jpg";

const pitchSlides = [
  pitchSlide1,
  pitchSlide2,
  pitchSlide3,
  pitchSlide4,
  pitchSlide5,
];

export default function PitchDeckSection() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
          The 'Hush' Pitch Deck
        </h2>
        <Carousel className="w-full">
          <CarouselContent>
            {pitchSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Image
                    src={slide}
                    alt={`Pitch Deck Slide ${index + 1}`}
                    className="w-full rounded-lg shadow-2xl"
                    placeholder="blur"
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
      </div>
    </section>
  );
}
