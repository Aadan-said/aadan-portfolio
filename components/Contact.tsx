'use client';

import Section from "./Section";
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaGithub, FaLinkedin, FaTwitter, FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import { sendEmail } from "@/app/actions/contact";

export default function Contact() {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        setStatus('sending');
        setErrorMessage('');

        const formData = new FormData(form);
        const result = await sendEmail(formData);

        if (result.success) {
            setStatus('success');
            form.reset();
            setTimeout(() => setStatus('idle'), 3000);
        } else {
            setStatus('error');
            setErrorMessage(result.error || 'Something went wrong');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <Section id="contact" className="bg-slate-900/50">
            {/* ... title section ... */}
            <div className="flex flex-col items-center justify-center text-center mb-16 space-y-4">
                <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest border border-primary/20">
                    Get in Touch
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                    Let's Work <span className="text-primary">Together</span>
                </h2>
                <p className="text-slate-400 max-w-2xl text-lg">
                    Have a project in mind or want to discuss modern tech? I'm just a message away.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto items-start">

                {/* Left Side: Contact Info & Socials */}
                <div className="space-y-10 order-2 lg:order-1">

                    {/* Info Cards */}
                    <div className="grid gap-6">
                        <div className="flex items-start gap-6 p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-primary/30 transition-all hover:-translate-y-1 hover:shadow-lg group">
                            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 text-2xl group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                                <FaEnvelope />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">Email Me</h3>
                                <p className="text-slate-400 text-sm mb-2">For freelance projects & diverse inquiries.</p>
                                <a href="mailto:kabtanaadanyare17@gmail.com" className="text-blue-400 font-bold hover:text-blue-300 transition-colors">kabtanaadanyare17@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-primary/30 transition-all hover:-translate-y-1 hover:shadow-lg group">
                            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 text-2xl group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                                <FaWhatsapp />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">Call Me</h3>
                                <p className="text-slate-400 text-sm mb-2">Available for calls and direct messages.</p>
                                <a href="tel:+2520906575473" className="text-purple-400 font-bold hover:text-purple-300 transition-colors">+252 090 657 5473</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-primary/30 transition-all hover:-translate-y-1 hover:shadow-lg group">
                            <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400 text-2xl group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">Location</h3>
                                <p className="text-slate-400 text-sm mb-2">Based in the heart of innovation.</p>
                                <span className="text-green-400 font-bold">Galkio, Somalia</span>
                            </div>
                        </div>
                    </div>

                    {/* Social Connect */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Connect on Socials</h4>
                        <div className="flex gap-4">
                            {[
                                { Icon: FaGithub, href: "https://github.com", color: "hover:bg-slate-800" },
                                { Icon: FaLinkedin, href: "https://linkedin.com", color: "hover:bg-[#0077b5]" },
                                { Icon: FaTwitter, href: "https://twitter.com", color: "hover:bg-[#1DA1F2]" },
                                { Icon: FaWhatsapp, href: "https://whatsapp.com", color: "hover:bg-[#25D366]" },
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    className={`w-12 h-12 rounded-full border border-slate-700/50 flex items-center justify-center text-slate-400 bg-slate-900/50 transition-all hover:text-white hover:-translate-y-1 hover:border-transparent cursor-pointer ${social.color}`}
                                >
                                    <social.Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <div className="bg-slate-900/80 backdrop-blur-md p-8 lg:p-10 rounded-3xl border border-slate-800 shadow-[0_0_50px_rgba(0,0,0,0.3)] order-1 lg:order-2">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-300 ml-1">Name</label>
                                <input name="name" type="text" className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-slate-600" placeholder="aadan said" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-300 ml-1">Email</label>
                                <input name="email" type="email" className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-slate-600" placeholder="aadan@gmail.com" required />
                            </div>
                        </div>

                        <div className="space-y-2 relative">
                            <label className="text-sm font-bold text-slate-300 ml-1">Subject</label>
                            <div className="relative">
                                <select name="subject" defaultValue="" className="w-full appearance-none bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-4 text-slate-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all cursor-pointer peer">
                                    <option className="bg-slate-900 text-slate-300" value="" disabled>Select a subject</option>
                                    <option className="bg-slate-900 text-slate-300">General Inquiry</option>
                                    <option className="bg-slate-900 text-slate-300">Project Proposal</option>
                                    <option className="bg-slate-900 text-slate-300">Freelance Work</option>
                                    <option className="bg-slate-900 text-slate-300">Other</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none peer-focus:text-primary transition-colors">
                                    <FaChevronDown size={14} />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-300 ml-1">Message</label>
                            <textarea name="message" rows={5} className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all resize-none placeholder:text-slate-600" placeholder="Tell me about your project..." required></textarea>
                        </div>

                        {status === 'error' && (
                            <p className="text-red-500 text-sm font-medium animate-pulse">{errorMessage}</p>
                        )}

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className={`w-full py-5 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-primary/25 hover:-translate-y-1 ${status === 'success'
                                ? 'bg-green-500 text-white'
                                : status === 'error' ? 'bg-red-500 text-white' : 'bg-linear-to-r from-primary to-blue-600 text-white hover:opacity-90'
                                }`}
                        >
                            {status === 'idle' && <><FaPaperPlane /> Send Message</>}
                            {status === 'sending' && <div className="animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full"></div>}
                            {status === 'success' && 'Message Sent Successfully!'}
                            {status === 'error' && 'Failed to Send'}
                        </button>
                    </form>
                </div>

            </div>
        </Section>

    );
}
