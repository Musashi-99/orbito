"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface GalleryItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

interface Gallery6Props {
  heading?: string;
  items?: GalleryItem[];
}

const Gallery6 = ({
  heading = "Our Work",
  items = [],
}: Gallery6Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-24">
      <div className="container px-4">
        <div className="mb-12 flex flex-col justify-between md:flex-row md:items-end">
          <div>
            <h2 className="section-heading mb-6">
              Our <span className="heading-accent">Work</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground text-left max-w-2xl">
              Production-ready systems built for real businesses. Explore how ORBITO helps startups and companies launch scalable products and AI-powered platforms.
            </p>
          </div>
          <div className="mt-8 flex shrink-0 items-center justify-start gap-2 md:mt-0">
            <Button
              size="icon"
              variant="outline"
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto rounded-full border-border hover:bg-accent"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto rounded-full border-border hover:bg-accent"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": { dragFree: true },
            },
          }}
        >
          <CarouselContent className="ml-[calc(theme(container.padding)-20px)] mr-[calc(theme(container.padding))] 2xl:ml-[calc(50vw-700px+theme(container.padding)-20px)] 2xl:mr-[calc(50vw-700px+theme(container.padding))]">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-[20px] md:max-w-[452px]"
              >
                <a
                  href={item.url}
                  className="group flex flex-col justify-between rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(74,222,128,0.1)]"
                >
                  <div>
                    <div className="flex aspect-[3/2] overflow-hidden">
                      <div className="flex-1 transition-all duration-300">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-lg font-semibold text-foreground md:text-xl">
                      {item.title}
                    </h3>
                    <p className="mb-4 text-sm text-muted-foreground line-clamp-3">
                      {item.summary}
                    </p>
                    <span className="flex items-center text-sm font-medium text-primary">
                      Read more{" "}
                      <ArrowUpRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { Gallery6 };
