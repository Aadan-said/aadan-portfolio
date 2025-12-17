'use client';

import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowRight } from 'react-icons/fa';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, SiDjango, SiPostgresql, SiGit } from 'react-icons/si';
import Link from 'next/link';
import Image from 'next/image';

const heroImages = [
    '/images/hero/slide1.png',
    '/images/hero/slide2.png',
    '/images/hero/slide3.png',
];

export default function Hero() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="min-h-screen relative flex flex-col justify-center items-center text-center px-4 pt-20 overflow-hidden">

            {/* Dynamic Background Slider */}
            {heroImages.map((src, index) => (
                <div
                    key={src}
                    className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
                >
                    <Image
                        src={src}
                        alt="Background"
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-[2px] bg-linear-to-t from-slate-900 via-slate-900/50 to-slate-900/30"></div>
                </div>
            ))}

            <div className="relative z-10 animate-fade-in-up space-y-8 max-w-5xl mx-auto">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-slate-900/40 border border-white/10 text-slate-300 text-sm font-medium backdrop-blur-md mb-4 hover:border-primary/50 transition-colors cursor-default shadow-lg ring-1 ring-white/5">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Available for Work
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight text-white mb-6 drop-shadow-2xl">
                    Hi, I'm <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-blue-400 to-purple-500 animate-gradient">Aadan Said</span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                    Full-Stack Developer & Computer Science Enthusiast. <br className="hidden md:block" />
                    Turning complex problems into <span className="text-white font-semibold">elegant solutions</span>.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-8">
                    <Link
                        href="#projects"
                        className="group relative px-8 py-4 bg-primary text-slate-950 font-bold rounded-full text-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            View Projects <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>

                    <Link
                        href="#contact"
                        className="px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-all backdrop-blur-sm hover:border-white/50"
                    >
                        Contact Me
                    </Link>
                </div>

                {/* Tech Stack Icons */}
                <div className="pt-8 pb-8">
                    <p className="text-slate-400 text-xs uppercase tracking-[0.3em] font-bold mb-8 opacity-80">Tech Stack</p>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-3xl text-slate-400/80">
                        <SiHtml5 className="hover:text-orange-500 transition-colors hover:scale-125 duration-300 hover:drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
                        <SiCss3 className="hover:text-blue-500 transition-colors hover:scale-125 duration-300 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                        <SiJavascript className="hover:text-yellow-400 transition-colors hover:scale-125 duration-300 hover:drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
                        <SiReact className="hover:text-cyan-400 transition-colors hover:scale-125 duration-300 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                        <SiNextdotjs className="hover:text-white transition-colors hover:scale-125 duration-300 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                        <SiNodedotjs className="hover:text-green-500 transition-colors hover:scale-125 duration-300 hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                        <SiDjango className="hover:text-green-800 transition-colors hover:scale-125 duration-300 hover:drop-shadow-[0_0_10px_rgba(22,163,74,0.5)]" />
                        <SiPostgresql className="hover:text-blue-400 transition-colors hover:scale-125 duration-300 hover:drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]" />
                        <SiGit className="hover:text-orange-600 transition-colors hover:scale-125 duration-300 hover:drop-shadow-[0_0_10px_rgba(234,88,12,0.5)]" />
                    </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-6 justify-center mt-12 text-2xl text-slate-400">
                    <a href="https://github.com" target="_blank" className="hover:text-white hover:scale-110 transition-all p-2 bg-white/5 rounded-full hover:bg-white/10"><FaGithub /></a>
                    <a href="https://linkedin.com" target="_blank" className="hover:text-primary hover:scale-110 transition-all p-2 bg-white/5 rounded-full hover:bg-white/10"><FaLinkedin /></a>
                    <a href="https://twitter.com" target="_blank" className="hover:text-sky-400 hover:scale-110 transition-all p-2 bg-white/5 rounded-full hover:bg-white/10"><FaTwitter /></a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 animate-pulse-slow z-20">
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white rounded-full animate-[bounce_2s_infinite]"></div>
                </div>
            </div>
        </section>
    );
}
