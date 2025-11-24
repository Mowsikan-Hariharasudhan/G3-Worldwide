"use client";

import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { motion, useScroll } from "framer-motion";
import { CheckCircle2, Beaker, Rocket, Search, Lightbulb, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";

const platforms = [
    {
        id: "tablaops",
        title: "TablaOps",
        subtitle: "Restaurant Operations Intelligence",
        description: "Unified platform for multi-location restaurant operations. From kitchen workflows to catering orchestration, TablaOps handles the complexity of running multiple formats, menu variations, and high-volume catering.",
        modules: [
            "Kitchen Intelligence: Prep workflows, recipe management",
            "Catering Orchestration: Order management, capacity planning",
            "Menu & Inventory: Real-time inventory, waste reduction",
            "Labor Planning: Scheduling optimization, performance management",
            "Customer Engagement: Loyalty programs, feedback management",
            "Multi-Location Dashboard: Centralized oversight, alerts",
        ],
        builtFor: ["Multi-unit restaurant operators", "Catering-heavy operations", "Franchise restaurant systems"],
        cta: "Request TablaOps Demo",
        gradient: "from-orange-500/20 to-red-500/20",
        image: "/tablaops-dashboard.jpg",
    },
    {
        id: "stealthops",
        title: "StealthOps",
        subtitle: "Hotel Property Management System",
        description: "Modern PMS built for multi-property hotel governance. StealthOps handles reservations, housekeeping, revenue management, and guest experience in one unified platform designed for portfolio operations.",
        modules: [
            "Housekeeping Management: Room status, task assignment",
            "Reservations & Front Desk: Booking engine, check-in/out",
            "Revenue Analytics: Rate optimization, forecasting",
            "Guest Experience: Service requests, feedback",
            "Vendor Management: Procurement, contract tracking",
            "Multi-Property Dashboard: Portfolio oversight, compliance",
        ],
        builtFor: ["Multi-property hotel operators", "Franchise hotel systems", "Boutique hotel groups"],
        cta: "Request StealthOps Demo",
        gradient: "from-blue-500/20 to-cyan-500/20",
        image: "/stealthops-dashboard.jpg",
    },
   
];

const rdProjects = [
    { title: "Multilingual Chatbot", stage: "Beta Testing", desc: "Handle reservations in 10+ languages automatically." },
    { title: "Smart Kitchen Automation", stage: "Sensor Pilot", desc: "IoT-driven prep timing and quality monitoring." },
    { title: "Auto Executive Briefings", stage: "Production", desc: "Daily AI-generated summaries with key insights." },
    { title: "Workforce Optimization", stage: "Training Models", desc: "Predict optimal scheduling based on historical patterns." },
    { title: "Event Space Optimization", stage: "CV Testing", desc: "Maximize space utilization and setup efficiency." },
    { title: "Franchise Onboarding", stage: "Development", desc: "Reduce new location onboarding from weeks to days." },
];

const pilotSteps = [
    { icon: Search, title: "Discovery", duration: "Week 1", desc: "Understand operation, define success metrics, scope pilot." },
    { icon: Beaker, title: "POC Development", duration: "Weeks 2-3", desc: "Build minimum viable solution, integrate, initial testing." },
    { icon: Rocket, title: "Operational Testing", duration: "Weeks 4-5", desc: "Deploy in live operations, gather feedback, monitor KPIs." },
    { icon: CheckCircle2, title: "Measure & Validate", duration: "Week 6", desc: "Analyze results, calculate ROI, identify refinement needs." },
];

export default function InnovationPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    return (
        <main className="min-h-screen bg-background pt-24 pb-24 overflow-hidden" ref={containerRef}>
            {/* Background Elements */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[120px]" />
            </div>

            <Container className="relative z-10">
                <SectionHeader
                    title="Where Hospitality Meets Innovation"
                    subtitle="Innovation Hub"
                    description="Product engineering, R&D, and automation live here. We iterate fast, validate with pilots, and ship production-grade platforms."
                    className="mb-24"
                />

                {/* Production Platforms */}
                <div className="mb-32">
                    <h2 className="text-2xl font-bold font-display mb-12 text-center">Production Platforms</h2>
                    <div className="space-y-24">
                        {platforms.map((platform) => (
                            <motion.div
                                key={platform.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                id={platform.id}
                                className="group perspective-1000"
                            >
                                <div className="bg-card/30 backdrop-blur-sm border border-white/5 rounded-3xl overflow-hidden hover:shadow-[0_0_50px_rgba(0,0,0,0.3)] transition-all duration-500 group-hover:transform group-hover:scale-[1.01]">
                                    <div className="grid grid-cols-1 lg:grid-cols-2">
                                        <div className={`p-12 flex flex-col justify-center relative overflow-hidden`}>
                                            <div className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />

                                            <motion.div
                                                initial={{ x: -20, opacity: 0 }}
                                                whileInView={{ x: 0, opacity: 1 }}
                                                transition={{ delay: 0.2 }}
                                                className="relative z-10"
                                            >
                                                <h3 className="text-primary font-bold uppercase tracking-wider mb-2">{platform.subtitle}</h3>
                                                <h2 className="text-4xl font-bold font-display mb-6">{platform.title}</h2>
                                                <p className="text-muted-foreground text-lg mb-8">{platform.description}</p>

                                                <div className="mb-8">
                                                    <h4 className="font-bold mb-4 text-foreground">Core Modules:</h4>
                                                    <ul className="grid grid-cols-1 gap-3">
                                                        {platform.modules.map((mod, i) => (
                                                            <motion.li
                                                                key={mod}
                                                                initial={{ opacity: 0, x: -10 }}
                                                                whileInView={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: 0.3 + (i * 0.05) }}
                                                                className="flex items-start text-sm text-muted-foreground"
                                                            >
                                                                <CheckCircle2 className="h-4 w-4 text-primary mr-3 mt-0.5 shrink-0" />
                                                                {mod}
                                                            </motion.li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <Button variant="glow" className="w-fit group" asChild>
                                                    <Link href="/contact">
                                                        {platform.cta}
                                                        <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                    </Link>
                                                </Button>
                                            </motion.div>
                                        </div>

                                        {/* Visual Placeholder */}
                                        <div className="relative min-h-[400px] border-l border-white/5 bg-black/40 overflow-hidden group-hover:border-primary/20 transition-colors">
                                            <motion.div
                                                className="absolute inset-0"
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <Image
                                                    src={platform.image}
                                                    alt={`${platform.title} Interface`}
                                                    fill
                                                    className="object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-500"
                                                />
                                            </motion.div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

                                            {/* Floating UI Elements (Decorative) */}
                                            <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                                <div className="flex items-center justify-between mb-2">
                                                    <div className="h-2 w-24 bg-primary/50 rounded-full" />
                                                    <div className="h-2 w-8 bg-white/20 rounded-full" />
                                                </div>
                                                <div className="h-2 w-3/4 bg-white/10 rounded-full mb-4" />
                                                <div className="flex gap-2">
                                                    <div className="h-8 w-20 bg-primary/20 rounded-lg" />
                                                    <div className="h-8 w-20 bg-white/5 rounded-lg" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* R&D Initiatives */}
                <div className="mb-32">
                    <SectionHeader title="What We're Building Next" subtitle="Active R&D" className="mb-12" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {rdProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5, borderColor: "rgba(var(--primary), 0.3)" }}
                                className="p-6 rounded-2xl bg-card/40 border border-white/5 transition-all duration-300 group cursor-default"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Lightbulb size={20} />
                                    </div>
                                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-white/5 text-muted-foreground border border-white/10 group-hover:border-primary/30 transition-colors">
                                        {project.stage}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-sm text-muted-foreground">{project.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Pilot Process */}
                <div>
                    <SectionHeader
                        title="How We Validate Technology"
                        subtitle="The Pilot Process"
                        description="Every technology goes through rigorous pilot validation before we recommend it to partners."
                        className="mb-12"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                        {/* Connecting Line */}
                        <div className="hidden lg:block absolute top-[3.5rem] left-0 w-full h-0.5 bg-gradient-to-r from-primary/5 via-primary/50 to-primary/5" />

                        {pilotSteps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative group h-full"
                            >
                                <div className="relative z-10 bg-card border border-white/5 p-8 rounded-2xl text-center h-full hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] flex flex-col">
                                    <div className="w-20 h-20 mx-auto rounded-full bg-background border-4 border-card flex items-center justify-center mb-6 text-primary shadow-lg group-hover:scale-110 transition-transform duration-300 relative">
                                        <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-0 group-hover:opacity-100" />
                                        <step.icon size={32} className="relative z-10" />
                                    </div>
                                    <div className="text-primary font-bold text-sm mb-2 uppercase tracking-wider">{step.duration}</div>
                                    <h3 className="text-base md:text-lg font-bold mb-3 min-h-[3.5rem] flex items-center justify-center px-3 break-words leading-tight">{step.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-16 text-center">
                        <Button variant="outline" size="lg" className="h-14 px-8 text-lg hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all" asChild>
                            <Link href="/contact">Propose a Pilot Project</Link>
                        </Button>
                    </div>
                </div>

            </Container>
        </main>
    );
}
