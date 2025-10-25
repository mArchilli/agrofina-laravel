import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

export default function AgroNews() {
  return (
    <GuestLayout container={false}>
      <Head title="AgroNews" />
      {/* HERO */}
      <section className="relative w-full overflow-hidden h-[46vh] md:h-screen" aria-label="Imagen principal - AgroNews">
        <div
          className="h-[46vh] md:h-screen w-full bg-cover bg-center"
          style={{ backgroundImage: `url(/images/agronews-fondo.jpg)` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent" aria-hidden />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-7xl w-full px-4 pb-6 md:pb-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">AgroNews</h1>
            <p className="mt-2 text-lg md:text-2xl font-medium text-white/90 drop-shadow">Conocé y descarga todas las ediciones</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="#agronews-content" className="inline-flex items-center justify-center rounded-md bg-[#00833E] px-5 py-3 font-medium text-white shadow hover:bg-[#00994C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00833E] gap-2">
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
      <section id="agronews-content" className="bg-white py-12">
        <div className="mx-auto max-w-7xl w-full px-4">
          <div className="w-full text-left mb-8">
            <p className="text-lg text-gray-800 mb-8">
              A través de nuestro nuevo boletín mensual, al que llamamos “AgroNews”, vas a poder enterarte sobre las acciones que llevamos a cabo desde Agrofina para dar respuesta a las necesidades de nuestros clientes. Asimismo, conocer las últimas novedades del mercado. ¡Descargalo gratis!
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded shadow transition">Botón de ejemplo</button>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded shadow transition">Botón de ejemplo</button>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded shadow transition">Botón de ejemplo</button>
            </div>
          </div>
        </div>
      </section>
    </GuestLayout>
  );
}
