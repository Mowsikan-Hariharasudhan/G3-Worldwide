"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    description?: string;
    align?: "left" | "center";
    className?: string;
    light?: boolean;
}

export function SectionHeader({
    title,
    subtitle,
    description,
    align = "center",
    className,
    light = false,
}: SectionHeaderProps) {
    return (
        <div
            className={cn(
                "mb-12 md:mb-20",
                align === "center" ? "text-center mx-auto max-w-3xl" : "text-left max-w-2xl",
                className
            )}
        >
            {subtitle && (
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block"
                >
                    {subtitle}
                </motion.span>
            )}
            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={cn(
                    "text-3xl md:text-5xl font-bold font-display mb-6",
                    light ? "text-white" : "text-foreground"
                )}
            >
                {title}
            </motion.h2>
            {description && (
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-xl text-muted-foreground leading-relaxed"
                >
                    {description}
                </motion.p>
            )}
        </div>
    );
}
