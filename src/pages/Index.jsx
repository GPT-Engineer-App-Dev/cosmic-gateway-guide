import { Button } from "@/components/ui/button";
import { RocketIcon, StarIcon, GlobeIcon } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-4 text-center bg-gradient-to-b from-black to-blue-900 text-white">
        <h1 className="text-5xl font-bold mb-6">Explore the Cosmos</h1>
        <p className="text-xl mb-8 max-w-2xl">Embark on a journey through the stars and discover the wonders of our universe.</p>
        <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
          Start Your Adventure
        </Button>
      </section>

      {/* Key Facts Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Fascinating Space Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FactCard
              icon={<StarIcon className="h-12 w-12 text-yellow-400" />}
              title="Billions of Galaxies"
              description="The observable universe contains more than 100 billion galaxies."
            />
            <FactCard
              icon={<GlobeIcon className="h-12 w-12 text-blue-500" />}
              title="Exoplanets Galore"
              description="Thousands of planets outside our solar system have been discovered."
            />
            <FactCard
              icon={<RocketIcon className="h-12 w-12 text-red-500" />}
              title="Space Exploration"
              description="Humans have been in space for over 60 years, pushing the boundaries of exploration."
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 bg-blue-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Explore Further?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Join our community of space enthusiasts and stay updated on the latest discoveries and missions.</p>
        <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-900">
          Sign Up for Updates
        </Button>
      </section>
    </div>
  );
};

const FactCard = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
    {icon}
    <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Index;
