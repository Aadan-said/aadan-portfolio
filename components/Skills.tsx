import Section from "./Section";
import { FaCode, FaServer, FaDatabase, FaTools, FaLaptopCode, FaMobileAlt, FaCloud, FaBrain } from "react-icons/fa";

const skills = [
    {
        category: "Languages",
        icon: <FaCode className="text-4xl mb-4 text-blue-400" />,
        items: ["JavaScript (ES6+)", "Python", "Dart", "TypeScript", "SQL", "C++"],
        color: "group-hover:border-blue-500/50"
    },
    {
        category: "Frontend",
        icon: <FaLaptopCode className="text-4xl mb-4 text-cyan-400" />,
        items: ["React", "Next.js 15", "Tailwind CSS 4", "Framer Motion", "Shadcn UI"],
        color: "group-hover:border-cyan-500/50"
    },
    {
        category: "Backend",
        icon: <FaServer className="text-4xl mb-4 text-green-400" />,
        items: ["Django", "Node.js", "Express", "REST APIs", "PostgreSQL", "Firebase"],
        color: "group-hover:border-green-500/50"
    },
    {
        category: "Mobile & Core",
        icon: <FaMobileAlt className="text-4xl mb-4 text-purple-400" />,
        items: ["Flutter", "React Native", "Data Structures", "Algorithms", "Git/GitHub"],
        color: "group-hover:border-purple-500/50"
    },
];

export default function Skills() {
    return (
        <Section id="skills" className="bg-slate-950/30">

            <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
                    Technical <span className="text-primary">Skills</span>
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                    A comprehensive toolkit that enables me to build scalable, high-performance applications from the ground up.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {skills.map((skill, index) => (
                    <div
                        key={skill.category}
                        className={`p-8 rounded-3xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5 group ${skill.color}`}
                    >
                        {/* Header */}
                        <div className="flex flex-col items-center text-center mb-8">
                            <div className="p-3 bg-slate-800/50 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                {skill.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                                {skill.category}
                            </h3>
                            <div className="w-12 h-1 bg-slate-800 rounded-full mt-4 group-hover:bg-primary/50 transition-colors"></div>
                        </div>

                        {/* Skills Tags */}
                        <div className="flex flex-wrap justify-center gap-2">
                            {skill.items.map((item) => (
                                <span
                                    key={item}
                                    className="px-3 py-1.5 text-xs font-semibold text-slate-300 bg-slate-800/80 rounded-lg border border-slate-700/50 hover:text-white hover:border-primary/30 hover:bg-primary/10 transition-all cursor-default"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
