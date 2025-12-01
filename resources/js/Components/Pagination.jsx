import { Link } from '@inertiajs/react';

export default function Pagination({ links }) {
    return (
        <nav className="flex items-center justify-center gap-1">
            {links.map((link, index) => {
                const isActive = link.active;
                const isDisabled = link.url === null;
                
                // Determinar el label a mostrar
                let label = link.label;
                if (link.label.includes('Previous')) {
                    label = (
                        <div className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            <span className="hidden sm:inline">Anterior</span>
                        </div>
                    );
                } else if (link.label.includes('Next')) {
                    label = (
                        <div className="flex items-center gap-1">
                            <span className="hidden sm:inline">Siguiente</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    );
                } else {
                    label = link.label.replace('&laquo;', '').replace('&raquo;', '');
                }

                if (isDisabled) {
                    return (
                        <span
                            key={`pagination-${index}`}
                            className="inline-flex items-center justify-center min-w-[2.5rem] h-10 px-3 text-sm font-medium text-emerald-300 bg-emerald-50 rounded-lg cursor-not-allowed"
                        >
                            {label}
                        </span>
                    );
                }

                if (isActive) {
                    return (
                        <span
                            key={`pagination-${index}`}
                            className="inline-flex items-center justify-center min-w-[2.5rem] h-10 px-3 text-sm font-semibold text-white bg-emerald-600 rounded-lg shadow-md"
                            aria-current="page"
                        >
                            {label}
                        </span>
                    );
                }

                return (
                    <Link
                        key={`pagination-${index}`}
                        href={link.url}
                        preserveState
                        preserveScroll
                        className="inline-flex items-center justify-center min-w-[2.5rem] h-10 px-3 text-sm font-medium text-emerald-700 bg-white border border-emerald-200 rounded-lg hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-800 transition-all duration-200 hover:shadow-sm"
                    >
                        {label}
                    </Link>
                );
            })}
        </nav>
    );
}
