import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { Github, ExternalLink, X, Play } from 'lucide-react';
import VideoBackground from '../components/VideoBackground';
import { VIDEOS } from '../config/videos';

const CATEGORIES = ["All", "AI & Agents", "Web Development", "UI UX Designs", "3D Modeling & Animation", "Other"];

const projectsData = [
    { id: 1, title: 'FoodBank', category: 'Web Development', src: '/uploads/gallery_img-01.png', type: 'image', link: 'https://github.com/Shalinda99/FoodBank', fallbackImg: '' },
    { id: 2, title: 'FuturePro', category: 'Web Development', src: '/uploads/gallery_img-02.png', type: 'image', link: 'https://github.com/FuturePro-Career-Guidance/Future-Pro' },
    { id: 3, title: 'Hardware Project', category: 'Other', src: '/uploads/gallery_img-03.png', type: 'image', link: 'https://github.com/Shalinda99/ICT-Hardware-Project' },
    { id: 4, title: 'RMS(Backend)', category: 'Web Development', src: '/uploads/gallery_img-04.jpeg', type: 'image', link: 'https://github.com/Shalinda99/RestaurantManagementSystemBackend' },
    { id: 5, title: 'TestAutomation', category: 'Web Development', src: '/uploads/gallery_img-05.jpg', type: 'image', link: 'https://github.com/Shalinda99/Serenity-BDD-Testing-Suite-for-UI-and-API' },
    { id: 6, title: 'IMS(inventory)', category: 'Web Development', src: '/uploads/gallery_img-06.png', type: 'image', link: 'https://github.com/Shalinda99/inventory-management-system' },
    { id: 7, title: 'CaravanDesign', category: 'UI UX Designs', src: '/uploads/caravan.png', type: 'image', link: 'https://www.figma.com/design/aexvAKabZBECpJ8yv0pAxp/Caravan-Web-Project' },
    { id: 8, title: 'VirtualHelp', category: 'UI UX Designs', src: '/uploads/VirtualHelp1.png', type: 'image', link: 'https://www.figma.com/design/DoeUYINShAvfCkxZiThhrS/Virtual-Help-official' },
    { id: 9, title: 'Flexify', category: 'UI UX Designs', src: '/uploads/flexify.png', type: 'image', link: 'https://www.figma.com/design/S6A0ZvbLkroSbehYU8BZlr/Flexify-Exercise-APP' },
    { id: 10, title: 'WattSaver', category: 'UI UX Designs', src: '/uploads/Wattsaver.png', type: 'image', link: 'https://www.figma.com/design/sdO6kzFnptlayzU8H2Hwm9/MajesticHands3.0' },
    { id: 11, title: 'BookingSystem', category: 'UI UX Designs', src: '/uploads/HotelBookingSystem.png', type: 'image', link: 'https://www.figma.com/design/RypcgldglaIbGmJpPZp0Md/MIS_HotelBookingSystem' },
    { id: 12, title: 'SkyLink', category: 'UI UX Designs', src: '/uploads/skylink.png', type: 'image', link: 'https://www.figma.com/design/U9ctIr2jFVWhpKj7i3LDBg/Triathlon' },
    { id: 13, title: 'MLModel', category: 'Other', src: '/uploads/LAP.jpg', type: 'image', link: 'https://github.com/Shalinda99/LoanApprovalPrediction' },
    { id: 14, title: 'Train 3D', category: '3D Modeling & Animation', src: '/uploads/rail.png', type: 'image', link: '/uploads/rail.png' },
    { id: 15, title: 'Inside 3D', category: '3D Modeling & Animation', src: '/uploads/insidecl.png', type: 'image', link: '/uploads/insidecl.png' },
    { id: 16, title: 'Animation 1', category: '3D Modeling & Animation', src: '/uploads/0001-0300.mp4', type: 'video', link: '/uploads/0001-0300.mp4' },
    { id: 17, title: 'Animation 2', category: '3D Modeling & Animation', src: '/uploads/v1.mp4', type: 'video', link: '/uploads/v1.mp4' },
    { id: 18, title: 'Animation 3', category: '3D Modeling & Animation', src: '/uploads/v2.mp4', type: 'video', link: '/uploads/v2.mp4' },
    { id: 19, title: 'Waikkala', category: 'Web Development', src: '/uploads/waikkala.mp4', type: 'video', link: 'https://github.com/Waikkala/wgm-frontend' },
    { id: 20, title: 'YouTube Demo', category: 'Other', type: 'youtube', videoId: 'TEhs5ZkCKZU', link: 'https://www.youtube.com/watch?v=TEhs5ZkCKZU' },
    { id: 21, title: 'Tender', category: 'AI & Agents', src: '/uploads/tender.svg', type: 'image', link: 'https://tender-web-686i.onrender.com' },
    { id: 22, title: 'MemoryWeave', category: 'AI & Agents', src: '/uploads/memoryweave.svg', type: 'image', link: '/uploads/memoryweave.svg' },
    { id: 23, title: 'AI Chatbot for Existing Products', category: 'AI & Agents', src: '/uploads/ai-chatbot.svg', type: 'image', link: '/uploads/ai-chatbot.svg' },
    { id: 24, title: 'AI Incident Reporter for SaaS', category: 'AI & Agents', src: '/uploads/incident-reporter.svg', type: 'image', link: '/uploads/incident-reporter.svg' },
    { id: 25, title: 'Realtime AI Voice Assistant', category: 'AI & Agents', src: '/uploads/voice-assistant.svg', type: 'image', link: '/uploads/voice-assistant.svg' },
];

