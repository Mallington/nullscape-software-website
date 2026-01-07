import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from '@tsparticles/engine';

const Hero = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const handleLearnMore = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 z-0"
          options={{
          background: {
            color: {
              value: '#000000',
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
          }}
        />
      )}
      <div className="relative z-10 container mx-auto px-4 text-center md:text-left">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6">
            Nullscape Software
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white mb-6 md:mb-8 leading-relaxed">
            Specialising in automating print workflows and enhancing hardware intelligence, we bring over 25 years of industry expertise. Partnering with leading press manufacturers, we leverage cutting-edge technology to transform your pre-press and press operations. Join us to pioneer the Industry 4.0 revolution
          </p>
          <button
            onClick={handleLearnMore}
            className="px-6 md:px-8 py-2 md:py-3 border-2 border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 font-medium uppercase tracking-wide text-sm md:text-base"
          >
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

