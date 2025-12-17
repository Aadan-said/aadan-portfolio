import Section from "./Section";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export const projects = [
    {
        title: "House Rental System",
        desc: "A platform for landlords to list properties and tenants to find homes. Features simple search and booking requests.",
        stack: ["Django", "PostgreSQL", "Bootstrap"],
        image: "/images/project-rental.png",
        live: "#",
        repo: "#",
    },
    {
        title: "School Management System",
        desc: "Admin dashboard for managing students, teachers, and grades. Includes attendance tracking and report generation.",
        stack: ["React", "Express", "MongoDB"],
        image: "/images/project-school.png",
        live: "#",
        repo: "#",
    },
    {
        title: "Event Calendar",
        desc: "Interactive calendar for scheduling events. Supports recurring events and reminders.",
        stack: ["Next.js", "FullCalendar", "Tailwind"],
        image: "/images/project-calendar.png",
        live: "#",
        repo: "#",
    },
    {
        title: "Login & Register System",
        desc: "Secure authentication system with JWT, email verification, and password reset functionality.",
        stack: ["Node.js", "Passport.js", "React"],
        image: "/images/project-auth.png",
        live: "#",
        repo: "#",
    }
];

export default function Projects() {
    return (
        <Section id="projects" className="bg-slate-900/50">
            <h2 className="text-4xl font-bold text-center mb-16">Featured <span className="text-primary">Projects</span></h2>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="group glass-card rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(56,189,248,0.1)] transition-all duration-300">
                        {/* Image Placeholder */}
                        <div className="h-48 relative overflow-hidden bg-slate-800">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                            />
                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 z-10">
                                <a href={project.live} className="px-4 py-2 bg-primary text-slate-900 rounded-full font-bold text-sm hover:scale-105 transition-transform flex items-center gap-2">
                                    <FaExternalLinkAlt /> Live Demo
                                </a>
                                <a href={project.repo} className="px-4 py-2 bg-white text-slate-900 rounded-full font-bold text-sm hover:scale-105 transition-transform flex items-center gap-2">
                                    <FaGithub /> Code
                                </a>
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                            <p className="text-slate-400 text-sm mb-4 line-clamp-2">{project.desc}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.stack.map((tech) => (
                                    <span key={tech} className="px-3 py-1 text-xs rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <Link
                                href={`/projects/${index}`} // Placeholder link
                                className="inline-block text-primary font-medium hover:underline decoration-primary underline-offset-4"
                            >
                                View Case Study →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a href="https://github.com" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-700 text-slate-300 hover:text-white hover:border-white transition-colors">
                    <FaGithub /> See more on GitHub
                </a>
            </div>
        </Section>
    );
}
