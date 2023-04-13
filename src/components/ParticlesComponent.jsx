import React, { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesComponent = ({ id }) => {
  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);


  const options = useMemo(() => {
    return {
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 10,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: false,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: false,
        },
        move: {
          direction: "top",
          enable: true,
          outModes: {
            default: "out",
          },
          random: false,
          speed: { min: 1, max: 3 },
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: { min: 0.3, max: 0.8 },
        },
        shape: {
          type: "triangle",
        },
        size: {
          value: { min: 1, max: 8 },
        },
      },
      detectRetina: true,
    };
  }, []);

  return (
    <>
      <Particles
        id={id}
        options={options}
        init={particlesInit}
      />
    </>
  );
};

export default ParticlesComponent;
