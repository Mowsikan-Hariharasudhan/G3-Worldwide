"use client";

import { Container } from "@/components/ui/container";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Footer() {
    const footerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: footerRef,
        offset: ["start end", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 0.1]);

    return (
        <footer ref={footerRef} className="bg-black border-t border-white/10 py-20 relative overflow-hidden">
            {/* Parallax Watermark */}
            <motion.div
                style={{ y, opacity }}
                className="absolute top-0 left-1/2 -translate-x-1/2 text-[18rem] font-bold font-display text-white pointer-events-none whitespace-nowrap select-none z-0"
            >
                G3 WORLDWIDE
            </motion.div>

            <Container className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="col-span-1 lg:col-span-1"
                    >
                        <Link href="/" className="flex items-center gap-3 mb-6 group">
                            <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110">
                                <Image
                                    src="/logo.svg"
                                    alt="G3 Worldwide"
                                    width={48}
                                    height={48}
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-2xl font-bold font-display text-white">
                                G3 WORLDWIDE
                            </span>
                        </Link>
                        <p className="text-white/70 text-base mb-8 leading-relaxed">
                            G3 Worldwide centralizes cloud, automation, AI, and creative engineering to power hospitality operations.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-all border border-white/5 hover:border-primary/50"
                                >
                                    <Icon size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {[
                        {
                            title: "Company",
                            links: [
                                { name: "What We Do", href: "/services" },
                                { name: "Innovation Hub", href: "/innovation" },
                                { name: "About Us", href: "/about" },
                                { name: "Contact", href: "/contact" },
                            ]
                        },
                        {
                            title: "Platforms",
                            links: [
                                { name: "TablaOps", href: "/innovation#tablaops" },
                                { name: "StealthOps", href: "/innovation#stealthops" },
                                { name: "AI Command Center", href: "/innovation#ai-command" },
                            ]
                        },
                        {
                            title: "Contact",
                            content: [
                                "Orlando, Florida",
                                "info@g3worldwide.com",
                                "(321) 966-8066"
                            ]
                        }
                    ].map((column, index) => (
                        <motion.div
                            key={column.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                        >
                            <h4 className="text-lg font-bold font-display mb-6 text-white">{column.title}</h4>
                            <ul className="space-y-4 text-sm text-white/70">
                                {column.links ? column.links.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="hover:text-primary transition-colors flex items-center group">
                                            <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all duration-300" />
                                            {link.name}
                                        </Link>
                                    </li>
                                )) : column.content?.map((item, i) => (
                                    <li key={i} className="flex items-center">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70"
                >
                    <p>&copy; {new Date().getFullYear()} G3 Worldwide. All rights reserved.</p>
                    <div className="flex space-x-8">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </motion.div>
            </Container>
        </footer>
    );
}
