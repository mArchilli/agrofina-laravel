import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';

export default function Welcome() {
    return (
        <GuestLayout container={false}>
            <Head title="Inicio" />
            <div className="w-full space-y-16 md:space-y-24">
                <Hero />
                <FeaturedProductsCarousel />
                <ContactCTA />
            </div>
        </GuestLayout>
    );
}

function Hero() {
    return (
        <section className="relative w-full overflow-hidden h-screen">
            {/* Background video */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <iframe
                        className="w-[177.78vh] h-screen min-w-full min-h-full max-w-none max-h-none scale-[1.25] md:scale-[1.35] lg:scale-[1.45]"
                        src="https://www.youtube.com/embed/YBaXGmzZL60?autoplay=1&mute=1&controls=0&loop=1&playlist=YBaXGmzZL60&modestbranding=1&rel=0&playsinline=1&showinfo=0"
                        title="Agrofina background video"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                        allowFullScreen
                        referrerPolicy="strict-origin-when-cross-origin"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-transparent" />
            </div>

            {/* Headline content */}
            <div className="absolute inset-0 z-10">
                <div className="mx-auto max-w-7xl h-full px-4">
                    <div className="flex h-full items-end">
                        <div className="pb-6 md:pb-8 lg:pb-10">
                            <div className="flex flex-col items-start mt-3">
                                <img 
                                    src="/images/logo-agrofina-horizontal.png" 
                                    alt="Agrofina" 
                                    className="w-[220px] sm:w-[320px] md:w-[420px] lg:w-[520px] h-auto drop-shadow-xl"
                                    draggable="false"
                                />
                                <div className="my-3">
                                    <div
                                        className="rounded-full mx-0"
                                        style={{
                                            width: '80px',
                                            height: '8px',
                                            background: 'linear-gradient(90deg, #00833E 0%, #7ED957 100%)'
                                        }}
                                    />
                                </div>
                                <p className="text-white/90 text-base sm:text-lg max-w-xs sm:max-w-md">
                                    Somos una compañía dedicada a brindar soluciones para el desarrollo de una agricultura sustentable.
                                </p>
                            </div>
                            <div className="mt-8 flex flex-wrap gap-3">
                                <a
                                    href="#destacados"
                                    className="inline-flex items-center justify-center rounded-md bg-[#00833E] px-5 py-3 font-medium text-white shadow hover:bg-[#00994C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00833E] gap-2"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                                        <path d="M6 9l6 6 6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    Conocé nuestros productos
                                </a>
                                <Link
                                    href={route('servicio-tecnico')}
                                    className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 px-5 py-3 font-medium text-white backdrop-blur hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                                >
                                    Contactá a un asesor técnico
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FeaturedProductsCarousel() {
    // Ajustá la extensión si tus imágenes están en .webp o .png
    const EXT = '.jpg'; // Asumimos .jpg en public/images

    const items = [
        { key: 'mabyn', title: 'MABYN', mob: `/images/ago-mabyn-mob${EXT}`, desk: `/images/ago-mabyn-desk${EXT}` },
        { key: 'topground', title: 'TOPGROUND', mob: `/images/ago-topground-mob${EXT}`, desk: `/images/ago-topground-desk${EXT}` },
        { key: 'k48', title: 'K48', mob: `/images/ago-k48-mob${EXT}`, desk: `/images/ago-k48-desk${EXT}` },
        { key: 'mulan', title: 'MULAN', mob: `/images/ago-mulan-mob${EXT}`, desk: `/images/ago-mulan-desk${EXT}` },
        { key: 'talis', title: 'TALIS', mob: `/images/ago-talis-mob${EXT}`, desk: `/images/ago-talis-desk${EXT}` },
    ];

    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const startX = useRef(null);

    useEffect(() => {
        if (paused) return;
        const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 4500);
        return () => clearInterval(id);
    }, [paused, items.length]);

    const goTo = (i) => setIndex((i + items.length) % items.length);
    const next = () => goTo(index + 1);
    const prev = () => goTo(index - 1);

    const onTouchStart = (e) => {
        startX.current = e.touches?.[0]?.clientX ?? null;
    };
    const onTouchMove = (e) => {
        if (startX.current == null) return;
        const dx = e.touches[0].clientX - startX.current;
        if (Math.abs(dx) > 40) {
            dx < 0 ? next() : prev();
            startX.current = null;
        }
    };

    const onKeyDown = (e) => {
        if (e.key === 'ArrowLeft') prev();
        if (e.key === 'ArrowRight') next();
    };

    const handlePlaceholderClick = (e) => {
        e.preventDefault();
    };

    return (
        <section id="destacados" aria-label="Productos destacados" className="relative mx-auto max-w-7xl px-4">
            <div className="mb-3 flex items-center gap-3">
                <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-emerald-800 text-xs font-semibold">Destacados</span>
                <div className="h-px flex-1 bg-gradient-to-r from-emerald-300/70 via-lime-300/60 to-transparent" />
            </div>

            <div
                className="relative overflow-hidden rounded-2xl ring-1 ring-emerald-200/60 shadow-sm bg-gradient-to-br from-emerald-50 to-lime-50"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                onKeyDown={onKeyDown}
                tabIndex={0}
            >
                <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                >
                    {items.map((item) => (
                        <div key={item.key} className="min-w-full">
                            <Link href="#" onClick={handlePlaceholderClick} className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/70">
                                <div className="w-full aspect-square md:aspect-[1140/250] relative">
                                    <picture>
                                        <source media="(min-width: 768px)" srcSet={item.desk} />
                                        <img
                                            src={item.mob}
                                            alt={`Producto destacado: ${item.title}`}
                                            className="absolute inset-0 h-full w-full object-cover"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </picture>

                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-emerald-900/10 via-transparent to-lime-700/10 opacity-90" />
                                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 md:h-16 bg-gradient-to-t from-black/35 to-transparent" />

                                    <div className="absolute left-3 top-3 md:left-4 md:top-4">
                                        <span className="inline-flex items-center rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-emerald-700 shadow">
                                            Producto destacado
                                        </span>
                                    </div>

                                    <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4">
                                        <div className="inline-flex items-center gap-2 rounded-md bg-white/80 px-2.5 py-1 text-emerald-800 text-xs md:text-sm backdrop-blur group-hover:bg-white">
                                            <span className="font-semibold tracking-wide">{item.title}</span>
                                            <svg className="h-4 w-4 text-emerald-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                <button aria-label="Anterior" onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-emerald-700 shadow hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                </button>
                <button aria-label="Siguiente" onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-emerald-700 shadow hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                </button>

                <div className="absolute inset-x-0 bottom-2 flex items-center justify-center gap-2">
                    {items.map((_, i) => (
                        <button
                            key={i}
                            aria-label={`Ir al slide ${i + 1}`}
                            onClick={() => goTo(i)}
                            className={`h-2.5 rounded-full transition-all ${i === index ? 'w-6 bg-emerald-500' : 'w-2.5 bg-emerald-300/70 hover:bg-emerald-400'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ContactCTA() {
    return (
        <section id="contacto" className="relative mx-auto max-w-7xl px-4 py-12 md:py-16">
            <div className="rounded-2xl bg-emerald-600 p-8 text-white shadow ring-1 ring-emerald-200/40 text-center">
                <h3 className="text-xl font-semibold mb-3">¿Hablamos?</h3>
                <p className="text-white/90">Contactate con nuestro equipo para recibir asesoramiento.</p>
                <div className="mt-4">
                    <Link href={route('contacto')} className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 font-medium text-emerald-700 hover:bg-emerald-50">
                        Ir a Contacto
                    </Link>
                </div>
            </div>
        </section>
    );
}

// Iconos placeholder
function LeafIcon({ className = '' }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
            <path d="M5 21c7 0 14-7 14-14 0-.55-.45-1-1-1C11 6 3 14 3 20c0 .55.45 1 1 1z" />
        </svg>
    );
}
function ShieldIcon({ className = '' }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
            <path d="M12 2l7 4v6c0 5-3.8 9.7-7 10-3.2-.3-7-5-7-10V6l7-4z" />
        </svg>
    );
}
function BugIcon({ className = '' }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
            <path d="M14 6V4h-4v2H8l-2 2h12l-2-2h-2zM6 10v6a6 6 0 0012 0v-6H6z" />
        </svg>
    );
}
function LabIcon({ className = '' }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
            <path d="M9 2v2l3 5v9a3 3 0 11-6 0h10a3 3 0 11-6 0V9l3-5V2H9z" />
        </svg>
    );
}
function GlobeIcon({ className = '' }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM4 12h16M12 4a16 16 0 010 16M12 4a16 16 0 000 16" />
        </svg>
    );
}
function HeadsetIcon({ className = '' }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
            <path d="M12 3a9 9 0 00-9 9v5a3 3 0 003 3h2v-6H6v-2a6 6 0 1112 0v2h-2v6h2a3 3 0 003-3v-5a9 9 0 00-9-9z" />
        </svg>
    );
}
function LightningIcon({ className = '' }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
            <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
        </svg>
    );
}
function BadgeIcon({ className = '' }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
            <path d="M12 2l3 7h7l-5.5 4 2 7-6.5-4.5L5 20l2-7L2 9h7l3-7z" />
        </svg>
    );
}
function MapPinIcon({ className = '' }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
            <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
        </svg>
    );
}
function SparklesIcon({ className = '' }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
            <path d="M5 3l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4zm14 6l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" />
        </svg>
    );
}
