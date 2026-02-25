import { motion } from "framer-motion";
import { Shield, Fingerprint, Award } from "lucide-react";

const features = [
  { icon: Fingerprint, key: "feature1" },
  { icon: Shield, key: "feature2" },
  { icon: Award, key: "feature3" },
];

const AboutSection = () => {
  return (
    <section id="about" className="border-t border-border bg-card py-32">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 items-start gap-20 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-body text-[10px] font-semibold uppercase tracking-[0.5em] text-muted-foreground">
              About Arteria
            </span>
            <h2 className="mt-6 font-display text-4xl font-light text-foreground md:text-5xl">
              Crafted with
              <br />
              <em className="text-gradient-gold italic">Purpose</em>
            </h2>
            <p className="mt-8 font-body text-sm font-light leading-[1.9] text-muted-foreground">
              Our team of exceptional artists dedicates their craft to creating
              luxury designs and fine art that bridge heritage and modernity.
              Every piece carries a unique narrative woven with meticulous
              detail and refined artisanship.
            </p>
            <p className="mt-5 font-body text-sm font-light leading-[1.9] text-muted-foreground">
              We are committed to protecting the intellectual property of every
              design. Each purchase is accompanied by a certificate of
              authenticity and full documentation of the artist's rights.
            </p>

            <div className="mt-8 h-[1px] w-16 line-gold" />
          </motion.div>

          {/* Right - Features */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
                className="flex gap-6 border border-border bg-background p-7 transition-all duration-500 hover:shadow-soft"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-gradient-gold">
                  <f.icon
                    size={18}
                    className="text-primary-foreground"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="font-display text-lg font-medium text-foreground">
                    {f.key === "feature1"
                      ? "Authentic Originals"
                      : f.key === "feature2"
                        ? "IP Protected"
                        : "Limited Editions"}
                  </h3>
                  <p className="mt-2 font-body text-xs font-light leading-relaxed text-muted-foreground">
                    {f.key === "feature1"
                      ? "Every piece is handcrafted by our distinguished artists with the highest standards of quality and originality."
                      : f.key === "feature2"
                        ? "All designs are secured under intellectual property laws with official certificates of authenticity."
                        : "Exclusive limited runs ensure each piece retains its uniqueness and long-term investment value."}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
