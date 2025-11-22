"use client";

import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { motion } from "framer-motion";
import { Building2, Award, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

const partners = [
    {
        name: "Tabla Indian Restaurant",
        logo: "🍛",
        description: "Enterprise restaurant operations platform",
        metric: "50+ locations",
        metricDetail: "Operating across North America with TablaOps platform",
        link: "/innovation#tablaops",
        color: "from-primary to-cyan-400",
    },
    {
        name: "Stealth Management Group",
        logo: "🏨",
        description: "Boutique hotel technology infrastructure",
        metric: "15+ properties",
        metricDetail: "Multi-property portfolio managed via StealthOps PMS",
        link: "/innovation#stealthops",
        color: "from-secondary to-purple-400",
    },
    {
        name: "Microsoft Azure",
        logo: "☁️",
        description: "Cloud infrastructure partner",
        metric: "Enterprise tier",
        metricDetail: "Azure-certified partner with enterprise support",
        link: "/services",
        color: "from-accent to-teal-400",
    },
    {
        name: "AWS",
        logo: "🚀",
        description: "Multi-cloud deployment platform",
        metric: "Global scale",
        metricDetail: "Multi-region deployment across AWS infrastructure",
        link: "/services",
        color: "from-orange-500 to-yellow-400",
    },
];

const stats = [
    {
        icon: Building2,
        value: "65+",
        label: "Active Locations",
        color: "text-primary",
    },
    {
        icon: Users,
        value: "2,000+",
        label: "Staff Enabled",
        color: "text-secondary",
    },
    {
        icon: TrendingUp,
        value: "40%",
        label: "Efficiency Gain",
        color: "text-accent",
    },
    {
        icon: Award,
        value: "99.9%",
        label: "Uptime SLA",
        color: "text-yellow-400",
    },
];

export function Partners() {
    return (
        <section className="section-padding relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-radial-secondary opacity-30" />
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />

            <Container className="relative z-10">
                <SectionHeader
                    title="Trusted by Industry Leaders"
                    subtitle="Our Partners"
                    description="We work with forward-thinking hospitality brands to deliver technology that scales."
                />

                {/* Partners Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={partner.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="card-premium group relative p-8 text-center flex flex-col h-full"
                        >
                            {/* Gradient glow overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />

                            <div className="relative z-10 flex flex-col h-full">
                                {/* Logo */}
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="text-6xl mb-6 inline-block"
                                >
                                    {partner.logo}
                                </motion.div>

                                {/* Partner Name */}
                                <h3 className="text-xl font-bold mb-2 text-foreground min-h-[3.5rem] flex items-center justify-center px-2 leading-tight transition-all duration-300 group-hover:text-primary">
                                    {partner.name}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-grow">
                                    {partner.description}
                                </p>

                                {/* Interactive Metric Badge - now clickable with tooltip */}
                                <div className="mt-auto group/badge relative">
                                    <Link href={partner.link} className="block">
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`inline-flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r ${partner.color} bg-opacity-10 backdrop-blur-sm border border-white/10 cursor-pointer transition-all duration-300 hover:border-white/30 hover:shadow-lg`}
                                        >
                                            <span className="text-sm font-semibold text-foreground">
                                                {partner.metric}
                                            </span>
                                            <motion.svg
                                                whileHover={{ x: 2 }}
                                                className="w-4 h-4 ml-2 opacity-70"
                                                fill="none"
                                                strokeWidth="2"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </motion.svg>
                                        </motion.div>
                                    </Link>

                                    
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-heavy rounded-3xl p-8 md:p-12"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, type: "spring" }}
                                className="text-center group"
                            >
                                {/* Icon */}
                                <motion.div
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                    className={`w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center ${stat.color} bg-current/10 group-hover:bg-current/20 transition-all duration-300`}
                                >
                                    <stat.icon className={`w-7 h-7 ${stat.color}`} />
                                </motion.div>

                                {/* Value */}
                                <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color} font-display`}>
                                    {stat.value}
                                </div>

                                {/* Label */}
                                <div className="text-sm text-muted-foreground font-medium">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Trust Badge */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-12 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-light">
                        <Award className="w-5 h-5 text-primary" />
                        <span className="text-sm font-medium text-muted-foreground">
                            Enterprise-grade security & compliance certified
                        </span>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
