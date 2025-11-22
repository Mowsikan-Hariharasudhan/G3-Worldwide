"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "What We Do", href: "/services" },
    { name: "Innovation Hub", href: "/innovation" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [hoveredPath, setHoveredPath] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-background/60 backdrop-blur-xl border-b border-white/5 shadow-lg" : "bg-transparent"
                }`}
        >
            <Container>
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
                            <Image
                                src="/logo.svg"
                                alt="G3 Worldwide"
                                width={40}
                                height={40}
                                className="object-contain"
                                priority
                            />
                        </div>
                        <span className="text-xl font-bold font-display text-foreground hidden sm:block">
                            G3 Worldwide
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                                onMouseEnter={() => setHoveredPath(link.href)}
                                onMouseLeave={() => setHoveredPath(null)}
                            >
                                <span className="relative z-10">{link.name}</span>
                                {hoveredPath === link.href && (
                                    <motion.div
                                        layoutId="navbar-hover"
                                        className="absolute inset-0 bg-white/5 rounded-full"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </Link>
                        ))}
                        <div className="pl-4">
                            <Button variant="glow" size="sm" asChild className="relative overflow-hidden group">
                                <Link href="/contact">
                                    <span className="relative z-10">Discovery Workshop</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-foreground relative z-50"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <AnimatePresence mode="wait">
                            {isOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X size={24} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu size={24} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </Container>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute top-0 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 md:hidden overflow-hidden flex flex-col justify-center"
                    >
                        <Container className="py-8 flex flex-col space-y-6 items-center text-center">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-3xl font-bold font-display text-foreground hover:text-primary transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="pt-8"
                            >
                                <Button variant="glow" className="w-full text-lg py-6 px-12" asChild>
                                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                                        Discovery Workshop
                                    </Link>
                                </Button>
                            </motion.div>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
