'use client';

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
    const phoneNumber = "+2520906575473";
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, '')}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#128C7E] transition-all hover:scale-110 active:scale-95 group overflow-hidden"
            aria-label="Contact on WhatsApp"
        >
            <FaWhatsapp className="text-3xl animate-pulse-slow" />
            
            {/* Tooltip for desktop */}
            <span className="absolute right-16 bg-slate-900 px-3 py-1.5 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-800 pointer-events-none hidden md:block">
                Chat with me on WhatsApp
            </span>
            
            {/* Ring Animation */}
            <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-20"></span>
        </a>
    );
}
