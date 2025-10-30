import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link } from '@inertiajs/react';

export default function Welcome() {
    return (
        <GuestLayout container={false}>
            <Head title="Inicio" />
            <div className="w-full space-y-16 md:space-y-24">
                <Hero />
                {/* Innovation section removed per user request */}
                {/* Technology section removed per user request */}
                <Portfolio />
                {/* Certifications section removed per user request */}
                <GroupLosGrobo />
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
                                    href="#portafolio"
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

// WhoWeAre section removed: contenido de la foto/texto eliminado por petición del usuario.

// Innovation section removed per user request (contenidos eliminados)

// Technology section removed per user request (contenidos eliminados)

function Portfolio() {
    const categories = [
        { title: 'Herbicidas', desc: 'Control selectivo y eficiente de malezas con formulaciones de última generación y tecnología de liberación controlada.', Icon: LeafIcon, products: ['Glifosato 48%', 'FLOSIL 50', '2,4-D Amina', 'Atrazina 90%'], applications: ['Soja', 'Maíz', 'Trigo', 'Girasol'], tech: 'Formulación SC concentrada' },
        { title: 'Insecticidas', desc: 'Amplio espectro de acción con alta persistencia, selectividad mejorada y mínimo impacto en fauna benéfica.', Icon: BugIcon, products: ['Clorpirifós 48%', 'Lambda 2.5%', 'Imidacloprid 35%', 'Spinosad 12%'], applications: ['Lepidópteros', 'Coleópteros', 'Hemípteros', 'Trips'], tech: 'Microencapsulado avanzado' },
        { title: 'Fungicidas', desc: 'Prevención y control sistémico de enfermedades foliares y del suelo con acción preventiva y curativa.', Icon: ShieldIcon, products: ['Tebuconazol 25%', 'Carbendazim 50%', 'Mancozeb 80%', 'Azoxistrobin 20%'], applications: ['Roya', 'Oidio', 'Mancha foliar', 'Antracnosis'], tech: 'Penetración sistémica' },
        { title: 'Curasemillas', desc: 'Protección integral desde la siembra con tratamientos que optimizan germinación y desarrollo radicular.', Icon: LabIcon, products: ['Thiram 40%', 'Carboxin 20%', 'Metalaxil 35%', 'Fludioxonil 2.5%'], applications: ['Damping off', 'Rhizoctonia', 'Fusarium', 'Pythium'], tech: 'Recubrimiento uniforme' },
        { title: 'Coadyuvantes', desc: 'Máxima eficiencia en aplicación con mejora de penetración, adherencia y resistencia al lavado.', Icon: GlobeIcon, products: ['Surfactantes no iónicos', 'Aceites minerales', 'Siliconas agrícolas', 'Antiespumantes'], applications: ['Tensión superficial', 'Mojabilidad', 'Deriva', 'pH buffer'], tech: 'Formulación especializada' },
    ];

    const stats = [
        { value: '80+', label: 'Productos registrados', desc: 'Portafolio completo certificado por SENASA' },
        { value: '15M', label: 'Hectáreas tratadas', desc: 'Alcance anual en territorio argentino' },
        { value: '99.8%', label: 'Pureza promedio', desc: 'Control de calidad en ingredientes activos' },
        { value: '24/7', label: 'Soporte técnico', desc: 'Asesoramiento agronómico especializado' },
    ];

    const certifications = [
        'Productos registrados SENASA',
        'Formulaciones propias certificadas',
        'Análisis de residuos completos',
        'Estudios de eficacia agronómica',
        'Certificación de calidad ISO',
        'Trazabilidad total del lote',
    ];

    return (
        <section id="portafolio" className="relative mx-auto max-w-7xl px-4 py-12 md:py-16">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_70%_20%,rgba(34,197,94,0.06),transparent_50%)]" aria-hidden />

            <div className="text-center mb-12">
                <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-emerald-800 text-xs font-semibold">Portafolio</span>
                <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">Soluciones integrales para cada etapa del cultivo</h2>
                <p className="mt-2 text-gray-600 max-w-4xl mx-auto">
                    Desarrollamos, formulamos y producimos más de 80 productos fitosanitarios con tecnología propia,
                    respaldados por rigurosos estudios de eficacia y registros SENASA vigentes.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {stats.map((stat) => (
                    <div key={stat.label} className="text-center p-6 rounded-2xl bg-white shadow ring-1 ring-emerald-100 hover:shadow-lg transition-shadow">
                        <div className="text-2xl md:text-3xl font-bold text-emerald-700 mb-1">{stat.value}</div>
                        <div className="font-semibold text-gray-900 text-sm mb-2">{stat.label}</div>
                        <div className="text-xs text-gray-600 leading-relaxed">{stat.desc}</div>
                    </div>
                ))}
            </div>

            <div className="grid gap-8 lg:grid-cols-4">
                <div className="lg:col-span-3 grid gap-6 md:grid-cols-2">
                    {categories.map((category) => (
                        <article
                            key={category.title}
                            className="group rounded-2xl bg-white p-6 shadow ring-1 ring-emerald-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-lime-500/15 text-lime-700 group-hover:bg-lime-500/20 transition-colors">
                                        <category.Icon className="h-6 w-6" />
                                    </span>
                                    <div>
                                        <h3 className="font-semibold text-lg tracking-tight text-gray-900">{category.title}</h3>
                                        <span className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-1 text-emerald-700 text-xs font-medium">
                                            {category.tech}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-4">{category.desc}</p>

                            <div className="mb-4">
                                <div className="text-sm font-medium text-gray-900 mb-2">Productos destacados:</div>
                                <div className="flex flex-wrap gap-1">
                                    {category.products.map((product) => (
                                        <span key={product} className="inline-flex items-center rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700">
                                            {product}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-4">
                                <div className="text-sm font-medium text-gray-900 mb-2">Aplicaciones:</div>
                                <div className="grid grid-cols-2 gap-2">
                                    {category.applications.map((app) => (
                                        <div key={app} className="flex items-center gap-2 text-sm">
                                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                            <span className="text-gray-600">{app}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                <span className="text-xs text-gray-500">Registro SENASA vigente</span>
                                <span className="inline-flex items-center text-emerald-600 text-sm font-medium group-hover:text-emerald-700">
                                    <ShieldIcon className="h-4 w-4 mr-1" />
                                    Certificado
                                </span>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="space-y-6">
                    <div className="rounded-2xl bg-gradient-to-br from-emerald-600 to-lime-600 p-6 text-white shadow ring-1 ring-emerald-200/40">
                        <h3 className="font-semibold text-xl mb-4">Garantía de calidad</h3>
                        <div className="space-y-3">
                            {certifications.map((cert) => (
                                <div key={cert} className="flex items-start gap-3">
                                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-lime-300 flex-shrink-0" />
                                    <span className="text-white/95 text-sm">{cert}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 p-4 bg-white/10 rounded-lg backdrop-blur">
                            <div className="text-sm font-medium mb-2">Próxima auditoría de calidad</div>
                            <div className="text-xs text-white/80">Control de productos - Enero 2025</div>
                        </div>
                    </div>

                    <div className="rounded-2xl bg-gradient-to-br from-lime-50 to-emerald-50 p-6 border border-emerald-100">
                        <h3 className="font-semibold text-emerald-800 mb-3">Innovación destacada</h3>
                        <div className="space-y-3 text-sm text-gray-700">
                            <div className="flex items-start gap-2">
                                <SparklesIcon className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                                <span>Formulaciones SC de alta concentración</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <LabIcon className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                                <span>Tecnología de microencapsulado</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <ShieldIcon className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                                <span>Sistemas de liberación controlada</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <GlobeIcon className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                                <span>Reducción de impacto ambiental</span>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl bg-white p-6 shadow ring-1 ring-emerald-100">
                        <h3 className="font-semibold text-emerald-800 mb-3">Soporte técnico</h3>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-center gap-2">
                                <HeadsetIcon className="h-4 w-4 text-emerald-600" />
                                <span className="text-gray-700">Asesoramiento agronómico</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <BadgeIcon className="h-4 w-4 text-emerald-600" />
                                <span className="text-gray-700">Capacitación técnica</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPinIcon className="h-4 w-4 text-emerald-600" />
                                <span className="text-gray-700">Red nacional de distribuidores</span>
                            </div>
                        </div>

                        <div className="mt-4 p-3 bg-emerald-50 rounded-lg">
                            <div className="text-xs text-emerald-700 font-medium mb-1">Contacto directo:</div>
                            <div className="text-sm text-emerald-800">0800-AGROFINA (247-6346)</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 text-center">
                <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-emerald-50 to-lime-50 border border-emerald-100">
                    <h3 className="text-xl font-semibold text-emerald-800 mb-3">¿Necesitás asesoramiento técnico personalizado?</h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                        Nuestro equipo de ingenieros agrónomos está disponible para ayudarte a seleccionar
                        la solución más adecuada para tu cultivo y condiciones específicas.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="#contacto"
                            className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-6 py-3 font-medium text-white shadow hover:bg-emerald-700 transition-colors"
                        >
                            Consultar disponibilidad
                        </a>
                        <a
                            href="/catalogo-tecnico.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-md border border-emerald-300 bg-white px-6 py-3 font-medium text-emerald-700 hover:bg-emerald-50 transition-colors"
                        >
                            Descargar catálogo técnico
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Certifications section removed per user request (contenidos eliminados)

function GroupLosGrobo() {
    const highlights = [
        'Integración agroindustrial',
        'Red nacional de distribución',
        'Innovación y desarrollo local',
        'Compromiso con la sustentabilidad',
    ];

    return (
        <section className="relative mx-auto max-w-7xl px-4 py-12 md:py-16">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div>
                    <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-emerald-800 text-xs font-semibold">Grupo Los Grobo</span>
                    <h3 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">Solidez y respaldo para crecer</h3>
                    <p className="mt-3 text-gray-700 leading-relaxed">
                        Formamos parte del Grupo Los Grobo, referente del sector agroindustrial argentino. Esta integración potencia nuestra capacidad de innovación, logística y servicio, asegurando cercanía con el productor en todo el país.
                    </p>
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-sm text-gray-700">
                        {highlights.map((h) => (
                            <li key={h} className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" aria-hidden /> {h}</li>
                        ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <a href="https://www.grupolosgrobo.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-700">
                            Conocer más
                        </a>
                        <Link href={route('red-comercial')} className="inline-flex items-center justify-center rounded-md border border-emerald-300 bg-white px-5 py-2.5 text-sm font-medium text-emerald-700 hover:bg-emerald-50">
                            Ver red comercial
                        </Link>
                    </div>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-emerald-600 to-lime-600 p-6 text-white shadow ring-1 ring-emerald-200/40">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-lg bg-white/10 p-4 text-center backdrop-blur">
                            <div className="text-2xl font-semibold">+45</div>
                            <div className="text-xs text-white/85">Años en el agro</div>
                        </div>
                        <div className="rounded-lg bg-white/10 p-4 text-center backdrop-blur">
                            <div className="text-2xl font-semibold">AR</div>
                            <div className="text-xs text-white/85">Presencia nacional</div>
                        </div>
                        <div className="rounded-lg bg-white/10 p-4 text-center backdrop-blur">
                            <div className="text-2xl font-semibold">I+D</div>
                            <div className="text-xs text-white/85">Innovación propia</div>
                        </div>
                        <div className="rounded-lg bg-white/10 p-4 text-center backdrop-blur">
                            <div className="text-2xl font-semibold">24/7</div>
                            <div className="text-xs text-white/85">Soporte técnico</div>
                        </div>
                    </div>
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
