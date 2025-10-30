import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

export default function PlantaProduccion() {
    return (
        <GuestLayout container={false}>
            <Head title="Planta de Producción" />
            {/* HERO */}
            <section className="relative w-full overflow-hidden h-[46vh] md:h-screen" aria-label="Imagen principal - Planta de Producción">
                <div
                    className="h-[46vh] md:h-screen w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(/images/planta-produccion.jpg)` }}
                    aria-hidden
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent" aria-hidden />
                <div className="absolute inset-0 flex items-end">
                    <div className="mx-auto max-w-7xl w-full px-4 pb-6 md:pb-10">
                        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">Planta de Producción</h1>
                        <p className="mt-2 text-lg md:text-2xl font-medium text-white/90 drop-shadow">Conocé nuestra planta de producción</p>
                        <div className="mt-4 flex flex-wrap gap-3">
                            <a href="#planta-content" className="inline-flex items-center justify-center rounded-md bg-[#00833E] px-5 py-3 font-medium text-white shadow hover:bg-[#00994C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00833E] gap-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                                    <path d="M6 9l6 6 6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Ver más
                            </a>
                            <a href="/contacto" className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 px-5 py-3 font-medium text-white backdrop-blur hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
                                Contactanos
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENIDO PRINCIPAL */}
            <section id="planta-content" className="bg-white py-12">
                <div className="mx-auto max-w-7xl w-full px-4">
                    <div className="w-full text-left">
                        <h2 className="text-2xl md:text-3xl font-bold text-emerald-800">Planta de producción</h2>
                        <div className="my-4">
                            <div
                                className="rounded-full"
                                style={{ width: '80px', height: '8px', background: 'linear-gradient(90deg, #00833E 0%, #7ED957 100%)' }}
                            />
                        </div>
                                    <p className="text-lg mb-8">
                                        <span className="font-semibold text-emerald-800">Nuestra planta de producción es la N°1 en el país en síntesis de productos complejos.</span><br/>
                                        <span className="text-gray-800">Estratégicamente ubicada en un predio de 60 hectáreas situado en el Parque Industrial de Zárate, en una zona exclusivamente creada para compañías químicas.</span>
                                    </p>
                        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-10">
                            <img src="/images/vista-planta.jpg" alt="Vista Planta Agrofina" className="w-full md:w-1/2 rounded-lg shadow-lg object-cover" />
                            <div className="flex-1 space-y-6">
                                <p>
                                    La planta está equipada con instalaciones tipo batch, que permiten la <b>síntesis de mas de 12 principios activos y la formulación de más de 20 productos para protección de cultivos</b>.
                                </p>
                                <p>
                                    Garantizamos la calidad de nuestros productos mediante un <b>continuo proceso de análisis y mejora</b> de nuestras avanzadas técnicas de producción.
                                </p>
                                <p>
                                    Nuestra planta alberga un <b>laboratorio de control de calidad propio</b>, con un moderno equipamiento de cromatografía líquida (HPLC) y gaseosa (GC).
                                </p>
                                <p>
                                    Asimismo, contamos con <b>equipos de última generación</b> para ensayos físico-químicos y un <b>sistema de gestión</b> que permite <b>asegurar la trazabilidad de todos los componentes de nuestros productos</b>, avalando de esta forma una calidad óptima para el cliente.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}
