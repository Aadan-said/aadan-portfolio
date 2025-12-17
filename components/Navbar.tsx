'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle Scroll Effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-50">

                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold tracking-tighter hover:text-primary transition-colors">
                        Aadan<span className="text-primary">.dev</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-8 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                            </Link>
                        ))}
                        <a
                            href="/resume.docx"
                            download="Aadan_Resume.docx"
                            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 border border-white/10 text-white font-bold text-sm hover:bg-primary hover:text-slate-900 hover:border-primary transition-all backdrop-blur-sm"
                        >
                            <FaDownload size={14} /> Resume
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-2xl text-white p-2 hover:bg-white/10 rounded-full transition-colors focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </nav>

            {/* Premium Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-slate-950/95 backdrop-blur-3xl z-90 md:hidden flex flex-col justify-between items-center transition-all duration-500 ease-in-out px-6 pt-32 pb-12 ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-5 pointer-events-none'
                    }`}
            >
                {/* Decorative Background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>

                {/* Links */}
                <div className="flex flex-col items-center gap-6 w-full max-w-sm">
                    {navLinks.map((link, index) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-4xl font-black text-transparent bg-clip-text bg-linear-to-r from-slate-400 to-slate-200 hover:from-primary hover:to-white transition-all transform hover:scale-105 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Bottom Actions */}
                <div className={`flex flex-col items-center gap-8 w-full transition-all duration-700 delay-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="w-16 h-1 bg-linear-to-r from-transparent via-slate-700 to-transparent rounded-full"></div>

                    <a
                        href="/resume.docx"
                        download="Aadan_Resume.docx"
                        onClick={() => setIsOpen(false)}
                        className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-primary text-slate-900 font-bold text-lg hover:bg-white shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all active:scale-95"
                    >
                        <FaDownload /> Download Resume
                    </a>

                    <div className="flex gap-8 text-slate-400">
                        <a href="https://github.com" className="hover:text-white transition-colors"><FaGithub size={28} /></a>
                        <a href="https://linkedin.com" className="hover:text-white transition-colors"><FaLinkedin size={28} /></a>
                    </div>
                </div>
            </div>
        </>
    );
}
