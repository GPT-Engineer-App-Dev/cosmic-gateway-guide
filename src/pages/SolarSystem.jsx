import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const SOLAR_SYSTEM_SCALE = 1 / 1000000000; // 1 pixel = 1,000,000 km
const PLANET_SCALE = 1 / 500; // 1 pixel = 500 km
const SUN_RADIUS = 696340; // km

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
  size: Math.max(4, planet.radius * PLANET_SCALE * 2),
}));

const SolarSystem = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {/* Stars */}
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              left: Math.random() * window.innerWidth,
              top: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.8 + 0.2,
            }}
          />
        ))}

        {/* Sun */}
        <div
          className="absolute rounded-full"
          style={{
            width: SUN_RADIUS * PLANET_SCALE * 2,
            height: SUN_RADIUS * PLANET_SCALE * 2,
            background: 'radial-gradient(circle, #FDB813 0%, #FFA500 70%, #FF4500 100%)',
            boxShadow: '0 0 100px #FDB813, 0 0 200px #FFA500',
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
              }}
              animate={{
                x: Math.cos((time / planet.orbitPeriod) * 2 * Math.PI) * planet.orbitRadius - planet.size / 2,
                y: Math.sin((time / planet.orbitPeriod) * 2 * Math.PI) * planet.orbitRadius - planet.size / 2,
              }}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default SolarSystem;
