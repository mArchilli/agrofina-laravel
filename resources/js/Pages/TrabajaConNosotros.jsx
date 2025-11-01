import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

export default function TrabajaConNosotros() {
  return (
    <GuestLayout container={false}>
      <Head title="Trabajá con nosotros" />
      {/* HERO */}
      <section className="relative w-full overflow-hidden h-[46vh] md:h-screen" aria-label="Imagen principal - Trabajá con nosotros">
        <div
          className="h-[46vh] md:h-screen w-full bg-cover bg-center"
          style={{ backgroundImage: `url(/images/fondo-trabajo.jpg)` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent" aria-hidden />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-7xl w-full px-4 pb-6 md:pb-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">Trabajá con nosotros</h1>
            <p className="mt-2 text-lg md:text-2xl font-medium text-white/90 drop-shadow">En Agrofina valoramos el talento y la innovación.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="#trabaja-content" className="group inline-flex items-center justify-center rounded-md bg-[#00833E] px-5 py-3 font-medium text-white shadow transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00833E] gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1">
                  <path d="M6 9l6 6 6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Ver más
              </a>
              <a href="/contacto" className="group inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 px-5 py-3 font-medium text-white backdrop-blur transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 gap-2">
                Contactanos
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <section id="trabaja-content" className="bg-white py-12">
        <div className="mx-auto max-w-7xl w-full px-4">
          <div className="w-full text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-emerald-800">Trabajá con nosotros</h2>
            <div className="my-4">
              <div
                className="rounded-full"
                style={{ width: '80px', height: '8px', background: 'linear-gradient(90deg, #00833E 0%, #7ED957 100%)' }}
              />
            </div>
            <p className="text-lg text-gray-800 mb-8">
              Sumate a un equipo de trabajo que procura expandir la frontera del conocimiento, generando nuevas tecnologías para la protección de los cultivos y soluciones para el productor en forma constante. <b>Si querés formar parte de una compañía comprometida con la calidad, encontrá tu oportunidad en esta sección.</b>
            </p>
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-10">
              <img src="/images/trabajo-capacitaciones.jpg" alt="Capacitaciones Agrofina" className="w-full md:w-1/2 rounded-lg shadow-lg object-cover" />
              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="font-semibold text-emerald-800 text-lg mb-2">Contratación de Científicos e Ingenieros</h3>
                  <p>
                    Agrofina ha desarrollado un programa de contratación de científicos y técnicos argentinos que procura <b>ofrecer un plan de carrera y desarrollo profesional a expertos locales</b> con formación de grado y posgrado en la formulación y la generación de soluciones para la protección de cultivos. De este modo colabora con la política de radicación de científicos argentinos en en el país y el desarrollo de la ciencia y tecnología local.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-emerald-800 text-lg mb-2">Capacitación</h3>
                  <p>
                    Agrofina confía en la el poder de la educación, la capacitación y en entrenamiento como formas de mantenerse a la vanguardia de las mejores prácticas de su industria.
                  </p>
                  <p>
                    De este modo, capacita continuamente a su gente con el propósito de mantenerla actualizada en sus <b>políticas de calidad y seguridad</b>.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <a
                href="https://www.grupolosgrobo.com/busquedas-laborales"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded shadow transition text-lg"
              >
                Ver búsquedas activas
              </a>
            </div>
          </div>
        </div>
      </section>
    </GuestLayout>
  );
}
