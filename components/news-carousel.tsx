"use client";

import * as React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { pl } from "date-fns/locale";
import Image from "next/image";
import YoutubePlayer from "./YoutubePlayer";

interface NewsItem {
  id: string;
  title: string;
  content: string;
  date: Date;
  contentType: "image" | "video";
  url: string;
}

const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "Powiatowe Targi Pracy i Edukacji",
    content:
      "3 kwietnia odbyły się w naszej sali gimnastycznej Powiatowe Targi Pracy i Edukacji. Wystawcy przygotowali stoiska z informacjami o ofertach pracy i ofertach edukacyjnych szkół powiatowych. Targi cieszyły się dużym zainteresowaniem wśród odwiedzających. Gości powitała dyrektor PUP w Strzelinie Pani Iwona Engel i starosta Powiatu Strzelińskiego Pani Magdalena Krupa.",
    date: new Date("2024-04-03"),
    contentType: "video",
    url: "jIja9ccxstI",
  },
  {
    id: "2",
    title: "Dzień Otwartych Drzwi",
    content:
      "W dniu dzisiejszym odbył się w naszej szkole Dzień Otwartych Drzwi zorganizowany dla uczniów klas ósmych, kandydatów do klas pierwszych. Na nasze zaproszenie przybyło ponad 300 uczniów szkół podstawowych z terenu Powiatu Strzelińskiego oraz spoza Powiatu. Dla wszystkich było to ważne spotkanie.",
    date: new Date(),
    contentType: "image",
    url: "/images/otwarte.jpg",
  },
  {
    id: "3",
    title: "LO NEWS - Nowe wydanie",
    content: "Zapraszamy do obejrzenia najnowszego wydania naszych wiadomości LO NEWS (31 marca 2025)",
    date: new Date("2025-03-31"),
    contentType: "video",
    url: "k_bp3YjCafA",
  },
  {
    id: "4",
    title: "Wycieczka do Bratysławy i Wiednia",
    content:
      "W dniach 26-28 marca 2025 r. klasy 3B i 3C (w towarzystwie kilku uczniów z innych klas) odwiedzili Bratysławę oraz Wiedeń.",
    date: new Date("2025-03-26"),
    contentType: "image",
    url: "/images/wycieczka.jpg",
  },
];

export function NewsCarousel() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {newsItems.map(item => (
            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
              <Card className="h-full flex flex-col">
                <div className="relative w-full h-48">
                  {item.contentType === "image" ? (
                    <Image
                      src={item.url}
                      alt={item.title}
                      fill
                      className="object-cover rounded-t-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <YoutubePlayer videoId={item.url} />
                  )}
                </div>
                <CardContent className="p-6 flex-grow">
                  <div className="space-y-4">
                    <div className="text-sm text-muted-foreground">
                      {format(item.date, "d MMMM yyyy", { locale: pl })}
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
                    <p className="text-muted-foreground line-clamp-4">{item.content}</p>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="outline" className="w-full">
                    Czytaj więcej
                  </Button>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
}
