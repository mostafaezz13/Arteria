import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import pkg from "../../package.json";

const FooterSection = () => {
  return (
    <footer id="contact" className="border-t border-border bg-background">
      {/* CTA */}
      <div className="border-b border-border py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-8 text-center"
        >
          <span className="font-body text-[10px] font-semibold uppercase tracking-[0.5em] text-muted-foreground">
            Private Inquiries
          </span>
          <h2 className="mt-6 font-display text-3xl font-light text-foreground md:text-5xl">
            Interested in a Piece?
          </h2>
          <p className="mx-auto mt-6 max-w-md font-body text-sm font-light text-muted-foreground">
            Reach out for pricing details, custom commissions, or to arrange a
            private viewing of our collection.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-block bg-gradient-gold px-12 py-4 font-body text-[10px] font-semibold uppercase tracking-[0.3em] text-primary-foreground transition-all duration-500 hover:shadow-luxury"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>

      {/* Bottom */}
      <div className="container mx-auto px-8 py-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <span className="font-display text-xl font-light tracking-wider text-foreground">
              Arteria<span className="text-gradient-gold font-medium">.</span>
            </span>
            <p className="mt-4 font-body text-xs font-light leading-relaxed text-muted-foreground">
              A curated digital gallery offering luxury fine art and designs
              protected under intellectual property law.
            </p>
          </div>

          <div>
            <h4 className="font-body text-[10px] font-semibold uppercase tracking-[0.3em] text-foreground">
              Intellectual Property
            </h4>
            <p className="mt-4 font-body text-[11px] font-light leading-[1.8] text-muted-foreground">
              All artwork and designs displayed are protected under intellectual
              property laws. Unauthorized reproduction, copying, or use of any
              artwork without prior written consent and full payment is strictly
              prohibited.
            </p>
          </div>

          <div>
            <h4 className="font-body text-[10px] font-semibold uppercase tracking-[0.3em] text-foreground">
              Privacy Policy
            </h4>
            <p className="mt-4 font-body text-[11px] font-light leading-[1.8] text-muted-foreground">
              We are committed to protecting your personal data. No information
              is shared with third parties. All financial transactions are
              processed through secure, encrypted payment gateways.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-8">
          <div className="container mx-auto px-8 flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <nav className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <a
                href="#gallery"
                className="font-body text-sm text-muted-foreground hover:text-foreground underline-offset-2"
              >
                Collection
              </a>
              <a
                href="#about"
                className="font-body text-sm text-muted-foreground hover:text-foreground underline-offset-2"
              >
                About
              </a>
              <a
                href="#contact"
                className="font-body text-sm text-muted-foreground hover:text-foreground underline-offset-2"
              >
                Contact
              </a>
              <a
                href="#hero"
                className="font-body text-sm text-muted-foreground hover:text-foreground underline-offset-2"
              >
                Home
              </a>
            </nav>

            <div className="text-center md:text-right">
              <p className="font-body text-[10px] font-light uppercase tracking-[0.2em] text-muted-foreground">
                © {new Date().getFullYear()} Arteria Gallery. All Rights
                Reserved.
              </p>
              <p className="mt-1 font-body text-[10px] text-muted-foreground">
                Site version: v1.0.0
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
