import { motion } from "framer-motion";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";

export default function Galeria() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesConfig = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: ["#8B4513", "#A0522D", "#CD853F", "#DEB887"]
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.7,
        random: true,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1,
          sync: false
        }
      },
      size: {
        value: 5,
        random: true,
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 1,
          sync: false
        }
      },
      move: {
        enable: true,
        speed: 2,
        direction: "bottom",
        random: true,
        straight: false,
        outModes: {
          default: "out"
        },
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      }
    },
    background: {
      color: {
        value: "transparent"
      }
    }
  };

  const imgs = [
    '/src/assets/luz/images/portfolio1_01.webp',
    '/src/assets/luz/images/portfolio1_02.webp',
    '/src/assets/luz/images/portfolio1_03.webp',
    '/src/assets/luz/images/portfolio1_04.webp',
    '/src/assets/luz/images/portfolio1_05.webp',
    '/src/assets/luz/images/portfolio1_06.webp',
    '/src/assets/luz/images/portfolio1_07.webp',
    '/src/assets/luz/images/portfolio1_08.webp',
    '/src/assets/luz/images/portfolio1_09.webp',
    '/src/assets/luz/images/portfolio1_10.webp',
    '/src/assets/luz/images/portfolio-parte-2-copia.webp',
    '/src/assets/luz/images/portfolio-parte-3_01.webp',
    '/src/assets/luz/images/portfolio-parte-3_02.webp',
    '/src/assets/luz/images/portfolio-parte-3_03.webp',
    '/src/assets/luz/images/portfolio-parte-3_04.webp',
    '/src/assets/luz/images/portfolio-parte-3_05.webp',
    '/src/assets/luz/images/concepto.webp',
    '/src/assets/luz/images/portfolio-parte-3_07.webp',
    '/src/assets/luz/images/portfolio-parte-3_08.webp',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 30,
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        duration: 0.8
      }
    }
  };

  return (
    <div className="w-full p-4 overflow-x-hidden relative">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        className="absolute inset-0 z-10 pointer-events-none"
      />
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {imgs.map((src, i) => (
          <motion.div 
            key={i} 
            className="relative overflow-visible rounded-lg shadow-md hover:shadow-xl transition-all duration-500"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { 
                type: "spring",
                stiffness: 300,
                damping: 20
              }
            }}
          >
{ i===0 && (
  <div className="absolute top-1/2 bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-auto">
    <audio controls className="w-48">
      <source src="/musica.mp3" type="audio/mpeg" />
      Tu navegador no soporta el audio.
    </audio>
  </div>
)}



            <div className="overflow-hidden rounded-lg">
              <img
                src={src}
                alt={`Portfolio image ${i + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 
