import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart, FaArrowRight } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-slate-950 pt-20 pb-10 relative overflow-hidden border-t border-white/10">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none opacity-50"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] pointer-events-none opacity-50"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* CTA Section */}
                <div className="flex flex-col md:flex-row justify-between items-center bg-slate-900/50 backdrop-blur-xl border border-white/5 p-8 md:p-12 rounded-3xl mb-20 shadow-2xl">
                    <div className="mb-8 md:mb-0 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Ready to start a project?</h2>
                        <p className="text-slate-400">Let's build something amazing together.</p>
                    </div>
                    <Link
                        href="#contact"
                        className="group flex items-center gap-2 px-8 py-4 bg-primary text-slate-900 rounded-full font-bold text-lg hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-primary/50"
                    >
                        Contact Me <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-12 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="md:col-span-4 space-y-6">
                        <Link href="/" className="text-3xl font-bold tracking-tighter block hover:opacity-90 transition-opacity">
                            Aadan<span className="text-primary">.dev</span>
                        </Link>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            A passionate Full Stack Developer crafting robust and scalable digital solutions.
                            Specializing in modern web technologies and user-centric design.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: FaGithub, href: "https://github.com", color: "hover:bg-[#333] hover:text-white" },
                                { icon: FaLinkedin, href: "https://linkedin.com", color: "hover:bg-[#0077b5] hover:text-white" },
                                { icon: FaTwitter, href: "https://twitter.com", color: "hover:bg-[#1da1f2] hover:text-white" },
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`p-3 bg-slate-900 border border-slate-800 rounded-full text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${social.color}`}
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="font-bold text-white mb-6 text-lg">Quick Links</h3>
                            <ul className="space-y-4 text-sm text-slate-400">
                                {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <Link
                                            href={`#${item.toLowerCase()}`}
                                            className="hover:text-primary transition-colors flex items-center gap-2 group"
                                        >
                                            <span className="w-0 group-hover:w-2 h-[2px] bg-primary transition-all"></span>
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-white mb-6 text-lg">Services</h3>
                            <ul className="space-y-4 text-sm text-slate-400">
                                <li className="hover:text-primary transition-colors cursor-default">Web Development</li>
                                <li className="hover:text-primary transition-colors cursor-default">App Development</li>
                                <li className="hover:text-primary transition-colors cursor-default">UI/UX Design</li>
                                <li className="hover:text-primary transition-colors cursor-default">Consulting</li>
                            </ul>
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <h3 className="font-bold text-white mb-6 text-lg">Contact Info</h3>
                            <ul className="space-y-4 text-sm text-slate-400">
                                <li className="flex items-start gap-3">
                                    <FaEnvelope className="text-primary mt-1" />
                                    <span>
                                        contact@aadansaid.dev<br />
                                        <span className="text-xs text-slate-500">Reply within 24 hours</span>
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-4 h-4 rounded-full bg-green-500 mt-1 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                                    <span className="text-green-400">Available for work</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} Aadan Said. All rights reserved.</p>
                    <p className="flex items-center gap-1.5">
                        Made with <FaHeart className="text-red-500 animate-pulse" /> Enginer Aadan said
                    </p>
                </div>
            </div>
        </footer>
    );
}
