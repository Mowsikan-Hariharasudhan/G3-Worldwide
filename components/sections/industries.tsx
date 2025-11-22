"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { Building2, ShoppingBag, Stethoscope, Megaphone, Briefcase, Plane } from "lucide-react";

const industries = [
    { name: "Finance & Fintech", icon: Briefcase },
    { name: "Healthcare", icon: Stethoscope },
    { name: "Retail & E-commerce", icon: ShoppingBag },
    { name: "Travel & Hospitality", icon: Plane },
    { name: "Digital Marketing", icon: Megaphone },
    { name: "Real Estate", icon: Building2 },
];

export function Industries() {
    return (
        <section id="industries" className="py-24 bg-muted relative">
            <Container>
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-primary font-medium tracking-wide uppercase mb-4">Industries</h2>
                        <h3 className="text-3xl md:text-5xl font-bold font-display">
                            Transforming Sectors <br />
                            <span className="text-foreground">Across the Globe</span>
                        </h3>
                    </div>
                    <p className="text-muted-foreground max-w-md text-lg">
                        Our technology solutions are tailored to meet the unique challenges of diverse industries, driving growth and efficiency everywhere.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={industry.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-background border border-border hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer group aspect-square text-center"
                        >
                            <div className="mb-4 p-3 rounded-full bg-muted group-hover:bg-primary/10 transition-colors">
                                <industry.icon className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                            <span className="font-medium text-sm md:text-base text-foreground group-hover:text-primary transition-colors">
                                {industry.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
