'use client';

import { useState, useEffect } from 'react';
import Section from "../../../components/Section";
import { FaTrash, FaCheck, FaPlus } from 'react-icons/fa';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export default function TodoApp() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        const saved = localStorage.getItem('todos');
        if (saved) setTodos(JSON.parse(saved));
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;
        setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
        setInput('');
    };

    const toggleTodo = (id: number) => {
        setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(t => t.id !== id));
    };

    return (
        <Section id="todo-app" className="min-h-screen pt-32">
            <div className="max-w-xl mx-auto bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl">
                <h1 className="text-3xl font-bold mb-6 text-center">✅ Smart To-Do</h1>

                <form onSubmit={addTodo} className="flex gap-2 mb-8">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-hidden focus:border-primary transition-colors"
                        placeholder="Add a new task..."
                    />
                    <button type="submit" className="bg-primary text-slate-900 p-4 rounded-lg hover:opacity-90 transition-opacity">
                        <FaPlus />
                    </button>
                </form>

                <ul className="space-y-3">
                    {todos.length === 0 && (
                        <li className="text-center text-slate-500 py-4">No tasks yet. Add one above!</li>
                    )}
                    {todos.map(todo => (
                        <li key={todo.id} className={`flex items-center justify-between p-4 rounded-lg border border-slate-800 transition-all ${todo.completed ? 'bg-slate-950/50 opacity-50' : 'bg-slate-800'}`}>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => toggleTodo(todo.id)}
                                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${todo.completed ? 'bg-green-500 border-green-500 text-white' : 'border-slate-500 hover:border-primary'}`}
                                >
                                    {todo.completed && <FaCheck size={12} />}
                                </button>
                                <span className={todo.completed ? 'line-through text-slate-500' : 'text-white'}>
                                    {todo.text}
                                </span>
                            </div>
                            <button
                                onClick={() => deleteTodo(todo.id)}
                                className="text-red-400 hover:text-red-300 transition-colors p-2"
                            >
                                <FaTrash />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </Section>
    );
}
