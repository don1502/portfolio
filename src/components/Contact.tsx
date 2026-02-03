import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-black relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-header font-bold text-white mb-4">
                        ASSEMBLE <span className="text-spiderman-red">YOUR TEAM</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Ready to collaborate on the next big project? Send a signal (or just an email).
                    </p>
                </div>

                <div className="max-w-3xl mx-auto bg-slate-800/50 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm shadow-xl">
                    <div className="text-center space-y-8">
                        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                            <a href="mailto:dongomez1502@gmail.com" className="flex flex-col items-center group">
                                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mb-4 group-hover:bg-spiderman-red transition-colors duration-300">
                                    <Mail size={32} className="text-white" />
                                </div>
                                <span className="text-gray-300 group-hover:text-white transition-colors">dongomez1502@gmail.com</span>
                            </a>

                            <a href="https://www.linkedin.com/in/don-gomez-759515290/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mb-4 group-hover:bg-spiderman-blue transition-colors duration-300">
                                    <Linkedin size={32} className="text-white" />
                                </div>
                                <span className="text-gray-300 group-hover:text-white transition-colors">LinkedIn</span>
                            </a>

                            <a href="https://github.com/don1502" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mb-4 group-hover:bg-gray-900 transition-colors duration-300">
                                    <Github size={32} className="text-white" />
                                </div>
                                <span className="text-gray-300 group-hover:text-white transition-colors">GitHub</span>
                            </a>
                        </div>

                        <div className="pt-8 border-t border-slate-700">
                            <p className="text-gray-500 text-sm">
                                &copy; {new Date().getFullYear()} Don Christ G. All rights reserved. <br />
                                Built with <span className="text-spiderman-red">React</span> & <span className="text-spiderman-blue">Tailwind</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
