import { Button } from "@/components/ui/button";
import { RocketIcon, StarIcon, GlobeIcon, Milestone, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-4 text-center bg-gradient-to-b from-black to-blue-900 text-white">
        <h1 className="text-5xl font-bold mb-6">Discover Pluto</h1>
        <p className="text-xl mb-8 max-w-2xl">Embark on a journey to the edge of our solar system and explore the mysterious dwarf planet Pluto.</p>
        <div className="flex gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
                Learn About Pluto
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Welcome to the World of Pluto!</DialogTitle>
                <DialogDescription>
                  Discover the fascinating facts about this distant dwarf planet and its exploration.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <p>Here's what you'll learn about Pluto:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Its discovery and reclassification</li>
                  <li>Physical characteristics and composition</li>
                  <li>Pluto's moons and orbital dynamics</li>
                  <li>The New Horizons mission and its findings</li>
                </ul>
              </div>
            </DialogContent>
          </Dialog>
          <Button size="lg" variant="outline" asChild className="bg-blue-500 text-white border-blue-500 hover:bg-blue-600 hover:border-blue-600">
            <Link to="/solar-system" className="flex items-center gap-2">
              <Sun className="h-5 w-5" />
              View Solar System
            </Link>
          </Button>
        </div>
      </section>

      {/* Key Facts Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Fascinating Pluto Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FactCard
              icon={<StarIcon className="h-12 w-12 text-yellow-400" />}
              title="Dwarf Planet"
              description="Pluto was reclassified from a planet to a dwarf planet in 2006."
            />
            <FactCard
              icon={<GlobeIcon className="h-12 w-12 text-blue-500" />}
              title="Heart of Pluto"
              description="Pluto has a heart-shaped glacier larger than Texas and Oklahoma combined."
            />
            <FactCard
              icon={<RocketIcon className="h-12 w-12 text-red-500" />}
              title="New Horizons"
              description="NASA's New Horizons spacecraft made a historic flyby of Pluto in July 2015."
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Timeline of Pluto Exploration</h2>
          <div className="space-y-8">
            <TimelineEvent
              year="1930"
              title="Discovery of Pluto"
              description="Clyde Tombaugh discovers Pluto at the Lowell Observatory."
            />
            <TimelineEvent
              year="1978"
              title="Charon Discovered"
              description="James Christy discovers Pluto's largest moon, Charon."
            />
            <TimelineEvent
              year="1988"
              title="Pluto's Atmosphere"
              description="Evidence of Pluto's atmosphere is first observed."
            />
            <TimelineEvent
              year="2006"
              title="Reclassification"
              description="Pluto is reclassified as a dwarf planet by the International Astronomical Union."
            />
            <TimelineEvent
              year="2015"
              title="New Horizons Flyby"
              description="NASA's New Horizons spacecraft conducts a historic flyby of Pluto, providing unprecedented close-up images and data."
            />
            <TimelineEvent
              year="2016"
              title="Pluto's 'Heart'"
              description="Scientists discover that Pluto's heart-shaped region, Sputnik Planitia, is an active glacier of nitrogen ice."
            />
            <TimelineEvent
              year="2018"
              title="Potential Subsurface Ocean"
              description="Research suggests Pluto may have a subsurface ocean beneath its icy shell."
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
