"use client";

import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Clock, MapPin, CheckCircle2, Send, Loader2 } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 2000);
    };

    return (
        <main className="min-h-screen bg-background pt-24 pb-24 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

            <Container className="relative z-10">
                <SectionHeader
                    title="Let's Explore How G3 Worldwide Can Transform Your Operations"
                    subtitle="Contact Us"
                    description="Schedule a discovery workshop or reach out to learn more about our platforms."
                    className="mb-16"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-card/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                        <AnimatePresence mode="wait">
                            {isSuccess ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="flex flex-col items-center justify-center h-full min-h-[400px] text-center"
                                >
                                    <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mb-6">
                                        <CheckCircle2 size={40} />
                                    </div>
                                    <h3 className="text-3xl font-bold font-display mb-4">Message Sent!</h3>
                                    <p className="text-muted-foreground text-lg max-w-md">
                                        Thank you for reaching out. Our team will review your inquiry and get back to you within 24 hours.
                                    </p>
                                    <Button
                                        variant="outline"
                                        className="mt-8"
                                        onClick={() => setIsSuccess(false)}
                                    >
                                        Send Another Message
                                    </Button>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <h3 className="text-2xl font-bold font-display mb-6">Send Us a Message</h3>
                                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div className="space-y-2 group">
                                                <label className="text-sm font-medium text-muted-foreground group-focus-within:text-primary transition-colors">Full Name</label>
                                                <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 focus:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all" placeholder="John Doe" />
                                            </div>
                                            <div className="space-y-2 group">
                                                <label className="text-sm font-medium text-muted-foreground group-focus-within:text-primary transition-colors">Email Address</label>
                                                <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 focus:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all" placeholder="john@company.com" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div className="space-y-2 group">
                                                <label className="text-sm font-medium text-muted-foreground group-focus-within:text-primary transition-colors">Company Name</label>
                                                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 focus:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all" placeholder="Acme Hospitality" />
                                            </div>
                                            <div className="space-y-2 group">
                                                <label className="text-sm font-medium text-muted-foreground group-focus-within:text-primary transition-colors">Role</label>
                                                <div className="relative">
                                                    <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all appearance-none">
                                                        <option>Owner/CEO</option>
                                                        <option>Operations Director</option>
                                                        <option>IT Director</option>
                                                        <option>Franchisee</option>
                                                        <option>Investor</option>
                                                        <option>Other</option>
                                                    </select>
                                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-muted-foreground">Primary Interest</label>
                                            <div className="grid grid-cols-2 gap-3">
                                                {["TablaOps", "StealthOps", "AI Command Center", "Cloud Infrastructure", "Discovery Workshop", "Other"].map((interest) => (
                                                    <label key={interest} className="flex items-center space-x-3 text-sm text-muted-foreground cursor-pointer group hover:text-foreground transition-colors">
                                                        <div className="relative flex items-center justify-center w-5 h-5">
                                                            <input type="checkbox" className="peer appearance-none w-5 h-5 rounded border border-white/20 bg-white/5 checked:bg-primary checked:border-primary transition-all" />
                                                            <CheckCircle2 className="w-3.5 h-3.5 text-white absolute opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
                                                        </div>
                                                        <span>{interest}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-2 group">
                                            <label className="text-sm font-medium text-muted-foreground group-focus-within:text-primary transition-colors">Message</label>
                                            <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 focus:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all resize-none" placeholder="Tell us about your project..." />
                                        </div>

                                        <Button size="lg" variant="glow" className="w-full group" disabled={isSubmitting}>
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </Button>
                                    </form>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Info & CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col justify-between"
                    >
                        <div>
                            <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 rounded-3xl p-8 mb-8 relative overflow-hidden group">
                                <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors duration-500" />

                                <h3 className="text-2xl font-bold mb-4 text-primary relative z-10">Schedule Your Discovery Workshop</h3>
                                <p className="text-muted-foreground mb-8 relative z-10 text-lg leading-relaxed">
                                    In a 60-90 minute session, we&apos;ll explore your operational challenges, discuss relevant platforms, and identify opportunities for pilot validation. No commitment, no sales pressure.
                                </p>
                                <Button className="w-full bg-primary text-white hover:bg-primary/90 h-12 text-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all relative z-10">
                                    Book Workshop Now
                                </Button>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { icon: MapPin, title: "Headquarters", content: "Orlando, Florida, USA" },
                                    { icon: Mail, title: "Email", content: "info@g3worldwide.com" },
                                    { icon: Phone, title: "Phone", content: "(321) 966-8066" },
                                    { icon: Clock, title: "Business Hours", content: "Mon-Fri, 9:00 AM - 6:00 PM EST" },
                                ].map((item, index) => (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 + (index * 0.1) }}
                                        className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-white/5 transition-colors group"
                                    >
                                        <div className="p-3 rounded-xl bg-white/5 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            <item.icon size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-foreground text-lg">{item.title}</h4>
                                            <p className="text-muted-foreground">{item.content}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/10">
                            <div className="flex flex-col space-y-3">
                                {[
                                    "We respond to all inquiries within 24 hours",
                                    "Discovery workshops scheduled within one week",
                                    "No sales pressure—just honest conversation"
                                ].map((text, i) => (
                                    <div key={i} className="flex items-center text-sm text-muted-foreground">
                                        <CheckCircle2 className="h-4 w-4 text-primary mr-3" />
                                        {text}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </main>
    );
}

