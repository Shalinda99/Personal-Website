import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { Globe, PenTool, Layout, Database, Kanban, TestTube, Cpu, Cloud, Braces, Layers, Brain, Wrench, Users } from 'lucide-react';
import VideoBackground from '../components/VideoBackground';
import { VIDEOS } from '../config/videos';

const skillsData = [
    {
        title: 'Web Development',
        desc: 'Experienced in ReactJS, HTML, CSS, Node.js, Spring Boot, Go and Bootstrap for building responsive websites.',
        icon: <Globe size={40} className="text-primary" />,
        color: 'from-primary/30 to-secondary/20'
    },
    {
        title: 'UI / UX Designing',
        desc: 'Skilled in UI/UX design using tools like Figma to create amazing user interfaces.',
        icon: <PenTool size={40} className="text-secondary" />,
        color: 'from-secondary/30 to-primary/20'
    },
    {
        title: 'Frontend Development',
        desc: 'Proficient in HTML, CSS, JavaScript, ReactJS, Bootstrap and MUI for crafting beautiful, interactive frontends.',
        icon: <Layout size={40} className="text-red-500" />,
        color: 'from-red-500/25 to-primary/15'
    },
    {
        title: 'Backend Development',
        desc: 'Experienced with Java, Spring Boot, Go, Python for backend development and proficient in MySQL and MongoDB.',
        icon: <Database size={40} className="text-gray-900 dark:text-white" />,
        color: 'from-primary/20 to-accent/20'
    },
    {
        title: 'Project Management',
        desc: 'Familiar with Jira for team collaboration, and GitHub/Bitbucket for version control.',
        icon: <Kanban size={40} className="text-primary" />,
        color: 'from-red-600/25 to-secondary/20'
    },
    {
        title: 'Testing & Automation',
        desc: 'Proficient in Postman, RestAssured, Serenity-BDD, Selenium, Cucumber for automated testing and API validation.',
        icon: <TestTube size={40} className="text-secondary dark:text-red-400" />,
        color: 'from-secondary/30 to-red-500/20'
    },
    {
        title: 'AI and R&D',
        desc: 'Familiar with Python, RAG, Pipecat, Neo4j Graph Database, MCP, MCP UI, and Grafana for building intelligent systems and dashboards.',
        icon: <Cpu size={40} className="text-red-500" />,
        color: 'from-primary/25 to-accent/15'
    },
    {
        title: 'DevOps & Cloud',
        desc: 'Experienced with Docker, Kubernetes (K8s), Jenkins, Harbor, and AWS services (e.g., S3) for CI/CD and cloud infrastructure.',
        icon: <Cloud size={40} className="text-gray-900 dark:text-white" />,
        color: 'from-red-500/25 to-secondary/20'
    }
];

const techStack = [
    {
        title: 'Languages',
        icon: Braces,
        items: ['Java', 'JavaScript', 'Python'],
        span: '',
    },
    {
        title: 'Frameworks & Libraries',
        icon: Layers,
        items: ['React.js', 'Spring Boot', 'Next.js', 'NestJS', 'FastAPI', 'Bootstrap', 'Agno', 'RAGFlow'],
        span: 'lg:col-span-2',
    },
    {
        title: 'Databases',
        icon: Database,
        items: ['MySQL', 'Neo4j', 'Oracle', 'MongoDB'],
        span: '',
    },
    {
        title: 'DevOps, Cloud & Collaboration',
        icon: Cloud,
        items: ['AWS', 'Docker', 'K8s', 'ArgoCD', 'Jenkins', 'Kafka', 'Keycloak', 'Git', 'Bitbucket', 'Jira'],
        span: 'lg:col-span-2',
    },
    {
        title: 'AI & Machine Learning',
        icon: Brain,
        items: ['Agentic AI', 'AI Agents', 'LLM Integration', 'RAG', 'MCP', 'ML', 'AI Application Development'],
        span: '',
    },
    {
        title: 'Design & Tools',
        icon: Wrench,
        items: ['Figma', 'Blender', '3D Modeling', 'Visual Studio Code', 'Postman', 'Grafana'],
        span: '',
    },
    {
        title: 'Soft Skills',
        icon: Users,
        items: ['Leadership Skills', 'Team Working'],
        span: '',
    },
];

const chipList = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.04 } },
};

const chip = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const Skills = () => {
    return (
        <section id="skills" className="relative overflow-hidden py-16 md:py-24 bg-gray-50 dark:bg-gray-950 transition-colors">
            <VideoBackground src={VIDEOS.skills} />
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <SectionHeader title="Skills" subtitle="My skills, Your success." />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillsData.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-panel rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group"
                        >
                            <div className={`absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br ${skill.color} rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`}></div>

                            <div className="mb-6 relative z-10 bg-white dark:bg-gray-800 w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 dark:border-gray-700 transition-transform duration-500 group-hover:rotate-[8deg] group-hover:scale-110 group-hover:border-primary/40">
                                {skill.icon}
                            </div>

                            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white relative z-10">{skill.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 relative z-10 leading-relaxed">{skill.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mt-24 mb-10 text-center"
                >
                    <h3 className="text-3xl md:text-4xl font-bold text-white">
                        Tech <span className="text-primary">Stack</span>
                    </h3>
                    <p className="mt-3 text-gray-400">Languages, frameworks and tools I use to ship real products.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {techStack.map(({ title, icon: Icon, items, span }, index) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                            className={`glass-panel rounded-2xl p-6 group ${span}`}
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary transition-transform duration-300 group-hover:scale-110">
                                    <Icon size={20} />
                                </div>
                                <h4 className="text-lg font-semibold text-white">{title}</h4>
                            </div>
                            <motion.ul
                                variants={chipList}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="flex flex-wrap gap-2"
                            >
                                {items.map((item) => (
                                    <motion.li
                                        key={item}
                                        variants={chip}
                                        className="px-3 py-1.5 rounded-lg text-sm text-gray-300 bg-white/5 border border-white/10 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-colors cursor-default"
                                    >
                                        {item}
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
