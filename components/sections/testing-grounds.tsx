"use client";

import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { motion, useScroll, useTransform } from "framer-motion";
import { Utensils, Building2, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

export function TestingGrounds() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [150, -150]);

    return (
        <section ref={containerRef} className="py-32 bg-card/20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            <motion.div
                style={{ y: y1 }}
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px]"
            />
            <motion.div
                style={{ y: y2 }}
                className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]"
            />

            <Container className="relative z-10">
                <SectionHeader
                    title="Validated in High-Stakes Operations"
                    subtitle="Our Testing Grounds"
                    description="We don't just build software. We run it in our own businesses before we ever show it to you."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Tabla Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-10 hover:border-orange-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110 group-hover:rotate-12">
                            <Utensils size={180} />
                        </div>

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-8">
                                <div className="w-16 h-16 rounded-2xl bg-orange-500/20 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform duration-500">
                                    <Utensils size={32} />
                                </div>
                                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                                    <ArrowUpRight className="w-5 h-5 text-orange-500" />
                                </div>
                            </div>

                            <h3 className="text-3xl font-bold font-display mb-3 group-hover:text-orange-500 transition-colors">Tabla Indian Restaurant</h3>
                            <p className="text-sm text-orange-400 font-medium mb-6 uppercase tracking-wider">Multi-Location • Catering • Franchise</p>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                Tabla&apos;s multi-format operations, catering scale, and franchise roadmap make it an ideal pilot. Solving Tabla&apos;s operational complexity establishes repeatable systems for any restaurant brand.
                            </p>
                        </div>
                    </motion.div>

                    {/* Stealth Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-10 hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110 group-hover:-rotate-12">
                            <Building2 size={180} />
                        </div>

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-8">
                                <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform duration-500">
                                    <Building2 size={32} />
                                </div>
                                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                                    <ArrowUpRight className="w-5 h-5 text-blue-500" />
                                </div>
                            </div>

                            <h3 className="text-3xl font-bold font-display mb-3 group-hover:text-blue-500 transition-colors">Stealth Management Group</h3>
                            <p className="text-sm text-blue-400 font-medium mb-6 uppercase tracking-wider">Hotel Portfolio • Property Management</p>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                Stealth&apos;s hotel portfolio provides a complex, multi-property environment to validate enterprise governance, identity, and centralized BI at scale.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
