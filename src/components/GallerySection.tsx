import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { products } from "@/lib/products";

const GallerySection = () => {
  return (
    <section id="gallery" className="bg-background py-32">
      <div className="container mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="font-body text-[10px] font-semibold uppercase tracking-[0.5em] text-muted-foreground">
            The Collection
          </span>
          <h2 className="mt-6 font-display text-4xl font-light text-foreground md:text-6xl">
            Featured Works
          </h2>
          <div className="mx-auto mt-6 h-[1px] w-16 line-gold" />
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {products.map((art, i) => (
            <Link to={`/product/${art.id}`} key={art.id} className="group">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="cursor-pointer"
              >
                <div className="relative overflow-hidden bg-card shadow-soft">
                  <div className={`overflow-hidden ${i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[3/4]"}`}>
                    <img
                      src={art.image}
                      alt={art.title}
                      className="h-full w-full object-cover transition-all duration-[800ms] ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
                {/* Info below image */}
                <div className="mt-5 space-y-1">
                  <div className="flex items-start justify-between">
                    <h3 className="font-display text-xl font-medium text-foreground">
                      {art.title}
                    </h3>
                    <span className="font-body text-sm font-medium text-gradient-gold">
                      {art.price}
                    </span>
                  </div>
                  <p className="font-body text-xs text-muted-foreground">{art.artist}</p>
                  <p className="font-body text-[10px] uppercase tracking-widest text-muted-foreground/60">{art.medium}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
