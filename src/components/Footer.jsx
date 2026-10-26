import React from 'react';
import { Github, Linkedin, Heart, Mail, Phone } from 'lucide-react';
import TerminalToon from './TerminalToon';

const QUICK_LINKS = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Contact', href: '#contact' },
];

const SOCIAL_CLASS = "p-2 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-colors";

const Footer = () => {
    return (
        <footer className="bg-gray-950 pt-10 pb-6 border-t border-gray-800">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,26rem)_1fr] items-center gap-10 lg:gap-12">

                    <div className="text-center lg:text-left space-y-3">
                        <a href="#home" aria-label="Amal Shalinda - Home" className="inline-block font-signature text-4xl text-white hover:text-primary transition-colors leading-none py-1">
                            Amal Shalinda
                        </a>
                        <p className="text-sm text-gray-400 max-w-xs mx-auto lg:mx-0 leading-relaxed">
                            Software engineer building secure, scalable products, one commit (and one coffee) at a time.
                        </p>
                        <div className="flex justify-center lg:justify-start gap-2 pt-1">
                            <a href="https://github.com/Shalinda99" target="_blank" rel="noreferrer" aria-label="GitHub" className={SOCIAL_CLASS}>
                                <Github size={18} />
                            </a>
                            <a href="https://www.linkedin.com/in/amal-shalinda-188885231/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className={SOCIAL_CLASS}>
                                <Linkedin size={18} />
                            </a>
                            <a href="mailto:amalshalinda1999@gmail.com" aria-label="Email" className={SOCIAL_CLASS}>
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>

                    <TerminalToon />

                    <div className="grid grid-cols-1 sm:grid-cols-[auto_auto] justify-center gap-8 text-center sm:text-left lg:justify-self-end">
                        <div>
                            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-3">Explore</h4>
                            <ul className="flex flex-wrap justify-center gap-x-4 sm:block sm:space-y-1">
                                {QUICK_LINKS.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="inline-block py-1 text-sm text-gray-400 hover:text-primary transition-colors">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-3">Contact</h4>
                            <ul className="space-y-1 text-sm text-gray-400">
                                <li>
                                    <a href="mailto:amalshalinda1999@gmail.com" className="inline-flex items-center gap-2 py-1 break-all sm:whitespace-nowrap sm:break-normal hover:text-primary transition-colors">
                                        <Mail size={14} className="shrink-0" /> amalshalinda1999@gmail.com
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+94703603922" className="inline-flex items-center gap-2 py-1 whitespace-nowrap hover:text-primary transition-colors">
                                        <Phone size={14} className="shrink-0" /> +94 70 360 3922
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="mt-8 pt-5 border-t border-gray-900 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
                    <span>&copy; {new Date().getFullYear()} Amal Shalinda. All Rights Reserved.</span>
                    <span className="inline-flex items-center">
                        Designed & Built with <Heart size={14} className="text-primary fill-primary mx-1 animate-pulse" /> by Amal Shalinda
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
