"use client";

import { Container } from "@/components/ui/container";
import { motion, useInView, useSpring, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const metrics = [
    { label: "Tabla Locations", value: 10, suffix: "+" },
    { label: "Hotel Properties", value: 15, suffix: "+" },
    { label: "Daily AI Reservations", value: 500, suffix: "+" },
    { label: "Labor Cost Reduction", value: 18, suffix: "%" },
];

function Counter({ value, suffix }: { value: number, suffix: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
    const rounded = useTransform(springValue, (latest) => Math.round(latest));

    useEffect(() => {
        if (inView) {
            motionValue.set(value);
        }
    }, [inView, value, motionValue]);

    useEffect(() => {
        return rounded.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = latest.toString();
            }
        });
    }, [rounded]);

    return (
        <span className="flex items-center justify-center">
            <span ref={ref}>0</span>
            <span className="text-primary ml-1">{suffix}</span>
        </span>
    );
}

export function ProofMetrics() {
    return (
        <section className="py-20 border-y border-border bg-background relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-[100px]" />

            <Container className="relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={metric.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                            <div className="relative z-10 text-center">
                                <div className="text-4xl md:text-5xl font-bold font-display text-foreground mb-2 group-hover:scale-110 transition-transform duration-300">
                                    <Counter value={metric.value} suffix={metric.suffix} />
                                </div>
                                <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide group-hover:text-primary transition-colors">
                                    {metric.label}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

