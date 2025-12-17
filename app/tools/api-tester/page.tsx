'use client';

import { useState } from 'react';
import Section from "../../../components/Section";
import { FaPaperPlane, FaSpinner } from 'react-icons/fa';

export default function ApiTester() {
    const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/todos/1');
    const [method, setMethod] = useState('GET');
    const [response, setResponse] = useState<unknown>(null);
    const [status, setStatus] = useState<number | null>(null);
    const [loading, setLoading] = useState(false);

    const sendRequest = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setResponse(null);
        setStatus(null);

        try {
            const res = await fetch(url, { method });
            setStatus(res.status);
            const data = await res.json();
            setResponse(data);
        } catch (err) {
            setResponse({ error: 'Failed to fetch' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Section id="api-tester" className="min-h-screen pt-32">
            <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl">
                <h1 className="text-3xl font-bold mb-6 text-center">🔌 REST API Tester</h1>

                <form onSubmit={sendRequest} className="flex flex-col md:flex-row gap-4 mb-8">
                    <select
                        value={method}
                        onChange={(e) => setMethod(e.target.value)}
                        className="bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-hidden font-bold"
                    >
                        <option value="GET">GET</option>
                        <option value="POST">POST</option>
                        <option value="PUT">PUT</option>
                        <option value="DELETE">DELETE</option>
                    </select>

                    <input
                        type="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-hidden focus:border-primary transition-colors font-mono text-sm"
                        placeholder="https://api.example.com/data"
                        required
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-primary text-slate-900 px-8 py-3 rounded-lg font-bold hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                        {loading ? <FaSpinner className="animate-spin" /> : <><FaPaperPlane /> Send</>}
                    </button>
                </form>

                <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
                    <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex justify-between items-center">
                        <span className="text-sm font-bold text-slate-400">Response</span>
                        {status && (
                            <span className={`text-xs px-2 py-1 rounded-sm font-mono ${status >= 200 && status < 300 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                                Status: {status}
                            </span>
                        )}
                    </div>
                    <pre className="p-4 text-xs md:text-sm font-mono text-green-400 overflow-x-auto min-h-[200px] max-h-[500px]">
                        {response ? JSON.stringify(response, null, 2) : <span className="text-slate-600">// Response will appear here...</span>}
                    </pre>
                </div>
            </div>
        </Section>
    );
}
