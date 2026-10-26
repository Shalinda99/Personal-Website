import React from 'react';
import { motion } from 'framer-motion';

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const word = {
    hidden: { y: '110%', opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const underline = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const SectionHeader = ({ title, subtitle, className = '' }) => {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className={`text-center space-y-2 mb-16 ${className}`}
        >
            <h2 className="text-4xl md:text-5xl font-extrabold pb-2">
                {title.split(' ').map((w, i, arr) => (
                    <span key={i} className="inline-block overflow-hidden align-bottom pb-1">
                        <motion.span variants={word} className={`inline-block ${i === arr.length - 1 ? 'text-gradient' : ''}`}>
                            {i > 0 ? '\u00A0' : ''}{w}
                        </motion.span>
                    </span>
                ))}
            </h2>
            {subtitle && (
                <motion.p variants={fadeUp} className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    {subtitle}
                </motion.p>
            )}
            <motion.div variants={underline} className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-primary mx-auto mt-4 rounded-full origin-center shadow-[0_0_12px_rgb(var(--primary-rgb)/0.6)]" />
        </motion.div>
    );
};

export default SectionHeader;
