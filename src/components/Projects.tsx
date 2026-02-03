import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
    title: string;
    description: string;
    tags: string[];
    github: string;
    demo: string | null;
    image: string;
}

const Projects: React.FC = () => {
    const projects: Project[] = [
        {
            title: "E-Commerce Web App",
            description: "Full-stack platform built with React & Node.js using PostgreSQL. Features optimized schema design and secure CRUD operations.",
            tags: ["React", "Node.js", "PostgreSQL", "Express"],
            github: "https://github.com/don1502/E-commerce",
            demo: null,
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" // Placeholder
        },
        {
            title: "LLM from Scratch",
            description: "Built and fine-tuned a Large Language Model using PyTorch with custom training loops, implementing transformers and attention mechanisms.",
            tags: ["Python", "PyTorch", "Transformers", "AI"],
            github: "https://github.com/don1502/LLM-Scratch",
            demo: null,
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" // Placeholder
        },
        {
            title: "Voice-to-Text Application",
            description: "Real-time speech-to-text app with multi-language support. Built with React, Tailwind, and integrated MySQL for data storage.",
            tags: ["React", "Tailwind", "MySQL", "Speech API"],
            github: "https://github.com/don1502/VOICE-TEXT",
            demo: null,
            image: "https://i.pinimg.com/736x/ce/11/4b/ce114b1e553511f1cbfa1d7ae3e428a1.jpg" // Placeholder
        }
    ];

    return (
        <section id="projects" className="py-20 bg-slate-900 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-header font-bold text-white mb-4">
                        WEB <span className="text-spiderman-red">SLINGING</span> PROJECTS
                    </h2>
                    <div className="h-1 w-20 bg-spiderman-blue mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-spiderman-red transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl hover:shadow-spiderman-red/20"
                        >
                            <div className="relative overflow-hidden h-48">
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10 opacity-60"></div>
                                {/* Fallback pattern if image fails to load or for style */}
                                <div className="w-full h-full bg-slate-700 flex items-center justify-center">
                                    {project.image ? (
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                                    ) : (
                                        <div className="text-slate-500 font-bold text-4xl">?</div>
                                    )}
                                </div>
                            </div>

                            <div className="p-6 relative z-10">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-spiderman-blue transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 h-20 overflow-hidden">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="text-xs font-medium text-spiderman-blue bg-spiderman-blue/10 px-2 py-1 rounded">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                                    >
                                        <Github size={18} />
                                        <span>Code</span>
                                    </a>
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-2 text-spiderman-red hover:text-red-400 transition-colors"
                                        >
                                            <ExternalLink size={18} />
                                            <span>Live Demo</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
