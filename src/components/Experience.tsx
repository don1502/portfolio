import React from 'react';
import { Briefcase } from 'lucide-react';

interface ExperienceItem {
    company: string;
    role: string;
    period: string;
    description: string[];
}

const Experience: React.FC = () => {
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
                    {/* Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-spiderman-red via-spiderman-blue to-spiderman-red"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center w-full`}>

                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-slate-900 border-4 border-spiderman-red rounded-full z-20 flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>

                                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                                    <div className={`bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-spiderman-blue transition-all duration-300 hover:shadow-lg hover:shadow-spiderman-blue/10 relative ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>

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

export default Experience;
