"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface InfiniteMarqueeProps {
    children: React.ReactNode;
    direction?: "left" | "right";
    speed?: number;
    className?: string;
    pauseOnHover?: boolean;
}

export function InfiniteMarquee({
    children,
    direction = "left",
    speed = 20,
    className,
    pauseOnHover = true,
}: InfiniteMarqueeProps) {
    return (
        <div className={cn("overflow-hidden flex whitespace-nowrap mask-image-gradient", className)}>
            <motion.div
                className="flex gap-10 pr-10 items-center"
                initial={{ x: 0 }}
                animate={{ x: direction === "left" ? "-50%" : "0%" }}
                transition={{
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity,
                }}
                style={{ width: "max-content" }}
            >
                {children}
                {children}
                {children}
                {children}
            </motion.div>
        </div>
    );
}
