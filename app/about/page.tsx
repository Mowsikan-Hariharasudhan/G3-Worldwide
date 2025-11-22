"use client";

import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cloud, Shield, Database, Zap } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

export default function AboutPage() {
    const timelineRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start end", "end center"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <main className="min-h-screen bg-background pt-24 pb-24 overflow-hidden">
            {/* Background Elements */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            </div>

            <Container className="relative z-10">
                <SectionHeader
                    title="Hospitality Operators Building Technology"
                    subtitle="About Us"
                    description="We understand your challenges because we live them every day in our own restaurants and hotels."
                    className="mb-24"
                />

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-heavy p-10 rounded-3xl border border-white/10 relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <h3 className="text-3xl font-bold font-display mb-6 text-primary relative z-10">Our Mission</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed relative z-10">
                            G3 Worldwide centralizes cloud, automation, AI, and creative engineering to power Tabla Indian Restaurant and Stealth Management Group. We design platforms and processes that remove operational friction, secure enterprise systems, and unlock scalable growth across restaurants, hotels, and events.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass-heavy p-10 rounded-3xl border border-white/10 relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <h3 className="text-3xl font-bold font-display mb-6 text-secondary relative z-10">Our Vision</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed relative z-10">
                            To become the leading global technology backbone for hospitality — creating platforms that simplify operations, empower teams, and deliver consistent guest experiences across brands.
                        </p>
                    </motion.div>
                </div>

                {/* Timeline */}
                <div ref={timelineRef} className="mb-32 relative">
                    <SectionHeader title="From Operations to Innovation" subtitle="Our Story" className="mb-16" />

                    <div className="relative ml-4 md:ml-12 space-y-16">
                        {/* Animated Line */}
                        <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-white/10">
                            <motion.div
                                style={{ height: lineHeight }}
                                className="w-full bg-gradient-to-b from-primary via-secondary to-primary"
                            />
                        </div>

                        {[
                            { year: "2005", title: "Stealth Management Group Founded", desc: "Anshu Jain begins building expertise in hotel operations and property management." },
                            { year: "2008", title: "Tabla Indian Restaurant Launched", desc: "Growing into a multi-location concept with complex catering operations." },
                            { year: "2020", title: "G3 Worldwide Formed", desc: "Recognizing the tech gap, G3 is created as a dedicated technology organization." },
                            { year: "2021", title: "Platform Development", desc: "Architected cloud infrastructure and built TablaOps and StealthOps." },
                            { year: "2025", title: "Commercialization", desc: "Offering proven platforms to hospitality partners through pilot programs." },
                        ].map((item, index) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative pl-12 md:pl-16 group"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    className="absolute left-[-6px] top-2 w-3.5 h-3.5 rounded-full bg-background border-2 border-primary z-10 group-hover:scale-150 transition-transform duration-300"
                                >
                                    <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20" />
                                </motion.div>

                                <span className="text-primary font-bold text-xl mb-2 block font-display">{item.year}</span>
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                                <p className="text-muted-foreground max-w-xl text-lg leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Leadership */}
                <div className="mb-32">
                    <SectionHeader title="Led by Hospitality Veterans" subtitle="Leadership" className="mb-16" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {[
                            {
                                name: "Anshu Jain",
                                role: "CEO & Founder",
                                bio: "Strategy, partnerships, and product vision. Hospitality leader with 20+ years of multi-unit operations and franchise scaling expertise. Built Stealth Management Group and Tabla Indian Restaurant before founding G3 Worldwide.",
                                color: "from-primary/20 to-cyan-500/20",
                                image: "/e1552eaa-b7d1-56e6-a296-59dbf0e1db7d-removebg-preview.png"
                            },
                            {
                                name: "Nora Jain",
                                role: "President",
                                bio: "Engineering-informed operations leader with Master's in Structural Engineering. Built training programs, QA systems, and franchise onboarding frameworks. Oversees operational implementation of technology.",
                                color: "from-secondary/20 to-purple-500/20",
                                image: "/nora-jain-61777b38-removebg-preview.png"
                            },
                        ].map((leader, index) => (
                            <motion.div
                                key={leader.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                whileHover={{ y: -10 }}
                                className="glass-heavy border border-white/10 rounded-3xl p-10 text-center group relative overflow-hidden"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${leader.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                <div className="relative z-10">
                                    <div className="w-40 h-40 mx-auto rounded-full bg-white/5 mb-8 overflow-hidden relative border-4 border-white/5 group-hover:border-primary/50 transition-colors duration-500">
                                        <Image
                                            src={leader.image}
                                            alt={leader.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <h3 className="text-3xl font-bold font-display mb-2">{leader.name}</h3>
                                    <p className="text-primary font-medium mb-6 text-lg">{leader.role}</p>
                                    <p className="text-muted-foreground leading-relaxed">{leader.bio}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Principles */}
                <div>
                    <SectionHeader title="How We Build Technology" subtitle="Core Principles" className="mb-16" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Cloud, title: "Cloud-First", desc: "Every system built for scale, security, and multi-tenant isolation." },
                            { icon: Zap, title: "Automation", desc: "Eliminate manual toil through infrastructure-as-code and workflows." },
                            { icon: Database, title: "Data-Driven", desc: "Real-time insights and predictive analytics enable proactive decisions." },
                            { icon: Shield, title: "Secure", desc: "Zero Trust architecture and enterprise-grade protection built in." },
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="p-8 rounded-3xl bg-card/30 border border-white/5 text-center hover:bg-card/50 hover:border-primary/30 transition-all duration-300 group"
                            >
                                <div className="w-16 h-16 mx-auto rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="font-bold mb-3 text-lg md:text-xl group-hover:text-primary transition-colors break-words px-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </Container>
        </main>
    );
}
