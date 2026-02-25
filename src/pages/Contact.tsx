import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder: integrate real backend/email service
    console.log({ name, email, message });
    setSent(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main className="flex items-center justify-center py-16 px-6">
        <motion.section
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="w-full max-w-4xl bg-white border border-border rounded-2xl shadow-sm p-8 md:p-12"
        >
          <div className="relative">
            <Link
              to="/"
              className="absolute -top-6 left-0 inline-flex items-center gap-2 text-sm text-muted-foreground"
              aria-label="Back to home"
            >
              ← Back
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h1 className="text-2xl md:text-3xl font-semibold mb-2">
                  Get in touch
                </h1>
                <p className="text-sm text-muted-foreground mb-6">
                  We'd love to hear from you — for commissions, inquiries, or
                  private viewings send a message below.
                </p>

                <div className="space-y-4 text-sm">
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground">
                      contact@arteria.gallery
                    </div>
                  </div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-muted-foreground">
                      +20 101 270 0036
                    </div>
                  </div>
                  <div>
                    <div className="font-medium">Studio</div>
                    <div className="text-muted-foreground">
                      Suez, Egypt • By appointment
                    </div>
                  </div>
                </div>
              </div>

              <div>
                {sent && (
                  <div className="mb-4 rounded-md border border-green-200 bg-green-50 p-3 text-sm text-green-800">
                    Thank you — your message was sent.
                  </div>
                )}

                <form onSubmit={onSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs text-muted-foreground mb-1">
                      Name
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-lg border border-border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-200"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-muted-foreground mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-lg border border-border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-200"
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-muted-foreground mb-1">
                      Message
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={6}
                      className="w-full rounded-lg border border-border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-200"
                      placeholder="Tell us about your inquiry"
                      required
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-5 py-2.5 text-sm font-medium hover:opacity-95"
                    >
                      Send message
                    </button>
                    <Link to="/" className="text-sm text-muted-foreground">
                      Cancel
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default Contact;
