import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FeatureTab } from "./FeatureTab";
import { FeatureContent } from "./FeatureContent";
import { features } from "@/config/features";

export const FeaturesSection = () => {
  return (
    <section className="container px-4 py-24">
      {/* Header Section */}
      <div className="max-w-2xl mb-20">
        <h2 className="text-5xl md:text-6xl font-normal mb-6 tracking-tight text-left">
          What We
          <br />
          <span className="text-gradient font-medium">Do</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 text-left">
          We combine deep technical expertise with fresh creativity to deliver solutions that help businesses grow.
        </p>
      </div>

      <Tabs defaultValue={features[0].title} className="w-full">
        <div className="flex flex-col items-center">
          <TabsList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-5xl bg-transparent h-auto p-0 gap-4">
            {features.map((feature) => (
              <TabsTrigger
                key={feature.title}
                value={feature.title}
                className="w-full data-[state=active]:shadow-none data-[state=active]:bg-transparent"
              >
                <FeatureTab
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  isActive={false}
                />
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="w-full max-w-5xl mt-12">
            {features.map((feature) => (
              <TabsContent
                key={feature.title}
                value={feature.title}
                className="mt-0 h-full"
              >
                <FeatureContent
                  image={feature.image}
                  title={feature.title}
                />
              </TabsContent>
            ))}
          </div>
        </div>
      </Tabs>
    </section>
  );
};