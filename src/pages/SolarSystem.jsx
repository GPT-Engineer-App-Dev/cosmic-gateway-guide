import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const SOLAR_SYSTEM_SCALE = 1 / 10000000000; // 1 pixel = 10,000,000 km
const PLANET_SCALE = 1 / 1000; // 1 pixel = 1,000 km

const planets = [
  { name: "Mercury", color: "#A9A9A9", radius: 2439.7, distance: 57.9e6, orbitPeriod: 88 },
  { name: "Venus", color: "#FFA500", radius: 6051.8, distance: 108.2e6, orbitPeriod: 225 },
  { name: "Earth", color: "#4169E1", radius: 6371, distance: 149.6e6, orbitPeriod: 365 },
  { name: "Mars", color: "#FF4500", radius: 3389.5, distance: 227.9e6, orbitPeriod: 687 },
  { name: "Jupiter", color: "#DEB887", radius: 69911, distance: 778.5e6, orbitPeriod: 4333 },
  { name: "Saturn", color: "#F4A460", radius: 58232, distance: 1.434e9, orbitPeriod: 10759 },
  { name: "Uranus", color: "#00FFFF", radius: 25362, distance: 2.871e9, orbitPeriod: 30687 },
  { name: "Neptune", color: "#4169E1", radius: 24622, distance: 4.495e9, orbitPeriod: 60190 },
];

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
        {/* Sun */}
        <div className="absolute w-16 h-16 bg-yellow-500 rounded-full" style={{ boxShadow: "0 0 50px #FDB813" }} />

        {/* Planets */}
        {planets.map((planet) => (
          <motion.div
            key={planet.name}
            className="absolute"
            style={{
              width: Math.max(2, planet.radius * PLANET_SCALE * 2),
              height: Math.max(2, planet.radius * PLANET_SCALE * 2),
              backgroundColor: planet.color,
              borderRadius: "50%",
              x: -Math.max(1, planet.radius * PLANET_SCALE),
              y: -Math.max(1, planet.radius * PLANET_SCALE),
            }}
            animate={{
              x: Math.cos((time / planet.orbitPeriod) * 2 * Math.PI) * planet.distance * SOLAR_SYSTEM_SCALE - Math.max(1, planet.radius * PLANET_SCALE),
              y: Math.sin((time / planet.orbitPeriod) * 2 * Math.PI) * planet.distance * SOLAR_SYSTEM_SCALE - Math.max(1, planet.radius * PLANET_SCALE),
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SolarSystem;
