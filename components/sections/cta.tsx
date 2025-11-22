"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { useRef, MouseEvent } from "react";

export function CTA() {
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
    const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        mouseX.set((e.clientX - centerX) / 20);
        mouseY.set((e.clientY - centerY) / 20);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <section className="section-padding relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                {/* Base gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />

                {/* Animated orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-50"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -90, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] opacity-50"
                />

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            </div>

            <Container className="relative z-10">
                <motion.div
                    ref={containerRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="max-w-5xl mx-auto"
                >
                    <motion.div
                        style={{
                            x: springX,
                            y: springY,
                        }}
                        className="relative glass-heavy rounded-3xl p-12 md:p-20 border border-primary/20 overflow-hidden group"
                    >
                        {/* Shimmer effect */}
                        <motion.div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                            style={{
                                background: "linear-gradient(135deg, transparent 40%, rgba(6, 182, 212, 0.1) 50%, transparent 60%)",
                                backgroundSize: "200% 200%",
                            }}
                            animate={{
                                backgroundPosition: ["0% 0%", "200% 200%"],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                            }}
                        />

                        {/* Corner accents */}
                        <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
                        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-secondary/20 to-transparent rounded-full blur-3xl" />

                        {/* Content */}
                        <div className="relative z-10 text-center">
                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 backdrop-blur-sm mb-8"
                            >
                                <motion.div
                                    animate={{
                                        rotate: [0, 360],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                >
                                    <Sparkles className="w-4 h-4 text-primary" />
                                </motion.div>
                                <span className="text-sm font-medium text-primary">Limited Availability</span>
                            </motion.div>

                            {/* Headline */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-lg md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed text-pretty"
                            >
                                Join Tabla Indian Restaurant and Stealth Management Group in revolutionizing operations.
                                Let&apos;s discuss how our enterprise platforms can scale your business.
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="flex flex-col sm:flex-row justify-center gap-4"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button size="lg" variant="glow" className="text-lg px-8 h-14 group relative" asChild>
                                        <a href="/contact">
                                            <span className="relative z-10 flex items-center">
                                                Schedule Discovery Workshop
                                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                            </span>
                                            <motion.div
                                                className="absolute inset-0 bg-white/20 rounded-md"
                                                initial={{ scale: 0, opacity: 0 }}
                                                whileHover={{ scale: 1, opacity: 1 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </a>
                                    </Button>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="text-lg px-8 h-14 border-primary/30 hover:bg-primary/10 hover:border-primary/50 group relative overflow-hidden"
                                        asChild
                                    >
                                        <a href="/innovation">
                                            <span className="relative z-10 flex items-center">
                                                <Zap className="mr-2 h-5 w-5" />
                                                View Live Platforms
                                            </span>
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0"
                                                initial={{ x: "-100%" }}
                                                whileHover={{ x: "100%" }}
                                                transition={{ duration: 0.6 }}
                                            />
                                        </a>
                                    </Button>
                                </motion.div>
                            </motion.div>

                            {/* Trust indicators */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground"
                            >
                                {[
                                    "No long-term contracts",
                                    "6-8 week pilot programs",
                                    "Measurable ROI",
                                ].map((item, index) => (
                                    <motion.div
                                        key={item}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 + index * 0.1 }}
                                        className="flex items-center"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                                        {item}
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </Container>
        </section>
    );
}

