"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-primary font-medium tracking-wide uppercase mb-4">Our Evolution</h2>
                        <h3 className="text-3xl md:text-4xl font-bold font-display mb-6">
                            Bridging the Gap Between <br />
                            <span className="text-foreground">People & Technology</span>
                        </h3>

                        <div className="space-y-6 text-muted-foreground text-lg">
                            <p>
                                For years, G3 Worldwide has been a trusted name in global staffing, connecting businesses with exceptional talent across hospitality, finance, and administration.
                            </p>
                            <p>
                                Today, we are taking a bold step forward. We aren&apos;t just providing people anymore; we are empowering them with <strong>next-generation technology</strong>.
                            </p>
                            <p>
                                Our new mission is to fuse human expertise with the power of Cloud Computing, Artificial Intelligence, and Automation to create scalable, secure, and intelligent business solutions.
                            </p>
                        </div>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "Legacy of Trust",
                                "Future-Ready Tech",
                                "Global Talent Pool",
                                "Intelligent Automation",
                            ].map((item) => (
                                <div key={item} className="flex items-center space-x-3">
                                    <CheckCircle2 className="text-accent h-5 w-5" />
                                    <span className="text-foreground font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-black/5 bg-black/5 backdrop-blur-sm">
                            {/* Abstract Representation of Transformation */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20" />

                            {/* We would ideally use a real image here, but for now we create a composition */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-3/4 h-3/4 border border-black/10 rounded-xl relative">
                                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/30 rounded-full blur-2xl" />
                                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/30 rounded-full blur-2xl" />

                                    <div className="h-full w-full flex flex-col justify-between p-6">
                                        <div className="h-2 w-1/3 bg-black/10 rounded-full" />
                                        <div className="space-y-3">
                                            <div className="h-2 w-full bg-black/10 rounded-full" />
                                            <div className="h-2 w-5/6 bg-black/10 rounded-full" />
                                            <div className="h-2 w-4/6 bg-black/10 rounded-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -left-6 bg-card border border-border p-4 rounded-xl shadow-2xl max-w-xs">
                            <p className="text-sm font-medium text-muted-foreground">Transforming since</p>
                            <p className="text-2xl font-bold text-foreground">2024</p>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
