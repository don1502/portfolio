import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import SpiderCursor from './SpiderCursor';

const Hero: React.FC = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            <SpiderCursor />

            {/* Background Elements */}
            <div className="absolute inset-0 bg-spiderman-web opacity-80 z-0"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900 z-0"></div>

            {/* Decorative Webs */}
            <div className="absolute top-0 left-0 w-64 h-64 opacity-30 pointer-events-none">
                <svg viewBox="0 0 100 100" fill="none" stroke="rgba(249, 249, 249, 0.7)" strokeWidth="0.5">
                    <path d="M0 0 Q 50 50 100 0 M0 0 Q 50 50 0 100 M0 0 L 100 100" />
                    <circle cx="0" cy="0" r="20" />
                    <circle cx="0" cy="0" r="40" />
                    <circle cx="0" cy="0" r="60" />
                    <circle cx="0" cy="0" r="80" />
                </svg>
            </div>
            <div className="absolute bottom-0 right-0 w-96 h-96 opacity-30 pointer-events-none rotate-180">
                <svg viewBox="0 0 100 100" fill="none" stroke="rgba(241, 241, 241, 0.7)" strokeWidth="0.5">
                    <path d="M0 0 Q 50 50 100 0 M0 0 Q 50 50 0 100 M0 0 L 100 100" />
                    <circle cx="0" cy="0" r="20" />
                    <circle cx="0" cy="0" r="40" />
                    <circle cx="0" cy="0" r="60" />
                    <circle cx="0" cy="0" r="80" />
                </svg>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                <div className="animate-fade-in-down flex flex-col items-center">

                    {/* Image Placeholder */}
                    <div className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-spiderman-red/50 shadow-2xl shadow-spiderman-blue/20 mb-8 overflow-hidden relative group">
                        <div className="absolute inset-0 bg-slate-800 flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                            <span className="text-gray-500 text-sm font-medium">Add Image Here</span>
                        </div>
                        {/* <img src="/path/to/image.jpg" alt="Profile" className="w-full h-full object-cover" /> */}
                    </div>

                    <h2 className="text-spiderman-blue font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
                        Portfolio
                    </h2>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-header font-bold text-white mb-6 tracking-tight">
                        <span className="text-spiderman-red inline-block hover:animate-spider-sense cursor-default">HI, I'M DON CHRIST G.</span> <br />
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 font-light">
                        Your Friendly Neighborhood <span className="text-spiderman-blue font-semibold">Software Developer</span>.
                        Building web apps, AI models, and saving the web one line of code at a time.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-spiderman-red text-white font-bold rounded-full hover:bg-red-700 transition-all duration-300 shadow-lg shadow-spiderman-red/30 hover:shadow-spiderman-red/50 uppercase tracking-wide"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 border-2 border-spiderman-blue text-spiderman-blue hover:text-white hover:bg-spiderman-blue font-bold rounded-full transition-all duration-300 uppercase tracking-wide"
                        >
                            Contact Me
                        </a>
                    </div>

                    <div className="mt-12 flex justify-center space-x-6">
                        <SocialLink href="https://github.com/don1502" icon={<Github size={24} />} label="GitHub" />
                        <SocialLink href="https://www.linkedin.com/in/don-gomez-759515290/" icon={<Linkedin size={24} />} label="LinkedIn" />
                        <SocialLink href="mailto:dongomez1502@gmail.com" icon={<Mail size={24} />} label="Email" />
                        {/* Resume Link - Placeholder for now or direct link if hosted */}
                        <SocialLink href="#" icon={<FileText size={24} />} label="Resume" />
                    </div>
                </div>
            </div>
        </section>
    );
};

interface SocialLinkProps {
    href: string;
    icon: React.ReactNode;
    label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="text-gray-400 hover:text-spiderman-red transform hover:scale-110 transition-all duration-300"
    >
        {icon}
    </a>
);

export default Hero;
