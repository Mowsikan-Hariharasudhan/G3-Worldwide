"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-medium tracking-wide uppercase mb-4">Get in Touch</h2>
            <h3 className="text-3xl md:text-5xl font-bold font-display mb-6">
              Let&apos;s Build the <br />
              <span className="text-foreground">Future Together</span>
            </h3>
            <p className="text-muted-foreground text-lg mb-12">
              Ready to modernize your operations? Our team of experts is ready to discuss your unique needs and how our technology solutions can help you scale.
            </p>

            <div className="space-y-8">
              {[
                { icon: Mail, title: "Email Us", value: "hello@g3worldwide.com" },
                { icon: Phone, title: "Call Us", value: "+1 (555) 123-4567" },
                { icon: MapPin, title: "Headquarters", value: "123 Tech Plaza, Innovation City, CA" },
              ].map((item) => (
                <div key={item.title} className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-muted text-primary">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-lg"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">First Name</label>
                  <input
                    type="text"
                    className="w-full bg-background border border-input rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Last Name</label>
                  <input
                    type="text"
                    className="w-full bg-background border border-input rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Email Address</label>
                <input
                  type="email"
                  className="w-full bg-background border border-input rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-background border border-input rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button size="lg" variant="glow" className="w-full">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
