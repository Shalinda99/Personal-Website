import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { GraduationCap, Landmark } from 'lucide-react';
import VideoBackground from '../components/VideoBackground';
import { VIDEOS } from '../config/videos';

const eduData = [
    {
        institution: 'University of Moratuwa',
        period: 'Jun 2021 - Jun 2025',
        degree: 'B.Sc. (Hons) in Information Technology',
        details: 'CGPA - 3.51 | L4S1 SGPA - 3.81 (Dean’s List)',
        icon: <GraduationCap size={28} />
    },
    {
        institution: 'Richmond College, Galle',
        period: 'Jun 2016 - Aug 2019',
        degree: 'G.C.E Advanced Level Examination',
        details: 'Physical Science stream. Combined Mathematics - A, Physics - B, Chemistry - B.',
        icon: <Landmark size={28} />
    }
];

const Education = () => {
    return (
        <section id="education" className="relative overflow-hidden py-16 md:py-24 bg-gray-50 dark:bg-gray-950 transition-colors">
            <VideoBackground src={VIDEOS.education} />
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <SectionHeader title="Education" subtitle="My academic journey and achievements." />

                <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start max-w-6xl mx-auto">
                    {/* Left side: Timeline */}
                    <div className="flex-1 w-full relative border-l-4 border-primary/30 ml-4 md:ml-12 pl-8 md:pl-16 space-y-12">
                        {eduData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="relative p-6 md:p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-shadow"
                            >
                                <div className="absolute -left-[54px] md:-left-[86px] top-6 w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white shadow-lg z-10">
                                    {item.icon}
                                </div>

                                <div className="mb-2 inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                                    {item.period}
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{item.institution}</h3>
                                <h4 className="text-xl text-gray-700 dark:text-gray-300 font-medium mb-3">{item.degree}</h4>
                                <p className="text-gray-600 dark:text-gray-400">{item.details}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right side: Animated Images */}
                    <div className="flex-1 w-full flex items-center justify-center min-h-[400px] lg:mt-12">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                            {/* Decorative Rotating Rings */}
                            <motion.div
                                className="absolute -inset-4 md:-inset-6 border-2 border-primary/40 rounded-full border-dashed"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.div
                                className="absolute -inset-8 md:-inset-12 border-2 border-secondary/20 rounded-full"
                                animate={{ rotate: -360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.div
                                className="absolute -inset-2 md:-inset-2 border-4 border-accent/10 rounded-full"
                                animate={{ rotate: 180, scale: [1, 1.05, 1] }}
                                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                            />

                            {/* Grad 1 Image */}
                            <motion.img
                                src="/uploads/grad1.jpg"
                                alt="Graduation Moment 1"
                                className="absolute inset-0 w-full h-full object-cover rounded-full shadow-2xl border-4 border-white dark:border-gray-800"
                                animate={{
                                    opacity: [1, 0, 1],
                                    scale: [1, 0.85, 1],
                                    rotate: [0, 5, 0]
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />

                            {/* Grad 2 Image */}
                            <motion.img
                                src="/uploads/grad2.jpg"
                                alt="Graduation Moment 2"
                                className="absolute inset-0 w-full h-full object-cover rounded-full shadow-2xl border-4 border-white dark:border-gray-800"
                                animate={{
                                    opacity: [0, 1, 0],
                                    scale: [0.85, 1, 0.85],
                                    rotate: [0, -5, 0]
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
