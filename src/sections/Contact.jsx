import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { Mail, Phone, MapPin, Send, Loader2, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import VideoBackground from '../components/VideoBackground';
import { VIDEOS } from '../config/videos';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [fallbackHref, setFallbackHref] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            message: formData.message,
        };

        try {
            await emailjs.send(
                'service_0t3ae0p',
                'template_qpcjhvo',
                templateParams,
                '6Ndrh18z39wQGfH17'
            );
            setSubmitStatus('success');
            setFormData({ name: '', email: '', phone: '', message: '' });
            setTimeout(() => setSubmitStatus(null), 5000);
        } catch (error) {
            console.error('EmailJS error:', error?.status, error?.text || error);
            const subject = encodeURIComponent(`Portfolio contact from ${formData.name}`);
            const body = encodeURIComponent(`${formData.message}\n\n${formData.name}\n${formData.email}${formData.phone ? `\n${formData.phone}` : ''}`);
            setFallbackHref(`mailto:amalshalinda1999@gmail.com?subject=${subject}&body=${body}`);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    return (
        <section id="contact" className="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors relative overflow-hidden">

            <VideoBackground src={VIDEOS.contact} />

            {/* Background Blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl opacity-60 dark:opacity-40 translate-x-1/2 -translate-y-1/2 animate-glow-pulse" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl opacity-60 dark:opacity-40 -translate-x-1/2 translate-y-1/2 animate-glow-pulse" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <SectionHeader title="Contact Me" subtitle="Drop a Message Anytime..." />

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:w-1/3 space-y-8"
                    >
                        <div>
                            <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Let's Connect</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-medium">Email</p>
                                    <a href="mailto:amalshalinda1999@gmail.com" className="text-lg text-gray-900 dark:text-white font-medium hover:text-primary transition-colors">
                                        amalshalinda1999@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-medium">Phone</p>
                                    <a href="tel:+94703603922" className="text-lg text-gray-900 dark:text-white font-medium hover:text-secondary transition-colors">
                                        +94 70 360 3922
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                                    <Linkedin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-medium">LinkedIn</p>
                                    <a href="https://www.linkedin.com/in/amal-shalinda-188885231/" target="_blank" rel="noreferrer" className="text-lg text-gray-900 dark:text-white font-medium hover:text-primary transition-colors">
                                        Amal Shalinda
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:w-2/3"
                    >
                        <div className="glass-panel p-8 md:p-10 rounded-3xl">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-300">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white transition-all"
                                        placeholder="+94 7X XXX XXXX"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white transition-all resize-none"
                                        placeholder="How can I help you?"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="animate-spin" size={20} />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={20} />
                                            Send Message
                                        </>
                                    )}
                                </button>

                                {submitStatus === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 bg-white text-gray-900 dark:bg-gray-800 dark:text-white border border-primary/40 rounded-xl text-center font-medium"
                                    >
                                        Thank you! Your message has been sent successfully.
                                    </motion.div>
                                )}
                                {submitStatus === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 bg-primary/10 text-gray-900 dark:text-white border border-primary/40 rounded-xl text-center font-medium space-y-2"
                                    >
                                        <p>Couldn't send your message right now.</p>
                                        <a href={fallbackHref} className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                                            <Mail size={16} />
                                            Send it via your email app instead
                                        </a>
                                    </motion.div>
                                )}
                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
