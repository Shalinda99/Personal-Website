import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { Download } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-white dark:bg-gray-900 transition-colors">
            <div className="container mx-auto px-6 md:px-12">
                <SectionHeader title="About Me" subtitle="A brief introduction about who I am and what I do." />

                <div className="flex flex-col md:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="md:w-1/2"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-2xl transform rotate-3 scale-105 opacity-50 blur-lg dark:opacity-30"></div>
                            <img
                                src="/uploads/about_04.jpeg"
                                alt="Amal Shalinda"
                                className="relative z-10 rounded-2xl shadow-xl w-full h-auto lg:max-h-[500px] object-cover object-top"
                                loading="lazy"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="md:w-1/2 space-y-6"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                            Hello, I am Amal Shalinda
                        </h3>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            I am a responsible and motivated person who loves learning new things. I work well with others and enjoy solving problems using both logical and creative thinking. My studies have taught me a lot about IT and how important teamwork and communication are in getting things done.
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            In my free time, I like to travel, play cricket, and watch movies. These activities help me relax and stay inspired. I am excited to keep learning and use my skills to make a positive impact in the IT world.
                        </p>

                        <div className="pt-4">
                            <a
                                href="https://drive.google.com/file/d/1Biq1556yGGmV5kCEWqryuKLo7FTBreJj/view?usp=sharing"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-1"
                            >
                                <Download size={20} />
                                Download CV
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
