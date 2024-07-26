import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const SOLAR_SYSTEM_SCALE = 1 / 20000000; // 1 pixel = 20,000 km
const PLANET_SCALE = 1 / 3000; // 1 pixel = 3,000 km
const SUN_RADIUS = 696340; // km
const SUN_SCALE = 1 / 50000; // 1 pixel = 50,000 km (for sun only)

const planets = [
  { name: "Mercury", color: "#A9A9A9", radius: 2439.7, distance: 57.9e6, orbitPeriod: 88 },
  { name: "Venus", color: "#FFA500", radius: 6051.8, distance: 108.2e6, orbitPeriod: 225 },
  { name: "Earth", color: "#4169E1", radius: 6371, distance: 149.6e6, orbitPeriod: 365 },
  { name: "Mars", color: "#FF4500", radius: 3389.5, distance: 227.9e6, orbitPeriod: 687 },
  { name: "Jupiter", color: "#DEB887", radius: 69911, distance: 778.5e6, orbitPeriod: 4333 },
  { name: "Saturn", color: "#F4A460", radius: 58232, distance: 1.434e9, orbitPeriod: 10759 },
  { name: "Uranus", color: "#00FFFF", radius: 25362, distance: 2.871e9, orbitPeriod: 30687 },
  { name: "Neptune", color: "#4169E1", radius: 24622, distance: 4.495e9, orbitPeriod: 60190 },
].map(planet => ({
  ...planet,
  orbitRadius: planet.distance * SOLAR_SYSTEM_SCALE,
  size: Math.max(3, planet.radius * PLANET_SCALE * 2),
}));

const SolarSystem = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 5);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {/* Stars */}
        {[...Array(1000)].map((_, i) => {
          const size = Math.random() * 2 + 1;
          return (
            <div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: size,
                height: size,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.8 + 0.2,
              }}
            />
          );
        })}

        {/* Sun */}
        <div
          className="absolute rounded-full"
          style={{
            width: Math.max(10, SUN_RADIUS * SUN_SCALE * 2),
            height: Math.max(10, SUN_RADIUS * SUN_SCALE * 2),
            background: 'radial-gradient(circle, #FDB813 0%, #FFA500 70%, #FF4500 100%)',
            boxShadow: '0 0 50px #FDB813, 0 0 100px #FFA500',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* Orbits and Planets */}
        {planets.map((planet) => (
          <React.Fragment key={planet.name}>
            <div
              className="absolute rounded-full border border-gray-700"
              style={{
                width: planet.orbitRadius * 2,
                height: planet.orbitRadius * 2,
                transform: 'translate(-50%, -50%)',
              }}
            />
            <motion.div
              className="absolute"
              style={{
                width: planet.size,
                height: planet.size,
                backgroundColor: planet.color,
                borderRadius: '50%',
                x: -planet.size / 2,
                y: -planet.size / 2,
                boxShadow: `0 0 ${planet.size / 2}px ${planet.color}`,
              }}
              animate={{
                x: Math.cos((time / planet.orbitPeriod) * 2 * Math.PI) * planet.orbitRadius - planet.size / 2,
                y: Math.sin((time / planet.orbitPeriod) * 2 * Math.PI) * planet.orbitRadius - planet.size / 2,
              }}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SolarSystem;
