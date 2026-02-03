import React from 'react';

interface SkillCategory {
    title: string;
    skills: string[];
}

const Skills: React.FC = () => {
    const skillCategories: SkillCategory[] = [
        {
            title: "Languages",
            skills: ["Python", "JavaScript", "Java", "HTML", "CSS", "SQL"]
        },
        {
            title: "Frameworks & Libraries",
            skills: ["React.js", "Node.js", "Express", "PyTorch", "TensorFlow", "Keras", "Tailwind CSS", "Scikit-learn"]
        },
        {
            title: "Tools & Platforms",
            skills: ["Git & GitHub", "PostgreSQL", "MySQL", "Power BI", "REST APIs"]
        },
        {
            title: "Soft Skills",
            skills: ["Leadership", "Communication", "Problem Solving", "Time Management"]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-slate-900 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-header font-bold text-white mb-4">
                        MY <span className="text-spiderman-red">SUPERPOWERS</span>
                    </h2>
                    <div className="h-1 w-20 bg-spiderman-blue mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-spiderman-blue transition-all duration-300 hover:shadow-lg hover:shadow-spiderman-blue/20 group"
                        >
                            <h3 className="text-xl font-bold text-spiderman-blue mb-4 group-hover:text-spiderman-red transition-colors">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-slate-700/50 text-gray-300 text-sm rounded-full border border-slate-600 hover:border-spiderman-red hover:text-white transition-all duration-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
