import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import VideoBackground from '../components/VideoBackground';
import { VIDEOS } from '../config/videos';

const ROLES = ["Software Engineer", "Web Developer", "Full-Stack Developer", "AI Enthusiast", "Creative Problem Solver"];
const CV_URL = "https://drive.google.com/file/d/172Ey3LyrI3tO7w5ERPv1V0TQGX1xj5mS/view?usp=sharing";

const SOCIALS = [
    { label: 'GitHub', href: 'https://github.com/Shalinda99', icon: Github, external: true },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/amal-shalinda-188885231/', icon: Linkedin, external: true },
    { label: 'Email', href: '#contact', icon: Mail },
];

const EASE = [0.22, 1, 0.36, 1];

const fadeUp = (delay) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: EASE },
});

const reveal = (delay) => ({
    initial: { y: '110%' },
    animate: { y: 0 },
    transition: { duration: 1, delay, ease: EASE },
});

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
    const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
    const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="home"
            ref={sectionRef}
            className="dark relative min-h-screen flex items-center overflow-hidden bg-gray-950 text-white"
        >
            <motion.div style={{ scale: videoScale }} className="absolute inset-0">
                <VideoBackground src={VIDEOS.hero} poster="/videos/hero-poster.jpg" treatment="none" eager />
            </motion.div>
            <div aria-hidden className="absolute inset-0 bg-gray-950/75 md:bg-transparent md:bg-gradient-to-r md:from-gray-950 md:via-gray-950/80 md:to-gray-950/20" />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-gray-950/70" />

            <motion.div
                style={{ y: contentY, opacity: contentOpacity }}
                className="container relative z-10 mx-auto px-6 md:px-12 pt-32 pb-28"
            >
                <div className="max-w-3xl">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-6">
                        <span className="block overflow-hidden pb-2">
                            <motion.span className="block" {...reveal(0.1)}>Amal</motion.span>
                        </span>
                        <span className="block overflow-hidden pb-2">
                            <motion.span className="block text-primary" {...reveal(0.22)}>Shalinda</motion.span>
                        </span>
                    </h1>

                    <motion.div
                        {...fadeUp(0.45)}
                        className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xl md:text-2xl text-gray-300 font-light mb-6"
                    >
                        <span className="w-10 h-px bg-primary" />
                        <span>I work as a</span>
                        <span className="relative inline-flex items-center overflow-hidden h-[1.5em] font-semibold text-white">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={ROLES[roleIndex]}
                                    initial={{ y: '100%', opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: '-100%', opacity: 0 }}
                                    transition={{ duration: 0.45, ease: EASE }}
                                    className="inline-block"
                                >
                                    {ROLES[roleIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </span>
                    </motion.div>

                    <motion.p
                        {...fadeUp(0.55)}
                        className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed mb-10"
                    >
                        I build secure, scalable software across the full stack, from frontend and backend to Kubernetes deployments and AI-powered features for healthcare.
                    </motion.p>

                    <motion.div {...fadeUp(0.65)} className="flex flex-wrap items-center gap-4">
                        <a
                            href="#portfolio"
                            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-white font-semibold shadow-lg shadow-primary/30 hover:bg-primary/90 hover:shadow-primary/50 transition-all"
                        >
                            View My Work
                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </a>
                        <a
                            href={CV_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-semibold hover:bg-white/10 hover:border-white/40 transition-all"
                        >
                            <Download size={18} />
                            Download CV
                        </a>
                        <div className="flex items-center gap-1 sm:ml-2">
                            {SOCIALS.map(({ label, href, icon: Icon, external }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                                    className="p-3 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </motion.div>

            <motion.a
                href="#about"
                aria-label="Scroll to About"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-gray-500 hover:text-white transition-colors"
            >
                <span className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
                    <motion.span
                        animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-1 h-2 rounded-full bg-current"
                    />
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
            </motion.a>
        </section>
    );
};

export default Hero;
