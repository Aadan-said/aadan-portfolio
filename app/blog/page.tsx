import Section from "../../components/Section";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

import { articles } from "../../data/articles";

export default function BlogIndex() {
    return (
        <Section id="blog-index" className="min-h-screen pt-32">
            <div className="mb-12">
                <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors">
                    <FaArrowLeft /> Back to Home
                </Link>
                <h1 className="text-5xl font-bold mb-6">Development <span className="text-primary">Blog</span></h1>
                <p className="text-xl text-slate-400 max-w-2xl">
                    Detailed guides, tutorials, and thoughts on software engineering, algorithms, and system design.
                </p>
            </div>

            <div className="grid gap-8 max-w-3xl">
                {articles.map((post) => (
                    <Link href={`/blog/${post.slug}`} key={post.slug} className="group block bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-primary/50 transition-colors">
                        <div className="flex items-center gap-4 text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
                            <span className="text-primary">{post.category}</span>
                            <span>•</span>
                            <span>{post.date}</span>
                        </div>

                        <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                            {post.title}
                        </h2>

                        <p className="text-slate-400 leading-relaxed">
                            {post.excerpt}
                        </p>

                        <div className="mt-6 text-primary font-bold group-hover:translate-x-2 transition-transform inline-block">
                            Read Article →
                        </div>
                    </Link>
                ))}
            </div>
        </Section>
    );
}
