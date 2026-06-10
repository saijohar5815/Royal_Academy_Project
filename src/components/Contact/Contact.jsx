import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gradeLevel: "Primary School",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1800));

    console.log(formData);

    setLoading(false);
    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      gradeLevel: "Primary School",
      message: "",
    });
  };

  return (
    <>
      <section
        id="contact"
        className="py-16 sm:py-24 bg-white text-stone-900 relative overflow-hidden border-t border-stone-100"
      >
        {/* Background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-50/50 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-stone-100/50 blur-[100px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* LEFT */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 border border-amber-200 rounded-full text-[10px] sm:text-xs font-mono uppercase tracking-widest text-amber-900 mb-4 font-bold">
                  ● Admissions Core 2026
                </span>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-950 tracking-tight leading-tight">
                  Begin Your
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-orange-600">
                    Royal Journey
                  </span>
                </h2>

                <p className="text-xs sm:text-sm text-stone-600 mt-4 leading-relaxed max-w-md">
                  Have questions regarding curricula, enrollment timelines, or
                  scheduling campus tours? Connect directly with our admissions
                  council.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: MapPin,
                    title: "Campus Location",
                    info: "100 Royal Academy Blvd, Knowledge District",
                  },
                  {
                    icon: Phone,
                    title: "Admissions Desk",
                    info: "+1 (234) 567-890",
                  },
                  {
                    icon: Mail,
                    title: "Digital Registry",
                    info: "admissions@royalacademy.edu",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-100 hover:border-amber-200 transition-all duration-300"
                  >
                    <div className="p-3 bg-white rounded-xl text-amber-700 shadow-sm">
                      <item.icon size={18} />
                    </div>

                    <div>
                      <h4 className="text-[10px] font-mono uppercase tracking-wider text-stone-500 font-bold">
                        {item.title}
                      </h4>

                      <p className="text-sm text-stone-800 mt-1 font-medium">
                        {item.info}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 bg-white border border-stone-200 rounded-[32px] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] p-6 sm:p-8 md:p-10 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 h-[3px] w-full bg-gradient-to-r from-amber-500 to-orange-600" />

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-widest text-stone-500 mb-2 font-bold">
                    Parent / Guardian Name
                  </label>

                  <input
                    required
                    type="text"
                    placeholder="Alexander Mercer"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-widest text-stone-500 mb-2 font-bold">
                      Email
                    </label>

                    <input
                      required
                      type="email"
                      placeholder="parent@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-widest text-stone-500 mb-2 font-bold">
                      Phone
                    </label>

                    <input
                      required
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phone: e.target.value,
                        })
                      }
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-widest text-stone-500 mb-2 font-bold">
                    Target Academic Program
                  </label>

                  <select
                    value={formData.gradeLevel}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        gradeLevel: e.target.value,
                      })
                    }
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500"
                  >
                    <option>Primary School (Grades I - V)</option>
                    <option>Middle School (Grades VI - VIII)</option>
                    <option>Senior School (Grades IX - XII)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-widest text-stone-500 mb-2 font-bold">
                    Inquiry Message
                  </label>

                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your child's learning goals..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 resize-none focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-stone-500 text-xs">
                    <ShieldCheck
                      size={15}
                      className="text-amber-600"
                    />
                    Secure Admissions Handling
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 disabled:bg-stone-700 text-white font-bold flex items-center justify-center gap-2 transition-all"
                  >
                    {loading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            repeat: Infinity,
                            duration: 1,
                            ease: "linear",
                          }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Submit Inquiry File
                        <Send size={15} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SUCCESS MODAL */}

      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{
                scale: 0.6,
                opacity: 0,
                y: 50,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              exit={{
                scale: 0.8,
                opacity: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 15,
              }}
              className="w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl text-center"
            >
              <motion.div
                initial={{
                  scale: 0,
                  rotate: -180,
                }}
                animate={{
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  delay: 0.2,
                  type: "spring",
                  stiffness: 220,
                }}
                className="flex justify-center"
              >
                <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle
                    size={64}
                    className="text-green-600"
                  />
                </div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="text-3xl font-black mt-6"
              >
                Inquiry Submitted!
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="text-stone-600 mt-4 leading-7"
              >
                Your inquiry has been successfully received.
                <br />
                <br />
                📧 A confirmation has been sent to your
                <strong> email</strong>.
                <br />
                📱 A notification has also been sent to your
                <strong> phone number</strong>.
                <br />
                <br />
                Our Admissions Team will contact you shortly.
              </motion.p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setSuccess(false)}
                className="mt-8 px-8 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold"
              >
                Done
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

