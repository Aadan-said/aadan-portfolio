import React from "react";

export default function Section({
    id,
    children,
    className = ""
}: {
    id: string;
    children: React.ReactNode;
    className?: string;
}): React.JSX.Element {
    return (
        <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto ${className}`}>
            {children}
        </section>
    );
}
