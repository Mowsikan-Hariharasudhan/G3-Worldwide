"use client";

import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        name: "Anshu Jain",
        role: "CEO, Tabla Indian Restaurant",
        company: "Tabla Indian Restaurant",
        image: "/e1552eaa-b7d1-56e6-a296-59dbf0e1db7d-removebg-preview.png",
        rating: 5,
        quote: "G3 Worldwide didn't just build us software—they architected our entire operational backbone. TablaOps has transformed how we manage 50+ locations.",
        highlight: "50+ locations managed seamlessly",
        gradient: "from-orange-500 to-red-500",
    },

    {
        name: "Nora Jain",
        role: "President",
        company: "Tabla Indian Restaurant",
        image: "/nora-jain-61777b38-removebg-preview.png",
        rating: 5,
        quote: "Working with G3 feels like having an internal engineering team with deep hospitality expertise. They understand both technology and the business.",
        highlight: "40% operational efficiency gain",
        gradient: "from-purple-500 to-pink-500",
    },
];

export function Testimonials() {
    return (
        <section className="section-padding relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-radial-primary opacity-20" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />

            <Container className="relative z-10">
                <SectionHeader
                    title="Client Success Stories"
                    subtitle="Testimonials"
                    description="Hear from the leaders who trust G3 Worldwide to power their operations."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="group relative"
                        >
                            {/* Card with glassmorphism */}
                            <div className="card-glow p-8 h-full flex flex-col relative overflow-hidden">
                                {/* Gradient overlay on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />

                                {/* Quote icon */}
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 + 0.2 }}
                                    className="relative z-10"
                                >
                                    <Quote className={`w-12 h-12 mb-6 text-primary/20 group-hover:text-primary/40 transition-colors duration-300`} />
                                </motion.div>

                                {/* Stars rating */}
                                <div className="flex gap-1 mb-6 relative z-10">
                                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ scale: 0, rotate: -180 }}
                                            whileInView={{ scale: 1, rotate: 0 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                delay: index * 0.2 + 0.3 + i * 0.05,
                                                type: "spring",
                                                stiffness: 200,
                                            }}
                                        >
                                            <Star className={`w-5 h-5 fill-current bg-gradient-to-r ${testimonial.gradient} text-transparent bg-clip-text`} />
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Testimonial quote */}
                                <blockquote className="text-foreground text-lg leading-relaxed mb-6 flex-grow relative z-10">
                                    &quot;{testimonial.quote}&quot;
                                </blockquote>

                                {/* Highlight badge */}
                                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${testimonial.gradient} bg-opacity-10 border border-white/10 mb-6 self-start relative z-10`}>
                                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${testimonial.gradient}`} />
                                    <span className="text-sm font-semibold text-foreground">
                                        {testimonial.highlight}
                                    </span>
                                </div>

                                {/* Author info */}
                                <div className="flex items-center gap-4 pt-6 border-t border-border/50 relative z-10">
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className={testimonial.image.startsWith('/') ? "relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20 bg-muted shrink-0" : "text-5xl shrink-0"}
                                    >
                                        {testimonial.image.startsWith('/') ? (
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                fill
                                                className="object-cover"
                                            />
                                        ) : (
                                            testimonial.image
                                        )}
                                    </motion.div>
                                    <div>
                                        <div className="font-bold text-foreground">{testimonial.name}</div>
                                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                                        <div className="text-xs text-muted-foreground/70">{testimonial.company}</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust indicator */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl glass-light">
                        <div className="flex items-center gap-2">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                            ))}
                        </div>
                        <div className="text-2xl font-bold text-foreground">5.0 Average Rating</div>
                        <div className="text-muted-foreground">Based on client feedback across all engagements</div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
