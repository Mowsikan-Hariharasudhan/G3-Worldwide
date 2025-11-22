"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

function FloatingParticles() {
    const [particles, setParticles] = useState<{ left: string; top: string; duration: number; delay: number }[]>([]);

    useEffect(() => {
        const newParticles = Array.from({ length: 20 }).map(() => ({
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            duration: 3 + Math.random() * 4,
            delay: Math.random() * 2,
        }));
        setParticles(newParticles);
    }, []);

    return (
        <>
            {particles.map((p, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-primary/30 rounded-full"
                    style={{ left: p.left, top: p.top }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.2, 0.8, 0.2],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                    }}
                />
            ))}
        </>
    );
}

export function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
    const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

    // Staggered animation variants for words
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1,
            },
        },
    };

    const wordVariants = {
        hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100,
            },
        },
    };

    const headlineWords = "Technology That Powers".split(" ");
    const gradientWords = "Hospitality at Scale".split(" ");

    return (
        <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Enhanced Background Effects */}
            <motion.div style={{ opacity }} className="absolute inset-0 z-0 bg-background">
                <BackgroundBeams className="opacity-30" />

                {/* Animated gradient orbs */}
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[128px]"
                />
                <motion.div
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[128px]"
                />
                <motion.div
                    animate={{
                        x: [0, -50, 0],
                        y: [0, 100, 0],
                    }}
                    transition={{
                        duration: 22,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[128px]"
                />

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

                {/* Floating particles */}
                <FloatingParticles />
            </motion.div>

            <Container className="relative z-10">
                <motion.div
                    style={{ opacity, scale, y }}
                    className="flex flex-col items-center text-center max-w-5xl mx-auto"
                >
                    {/* Badge with sparkle animation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className="group inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm text-primary font-medium backdrop-blur-xl mb-8 hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 cursor-default"
                    >
                        <motion.span
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 180, 360],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <Sparkles className="w-4 h-4 mr-2" />
                        </motion.span>
                        <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
                        Enterprise Technology for Hospitality
                    </motion.div>

                    {/* Animated headline with staggered words */}
                    <div className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight mb-8 leading-tight">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-2"
                        >
                            {headlineWords.map((word, index) => (
                                <motion.span key={index} variants={wordVariants}>
                                    {word}
                                </motion.span>
                            ))}
                        </motion.div>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-wrap justify-center gap-x-4 gap-y-2"
                        >
                            {gradientWords.map((word, index) => (
                                <motion.span
                                    key={index}
                                    variants={wordVariants}
                                    className="gradient-text animate-gradient-shift"
                                    whileHover={{
                                        scale: 1.05,
                                        transition: { type: "spring", stiffness: 300 },
                                    }}
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>

                    {/* Enhanced description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-lg md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed text-pretty"
                    >
                        From cloud infrastructure to AI-driven automation, G3 Worldwide engineers systems that enable{" "}
                        <motion.span
                            className="text-foreground font-semibold bg-gradient-to-r from-orange-400 to-red-400 text-transparent bg-clip-text"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Tabla Indian Restaurant
                        </motion.span>{" "}
                        and{" "}
                        <motion.span
                            className="text-foreground font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Stealth Management Group
                        </motion.span>{" "}
                        to scale operations exponentially.
                    </motion.p>

                    {/* Enhanced CTAs with hover effects */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button size="lg" variant="default" className="group relative overflow-hidden" asChild>
                                <Link href="/innovation">
                                    <span className="relative z-10 flex items-center">
                                        Explore Our Platforms
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </span>
                                </Link>
                            </Button>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button size="lg" variant="outline" className="group" asChild>
                                <Link href="/contact">
                                    Schedule Discovery Call
                                </Link>
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Trust indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="flex flex-wrap items-center justify-center gap-6 mt-16 text-sm text-muted-foreground"
                    >
                        {[
                            "Azure & AWS Certified",
                            "Production-Ready Platforms",
                            "6-8 Week Pilots",
                        ].map((item, index) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.3 + index * 0.1 }}
                                className="flex items-center"
                            >
                                <CheckCircle2 className="w-4 h-4 text-primary mr-2" />
                                {item}
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </Container>
        </section>
    );
}
