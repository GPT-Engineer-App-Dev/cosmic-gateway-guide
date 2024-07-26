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
      <section className="flex flex-col items-center justify-center py-20 px-4 text-center bg-gradient-to-b from-black to-orange-900 text-white">
        <h1 className="text-5xl font-bold mb-6">Explore Jupiter</h1>
        <p className="text-xl mb-8 max-w-2xl">Embark on a journey to the largest planet in our solar system and discover the wonders of the gas giant Jupiter.</p>
        <div className="flex gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Learn About Jupiter
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Welcome to the World of Jupiter!</DialogTitle>
                <DialogDescription>
                  Discover the fascinating facts about the largest planet in our solar system and its exploration.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <p>Here's what you'll learn about Jupiter:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Its massive size and composition</li>
                  <li>The Great Red Spot and other atmospheric features</li>
                  <li>Jupiter's moons and their unique characteristics</li>
                  <li>NASA's missions to explore Jupiter</li>
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
          <h2 className="text-3xl font-bold text-center mb-12">Fascinating Jupiter Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FactCard
              icon={<StarIcon className="h-12 w-12 text-yellow-400" />}
              title="King of Planets"
              description="Jupiter is the largest planet in our solar system, more than twice as massive as all other planets combined."
            />
            <FactCard
              icon={<GlobeIcon className="h-12 w-12 text-red-500" />}
              title="Great Red Spot"
              description="Jupiter's Great Red Spot is a giant storm that has been raging for over 400 years."
            />
            <FactCard
              icon={<RocketIcon className="h-12 w-12 text-blue-500" />}
              title="Galilean Moons"
              description="Jupiter has 79 known moons, including the four large Galilean moons discovered by Galileo Galilei in 1610."
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Timeline of Jupiter exploration</h2>
          <div className="space-y-8">
            <TimelineEvent
              year="1610"
              title="Galileo's Discovery"
              description="Galileo Galilei discovers Jupiter's four largest moons: Io, Europa, Ganymede, and Callisto."
            />
            <TimelineEvent
              year="1973"
              title="Pioneer 10"
              description="Pioneer 10 becomes the first spacecraft to fly by Jupiter, providing close-up images of the Great Red Spot."
            />
            <TimelineEvent
              year="1979"
              title="Voyager Missions"
              description="Voyager 1 and 2 fly by Jupiter, revealing detailed images of the planet and its moons."
            />
            <TimelineEvent
              year="1995"
              title="Galileo Orbiter"
              description="The Galileo spacecraft becomes the first to orbit Jupiter, studying the planet for almost 8 years."
            />
            <TimelineEvent
              year="2016"
              title="Juno Mission"
              description="NASA's Juno spacecraft enters Jupiter's orbit to study the planet's composition, gravity field, magnetic field, and polar magnetosphere."
            />
            <TimelineEvent
              year="2021"
              title="Juno's Extended Mission"
              description="Juno's mission is extended to focus on Jupiter's moons and rings, as well as its complex magnetic environment."
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
