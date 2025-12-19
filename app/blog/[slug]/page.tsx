import Section from "../../../components/Section";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { articles } from "../../../data/articles";

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = articles.find(a => a.slug === slug);

    if (!article) {
        return (
            <Section id="not-found" className="min-h-screen pt-32 text-center">
                <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
                <Link href="/blog" className="text-primary hover:underline">Back to Blog</Link>
            </Section>
        );
    }

    return (
        <Section id="blog-post" className="min-h-screen pt-32">
            <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors">
                <FaArrowLeft /> Back to Blog
            </Link>

            <article className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="mb-12">
                    <span className={`px-4 py-1.5 rounded-full text-sm font-bold border ${article.categoryColor} inline-block mb-6`}>
                        {article.category}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black mb-8 text-white leading-tight">
                        {article.title}
                    </h1>

                    <div className="flex flex-wrap gap-6 text-slate-400 text-sm uppercase tracking-widest border-b border-slate-800/50 pb-8 items-center">
                        <div className="flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                                {article.author.charAt(0)}
                            </span>
                            <span>{article.author}</span>
                        </div>
                        <span>•</span>
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="space-y-8 text-slate-300 text-lg leading-relaxed">
                    {article.content.split('\n\n').map((paragraph, i) => {
                        if (paragraph.startsWith('###')) {
                            return <h3 key={i} className="text-2xl font-bold text-white mt-12 mb-4 pt-4 border-t border-slate-800/30">{paragraph.replace('###', '').trim()}</h3>;
                        }
                        if (paragraph.startsWith('1.') || paragraph.startsWith('-')) {
                            return (
                                <ul key={i} className="space-y-4 my-6 list-none">
                                    {paragraph.split('\n').map((item, j) => (
                                        <li key={j} className="flex gap-3 items-start">
                                            <span className="text-primary font-bold mt-1">•</span>
                                            <span>{item.replace(/^\d+\.\s+/, '').replace(/^-\s+/, '').trim()}</span>
                                        </li>
                                    ))}
                                </ul>
                            );
                        }
                        if (paragraph.startsWith('```')) {
                            const code = paragraph.replace(/```[a-z]*\n?/g, '').replace(/```/g, '').trim();
                            return (
                                <pre key={i} className="bg-slate-950 p-6 rounded-2xl border border-slate-800 overflow-x-auto my-8 shadow-inner ring-1 ring-white/5">
                                    <code className="text-sm font-mono text-primary leading-loose">
                                        {code}
                                    </code>
                                </pre>
                            );
                        }
                        return <p key={i} className="first-letter:text-2xl first-letter:font-bold first-letter:text-white">{paragraph.trim()}</p>;
                    })}
                </div>

                {/* Footer / CTA */}
                <div className="mt-20 p-8 rounded-3xl bg-linear-to-br from-slate-900 to-slate-950 border border-slate-800 text-center">
                    <h4 className="text-xl font-bold text-white mb-4">Enjoyed this article?</h4>
                    <p className="text-slate-400 mb-8">Feel free to share it or reach out if you have any questions.</p>
                    <Link href="/#contact" className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-slate-950 font-bold rounded-full hover:scale-105 transition-transform">
                        Let's Talk <FaArrowRight />
                    </Link>
                </div>
            </article>
        </Section>
    );
}
