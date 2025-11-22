"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for the follower
    const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        window.addEventListener("mousemove", updateMousePosition);

        // Add hover listeners to interactive elements
        const interactiveElements = document.querySelectorAll("a, button, input, textarea, .cursor-hover");
        interactiveElements.forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });

        // Mutation observer to handle dynamically added elements
        const observer = new MutationObserver(() => {
            const newElements = document.querySelectorAll("a, button, input, textarea, .cursor-hover");
            newElements.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
                el.addEventListener("mouseenter", handleMouseEnter);
                el.addEventListener("mouseleave", handleMouseLeave);
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            observer.disconnect();
            interactiveElements.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-5 h-5 border border-primary/30 rounded-full pointer-events-none z-[9998] mix-blend-screen hidden md:block"
            style={{
                x: cursorX,
                y: cursorY,
                translateX: "-50%",
                translateY: "-50%",
            }}
            animate={{
                scale: isHovering ? 1.5 : 1,
                backgroundColor: isHovering ? "rgba(6, 182, 212, 0.05)" : "transparent",
                borderColor: isHovering ? "rgba(6, 182, 212, 0.6)" : "rgba(6, 182, 212, 0.3)",
            }}
        />
    );
}
