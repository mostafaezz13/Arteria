import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { products } from "@/lib/products";
import { motion } from "framer-motion";
import fawryLogo from "@/assets/fawry-logo.png";
import paypalLogo from "@/assets/paypal.jpg";
import instapayLogo from "@/assets/instapay.png";

const Purchase = () => {
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

  return (
    <motion.div
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Navbar />
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
        <div className="order-1 md:order-1 bg-card hidden md:block">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-screen object-cover"
          />
        </div>

        <div className="order-2 md:order-2 flex items-center bg-background">
          <div className="w-full p-8 md:p-14">
            <div className="bg-card rounded-md p-6 shadow-soft">
              <h1 className="text-2xl font-semibold mb-4">
                Purchase: {product.title}
              </h1>
              <p className="text-sm text-muted-foreground mb-6">
                Price:{" "}
                <span className="text-gradient-gold font-semibold">
                  {product.price}
                </span>
              </p>

              <div className="mb-6">
                <h2 className="text-sm font-semibold text-foreground mb-3">
                  اتمام الدفع
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                  <a
                    className="flex flex-col items-center gap-2 rounded-md border border-border/60 p-4 hover:shadow-sm"
                    aria-label="Fawry"
                  >
                    <img
                      src={fawryLogo}
                      alt="Fawry"
                      className="h-14 object-contain"
                    />
                    <span className="text-sm text-muted-foreground">Fawry</span>
                  </a>

                  <a
                    rel="noreferrer"
                    className="flex flex-col items-center gap-2 rounded-md border border-border/60 p-4 hover:shadow-sm"
                    aria-label="PayPal"
                  >
                    <img
                      src={paypalLogo}
                      alt="PayPal"
                      className="h-14 object-contain"
                    />
                    <span className="text-sm text-muted-foreground">
                      PayPal
                    </span>
                  </a>

                  <a
                    className="flex flex-col items-center gap-2 rounded-md border border-border/60 p-4 hover:shadow-sm"
                    aria-label="Instapay"
                  >
                    <img
                      src={instapayLogo}
                      alt="Instapay"
                      className="h-14 object-contain"
                    />
                    <span className="text-sm text-muted-foreground">
                      Instapay
                    </span>
                  </a>
                </div>

                <div className="mt-4 text-xs text-muted-foreground">
                  اضغط على خيار الدفع لعرض تفاصيل إتمام المعاملة.
                </div>
              </div>

              <div className="flex gap-3">
                <Link
                  to="/#gallery"
                  className="rounded-md border border-border/60 px-4 py-2 text-sm text-muted-foreground"
                >
                  Continue browsing
                </Link>
                <button className="rounded-md bg-gradient-gold px-6 py-3 font-semibold text-primary-foreground">
                  Proceed to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Purchase;
