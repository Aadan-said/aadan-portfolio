import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaCode } from "react-icons/fa";
import { projects } from "../../../components/Projects";

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const projectIndex = parseInt(id);
    const project = projects[projectIndex];

    if (!project) {
        return (
            <div className="min-h-screen pt-32 flex flex-col items-center justify-center text-white">
                <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                <Link href="/#projects" className="text-primary hover:underline">
                    Back to Projects
                </Link>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-slate-950 text-white pb-20">
            {/* Hero Section with Blurred Background */}
            <div className="relative h-[60vh] min-h-[500px] w-full flex items-end">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover opacity-30 blur-sm"
                        priority
                    />
                    <div className="absolute inset-0 bg-linear-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/30" />
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pb-16">
                    <Link
                        href="/#projects"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors group"
                    >
                        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Projects
                    </Link>

                    <h1 className="text-5xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-linear-to-r from-white to-slate-400">
                        {project.title}
                    </h1>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-primary text-slate-900 rounded-lg font-bold hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all flex items-center gap-2"
                        >
                            <FaExternalLinkAlt /> Live Demo
                        </a>
                        <a
                            href={project.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-slate-800/80 backdrop-blur text-white rounded-lg font-bold hover:bg-slate-700 transition-all flex items-center gap-2 border border-slate-700"
                        >
                            <FaGithub /> Source Code
                        </a>
                    </div>
                </div>
            </div>

            {/* Content Grid */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 -mt-10 relative z-20">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Featured Image */}
                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-800 group">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-60" />
                        </div>

                        {/* Overview */}
                        <div className="bg-slate-900/50 backdrop-blur p-8 rounded-2xl border border-slate-800">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <span className="w-1 h-8 bg-primary rounded-full"></span>
                                Overview
                            </h2>
                            <p className="text-lg text-slate-300 leading-relaxed">
                                {project.desc}
                            </p>
                        </div>

                        {/* Problem & Solution (Mock content for now as data isn't deep yet) */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-slate-900/30 p-8 rounded-2xl border border-slate-800/50">
                                <h3 className="text-xl font-bold text-white mb-3">The Challenge</h3>
                                <p className="text-slate-400">
                                    Addressing the need for a streamlined solution in this domain, focusing on efficiency and user experience.
                                </p>
                            </div>
                            <div className="bg-slate-900/30 p-8 rounded-2xl border border-slate-800/50">
                                <h3 className="text-xl font-bold text-white mb-3">The Solution</h3>
                                <p className="text-slate-400">
                                    Leveraging modern technologies to build a robust, scalable backend and an intuitive frontend interface.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Tech Stack */}
                        <div className="bg-slate-900/50 backdrop-blur p-6 rounded-2xl border border-slate-800 sticky top-24">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <FaCode className="text-primary" /> Technologies
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-2 text-sm rounded-lg bg-slate-950 text-primary border border-slate-800 font-medium hover:border-primary/50 transition-colors cursor-default"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-8 pt-8 border-t border-slate-800">
                                <h4 className="font-bold mb-4 text-slate-300">Project Info</h4>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-500 flex items-center gap-2"><FaCalendarAlt /> Year</span>
                                        <span className="text-white">2024</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-500">Role</span>
                                        <span className="text-white">Full Stack Developer</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-500">Status</span>
                                        <span className="text-green-400 font-medium">Completed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
