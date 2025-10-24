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
                            <a href="#contacto-form" className="inline-flex items-center justify-center rounded-md bg-lime-500 px-5 py-3 font-medium text-black shadow hover:bg-lime-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 gap-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                                    <path d="M6 9l6 6 6-6" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Empeza ahora
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENIDO PRINCIPAL */}
            <section id="contacto-form" className="bg-white py-12">
                <div className="mx-auto max-w-7xl w-full px-4">
                    <div className="w-full text-left mb-8">
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
                    <form className="space-y-6">
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Nombre y apellido</label>
                            <input type="text" className="w-full border border-emerald-500 rounded px-4 py-2 focus:ring-emerald-500 focus:border-emerald-500" placeholder="Tu nombre y apellido" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Cargo y compañía</label>
                            <input type="text" className="w-full border border-emerald-500 rounded px-4 py-2 focus:ring-emerald-500 focus:border-emerald-500" placeholder="Cargo y compañía" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Email</label>
                            <input type="email" className="w-full border border-emerald-500 rounded px-4 py-2 focus:ring-emerald-500 focus:border-emerald-500" placeholder="ejemplo@email.com" />
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1">
                                <label className="block text-gray-700 font-medium mb-1">Ciudad y Código postal</label>
                                <input type="text" className="w-full border border-emerald-500 rounded px-4 py-2 focus:ring-emerald-500 focus:border-emerald-500" placeholder="Ciudad y Código postal" />
                            </div>
                            <div className="flex-1">
                                <label className="block text-gray-700 font-medium mb-1">Tipo de contacto</label>
                                <select className="w-full border border-emerald-500 rounded px-4 py-2 focus:ring-emerald-500 focus:border-emerald-500">
                                    <option value="">Seleccionar</option>
                                    <option value="COMERCIAL">COMERCIAL</option>
                                    <option value="ADMINISTRATIVO">ADMINISTRATIVO</option>
                                    <option value="MARKETING">MARKETING</option>
                                    <option value="CONDICIONES TARJETA">CONDICIONES TARJETA</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Mensaje</label>
                            <textarea className="w-full border border-emerald-500 rounded px-4 py-2 focus:ring-emerald-500 focus:border-emerald-500" rows={5} placeholder="Escribe tu mensaje aquí..." />
                        </div>
                        <div className="pt-2">
                            <button type="button" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded shadow transition text-lg">Enviar</button>
                        </div>
                    </form>
                </div>
            </section>
        </GuestLayout>
    );
}
