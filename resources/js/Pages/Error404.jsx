import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function Error404() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setAnimate(true), 200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <GuestLayout container={false}>
            <Head title="Página no encontrada - 404" />
            
            {/* Contenedor principal con degradado */}
            <div className="min-h-screen bg-gradient-to-b from-green-900 via-emerald-700 to-green-700 relative overflow-hidden" style={{
                background: 'linear-gradient(to bottom, #14532d, #047857, #4ade80)'
            }}>
                
                {/* Formas decorativas de fondo */}
                

                {/* Contenido principal */}
                <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-16">
                    <div className="max-w-5xl mx-auto text-center">
                        
                        

                        {/* Título 404 */}
                        <div className={`mb-6 transform transition-all duration-1000 delay-300 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <h1 className="text-7xl md:text-8xl lg:text-9xl font-extrabold text-white leading-none tracking-wider drop-shadow-2xl">
                                4<span className="text-green-200 animate-pulse">0</span>4
                            </h1>
                        </div>

                        {/* Mensaje principal */}
                        <div className={`mb-8 transform transition-all duration-1000 delay-500 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                                Página no encontrada
                            </h2>
                            <div className="w-24 h-1 bg-white/50 mx-auto rounded-full mb-6"></div>
                            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                                La página que estás buscando se ha perdido en el vasto campo digital de Agrofina. 
                                Pero no te preocupes, nuestro equipo técnico está trabajando para que encuentres lo que necesitas.
                            </p>
                        </div>

                        {/* Botones principales */}
                        <div className={`mb-12 transform transition-all duration-1000 delay-700 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                                <Link
                                    href="/"
                                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-green-800 font-bold rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-white to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <svg className="w-5 h-5 mr-3 relative z-10 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                    <span className="relative z-10">Regresar al Inicio</span>
                                </Link>
                                
                                <button
                                    onClick={() => window.history.back()}
                                    className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-bold rounded-xl shadow-xl hover:bg-white/20 hover:border-white/50 transform hover:scale-105 transition-all duration-300"
                                >
                                    <svg className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                    </svg>
                                    Ir Atrás
                                </button>
                            </div>
                        </div>

                        {/* Sección de navegación útil */}
                        <div className={`transform transition-all duration-1000 delay-900 mb-10 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center justify-center">
                                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    ¿Necesitas ayuda? Explora estas secciones:
                                </h3>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {[
                                        { 
                                            label: 'Servicio Técnico', 
                                            href: route('servicio-tecnico'),
                                            icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                                        },
                                        { 
                                            label: 'Red Comercial', 
                                            href: route('red-comercial'),
                                            icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                                        },
                                        { 
                                            label: 'I+D', 
                                            href: route('i-d'),
                                            icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
                                        },
                                        { 
                                            label: 'Contacto', 
                                            href: route('contacto'),
                                            icon: 'M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                                        }
                                    ].map((item, index) => (
                                        <Link
                                            key={item.label}
                                            href={item.href}
                                            className="group p-4 bg-white/5 hover:bg-white/15 border border-white/20 hover:border-white/40 rounded-xl transition-all duration-300 hover:transform hover:scale-105"
                                            style={{animationDelay: `${index * 100}ms`}}
                                        >
                                            <div className="flex flex-col items-center text-center space-y-2">
                                                <svg className="w-8 h-8 text-white group-hover:text-green-200 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                                                </svg>
                                                <span className="text-white font-medium text-sm group-hover:text-green-200 transition-colors duration-300">
                                                    {item.label}
                                                </span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}