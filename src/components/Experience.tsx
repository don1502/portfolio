import React from 'react';
import { Briefcase } from 'lucide-react';

interface ExperienceItem {
    company: string;
    role: string;
    period: string;
    description: string[];
}

const ExperienceContent: React.FC = () => {
    const experiences: ExperienceItem[] = [
        {
            company: "JGX Technologies",
            role: "Software Developer Intern",
            period: "Apr 2025 – Sep 2025",
            description: [
                "Contributed to building Ficodo, a SaaS hospital management system.",
                "Developed frontend and backend features to manage appointments and workflows.",
                "Worked on database design and backend logic for scalability."
            ]
        },
        {
            company: "7Eagles",
            role: "Web Developer Intern",
            period: "Nov 2024 – Dec 2024",
            description: [
                "Built and optimized responsive web applications using React.js, HTML, and CSS.",
                "Collaborated with designers to improve UI consistency.",
                "Integrated frontend components with backend APIs."
            ]
        },
        {
            company: "Prodigy Info Tech",
            role: "Front-end Developer Intern",
            period: "June 2024",
            description: [
                "Developed reusable and modular front-end components using React.js and JavaScript.",
                "Enhanced UI/UX by improving layouts and component hierarchy.",
                "Maintained clean, scalable, and maintainable UI code."
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 bg-slate-900 relative overflow-hidden">
            {/* Spider web decorative element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-spiderman-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-header font-bold text-white mb-4">
                        MY <span className="text-spiderman-blue">JOURNEY</span>
                    </h2>
                    <div className="h-1 w-20 bg-spiderman-red mx-auto rounded-full"></div>
                </div>

                <div className="relative">
                    {/* Amazing Spiderman Style Web - Full Height */}
                    <svg
                        className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-12 z-0"
                        preserveAspectRatio="none"
                        viewBox="0 0 30 100"
                    >
                        <defs>
                            <linearGradient id="amazingWebGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                                <stop offset="40%" stopColor="rgba(255,255,255,0.9)" />
                                <stop offset="60%" stopColor="rgba(255,255,255,0.9)" />
                                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                            </linearGradient>
                            <filter id="amazingWebGlow" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="1" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                        </defs>

                        {/* Main thick web strand */}
                        <path
                            d="M15 0 C 17 5 13 10 15 15 C 17 20 13 25 15 30 C 17 35 13 40 15 45 C 17 50 13 55 15 60 C 17 65 13 70 15 75 C 17 80 13 85 15 90 C 17 95 13 100 15 100"
                            stroke="url(#amazingWebGradient)"
                            strokeWidth="2"
                            fill="none"
                            filter="url(#amazingWebGlow)"
                            opacity="0.9"
                        />

                        {/* Thin side strands - twisted rope effect */}
                        <path
                            d="M14 0 C 12 8 18 16 14 24 C 10 32 18 40 14 48 C 10 56 18 64 14 72 C 10 80 18 88 14 96"
                            stroke="rgba(255,255,255,0.5)"
                            strokeWidth="0.8"
                            fill="none"
                        />
                        <path
                            d="M16 0 C 20 8 10 16 16 24 C 22 32 10 40 16 48 C 22 56 10 64 16 72 C 22 80 10 88 16 96"
                            stroke="rgba(255,255,255,0.5)"
                            strokeWidth="0.8"
                            fill="none"
                        />

                        {/* Highlights */}
                        <path
                            d="M15 0 L15 100"
                            stroke="rgba(255,255,255,0.3)"
                            strokeWidth="3"
                            fill="none"
                            strokeLinecap="round"
                        />
                    </svg>

                    {/* The Amazing Spiderman 2 - Hanging with Webs */}
                    <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 top-0 z-30">
                        {/* Braided Web to "My Journey" title */}
                        <svg className="absolute -top-20 -left-40 w-48 h-28 overflow-visible" viewBox="0 0 200 120">
                            <defs>
                                <linearGradient id="braidedWebGradient" x1="100%" y1="100%" x2="0%" y2="0%">
                                    <stop offset="0%" stopColor="rgba(255,255,255,1)" />
                                    <stop offset="50%" stopColor="rgba(220,220,255,0.8)" />
                                    <stop offset="100%" stopColor="rgba(255,255,255,0.3)" />
                                </linearGradient>
                                <filter id="webShine">
                                    <feGaussianBlur stdDeviation="0.8" result="blur" />
                                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                </filter>
                            </defs>
                            {/* Braided silk strands */}
                            <path d="M200 120 Q 150 90 100 60 Q 50 30 0 0" stroke="url(#braidedWebGradient)" strokeWidth="2.5" fill="none" filter="url(#webShine)" />
                            <path d="M200 118 Q 148 92 98 62 Q 48 32 0 3" stroke="rgba(255,255,255,0.5)" strokeWidth="1" fill="none" />
                            <path d="M200 122 Q 152 88 102 58 Q 52 28 0 -2" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" fill="none" />
                        </svg>

                        {/* Braided Web going down */}
                        <svg className="absolute left-1/2 -translate-x-1/2 top-36 w-4 h-[600px]" viewBox="0 0 10 600" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="verticalWebGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
                                    <stop offset="50%" stopColor="rgba(255,255,255,0.6)" />
                                    <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
                                </linearGradient>
                            </defs>
                            <path d="M5 0 Q 7 50 3 100 Q 7 150 5 200 Q 3 250 7 300 Q 3 350 5 400 Q 7 450 3 500 Q 7 550 5 600" stroke="url(#verticalWebGrad)" strokeWidth="2" fill="none" />
                            <path d="M4 0 Q 2 50 6 100 Q 2 150 4 200" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" fill="none" />
                        </svg>

                        <div className="animate-bounce-slow origin-top flex flex-col items-center pt-2">
                            {/* TASM 2 Spiderman - Realistic Athletic Build */}
                            <svg width="120" height="180" viewBox="0 0 120 180" fill="none" className="drop-shadow-2xl transform rotate-180">
                                <defs>
                                    <linearGradient id="suitRed" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#E23636" />
                                        <stop offset="50%" stopColor="#c41e1e" />
                                        <stop offset="100%" stopColor="#E23636" />
                                    </linearGradient>
                                    <linearGradient id="suitBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#0a1128" />
                                        <stop offset="50%" stopColor="#1a2456" />
                                        <stop offset="100%" stopColor="#0a1128" />
                                    </linearGradient>
                                    <pattern id="hexPattern" patternUnits="userSpaceOnUse" width="6" height="5">
                                        <path d="M3 0 L6 1.5 L6 3.5 L3 5 L0 3.5 L0 1.5 Z" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="0.3" />
                                    </pattern>
                                </defs>

                                {/* Athletic Legs - Slim */}
                                <path d="M42 145 Q 38 160 35 180" stroke="url(#suitBlue)" strokeWidth="12" strokeLinecap="round" fill="none" />
                                <path d="M78 145 Q 82 160 85 180" stroke="url(#suitBlue)" strokeWidth="12" strokeLinecap="round" fill="none" />

                                {/* Torso - Slim Athletic Build */}
                                <ellipse cx="60" cy="105" rx="26" ry="42" fill="url(#suitRed)" />
                                {/* Honeycomb texture overlay */}
                                <ellipse cx="60" cy="105" rx="26" ry="42" fill="url(#hexPattern)" opacity="0.4" />

                                {/* Blue Side Panels - TASM style */}
                                <path d="M34 70 Q 28 105 34 140" stroke="url(#suitBlue)" strokeWidth="10" fill="none" />
                                <path d="M86 70 Q 92 105 86 140" stroke="url(#suitBlue)" strokeWidth="10" fill="none" />

                                {/* Elongated Spider Emblem - TASM signature */}
                                <ellipse cx="60" cy="95" rx="6" ry="8" fill="#0a1128" />
                                {/* Long thin spider legs */}
                                <path d="M54 95 L38 82" stroke="#0a1128" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M54 95 L35 95" stroke="#0a1128" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M54 95 L38 108" stroke="#0a1128" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M54 95 L42 118" stroke="#0a1128" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M66 95 L82 82" stroke="#0a1128" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M66 95 L85 95" stroke="#0a1128" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M66 95 L82 108" stroke="#0a1128" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M66 95 L78 118" stroke="#0a1128" strokeWidth="1.5" strokeLinecap="round" />

                                {/* Left Arm - Web shooter pose to title */}
                                <path d="M36 75 Q 18 55 0 40" stroke="url(#suitRed)" strokeWidth="10" strokeLinecap="round" fill="none" />
                                <circle cx="0" cy="40" r="6" fill="url(#suitRed)" />
                                <path d="M-2 38 L-6 34" stroke="#0a1128" strokeWidth="1" />
                                <path d="M0 36 L0 30" stroke="#0a1128" strokeWidth="1" />
                                <path d="M2 38 L6 34" stroke="#0a1128" strokeWidth="1" />

                                {/* Right Arm - Reaching down */}
                                <path d="M84 75 Q 102 95 120 115" stroke="url(#suitRed)" strokeWidth="10" strokeLinecap="round" fill="none" />
                                <circle cx="120" cy="115" r="6" fill="url(#suitRed)" />
                                <path d="M118 113 L114 109" stroke="#0a1128" strokeWidth="1" />
                                <path d="M120 111 L120 105" stroke="#0a1128" strokeWidth="1" />
                                <path d="M122 113 L126 109" stroke="#0a1128" strokeWidth="1" />

                                {/* Head/Mask - TASM 2 Style */}
                                <ellipse cx="60" cy="35" rx="24" ry="28" fill="url(#suitRed)" />
                                <ellipse cx="60" cy="35" rx="24" ry="28" fill="url(#hexPattern)" opacity="0.3" />

                                {/* Dense Web Pattern on Mask */}
                                <path d="M60 7 L60 63" stroke="#0a1128" strokeWidth="1" opacity="0.6" />
                                <path d="M36 35 L84 35" stroke="#0a1128" strokeWidth="1" opacity="0.6" />
                                <path d="M40 12 Q 60 35 80 12" stroke="#0a1128" strokeWidth="0.6" fill="none" opacity="0.5" />
                                <path d="M38 20 Q 60 35 82 20" stroke="#0a1128" strokeWidth="0.6" fill="none" opacity="0.5" />
                                <path d="M36 50 Q 60 35 84 50" stroke="#0a1128" strokeWidth="0.6" fill="none" opacity="0.5" />
                                <path d="M38 58 Q 60 35 82 58" stroke="#0a1128" strokeWidth="0.6" fill="none" opacity="0.5" />
                                <path d="M42 27 Q 60 35 78 27" stroke="#0a1128" strokeWidth="0.6" fill="none" opacity="0.5" />
                                <path d="M42 43 Q 60 35 78 43" stroke="#0a1128" strokeWidth="0.6" fill="none" opacity="0.5" />

                                {/* TASM 2 Eyes - Very Large, Bug-Eyed */}
                                <path d="M36 28 Q 45 14 56 32 Q 48 50 36 42 Z" fill="white" stroke="#0a1128" strokeWidth="2.5" />
                                <path d="M84 28 Q 75 14 64 32 Q 72 50 84 42 Z" fill="white" stroke="#0a1128" strokeWidth="2.5" />

                                {/* Eye reflections */}
                                <path d="M42 26 Q 48 22 52 28" stroke="rgba(200,230,255,0.5)" strokeWidth="2" fill="none" />
                                <path d="M78 26 Q 72 22 68 28" stroke="rgba(200,230,255,0.5)" strokeWidth="2" fill="none" />
                                <ellipse cx="46" cy="32" rx="4" ry="3" fill="rgba(200,220,255,0.2)" />
                                <ellipse cx="74" cy="32" rx="4" ry="3" fill="rgba(200,220,255,0.2)" />
                            </svg>
                        </div>

                        {/* Braided Web to section bottom */}
                        <svg className="absolute top-40 left-6 w-56 h-[550px] overflow-visible" viewBox="0 0 220 550">
                            <defs>
                                <linearGradient id="webToBottomBraid" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                                    <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
                                </linearGradient>
                            </defs>
                            <path d="M0 0 Q 60 120 110 240 Q 160 360 200 500" stroke="url(#webToBottomBraid)" strokeWidth="2" fill="none" />
                            <path d="M3 2 Q 63 118 113 238 Q 163 358 203 498" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" fill="none" />
                            <path d="M-2 -2 Q 58 122 108 242 Q 158 362 198 502" stroke="rgba(255,255,255,0.25)" strokeWidth="0.6" fill="none" />
                        </svg>
                    </div>

                    <div className="space-y-12 pt-48">
                        {experiences.map((exp, index) => (
                            <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center w-full`}>

                                {/* Timeline Dot */}
                                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-slate-900 border-3 border-spiderman-red rounded-full z-20 flex items-center justify-center shadow-lg shadow-spiderman-red/30">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>

                                {/* Card - Offset from center */}
                                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'} pl-16 md:pl-0`}>
                                    <div className={`bg-slate-800/90 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-spiderman-blue transition-all duration-300 hover:shadow-xl hover:shadow-spiderman-blue/20 hover:scale-105 transform cursor-pointer relative ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>

                                        <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                                            <Briefcase size={18} className="text-spiderman-red" />
                                            <h4 className="text-lg font-bold text-white">{exp.company}</h4>
                                        </div>

                                        <h5 className="text-spiderman-blue font-medium mb-1">{exp.role}</h5>
                                        <p className="text-sm text-gray-400 mb-4">{exp.period}</p>

                                        <ul className={`list-disc list-inside space-y-1 text-gray-300 text-sm ${index % 2 === 0 ? '' : 'md:[&>li]:text-right md:list-none'}`}>
                                            {exp.description.map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const styles = `
    @keyframes bounce-slow {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-8px); }
    }
    .animate-bounce-slow {
        animation: bounce-slow 4s infinite ease-in-out;
    }
`;

const Experience: React.FC = () => {
    return (
        <>
            <style>{styles}</style>
            <ExperienceContent />
        </>
    );
}

export default Experience;
