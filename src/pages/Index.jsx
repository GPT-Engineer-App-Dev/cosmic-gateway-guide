import { Button } from "@/components/ui/button";
import { RocketIcon, StarIcon, GlobeIcon, Milestone, Sun } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-4 text-center bg-gradient-to-b from-black to-blue-900 text-white">
        <h1 className="text-5xl font-bold mb-6">Explore the Cosmos</h1>
        <p className="text-xl mb-8 max-w-2xl">Embark on a journey through the stars and discover the wonders of our universe.</p>
        <div className="flex gap-4">
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
            Start Your Adventure
          </Button>
          <Button size="lg" variant="outline" asChild className="bg-blue-500 text-white border-blue-500 hover:bg-blue-600 hover:border-blue-600">
            <Link to="/solar-system" className="flex items-center gap-2">
              <Sun className="h-5 w-5" />
              Explore Solar System
            </Link>
          </Button>
        </div>
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

      {/* Timeline Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Timeline of Space Exploration</h2>
          <div className="space-y-8">
            <TimelineEvent
              year="1957"
              title="Sputnik 1"
              description="The Soviet Union launches the first artificial satellite into Earth's orbit."
            />
            <TimelineEvent
              year="1961"
              title="Yuri Gagarin"
              description="Soviet cosmonaut Yuri Gagarin becomes the first human to journey into outer space."
            />
            <TimelineEvent
              year="1969"
              title="Apollo 11 Moon Landing"
              description="NASA astronauts Neil Armstrong and Buzz Aldrin become the first humans to walk on the Moon."
            />
            <TimelineEvent
              year="1990"
              title="Hubble Space Telescope"
              description="The Hubble Space Telescope is launched into low Earth orbit."
            />
            <TimelineEvent
              year="2004"
              title="Mars Exploration Rovers"
              description="NASA's rovers Spirit and Opportunity land on Mars to begin exploration of the planet's surface."
            />
            <TimelineEvent
              year="2015"
              title="Pluto Flyby"
              description="NASA's New Horizons spacecraft conducts a flyby of Pluto, providing the first close-up images of the dwarf planet."
            />
            <TimelineEvent
              year="2020"
              title="SpaceX Crew Dragon"
              description="SpaceX's Crew Dragon becomes the first commercial spacecraft to take astronauts to the International Space Station."
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

const TimelineEvent = ({ year, title, description }) => (
  <div className="flex">
    <div className="flex flex-col items-center mr-4">
      <div className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full">
        <Milestone className="w-4 h-4 text-white" />
      </div>
      <div className="w-px h-full bg-blue-300"></div>
    </div>
    <div className="pb-8">
      <p className="mb-2 text-lg font-bold text-blue-600">{year}</p>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default Index;
