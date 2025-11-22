"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: isLoading ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-background"
        >
            <div className="flex flex-col items-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-4"
                >
                    <Image
                        src="/logo.svg"
                        alt="G3 Worldwide"
                        width={80}
                        height={80}
                        className="object-contain"
                        priority
                    />
                </motion.div>
                <div className="w-48 h-1 bg-muted rounded-full overflow-hidden">
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: "0%" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="h-full bg-primary w-full"
                    />
                </div>
            </div>
        </motion.div>
    );
}
