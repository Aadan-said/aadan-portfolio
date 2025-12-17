'use client';

import { useState, useEffect } from 'react';
import Section from "../../../components/Section";
import { FaPlay, FaUndo } from 'react-icons/fa';

export default function AlgoVisualizer() {
    const [array, setArray] = useState<number[]>([]);
    const [sorting, setSorting] = useState(false);
    const [compareIndices, setCompareIndices] = useState<number[]>([]);

    useEffect(() => {
        resetArray();
    }, []);

    const resetArray = () => {
        const newArray = [];
        for (let i = 0; i < 50; i++) {
            newArray.push(Math.floor(Math.random() * 100) + 10);
        }
        setArray(newArray);
        setCompareIndices([]);
    };

    const bubbleSort = async () => {
        setSorting(true);
        const arr = [...array];
        const len = arr.length;

        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len - i - 1; j++) {
                setCompareIndices([j, j + 1]);
                if (arr[j] > arr[j + 1]) {
                    // Swap
                    const temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    setArray([...arr]);
                    await new Promise(resolve => setTimeout(resolve, 10)); // Delay
                }
            }
        }
        setSorting(false);
        setCompareIndices([]);
    };

    return (
        <Section id="algo-vis" className="min-h-screen pt-32">
            <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl">
                <h1 className="text-3xl font-bold mb-6 text-center">📊 Sorting Algorithm Visualizer</h1>

                <div className="h-64 flex justify-center items-end gap-[2px] mb-8 bg-slate-950 p-4 rounded-xl border border-slate-800">
                    {array.map((value, idx) => (
                        <div
                            key={idx}
                            style={{ height: `${value}%` }}
                            className={`flex-1 rounded-t-sm transition-colors ${compareIndices.includes(idx) ? 'bg-primary' : 'bg-slate-500'
                                }`}
                        ></div>
                    ))}
                </div>

                <div className="flex justify-center gap-4">
                    <button
                        onClick={resetArray}
                        disabled={sorting}
                        className="px-6 py-3 bg-slate-700 text-white rounded-lg font-bold hover:bg-slate-600 disabled:opacity-50 flex items-center gap-2"
                    >
                        <FaUndo /> Reset Array
                    </button>
                    <button
                        onClick={bubbleSort}
                        disabled={sorting}
                        className="px-6 py-3 bg-primary text-slate-900 rounded-lg font-bold hover:opacity-90 disabled:opacity-50 flex items-center gap-2"
                    >
                        <FaPlay /> Start Bubble Sort
                    </button>
                </div>
            </div>
        </Section>
    );
}