const Portfolio = () => {
    const [filter, setFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = projectsData.filter(project => filter === 'All' || project.category === filter);

    return (
        <section id="portfolio" className="relative overflow-hidden py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors">
            <VideoBackground src={VIDEOS.portfolio} />
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <SectionHeader title="Portfolio" subtitle="See how I use creativity and technology to make great results..." />

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
                    {CATEGORIES.map(category => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium transition-all ${filter === category ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={project.id}
                                className="group relative rounded-xl sm:rounded-2xl overflow-hidden glass-panel aspect-[4/3] cursor-pointer"
                                onClick={() => setSelectedProject(project)}
                            >
                                {project.type === 'video' ? (
                                    <div className="w-full h-full relative">
                                        <video className="w-full h-full object-cover" src={project.src} muted loop playsInline preload="metadata" />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                                            <Play className="text-white w-8 h-8 sm:w-12 sm:h-12 opacity-80" />
                                        </div>
                                    </div>
                                ) : project.type === 'youtube' ? (
                                    <div className="w-full h-full relative">
                                        <img src={`https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg`} onError={(e) => e.target.src = `https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg`} alt={project.title} className="w-full h-full object-cover" loading="lazy" />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                                            <Play className="text-white w-8 h-8 sm:w-12 sm:h-12 opacity-80" />
                                        </div>
                                    </div>
                                ) : (
                                    <img src={project.src} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                                )}

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent [@media(hover:hover)]:via-gray-900/50 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex flex-col justify-end p-3 sm:p-6">
                                    <h4 className="text-sm sm:text-xl font-bold text-white sm:mb-2 line-clamp-2">{project.title}</h4>
                                    <p className="hidden sm:block text-primary font-medium text-sm mb-4">{project.category}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Modal */}
                <AnimatePresence>
                    {selectedProject && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                            onClick={() => setSelectedProject(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                                className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden overflow-y-auto max-h-[90vh] shadow-2xl max-w-4xl w-full border border-gray-200 dark:border-gray-800"
                            >
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    aria-label="Close"
                                    className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors"
                                >
                                    <X size={24} />
                                </button>

                                <div className="w-full aspect-video bg-gray-100 dark:bg-gray-950 flex items-center justify-center">
                                    {selectedProject.type === 'video' ? (
                                        <video src={selectedProject.src} controls autoPlay className="w-full h-full object-contain" />
                                    ) : selectedProject.type === 'youtube' ? (
                                        <iframe
                                            src={`https://www.youtube.com/embed/${selectedProject.videoId}?autoplay=1`}
                                            title={selectedProject.title}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="w-full h-full border-0"
                                        />
                                    ) : (
                                        <img src={selectedProject.src} alt={selectedProject.title} className="w-full h-full object-contain" />
                                    )}
                                </div>

                                <div className="p-5 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">{selectedProject.title}</h3>
                                        <p className="text-primary font-medium">{selectedProject.category}</p>
                                    </div>

                                    {selectedProject.link?.startsWith('http') && (
                                        <a
                                            href={selectedProject.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-1"
                                        >
                                            {selectedProject.link.includes('github') ? <Github size={20} /> : <ExternalLink size={20} />}
                                            View Project
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
};

export default Portfolio;
