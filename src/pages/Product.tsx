import { useParams, Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { products } from "@/lib/products";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const pageVariant = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { when: "beforeChildren", staggerChildren: 0.06 },
  },
  exit: { opacity: 0, y: 8, transition: { duration: 0.2 } },
};

const imageVariant = {
  initial: { opacity: 0, scale: 0.98 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const infoVariant = {
  initial: { opacity: 0, x: 18 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-muted">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold">Product not found</h2>
          <Link to="/" className="text-primary underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const navigate = useNavigate();

  const scrollToContact = (e: any) => {
    e?.preventDefault?.();
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // update hash for deep-linking
      history.replaceState(null, "", "#contact");
    } else {
      // fallback: navigate to home where contact may exist
      navigate("/#contact");
    }
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      // simple feedback
      alert("Product link copied to clipboard");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <motion.div
      variants={pageVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-background"
    >
      <Navbar />
      <div className="container mx-auto px-6 md:px-8 lg:px-12 py-14 md:py-24">
        <div className="flex items-center justify-between mb-8">
          <motion.button
            onClick={() => navigate(-1)}
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 rounded-md border border-border/50 bg-card px-3 py-2 text-sm font-medium text-foreground shadow-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4 rounded-md"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back
          </motion.button>

          <div className="text-sm text-muted-foreground">{product.artist}</div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 items-start">
          <div>
            <motion.div
              variants={imageVariant}
              className="rounded-md bg-card shadow-soft overflow-hidden relative"
            >
              <ImageZoom
                src={product.image}
                alt={product.title}
                className="w-full h-[320px] md:h-[560px] object-cover"
              />
            </motion.div>

            <motion.div
              className="mt-4 grid grid-cols-4 gap-3"
              variants={infoVariant}
            >
              {products
                .filter((p) => p.id !== product.id)
                .slice(0, 4)
                .map((p) => (
                  <Link
                    key={p.id}
                    to={`/product/${p.id}`}
                    className="overflow-hidden rounded-sm bg-card"
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-20 w-full object-cover"
                    />
                  </Link>
                ))}
            </motion.div>
          </div>

          <motion.div
            variants={infoVariant}
            className="flex flex-col justify-start px-1 md:px-6 lg:px-10"
          >
            <motion.h1
              className="font-display text-3xl md:text-5xl font-medium text-foreground mb-4"
              layout
            >
              {product.title}
            </motion.h1>

            <div className="mb-4 flex items-center gap-4">
              <span className="font-body text-sm text-muted-foreground">
                {product.medium}
              </span>
              <span className="text-gradient-gold font-semibold text-lg">
                {product.price}
              </span>
            </div>

            <motion.p className="mb-4 font-body text-base text-foreground/90 leading-relaxed">
              {product.description}
            </motion.p>

            <div className="mb-6 grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-[11px] text-muted-foreground uppercase tracking-wider">
                  Year
                </div>
                <div className="font-body text-sm">2025</div>
              </div>
              <div>
                <div className="text-[11px] text-muted-foreground uppercase tracking-wider">
                  Dimensions
                </div>
                <div className="font-body text-sm">80 x 120 cm</div>
              </div>
              <div>
                <div className="text-[11px] text-muted-foreground uppercase tracking-wider">
                  Edition
                </div>
                <div className="font-body text-sm">Original</div>
              </div>
              <div>
                <div className="text-[11px] text-muted-foreground uppercase tracking-wider">
                  Certificate
                </div>
                <div className="font-body text-sm">Included</div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-body text-sm font-semibold text-foreground mb-2">
                About the work
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This work explores the interplay between light and texture,
                using gold leaf highlights to draw attention to the central
                composition. Framed for immediate display.
              </p>
            </div>

            <div className="mb-6 flex flex-wrap items-center gap-3">
              <button
                onClick={() => navigate(`/purchase/${product.id}`)}
                className="rounded-md bg-gradient-gold px-6 py-3 font-semibold text-primary-foreground"
              >
                Buy Now
              </button>
            </div>

            <div className="mb-6">
              <h4 className="font-body text-sm font-semibold text-foreground mb-2">
                About the artist
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {product.artist} is a contemporary artist known for melding
                traditional techniques with modern sensibilities. Their work has
                been shown in private and public collections across the region.
              </p>
            </div>

            <div>
              <h4 className="font-body text-sm font-semibold text-foreground mb-2">
                Related works
              </h4>
              <div className="mt-3 grid grid-cols-3 gap-3">
                {products
                  .filter((p) => p.id !== product.id)
                  .slice(0, 3)
                  .map((p) => (
                    <Link
                      key={p.id}
                      to={`/product/${p.id}`}
                      className="overflow-hidden rounded-sm bg-card"
                    >
                      <img
                        src={p.image}
                        alt={p.title}
                        className="h-20 w-full object-cover"
                      />
                    </Link>
                  ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Product;

// Small in-file component: ImageZoom (full-image hover zoom centered on cursor)
function ImageZoom({
  src,
  alt,
  className,
}: {
  src: string;
  alt?: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hover, setHover] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const zoom = 1.9;

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPos({ x, y });
  };

  const onEnter = (e: React.MouseEvent) => {
    onMouseMove(e);
    setHover(true);
  };
  const onLeave = () => setHover(false);

  const origin = () => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return "50% 50%";
    const ox = Math.round((pos.x / rect.width) * 100);
    const oy = Math.round((pos.y / rect.height) * 100);
    return `${ox}% ${oy}%`;
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={onMouseMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        position: "relative",
        overflow: "hidden",
        cursor: hover ? "none" : "zoom-in",
      }}
    >
      <img
        src={src}
        alt={alt}
        className={className}
        style={{
          display: "block",
          transform: hover ? `scale(${zoom})` : undefined,
          transformOrigin: origin(),
          transition: "transform 280ms ease-out",
        }}
      />

      {hover && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            left: pos.x,
            top: pos.y,
            transform: "translate(-50%, -50%)",
            width: 36,
            height: 36,
            borderRadius: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            zIndex: 20,
          }}
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5v14M5 12h14"
              stroke="#fff"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
