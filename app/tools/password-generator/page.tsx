'use client';

import { useState } from 'react';
import Section from "../../../components/Section";
import { FaCopy, FaUndo } from 'react-icons/fa';

export default function PasswordGenerator() {
    const [password, setPassword] = useState('');
    const [length, setLength] = useState(16);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);

    const generatePassword = () => {
        const lowercase = 'abcdefghijklmnopqrstuvwxyz';
        const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';
        const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

        let chars = lowercase;
        if (includeUppercase) chars += uppercase;
        if (includeNumbers) chars += numbers;
        if (includeSymbols) chars += symbols;

        let generated = '';
        for (let i = 0; i < length; i++) {
            generated += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        setPassword(generated);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password);
        alert('Copied to clipboard!');
    };

    return (
        <Section id="password-gen" className="min-h-screen pt-32">
            <div className="max-w-2xl mx-auto bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl">
                <h1 className="text-3xl font-bold mb-6 text-center">🔐 Password Generator</h1>

                <div className="bg-slate-950 p-6 rounded-xl mb-8 flex justify-between items-center border border-slate-800">
                    <span className="text-2xl font-mono text-primary break-all">
                        {password || 'Click Generate'}
                    </span>
                    <button onClick={copyToClipboard} className="text-slate-400 hover:text-white transition-colors" title="Copy">
                        <FaCopy size={20} />
                    </button>
                </div>

                <div className="space-y-6">
                    <div>
                        <label className="flex justify-between mb-2 font-medium">
                            <span>Password Length</span>
                            <span className="text-primary">{length}</span>
                        </label>
                        <input
                            type="range"
                            min="6" max="32"
                            value={length}
                            onChange={(e) => setLength(Number(e.target.value))}
                            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <label className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg cursor-pointer hover:bg-slate-800 transition-colors">
                            <input
                                type="checkbox"
                                checked={includeUppercase}
                                onChange={(e) => setIncludeUppercase(e.target.checked)}
                                className="w-5 h-5 accent-primary rounded-sm"
                            />
                            <span>Uppercase</span>
                        </label>
                        <label className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg cursor-pointer hover:bg-slate-800 transition-colors">
                            <input
                                type="checkbox"
                                checked={includeNumbers}
                                onChange={(e) => setIncludeNumbers(e.target.checked)}
                                className="w-5 h-5 accent-primary rounded-sm"
                            />
                            <span>Numbers</span>
                        </label>
                        <label className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg cursor-pointer hover:bg-slate-800 transition-colors">
                            <input
                                type="checkbox"
                                checked={includeSymbols}
                                onChange={(e) => setIncludeSymbols(e.target.checked)}
                                className="w-5 h-5 accent-primary rounded-sm"
                            />
                            <span>Symbols</span>
                        </label>
                    </div>

                    <button
                        onClick={generatePassword}
                        className="w-full py-4 bg-primary text-slate-900 font-bold rounded-xl text-lg hover:scale-[1.02] transition-transform shadow-[0_0_20px_rgba(56,189,248,0.3)] flex items-center justify-center gap-2"
                    >
                        <FaUndo /> Generate Password
                    </button>
                </div>
            </div>
        </Section>
    );
}
