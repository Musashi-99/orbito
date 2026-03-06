import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const products = [
  {
    title: "WhatsApp E-Commerce Platform",
    slug: "whatsapp-ecommerce-platform",
    summary: "Built a complete e-commerce system inside WhatsApp — AI-driven search, order management, and payments via chat.",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80",
  },
  {
    title: "Multi-Tenant SaaS E-Commerce Platform",
    slug: "multi-tenant-saas-platform",
    summary: "An affordable Shopify alternative for small businesses, designed with scalability and multi-tenancy.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    title: "AI-Powered Semantic Search Engine",
    slug: "ai-semantic-search-engine",
    summary: "Context-aware search engine similar to Algolia, but fully customizable for business workflows.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
  },
  {
    title: "Enterprise Real-Time Dashboard",
    slug: "realtime-analytics-dashboard",
    summary: "A scalable analytics dashboard that streams and visualizes live data for enterprises.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    title: "AI-Powered Call Review System",
    slug: "ai-call-review-system",
    summary: "Automated system for analyzing inbound calls for quality and sentiment, helping enterprises improve customer support.",
    image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=800&q=80",
  },
  {
    title: "Custom Admin Dashboards & Tools",
    slug: "custom-admin-dashboards",
    summary: "Advanced admin dashboards for startups and enterprises, tailored to their workflows.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    title: "ReelBox — Instagram Reel Clone",
    slug: "instagram-reel-clone",
    summary: "White-label short-video platform with infinite scroll, video transcoding, and recommendation engine.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
  },
];

const ProjectsSection = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!carouselApi) return;
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
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-heading mb-6"
            >
              Our <span className="heading-accent">Products</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground text-left max-w-2xl"
            >
              Production-ready systems we've built and shipped — showcasing our expertise in full-stack development, AI integration, and scalable architecture.
            </motion.p>
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
            {products.map((product) => (
              <CarouselItem
                key={product.slug}
                className="pl-[20px] md:max-w-[452px]"
              >
                <a
                  href={`/blog/${product.slug}`}
                  className="group flex flex-col justify-between rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(74,222,128,0.1)]"
                >
                  <div>
                    <div className="flex aspect-[3/2] overflow-hidden">
                      <div className="flex-1 transition-all duration-300">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-lg font-semibold text-foreground md:text-xl">
                      {product.title}
                    </h3>
                    <p className="mb-4 text-sm text-muted-foreground line-clamp-3">
                      {product.summary}
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

export default ProjectsSection;
