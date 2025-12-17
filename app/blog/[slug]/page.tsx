import Section from "../../../components/Section";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    return (
        <Section id="blog-post" className="min-h-screen pt-32">
            <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors">
                <FaArrowLeft /> Back to Blog
            </Link>

            <article className="max-w-3xl mx-auto prose prose-invert prose-lg">
                <h1 className="text-5xl font-bold mb-8 capitalize text-white">
                    {slug.replace(/-/g, ' ')}
                </h1>

                <div className="flex gap-4 text-slate-400 mb-12 text-sm uppercase tracking-wide border-b border-slate-800 pb-8">
                    <span className="text-primary">Development</span>
                    <span>•</span>
                    <span>Dec 15, 2024</span>
                    <span>•</span>
                    <span>5 min read</span>
                </div>

                <div className="space-y-6 text-slate-300">
                    <p className="lead text-xl text-slate-200">
                        This is a placeholder for the blog post content. In a real application,
                        this would be rendered from a Markdown file or a CMS.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <h2 className="text-3xl font-bold text-white mt-12 mb-6">Key Concepts</h2>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <pre className="bg-slate-900 p-6 rounded-xl border border-slate-800 overflow-x-auto">
                        <code className="text-sm font-mono text-primary">
                            {`function example() {\n  console.log("Hello, World!");\n}`}
                        </code>
                    </pre>
                </div>
            </article>
        </Section>
    );
}
