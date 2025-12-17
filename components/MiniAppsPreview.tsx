import Section from "./Section";
import Link from "next/link";
import { FaKey, FaSortAmountDown, FaList, FaNetworkWired, FaArrowRight } from "react-icons/fa";

const tools = [
    {
        id: "password-generator",
        title: "Password Gen",
        desc: "Generate cryptographically secure passwords instantly.",
        icon: <FaKey />,
        color: "from-pink-500 to-rose-600",
        shadow: "shadow-pink-500/20",
        bg: "bg-pink-500/10",
        border: "group-hover:border-pink-500/50"
    },
    {
        id: "algo-visualizer",
        title: "Algo Visualizer",
        desc: "Visualize complex sorting algorithms in real-time.",
        icon: <FaSortAmountDown />,
        color: "from-blue-500 to-cyan-600",
        shadow: "shadow-blue-500/20",
        bg: "bg-blue-500/10",
        border: "group-hover:border-blue-500/50"
    },
    {
        id: "todo-app",
        title: "Smart Tasker",
        desc: "Manage tasks with prioritization and local storage.",
        icon: <FaList />,
        color: "from-emerald-500 to-green-600",
        shadow: "shadow-emerald-500/20",
        bg: "bg-emerald-500/10",
        border: "group-hover:border-emerald-500/50"
    },
    {
        id: "api-tester",
        title: "API Tester",
        desc: "Test REST endpoints and inspect JSON responses.",
        icon: <FaNetworkWired />,
        color: "from-violet-500 to-purple-600",
        shadow: "shadow-violet-500/20",
        bg: "bg-violet-500/10",
        border: "group-hover:border-violet-500/50"
    },
];

export default function MiniAppsPreview() {
    return (
        <Section id="tools">
            <div className="mb-16 text-center space-y-4">
                <span className="inline-block py-1.5 px-4 rounded-full bg-slate-800 text-slate-300 text-xs font-bold uppercase tracking-widest border border-slate-700">
                    Playground
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                    Interactive <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-red-500">Mini Apps</span>
                </h2>
                <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-lg">
                    A collection of functional tools built to demonstrate state management, logic, and modern UI patterns.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {tools.map((tool) => (
                    <Link
                        href={`/tools/${tool.id}`}
                        key={tool.id}
                        className={`group relative flex flex-col h-full bg-slate-900/50 backdrop-blur-sm rounded-3xl p-6 border border-slate-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${tool.shadow} ${tool.border}`}
                    >
                        {/* Icon Header */}
                        <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${tool.color} flex items-center justify-center text-white text-2xl mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                            {tool.icon}
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                            {tool.title}
                        </h3>

                        <p className="text-slate-400 text-sm mb-6 grow leading-relaxed">
                            {tool.desc}
                        </p>

                        <div className={`p-3 rounded-xl ${tool.bg} flex items-center justify-between group-hover:opacity-100 transition-opacity`}>
                            <span className="text-xs font-bold text-slate-300 uppercase tracking-wide">Launch App</span>
                            <div className={`w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center transform group-hover:-rotate-45 transition-transform duration-300`}>
                                <FaArrowRight size={12} />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </Section>
    );
}
