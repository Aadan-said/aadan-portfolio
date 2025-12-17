import Section from "./Section";
import Image from "next/image";

const timeline = [
    { year: "2022", title: "Started Programming", desc: "Wrote my first line of Python code. Fell in love with automation." },
    { year: "2023", title: "Django Projects", desc: "Built full-stack web apps using Django & PostgreSQL." },
    { year: "2024", title: "React & Next.js", desc: "Transitioned to modern frontend frameworks. Mastered React hooks & Next.js routing." },
    { year: "2025", title: "Building Real Products", desc: "Focusing on scalable architecture, clean code, and solving real-world problems." },
];

export default function About() {
    return (
        <Section id="about" className="bg-slate-900/50">

            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">About <span className="text-primary">Me</span></h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    My journey from a curious beginner to a full-stack developer building robust applications.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                {/* Image Column - Sticky on Desktop */}
                <div className="lg:sticky lg:top-24 space-y-8 order-2 lg:order-1">
                    <div className="relative aspect-square md:aspect-4/5 w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-700/50 group">
                        <Image
                            src="/images/me.png"
                            alt="Aadan Said"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                            priority
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent opacity-60"></div>

                        {/* Floating Badge */}
                        <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-900/90 backdrop-blur-md rounded-xl border border-white/10 shadow-lg transform translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                            <p className="text-white font-bold text-lg">Aadan Said</p>
                            <p className="text-primary text-sm">Full Stack Developer</p>
                        </div>
                    </div>
                </div>

                {/* Content & Timeline Column */}
                <div className="space-y-12 order-1 lg:order-2 text-left">
                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold text-white">
                            Designing <span className="text-primary">Complex</span> Solutions with Simple Code
                        </h3>
                        <p className="text-slate-300 leading-relaxed text-lg">
                            I am a passionate developer who loves turning complex problems into simple, beautiful solutions.
                            My journey started with a curiosity about how software shapes our world, and has evolved into a
                            career of building robust applications used by real people.
                        </p>
                        <p className="text-slate-300 leading-relaxed text-lg">
                            When I'm not coding, you can find me exploring new technologies, solving algorithmic challenges on LeetCode, or contributing to open source projects.
                        </p>
                    </div>

                    <div className="space-y-8 border-l-2 border-slate-800 ml-3 pl-8 relative">
                        <h4 className="text-xl font-bold text-white uppercase tracking-wider mb-6">Experience Timeline</h4>
                        {timeline.map((item, index) => (
                            <div key={index} className="relative group">
                                <span className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-slate-900 border-4 border-slate-700 group-hover:border-primary group-hover:scale-110 transition-all z-10"></span>
                                <span className="absolute -left-[37px] top-2.5 w-2 h-2 rounded-full bg-slate-500 group-hover:bg-primary transition-colors z-20"></span>

                                <span className="text-sm font-mono text-primary mb-1 block font-bold">{item.year}</span>
                                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </Section>
    );
}
