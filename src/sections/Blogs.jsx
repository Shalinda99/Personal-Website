import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { ArrowRight } from 'lucide-react';
import VideoBackground from '../components/VideoBackground';
import { VIDEOS } from '../config/videos';

const blogsData = [
    {
        title: 'Integrating Auth0 with Your Web Page: A Guide for Login & Sign-Up.',
        date: 'June 27, 2023',
        img: '/uploads/blog1.png',
        link: 'https://shalinda99.medium.com/integrating-auth0-with-your-web-page-a-step-by-step-guide-for-login-and-sign-up-817a5646d19f'
    },
    {
        title: 'How to Deploy Your Own Website Using Netlify for Free.',
        date: 'June 28, 2023',
        img: '/uploads/blog2.png',
        link: 'https://shalinda99.medium.com/how-to-deploy-your-own-website-using-netlify-for-free-567636bbe351'
    },
    {
        title: 'What is API? A Complete Guide to Application Programming Interfaces.',
        date: 'June 29, 2023',
        img: '/uploads/blog3.png',
        link: 'https://shalinda99.medium.com/what-is-api-a-complete-guide-to-application-programming-interfaces-1eae9f3ea2da'
    },
    {
        title: 'ETCD- Your Simple Guide for Understanding and Using It.',
        date: 'Mar 25, 2024',
        img: '/uploads/blog4.jpg',
        link: 'https://shalinda99.medium.com/etcd-your-simple-guide-to-understanding-and-using-it-fa54883d1773'
    },
    {
        title: 'A Brief Understanding of the Go Reflect Package: A Conversation.',
        date: 'June 05, 2024',
        img: '/uploads/blog5.png',
        link: 'https://shalinda99.medium.com/a-brief-understanding-of-the-go-reflect-package-a-conversation-3455f0e8bd3d'
    }
];

const Blogs = () => {
    return (
        <section id="blogs" className="relative overflow-hidden py-16 md:py-24 bg-gray-50 dark:bg-gray-950 transition-colors">
            <VideoBackground src={VIDEOS.blogs} />
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <SectionHeader title="Blogs" subtitle="Learn and Explore with My Blogs." />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogsData.map((blog, index) => (
                        <motion.a
                            key={index}
                            href={blog.link}
                            target="_blank"
                            rel="noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group block bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:shadow-primary/20 hover:border-primary/40 transition-all border border-gray-100 dark:border-gray-800"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={blog.img}
                                    alt={blog.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    loading="lazy"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur px-3 py-1 rounded-full text-sm font-medium text-primary shadow-sm">
                                    {blog.date}
                                </div>
                            </div>
                            <div className="p-6">
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 line-clamp-2 group-hover:text-primary transition-colors">
                                    {blog.title}
                                </h4>
                                <div className="flex items-center text-primary font-medium group-hover:underline">
                                    Read more <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;
