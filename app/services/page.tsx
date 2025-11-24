"use client";

import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useSpring } from "framer-motion";
import { CheckCircle2, Cloud, Brain, BarChart3, Code2, Lightbulb, Megaphone, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

const services = [
    {
        id: "cloud-infrastructure",
        icon: Cloud,
        title: "Cloud Infrastructure & Automation",
        description: "Design, deploy and govern Azure, AWS, and Microsoft 365 environments with an automation-first approach. Multi-tenant architecture enables franchise scalability while maintaining enterprise security and cost control.",
        capabilities: [
            "Multi-tenant governance and isolation",
            "Identity lifecycle management & SSO",
            "Automated provisioning (PowerShell, ARM, Terraform)",
            "Cost optimization & FinOps",
            "Managed security (Zero Trust, DLP, MFA)",
            "Infrastructure as Code",
            "Disaster recovery & business continuity",
            "Compliance management (PCI, PII, health codes)",
        ],
        useCases: [
            "Franchise onboarding: Provision new location in hours, not weeks",
            "Multi-property security: Centralized identity across hotel portfolio",
            "Cost control: Automated optimization reduces cloud spend by 30-40%",
        ],
        color: "text-blue-400",
        bg: "bg-blue-400/10",
        border: "border-blue-400/20"
    },
    {
        id: "ai-automation",
        icon: Brain,
        title: "AI & Intelligent Automation",
        description: "Conversational AI, predictive analytics, and workflow automation that reduce manual overhead and improve guest experience. From kitchen prep timing to reservation chatbots, AI handles repetitive tasks while your team focuses on hospitality.",
        capabilities: [
            "Guest-facing chatbots (multilingual)",
            "Predictive demand planning",
            "Automated reporting & anomaly detection",
            "Computer vision for operations optimization",
            "Workforce scheduling optimization",
            "Kitchen intelligence & prep automation",
            "SOP automation",
            "Revenue forecasting",
        ],
        useCases: [
            "Reservation chatbot handles 60% of booking inquiries 24/7",
            "Predictive scheduling reduces labor costs while maintaining service levels",
            "Kitchen prep intelligence minimizes food waste and optimizes timing",
        ],
        color: "text-purple-400",
        bg: "bg-purple-400/10",
        border: "border-purple-400/20"
    },
    {
        id: "data-analytics",
        icon: BarChart3,
        title: "Data, Analytics & Business Intelligence",
        description: "Centralized data platform that unifies POS, reservations, labor, inventory, and guest data into actionable insights. Executive dashboards, franchisee portals, and predictive models turn data into competitive advantage.",
        capabilities: [
            "Centralized data platform (Azure/AWS)",
            "Executive dashboards & KPIs",
            "Cross-entity reporting (multi-brand visibility)",
            "Self-service analytics for franchisees",
            "Predictive models & ML forecasting",
            "Custom BI solutions (Power BI, Tableau)",
            "Real-time operational metrics",
            "Guest sentiment analysis",
        ],
        useCases: [
            "Franchise performance comparison across all locations",
            "Real-time revenue tracking with predictive end-of-day forecasts",
            "Guest satisfaction trends identified before issues escalate",
        ],
        color: "text-cyan-400",
        bg: "bg-cyan-400/10",
        border: "border-cyan-400/20"
    },
    {
        id: "platform-engineering",
        icon: Code2,
        title: "Platform Engineering & Product Development",
        description: "Custom-built operational platforms for restaurants and hotels. TablaOps and StealthOps provide end-to-end management for kitchen workflows, catering, housekeeping, reservations, and more — with franchise-ready multi-tenancy built in.",
        capabilities: [
            "TablaOps (restaurant operations platform)",
            "StealthOps (hotel property management)",
            "Custom integrations (POS, reservations, accounting)",
            "API development & vendor connectivity",
            "Mobile apps (iOS/Android)",
            "Franchise portals & onboarding",
            "White-label options",
            "Continuous enhancement based on operational feedback",
        ],
        useCases: [
            "TablaOps coordinates kitchen prep, catering orders, and inventory across 10+ locations",
            "StealthOps manages housekeeping, maintenance, and guest requests for hotel portfolio",
            "Custom POS integration eliminates double-entry and syncs real-time",
        ],
        color: "text-orange-400",
        bg: "bg-orange-400/10",
        border: "border-orange-400/20"
    },
    {
        id: "innovation-hub",
        icon: Lightbulb,
        title: "Innovation Hub & R&D",
        description: "Rapid prototyping, pilot validation, and production rollout of new operational technologies. We test in our own restaurants and hotels first, then offer proven solutions to partners.",
        capabilities: [
            "6-8 week pilot programs",
            "Discovery workshops & requirement gathering",
            "POC development & testing",
            "KPI measurement & validation",
            "Production rollout planning",
            "Active R&D initiatives",
            "Feedback-driven iteration",
            "Minimal-risk validation",
        ],
        useCases: [
            "Test new kitchen sensor system in Tabla locations before offering to clients",
            "Validate chatbot effectiveness with real guest interactions",
            "Measure actual ROI before recommending technology investments",
        ],
        color: "text-green-400",
        bg: "bg-green-400/10",
        border: "border-green-400/20"
    },
    {
        id: "digital-marketing",
        icon: Megaphone,
        title: "Digital Marketing & Brand Growth",
        description: "Strategic digital marketing services that drive brand awareness, customer acquisition, and revenue growth. From SEO to social media management, we create data-driven campaigns that deliver measurable results for hospitality brands.",
        capabilities: [
            "Search Engine Optimization (SEO)",
            "Content strategy & creation",
            "Social media management & advertising",
            "Pay-per-click advertising (Google Ads, Meta)",
            "Email marketing & automation",
            "Brand development & positioning",
            "Influencer partnerships & PR",
            "Analytics & performance tracking",
        ],
        useCases: [
            "SEO campaign increases organic traffic by 150% and drives 40% more reservations",
            "Social media strategy builds engaged community of 50K+ followers",
            "Targeted PPC campaigns achieve 5x ROAS for catering bookings",
        ],
        color: "text-pink-400",
        bg: "bg-pink-400/10",
        border: "border-pink-400/20"
    },
];

export default function ServicesPage() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [activeSection, setActiveSection] = useState(services[0].id);

    useEffect(() => {
        const handleScroll = () => {
            const sections = services.map(s => document.getElementById(s.id));
            const scrollPosition = window.scrollY + 200;

            for (const section of sections) {
                if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
                    setActiveSection(section.id);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <main className="min-h-screen bg-background pt-24 pb-24 relative">
            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
                style={{ scaleX }}
            />

            <Container>
                <SectionHeader
                    title="Enterprise Technology for Hospitality Operations"
                    subtitle="What We Do"
                    description="Comprehensive cloud, AI, and platform services that power multi-unit restaurants and hotels at scale."
                    className="mb-24"
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
                    {/* Sticky Sidebar Navigation */}
                    <div className="hidden lg:block lg:col-span-3 relative">
                        <div className="sticky top-32 space-y-2">
                            {services.map((service) => (
                                <a
                                    key={service.id}
                                    href={`#${service.id}`}
                                    className={`block p-3 rounded-xl transition-all duration-300 text-sm font-medium group ${activeSection === service.id
                                        ? "bg-primary/10 text-primary translate-x-2"
                                        : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                                        }`}
                                >
                                    <div className="flex items-center">
                                        <service.icon size={16} className={`mr-3 ${activeSection === service.id ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}`} />
                                        {service.title.split(" ")[0]}...
                                        {activeSection === service.id && (
                                            <motion.div layoutId="activeDot" className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
                                        )}
                                    </div>
                                </a>
                            ))}

                            <div className="pt-8 mt-8 border-t border-white/10">
                                <Button className="w-full" variant="glow" asChild>
                                    <Link href="/contact">Get Started</Link>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-9 space-y-32">
                        {services.map((service) => (
                            <motion.div
                                key={service.id}
                                id={service.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5 }}
                                className="scroll-mt-32 group"
                            >
                                <div className="grid grid-cols-1 gap-8">
                                    {/* Header */}
                                    <div className="relative overflow-hidden rounded-3xl bg-card border border-white/5 p-8 md:p-12">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${service.bg} to-transparent opacity-50`} />
                                        <div className="absolute top-0 right-0 p-12 opacity-10">
                                            <service.icon size={200} className={service.color} />
                                        </div>

                                        <div className="relative z-10">
                                            <div className={`w-16 h-16 rounded-2xl ${service.bg} ${service.border} border flex items-center justify-center mb-6 ${service.color}`}>
                                                <service.icon size={32} />
                                            </div>
                                            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">{service.title}</h2>
                                            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Details Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <motion.div
                                            whileHover={{ y: -5 }}
                                            className="bg-card/30 rounded-2xl p-8 border border-white/5 hover:border-primary/30 transition-all duration-300"
                                        >
                                            <h3 className="text-lg font-bold mb-6 flex items-center">
                                                <span className="w-2 h-2 rounded-full bg-primary mr-3" />
                                                Key Capabilities
                                            </h3>
                                            <ul className="space-y-3">
                                                {service.capabilities.map((cap, i) => (
                                                    <motion.li
                                                        key={cap}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: i * 0.05 }}
                                                        className="flex items-start text-sm text-muted-foreground"
                                                    >
                                                        <CheckCircle2 className="h-4 w-4 text-primary mr-3 mt-0.5 shrink-0" />
                                                        {cap}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </motion.div>

                                        <motion.div
                                            whileHover={{ y: -5 }}
                                            className="bg-card/30 rounded-2xl p-8 border border-white/5 hover:border-secondary/30 transition-all duration-300"
                                        >
                                            <h3 className="text-lg font-bold mb-6 flex items-center">
                                                <span className="w-2 h-2 rounded-full bg-secondary mr-3" />
                                                Real-World Use Cases
                                            </h3>
                                            <ul className="space-y-4">
                                                {service.useCases.map((useCase, i) => (
                                                    <motion.li
                                                        key={useCase}
                                                        initial={{ opacity: 0, x: 10 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: i * 0.1 }}
                                                        className="text-sm text-muted-foreground bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors"
                                                    >
                                                        &quot;{useCase}&quot;
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-32 text-center">
                    <h2 className="text-3xl font-bold font-display mb-6">Ready to transform your hospitality operations?</h2>
                    <Button size="lg" variant="glow" className="text-lg px-8 h-14" asChild>
                        <Link href="/contact">
                            Schedule Discovery Workshop
                            <ArrowUpRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </Container>
        </main>
    );
}
