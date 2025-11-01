import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

export default function Contacto() {
    return (
        <GuestLayout container={false}>
            <Head title="Contacto" />
            {/* HERO */}
                    <section className="relative w-full overflow-hidden h-[46vh] md:h-screen" aria-label="Imagen principal - Contacto">
                        <div
                            className="h-[46vh] md:h-screen w-full bg-cover bg-center"
                            style={{ backgroundImage: `url(/images/fondo-contacto.jpg)` }}
                            aria-hidden
                        />
                <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent" aria-hidden />
                <div className="absolute inset-0 flex items-end">
                    <div className="mx-auto max-w-7xl w-full px-4 pb-6 md:pb-10">
                        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">Contacto</h1>
                        <p className="mt-2 text-lg md:text-2xl font-medium text-white/90 drop-shadow">Te proveemos de la ayuda que necesites, no dudes en contactarnos.</p>
                        <div className="mt-4 flex flex-wrap gap-3">
                            <a href="#contacto-form" className="inline-flex items-center justify-center rounded-md bg-[#00833E] px-5 py-3 font-medium text-white shadow hover:bg-[#00994C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00833E] gap-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                                    <path d="M6 9l6 6 6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Empezá ahora
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENIDO PRINCIPAL */}
            <section id="contacto-form" className="bg-gradient-to-br from-gray-50 via-emerald-50/30 to-gray-50 py-16 md:py-20 relative overflow-hidden">
                {/* Decorative gradients */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                
                <div className="mx-auto max-w-7xl w-full px-4 relative z-10">
                    {/* Card gigante con glass effect */}
                    <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
                        {/* Header de la card con gradient sutil */}
                        <div className="bg-gradient-to-r from-emerald-100 via-emerald-50 to-lime-100 p-8 md:p-12 border-b border-emerald-200">
                            <div className="w-full text-left">
                                <p className="text-lg text-gray-800 mb-2">
                                    Para enviarnos un correo electrónico, por favor completar el formulario abajo indicando el motivo de contacto.<br/>
                                    Muchas gracias.
                                </p>
                                <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 mt-8 mb-4">Envíanos tu consulta</h2>
                                <div className="my-4">
                                    <div
                                        className="rounded-full"
                                        style={{ width: '80px', height: '8px', background: 'linear-gradient(90deg, #00833E 0%, #7ED957 100%)' }}
                                    />
                                </div>
                            </div>
                        </div>
                        
                        {/* Body de la card con el formulario */}
                        <div className="p-8 md:p-12">
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Nombre y apellido</label>
                                    <input 
                                        type="text" 
                                        className="w-full bg-white border-2 border-gray-200 rounded-xl px-5 py-3.5 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 hover:border-emerald-300" 
                                        placeholder="Tu nombre y apellido" 
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Cargo y compañía</label>
                                    <input 
                                        type="text" 
                                        className="w-full bg-white border-2 border-gray-200 rounded-xl px-5 py-3.5 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 hover:border-emerald-300" 
                                        placeholder="Cargo y compañía" 
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                                    <input 
                                        type="email" 
                                        className="w-full bg-white border-2 border-gray-200 rounded-xl px-5 py-3.5 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 hover:border-emerald-300" 
                                        placeholder="ejemplo@email.com" 
                                    />
                                </div>
                                <div className="flex flex-col md:flex-row gap-4">
                                    <div className="flex-1">
                                        <label className="block text-gray-700 font-medium mb-2">Ciudad y Código postal</label>
                                        <input 
                                            type="text" 
                                            className="w-full bg-white border-2 border-gray-200 rounded-xl px-5 py-3.5 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 hover:border-emerald-300" 
                                            placeholder="Ciudad y Código postal" 
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <label className="block text-gray-700 font-medium mb-2">Tipo de contacto</label>
                                        <select className="w-full bg-white border-2 border-gray-200 rounded-xl px-5 py-3.5 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 hover:border-emerald-300">
                                            <option value="">Seleccionar</option>
                                            <option value="COMERCIAL">COMERCIAL</option>
                                            <option value="ADMINISTRATIVO">ADMINISTRATIVO</option>
                                            <option value="MARKETING">MARKETING</option>
                                            <option value="CONDICIONES TARJETA">CONDICIONES TARJETA</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Mensaje</label>
                                    <textarea 
                                        className="w-full bg-white border-2 border-gray-200 rounded-xl px-5 py-3.5 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 hover:border-emerald-300" 
                                        rows={5} 
                                        placeholder="Escribe tu mensaje aquí..." 
                                    />
                                </div>
                                <div className="pt-4">
                                    <button 
                                        type="button" 
                                        className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg transform hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        Enviar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}
