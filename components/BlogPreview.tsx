import Section from "./Section";
import Link from "next/link";
import { FaArrowRight, FaCalendarAlt, FaClock } from "react-icons/fa";

const articles = [
    {
        slug: "what-is-oop",
        title: "Object Oriented Programming (OOP) Simplified",
        excerpt: "A deep dive into OOP concepts using real-world analogies like cars and blueprints to make it efficient.",
        date: "Dec 15, 2024",
        readTime: "5 min read",
        category: "Concepts",
        categoryColor: "text-pink-400 bg-pink-400/10 border-pink-400/20"
    },
    {
        slug: "django-auth-system",
        title: "Building a Secure Auth System with Django",
        excerpt: "Step-by-step guide to implementing secure user authentication, JWT tokens, and permission classes.",
        date: "Nov 28, 2024",
        readTime: "8 min read",
        category: "Backend",
        categoryColor: "text-green-400 bg-green-400/10 border-green-400/20"
    },
    {
        slug: "nextjs-app-router",
        title: "Mastering the Next.js App Router",
        excerpt: "Understanding server components, layouts, and the new data fetching paradigms in Next.js 13+.",
        date: "Oct 10, 2024",
        readTime: "6 min read",
        category: "Frontend",
        categoryColor: "text-blue-400 bg-blue-400/10 border-blue-400/20"
    }
];

export default function BlogPreview() {
    return (
        <Section id="blog" className="bg-slate-900/30">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div className="text-center md:text-left">
                    <span className="inline-block py-1 px-3 rounded-full bg-slate-800 text-slate-300 text-xs font-bold uppercase tracking-widest border border-slate-700 mb-4">
                        From the Desktop
                    </span>
                    <h2 className="text-4xl font-bold bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
                        Technical <span className="text-primary">Writings</span>
                    </h2>
                    <p className="text-slate-400 mt-2 max-w-xl">
                        Thoughts on software architecture, clean code, and new technologies.
                    </p>
                </div>
                <Link href="/blog" className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full border border-slate-700 text-slate-300 font-medium hover:bg-white hover:text-slate-900 transition-all group">
                    View All Articles <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {articles.map((post) => (
                    <Link
                        href={`/blog/${post.slug}`}
                        key={post.slug}
                        className="group flex flex-col bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                    >
                        {/* Card Header (Optional Image Area or just Design) */}
                        <div className="h-2 bg-linear-to-r from-slate-800 to-slate-900 group-hover:from-primary group-hover:to-secondary transition-all duration-500"></div>

                        <div className="p-8 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-6">
                                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${post.categoryColor}`}>
                                    {post.category}
                                </span>
                                <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
                                    <FaClock className="text-slate-600" /> {post.readTime}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-primary transition-colors">
                                {post.title}
                            </h3>

                            <p className="text-slate-400 text-sm mb-8 leading-relaxed line-clamp-3 grow">
                                {post.excerpt}
                            </p>

                            <div className="flex items-center justify-between pt-6 border-t border-slate-800 text-sm">
                                <span className="flex items-center gap-2 text-slate-500">
                                    <FaCalendarAlt /> {post.date}
                                </span>
                                <span className="text-primary font-medium flex items-center gap-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                    Read Article <FaArrowRight />
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="md:hidden mt-10 text-center">
                <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 text-white font-bold hover:bg-primary hover:text-slate-900 transition-all">
                    View All Articles <FaArrowRight />
                </Link>
            </div>
        </Section>
    );
}
