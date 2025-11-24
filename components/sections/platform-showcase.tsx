"use client";

import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ArrowRight, CheckCircle2, Layers, BarChart3 } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const platforms = [
    {
        id: "tablaops",
        title: "Tabla Indian Restaurant",
        subtitle: "Restaurant Operations Intelligence",
        description: "Unified platform for multi-location restaurant operations. From kitchen workflows to catering orchestration, TablaOps handles the complexity of running multiple formats.",
        features: ["Kitchen Intelligence", "Catering Orchestration", "Menu & Inventory", "Labor Planning"],
        gradient: "from-orange-500/20 to-red-500/20",
        border: "border-orange-500/20",
        accent: "text-orange-500",
        bgAccent: "bg-orange-500",
        image: "/tablaops-dashboard.jpg",
        icon: Layers,
        link: "https://www.tablacuisine.com/",
    },
    {
        id: "stealthops",
        title: "Stealth Management Group",
        subtitle: "Hotel Property Management",
        description: "Modern PMS built for multi-property hotel governance. StealthOps handles reservations, housekeeping, revenue management, and guest experience.",
        features: ["Housekeeping Management", "Reservations & Front Desk", "Revenue Analytics", "Multi-Property Dashboard"],
        gradient: "from-blue-500/20 to-cyan-500/20",
        border: "border-blue-500/20",
        accent: "text-blue-500",
        bgAccent: "bg-blue-500",
        image: "/stealthops-dashboard.jpg",
        icon: BarChart3,
        link: "https://www.stealthmanage.com/",
    },

];

function PlatformCard({
    platform,
    index,
    progress,
    range,
    targetScale,
    targetOpacity
}: {
    platform: typeof platforms[0],
    index: number,
    progress: MotionValue<number>,
    range: number[],
    targetScale: number,
    targetOpacity: number
}) {
    const containerRef = useRef<HTMLDivElement>(null);

    const scale = useTransform(progress, range, [1, targetScale]);
    const opacity = useTransform(progress, range, [1, targetOpacity]);

    return (
        <div ref={containerRef} className="h-screen flex items-center justify-center sticky top-0">
            <motion.div
                style={{
                    scale,
                    opacity,
                }}
                className={`relative w-full max-w-6xl mx-auto p-8 md:p-12 rounded-3xl border border-white/10 bg-background shadow-2xl overflow-hidden`}
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
                    {/* Content Side */}
                    <div className="relative z-10 order-2 lg:order-1">
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border ${platform.border} mb-6 backdrop-blur-sm`}>
                            <platform.icon className={`w-4 h-4 ${platform.accent}`} />
                            <span className={`text-xs font-bold uppercase tracking-wider ${platform.accent}`}>
                                {platform.subtitle}
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold font-display mb-6 leading-tight">
                            {platform.title}
                        </h2>

                        <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
                            {platform.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                            {platform.features.map((feature, i) => (
                                <motion.div
                                    key={feature}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * i }}
                                    className="flex items-center gap-3"
                                >
                                    <div className={`w-6 h-6 rounded-full ${platform.bgAccent}/10 flex items-center justify-center`}>
                                        <CheckCircle2 className={`h-3.5 w-3.5 ${platform.accent}`} />
                                    </div>
                                    <span className="text-foreground/90 font-medium text-sm">{feature}</span>
                                </motion.div>
                            ))}
                        </div>

                        <Button size="lg" variant="outline" className={`group border-primary/20 hover:bg-primary/5`} asChild>
                            <a href={platform.link} target="_blank" rel="noopener noreferrer">
                                Explore {platform.title}
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </Button>
                    </div>

                    {/* Visual Side */}
                    <div className="relative order-1 lg:order-2">
                        <div className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} blur-[100px] opacity-30`} />

                        <div className={`relative aspect-[16/10] rounded-2xl border ${platform.border} bg-card/30 backdrop-blur-md overflow-hidden shadow-2xl group`}>
                            {/* Glass reflection */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 z-10 pointer-events-none" />

                            <div className="relative w-full h-full">
                                <Image
                                    src={platform.image}
                                    alt={`${platform.title} Dashboard`}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                            </div>

                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent z-10" />
                        </div>

                        {/* Floating elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${platform.gradient} rounded-full blur-3xl opacity-20`}
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export function PlatformShowcase() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} className="relative bg-background">
            {/* Fixed background layer without taking vertical space */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
            </div>

            <Container className="relative z-10 pb-24">
                <div className="pt-24 pb-12 text-center max-w-3xl mx-auto">
                    <SectionHeader
                        title="Production Systems"
                        subtitle="Proven at Scale"
                        description="These aren't concepts. These platforms run Tabla Indian Restaurant and Stealth Management Group every single day."
                    />
                </div>

                <div className="relative">
                    {platforms.map((platform, index) => {
                        const targetScale = 1 - ((platforms.length - 1 - index) * 0.05);
                        const targetOpacity = index === platforms.length - 1 ? 1 : 0;

                        return (
                            <PlatformCard
                                key={platform.id}
                                platform={platform}
                                index={index}
                                progress={scrollYProgress}
                                range={[index * 0.25, 1]}
                                targetScale={targetScale}
                                targetOpacity={targetOpacity}
                            />
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
