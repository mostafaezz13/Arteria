import { motion } from "framer-motion";
import heroImage from "@/assets/hero-gallery-light.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Luxury gallery" className="h-full w-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-8 text-center">
        <motion.span className="inline-block font-body text-[10px] font-semibold uppercase tracking-[0.5em] text-muted-foreground">
          {"Exclusive Art Collection".split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 + i * 0.03 }}
              className="inline-block"
              aria-hidden={char === " "}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-8 font-display text-6xl font-light leading-[1.1] text-foreground md:text-8xl"
        >
          Where Art
          <br />
          Meets{" "}
          <em className="text-gradient-gold font-light italic">Luxury</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mx-auto mt-8 max-w-lg font-body text-sm font-light leading-relaxed text-muted-foreground md:text-base"
        >
          Curated masterpieces crafted by distinguished artists. Each piece is a
          testament to unparalleled craftsmanship, protected by intellectual
          property rights and certificates of authenticity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row"
        >
          <a
            href="#gallery"
            className="bg-gradient-gold px-12 py-4 font-body text-[10px] font-semibold uppercase tracking-[0.3em] text-primary-foreground transition-all duration-500 hover:shadow-luxury hover:bg-foreground/10 hover:text-foreground"
          >
            View Collection
          </a>
          <a
            href="#about"
            className="border border-foreground/20 px-12 py-4 font-body text-[10px] font-semibold uppercase tracking-[0.3em] text-foreground transition-all duration-500 hover:border-foreground/50 hover:bg-foreground/6 hover:text-foreground"
          >
            About Us
          </a>
        </motion.div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] line-gold opacity-30" />
    </section>
  );
};

export default HeroSection;
