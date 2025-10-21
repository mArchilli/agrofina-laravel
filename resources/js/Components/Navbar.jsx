import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, usePage } from '@inertiajs/react';

export default function Navbar({ variant = 'client' }) {
    const page = usePage();
    const { auth, ziggy } = page.props;
    const isAdmin = !!auth?.user;
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 4);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Bloquear scroll del body cuando el menú móvil está abierto
    useEffect(() => {
        if (!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = prev;
        };
    }, [open]);

    const linkBase = 'px-2 py-1 rounded-md transition-colors text-white/90 hover:text-white hover:bg-white/10';

    const isCurrent = (href) => {
        // Extraer el path de la URL (sin query params)
        const getPath = (url) => {
            if (!url) return '';
            const urlObj = new URL(url, window.location.origin);
            return urlObj.pathname;
        };
        
        const currentPath = getPath(window.location.href);
        const hrefPath = getPath(href);
        
        return currentPath === hrefPath;
    };

    const clientLinks = [
        { label: 'Inicio', href: '/' },
        { label: 'Servicio Técnico', href: route('servicio-tecnico') },
        { label: 'Red Comercial', href: route('red-comercial') },
        { label: 'I+D', href: route('i-d') },
        { label: 'Planta de Producción', href: route('planta-produccion') },
        { label: 'Contacto', href: route('contacto') },
    ];

    // Segunda zona (derecha)
    const extraLinks = [
        { label: 'Institucional', href: route('institucional') },
        { label: 'Políticas', href: route('politicas') },
        { label: 'Novedades', href: route('novedades') },
        { label: 'AgroNews', href: route('agro-news') },
        { label: 'Trabajá con nosotros', href: route('trabaja') },
        { label: 'Proveedores', href: route('proveedores') },
    ];

    const adminLinks = [
        { label: 'Dashboard', href: route('dashboard') },
    ];

    const links = variant === 'client' ? clientLinks : adminLinks;

    return (
        <header
            data-scrolled={scrolled && !open}
            className="fixed inset-x-0 top-0 z-[999999] w-full border-b border-transparent bg-transparent text-white transition-colors duration-300 data-[scrolled=true]:bg-emerald-600/85 data-[scrolled=true]:border-emerald-700 data-[scrolled=true]:backdrop-blur-md data-[scrolled=true]:shadow-sm group"
        >
            <div className="mx-auto max-w-6xl h-16 px-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2" aria-label="Ir al inicio">
                    <img
                        src="/images/logo-agrofina.png"
                        alt="Agrofina"
                        className="h-10 md:h-11 w-auto select-none drop-shadow-md transition"
                        draggable="false"
                    />
                </Link>

                {/* Derecha: ENG + Hamburguesa */}
                <div className="flex items-center gap-2">
                    {/* ENG como enlace SVG, sin fondo */}
                    <Link
                        href={route('eng')}
                        aria-label="Cambiar idioma a inglés"
                        className="inline-flex h-14 w-14 items-center justify-center text-white/90 hover:text-white"
                    >
                        <svg viewBox="0 0 180 100" className="h-[27px] w-[48px]" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                            <text x="90" y="68" textAnchor="middle" fill="currentColor" font-size="80" font-family="sans-serif" font-weight="bold">ENG</text>
                        </svg>
                    </Link>

                    {/* Botón hamburguesa (más grande) */}
                    <button
                        type="button"
                        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
                        aria-controls="menu"
                        aria-expanded={open}
                        onClick={() => setOpen((v) => !v)}
                        className="inline-flex h-14 w-14 items-center justify-center text-white/90 hover:text-white"
                    >
                        <span className="sr-only">Toggle menu</span>
                        <span className="relative block h-[27px] w-8" aria-hidden>
                            <span className={`absolute left-0 top-0 h-[3px] w-[25px] bg-current transition-transform ${open ? 'translate-y-[9px] rotate-45' : ''}`} />
                            <span className={`absolute left-0 top-[9px] h-[3px] w-[25px] bg-current transition-opacity ${open ? 'opacity-0' : 'opacity-100'}`} />
                            <span className={`absolute left-0 top-[18px] h-[3px] w-[25px] bg-current transition-transform ${open ? '-translate-y-[9px] -rotate-45' : ''}`} />
                        </span>
                    </button>
                </div>
            </div>

            {/* Overlay/panel a pantalla completa (portal fuera del header) */}
            {createPortal(
                <div
                    id="desktop-menu"
                    className={`fixed inset-0 z-[1000000] transition-[opacity] duration-300 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    role="dialog"
                    aria-modal="true"
                    aria-hidden={!open}
                >
                    {/* Overlay ELIMINADO - sin fondo semitransparente */}

                    {/* Panel deslizante desde la derecha */}
                    <aside
                        className={`absolute inset-y-0 right-0 w-full bg-[#00833E] text-white shadow-xl transform transition-transform duration-300 ease-out overflow-y-auto ${open ? 'translate-x-0' : 'translate-x-full'}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="mx-auto max-w-6xl px-4 pt-6 pb-10 min-h-screen flex flex-col">
                            <div className="flex items-center justify-between">
                                <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
                                    <img
                                        src="/images/logo-agrofina.png"
                                        alt="Agrofina"
                                        className="h-10 w-auto select-none drop-shadow-md"
                                        draggable="false"
                                    />
                                </Link>
                                <button
                                    type="button"
                                    aria-label="Cerrar menú"
                                    onClick={() => setOpen(false)}
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10 hover:bg-white/15"
                                >
                                    <span className="sr-only">Cerrar menú</span>
                                    <span className="relative block h-4 w-6" aria-hidden>
                                        <span className="absolute left-0 top-1.5 block h-0.5 w-6 bg-white rotate-45" />
                                        <span className="absolute left-0 top-1.5 block h-0.5 w-6 bg-white -rotate-45" />
                                    </span>
                                </button>
                            </div>

                            <div className="mt-10 flex-1 flex items-center justify-center">
                                {/* Mobile: columnas apiladas */}
                                <div className="md:hidden grid gap-6">
                                    {/* Columna izquierda (mobile) */}
                                    <nav className="flex flex-col items-center justify-center gap-2 text-lg">
                                        {links.map((item) => (
                                            <Link
                                                key={item.label}
                                                href={item.href}
                                                onClick={() => setOpen(false)}
                                                className={`block rounded-lg px-4 py-3 font-medium transition-colors ${isCurrent(item.href) ? 'bg-white/15' : 'hover:bg-white/10 hover:underline underline-offset-4'}`}
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </nav>

                                    {/* Divisor horizontal mobile (entre contacto e institucional) */}
                                    <div className="w-full h-[2px] bg-[#5FC48D] rounded-full opacity-90" aria-hidden />

                                    {/* Columna derecha (mobile) */}
                                    <nav className="flex flex-col items-center justify-center gap-2 text-lg">
                                        {extraLinks.map((item) => (
                                            <Link
                                                key={item.label}
                                                href={item.href}
                                                onClick={() => setOpen(false)}
                                                className={`block rounded-lg px-4 py-3 font-medium transition-colors ${isCurrent(item.href) ? 'bg-white/15' : 'hover:bg-white/10 hover:underline underline-offset-4'}`}
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </nav>
                                </div>

                                {/* Desktop: columnas lado a lado */}
                                <div className="hidden md:grid grid-cols-[1fr_2px_1fr] gap-6 md:gap-20 items-center">
                                    {/* Columna izquierda (desktop) - contenido centrado dentro de la columna */}
                                    <nav className="flex flex-col items-center justify-center gap-6 text-2xl w-full">
                                        {links.map((item) => (
                                            <Link
                                                key={item.label}
                                                href={item.href}
                                                onClick={() => setOpen(false)}
                                                className={`block rounded-lg px-4 py-3 font-medium transition-colors ${isCurrent(item.href) ? 'bg-white/15' : 'hover:bg-white/10 hover:underline underline-offset-4'}`}
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </nav>

                                    {/* Divisor vertical (desktop) */}
                                    <div className="w-[2px] h-full bg-[#5FC48D] rounded-full opacity-90" aria-hidden />

                                    {/* Columna derecha (desktop) - contenido centrado dentro de la columna */}
                                    <nav className="flex flex-col items-center justify-center gap-6 text-2xl w-full">
                                        {extraLinks.map((item) => (
                                            <Link
                                                key={item.label}
                                                href={item.href}
                                                onClick={() => setOpen(false)}
                                                className={`block rounded-lg px-4 py-3 font-medium transition-colors ${isCurrent(item.href) ? 'bg-white/15' : 'hover:bg-white/10 hover:underline underline-offset-4'}`}
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </nav>
                                </div>
                            </div>

                            {/* Divisor horizontal mobile (entre proveedores y redes) */}
                            <div className="md:hidden w-full h-[2px] bg-[#5FC48D] rounded-full opacity-90 mb-6 mt-6" aria-hidden />

                            {/* Footer del menú: Redes + © anclados abajo */}
                            <div className="mt-auto px-4">
                                
                                <div className="text-white/80 text-sm mb-2">Seguinos</div>
                                <div className="flex items-center gap-3">
                                    <a href="https://www.linkedin.com/company/agrofina-sa/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/15 text-white">
                                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
                                            <path d="M8.25 10.5v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            <circle cx="8.25" cy="7.75" r="1.25" fill="currentColor" />
                                            <path d="M12 16.5v-3.6c0-1.325 1.075-2.4 2.4-2.4h0c1.325 0 2.4 1.075 2.4 2.4v3.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </a>
                                    <a href="https://www.instagram.com/agrofinaoficial/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/15 text-white">
                                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
                                            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
                                            <circle cx="17" cy="7" r="1" fill="currentColor" />
                                        </svg>
                                    </a>
                                    <a href="https://www.youtube.com/watch?v=YBaXGmzZL60" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/15 text-white">
                                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="3" y="7" width="18" height="10" rx="3" stroke="currentColor" strokeWidth="1.5" />
                                            <path d="M11 10v4l4-2-4-2z" fill="currentColor" />
                                        </svg>
                                    </a>
                                    <a href="https://www.facebook.com/AgrofinaArgentina" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/15 text-white">
                                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14 8h2V5h-2a4 4 0 0 0-4 4v2H8v3h2v5h3v-5h2.2L16 11h-3V9a1 1 0 0 1 1-1Z" fill="currentColor" />
                                        </svg>
                                    </a>
                                    <a href="https://x.com/Agrofinatec" target="_blank" rel="noopener noreferrer" aria-label="X" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/15 text-white">
                                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 4l7.5 9.2L6 20h2.6l4.2-4.9L16.8 20H20l-7.6-9.3L18 4h-2.6l-4 4.7L8 4H4z" fill="currentColor" />
                                        </svg>
                                    </a>
                                </div>
                                <div className="text-white/80 text-sm mt-6">
                                    <p>© {new Date().getFullYear()} Agrofina</p>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>,
                document.body
            )}
        </header>
    );
}
