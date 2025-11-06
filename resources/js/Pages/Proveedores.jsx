import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

export default function Proveedores() {
  return (
    <GuestLayout container={false}>
      <Head title="Proveedores" />
      
      {/* HERO */}
      <section className="relative w-full overflow-hidden h-[46vh] md:h-screen" aria-label="Imagen principal - Proveedores">
        <div
          className="h-[46vh] md:h-screen w-full bg-cover bg-center"
          style={{ backgroundImage: `url(/images/proveedores.jpg)` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent" aria-hidden />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-7xl w-full px-4 pb-6 md:pb-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">Proveedores</h1>
            <p className="mt-2 text-lg md:text-2xl font-medium text-white/90 drop-shadow">Información importante para nuestros proveedores</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="#info-proveedores" className="group inline-flex items-center justify-center rounded-md bg-[#00833E] px-5 py-3 font-medium text-white shadow transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00833E] gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1">
                  <path d="M6 9l6 6 6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Ver más
              </a>
              <a href="/contacto" className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 px-5 py-3 font-medium text-white backdrop-blur transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENIDO - Información para proveedores */}
      <section id="info-proveedores" className="bg-gradient-to-br from-gray-50 via-emerald-50/30 to-gray-50 py-16 md:py-20 relative overflow-hidden">
        {/* Efectos de fondo decorativos */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl" aria-hidden />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-lime-200/20 rounded-full blur-3xl" aria-hidden />
        
        <div className="relative mx-auto max-w-4xl px-4">
          {/* Título de la sección */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Aviso Importante
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-lime-500 mx-auto rounded-full"></div>
          </div>

          {/* Tarjeta con la información */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-emerald-100 p-8 md:p-12">
            {/* Alerta principal */}
            <div className="mb-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-lg">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                A partir del 1° de diciembre Agrofina dejará de utilizar la plataforma cobranzas.com
              </h3>
            </div>

            {/* Texto introductorio */}
            <p className="text-lg text-gray-700 mb-8">
              Estamos preparando una nueva plataforma, por ello les comunicamos que temporalmente deberán utilizar las siguientes direcciones:
            </p>

            {/* Lista de contactos */}
            <div className="space-y-4 mb-8">
              <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-200/50">
                <p className="text-sm font-semibold text-emerald-800 mb-1">Consulta de pagos, solicitud de certificados de retenciones y OP:</p>
                <a href="mailto:cuentasapagar@agrofina.com.ar" className="text-base font-medium text-emerald-600 hover:text-emerald-700 hover:underline">
                  cuentasapagar@agrofina.com.ar
                </a>
              </div>

              <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-200/50">
                <p className="text-sm font-semibold text-emerald-800 mb-1">Envío de Certificados impositivos:</p>
                <a href="mailto:impuestos.proveedores@agrofina.com.ar" className="text-base font-medium text-emerald-600 hover:text-emerald-700 hover:underline">
                  impuestos.proveedores@agrofina.com.ar
                </a>
              </div>

              <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-200/50">
                <p className="text-sm font-semibold text-emerald-800 mb-1">Consultas comerciales:</p>
                <p className="text-base font-medium text-gray-700">con su comprador</p>
              </div>

              <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-200/50">
                <p className="text-sm font-semibold text-emerald-800 mb-1">Facturas y NC asociadas a órdenes de compra:</p>
                <a href="mailto:oc.facturas@agrofina.com.ar" className="text-base font-medium text-emerald-600 hover:text-emerald-700 hover:underline">
                  oc.facturas@agrofina.com.ar
                </a>
              </div>

              <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-200/50">
                <p className="text-sm font-semibold text-emerald-800 mb-1">ND y NC por diferencia de cambio:</p>
                <a href="mailto:factura.directa@agrofina.com.ar" className="text-base font-medium text-emerald-600 hover:text-emerald-700 hover:underline">
                  factura.directa@agrofina.com.ar
                </a>
              </div>
            </div>

            {/* Nota importante */}
            <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-lg mb-8">
              <p className="text-base font-medium text-red-800">
                <strong>Importante:</strong> Recuerde no enviar ni remitir facturas sin indicar el n° de OC en la misma. Caso contrario será rechazada.
              </p>
            </div>

            {/* Firma */}
            <div className="text-center pt-6 border-t border-gray-200">
              <p className="text-lg font-semibold text-gray-900">Muchas gracias.</p>
              <p className="text-base text-emerald-700 font-medium mt-2">Sector de Compras AGROFINA</p>
            </div>
          </div>

          {/* Botón de contacto adicional */}
          <div className="mt-12 text-center">
            <a 
              href="/contacto" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-lime-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              ¿Tenés alguna consulta? Contactanos
            </a>
          </div>
        </div>
      </section>
    </GuestLayout>
  );
}
