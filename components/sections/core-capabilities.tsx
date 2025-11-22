"use client";

import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Cloud, Brain, Layout, Lightbulb } from "lucide-react";
import { useState, useRef, MouseEvent } from "react";

const capabilities = [
    {
        icon: Cloud,
        title: "Cloud Infrastructure",
        description: "Architected Azure/AWS tenants, identity governance, and automation libraries that remove manual toil.",
        features: ["Multi-tenant governance", "Identity lifecycle & SSO", "Automated provisioning", "Cost optimization"],
        color: "text-primary",
        bg: "bg-primary/10",
        border: "border-primary/20",
        gradient: "from-primary to-cyan-400",
    },
    {
        icon: Brain,
        title: "AI & Predictive Ops",
        description: "Predictive forecasting, AI chatbots, and automation that reduce staffing risk and improve reliability.",
        features: ["Guest chatbots", "Demand planning", "Automated reporting", "Workforce optimization"],
        color: "text-secondary",
        bg: "bg-secondary/10",
        border: "border-secondary/20",
        gradient: "from-secondary to-purple-400",
    },
    {
        icon: Layout,
        title: "Purpose-Built Platforms",
        description: "TablaOps & StealthOps — cloud-native platforms designed for restaurant and hotel operations.",
        features: ["TablaOps (Restaurants)", "StealthOps (Hotels)", "Custom integrations", "Mobile apps"],
        color: "text-accent",
        bg: "bg-accent/10",
        border: "border-accent/20",
        gradient: "from-accent to-teal-400",
    },
    {
        icon: Lightbulb,
        title: "Innovation Hub",
        description: "Where R&D and automation libraries produce practical outcomes: reduced costs and faster launches.",
        features: ["Rapid prototyping", "6-8 week pilots", "Measurable KPIs", "Production rollout"],
        color: "text-teal-400",
        bg: "bg-teal-400/10",
        border: "border-teal-400/20",
        gradient: "from-teal-400 to-green-400",
    },
];

function CapabilityCard({ cap, index }: { cap: typeof capabilities[0]; index: number }) {
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    // Mouse position tracking for 3D tilt effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { stiffness: 300, damping: 30 });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 300, damping: 30 });

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const mouseXRelative = (e.clientX - centerX) / (rect.width / 2);
        const mouseYRelative = (e.clientY - centerY) / (rect.height / 2);

        mouseX.set(mouseXRelative);
        mouseY.set(mouseYRelative);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
        setIsHovered(false);
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="group relative"
        >
            {/* Card container */}
            <div
                className={`relative p-8 rounded-2xl border ${cap.border} bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-500 h-full`}
                style={{
                    transform: "translateZ(0)",
                }}
            >
                {/* Shimmer effect on hover */}
                <motion.div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    style={{
                        background: `linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)`,
                        backgroundSize: "200% 200%",
                    }}
                    animate={isHovered ? {
                        backgroundPosition: ["0% 0%", "200% 200%"],
                    } : {}}
                    transition={{
                        duration: 1.5,
                        repeat: isHovered ? Infinity : 0,
                    }}
                />

                {/* Gradient glow on hover */}
                <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${cap.gradient} opacity-0 group-hover:opacity-5 blur-xl transition-all duration-500`}
                    animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                />

                {/* Border gradient on hover */}
                <motion.div
                    className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    style={{
                        background: `linear-gradient(135deg, transparent, rgba(6, 182, 212, 0.2), transparent)`,
                        padding: "1px",
                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                    }}
                />

                {/* Content */}
                <div className="relative z-10" style={{ transform: "translateZ(50px)" }}>
                    {/* Icon */}
                    <motion.div
                        className={`w-14 h-14 rounded-xl ${cap.bg} flex items-center justify-center mb-6 relative`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <motion.div
                            animate={isHovered ? {
                                rotate: [0, 5, -5, 0],
                            } : {}}
                            transition={{
                                duration: 0.5,
                            }}
                        >
                            <cap.icon className={`w-7 h-7 ${cap.color}`} />
                        </motion.div>

                        {/* Pulsing ring on hover */}
                        {isHovered && (
                            <motion.div
                                className={`absolute inset-0 rounded-xl bg-gradient-to-br ${cap.gradient}`}
                                initial={{ opacity: 0.5, scale: 1 }}
                                animate={{
                                    opacity: 0,
                                    scale: 1.5,
                                }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                }}
                            />
                        )}
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                        className="text-xl font-bold mb-3 text-foreground break-words hyphens-auto group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:to-primary transition-all duration-300"
                    >
                        {cap.title}
                    </motion.h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                        {cap.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-3">
                        {cap.features.map((feature, i) => (
                            <motion.li
                                key={feature}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + i * 0.05 }}
                                className="flex items-center text-xs text-muted-foreground font-medium group/item hover:text-foreground transition-colors"
                            >
                                <motion.span
                                    className={`w-1.5 h-1.5 rounded-full mr-2 ${cap.color.replace('text-', 'bg-')}`}
                                    whileHover={{ scale: 1.5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                />
                                {feature}
                            </motion.li>
                        ))}
                    </ul>
                </div>

                {/* Corner accent */}
                <motion.div
                    className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${cap.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 rounded-tl-full`}
                />
            </div>
        </motion.div>
    );
}

export function CoreCapabilities() {
    return (
        <section className="section-padding bg-background relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 bg-gradient-radial-primary opacity-10" />
            <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" />

            <Container className="relative z-10">
                <SectionHeader
                    title="The Enterprise Backbone"
                    subtitle="Core Capabilities"
                    description="We build the technology that powers modern hospitality operations at scale."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {capabilities.map((cap, index) => (
                        <CapabilityCard key={cap.title} cap={cap} index={index} />
                    ))}
                </div>

                {/* Bottom CTA hint */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <p className="text-sm text-muted-foreground">
                        Interested in bringing these capabilities to your operation?{" "}
                        <a
                            href="/contact"
                            className="text-primary hover:text-primary/80 font-semibold underline underline-offset-4 decoration-primary/30 hover:decoration-primary transition-colors"
                        >
                            Let&apos;s talk
                        </a>
                    </p>
                </motion.div>
            </Container>
        </section>
    );
}
