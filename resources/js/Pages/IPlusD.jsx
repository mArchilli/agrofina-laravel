import { useMemo } from 'react'
import { Head, Link } from '@inertiajs/react'
import GuestLayout from '@/Layouts/GuestLayout'

export default function IplusD() {

  const jsonLd = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Agrofina - Investigación y Desarrollo',
    url: typeof window !== 'undefined' ? window.location.href : undefined,
    department: {
      '@type': 'ResearchProject',
      name: 'I+D (Investigación y Desarrollo)',
      about: 'Desarrollos analíticos, de síntesis y formulaciones con certificaciones ISO 14001 e ISO 45001.',
    },
  }), [])

  // Imagen del banner desde /public/images
  const heroImg = '/images/researchDevelopment/i-d.jpg'

  return (
    <GuestLayout container={false}>
      <Head title="Investigación y Desarrollo (I+D) | Agrofina">
        <meta
          name="description"
          content="La innovación es clave en Agrofina. Conocé nuestro enfoque de investigación y desarrollo, certificaciones y descargas de IRAM 14001 / IQNET 14001 e IRAM 45001 / IQNET 45001."
        />
      </Head>
      <div className="w-full">
        <Hero heroImg={heroImg} />
        <Breadcrumbs />
        <MainContent />
        <Downloads />
        {/* Listas desplegables debajo del contenedor de certificaciones */}
          <section className="mx-auto max-w-7xl w-full px-4 pb-2">
          <h3 className="text-xl md:text-2xl font-semibold text-emerald-800">Conocé más</h3>
          <div className="my-3">
            <div
              className="rounded-full"
              style={{ width: '80px', height: '8px', background: 'linear-gradient(90deg, #00833E 0%, #7ED957 100%)' }}
            />
          </div>
            <div className="flex flex-col gap-4 mt-0 mb-8">
            {/* Centro de Desarrollo de Sintesis */}
            <details className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 transition-shadow hover:shadow-md cursor-pointer">
              <summary className="font-semibold text-emerald-800 cursor-pointer">Centro de Desarrollo de Síntesis</summary>
              <div className="mt-2 text-gray-700 text-sm">
                Descripción del Centro de Desarrollo de Síntesis.
              </div>
            </details>
            {/* Laboratorio de Desarrollo de Formulaciones */}
            <details className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 transition-shadow hover:shadow-md cursor-pointer">
              <summary className="font-semibold text-emerald-800 cursor-pointer">Laboratorio de Desarrollo de Formulaciones</summary>
              <div className="mt-2 text-gray-700 text-sm">
                Descripción del Laboratorio de Desarrollo de Formulaciones.
              </div>
            </details>
            {/* Centro de Desarrollo Analitico */}
            <details className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 transition-shadow hover:shadow-md cursor-pointer">
              <summary className="font-semibold text-emerald-800 cursor-pointer">Centro de Desarrollo Analítico</summary>
              <div className="mt-2 text-gray-700 text-sm">
                Descripción del Centro de Desarrollo Analítico.
              </div>
            </details>
            {/* Sistema Integrado de Gestion de Calidad, medioambiente, Salud y Seguridad en el Trabajo */}
            <details className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 transition-shadow hover:shadow-md cursor-pointer">
              <summary className="font-semibold text-emerald-800 cursor-pointer">Sistema Integrado de Gestión de Calidad, Medioambiente, Salud y Seguridad en el Trabajo</summary>
              <div className="mt-2 text-gray-700 text-sm">
                Descripción del Sistema Integrado de Gestión de Calidad, Medioambiente, Salud y Seguridad en el Trabajo.
              </div>
            </details>
          </div>
        </section>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </div>
    </GuestLayout>
  )
}

function Hero({ heroImg }) {
  return (
    <section className="relative w-full overflow-hidden h-[46vh] md:h-screen" aria-label="Imagen principal - Investigación y Desarrollo">
      <div
        className={`h-[36vh] md:h-screen w-full ${heroImg ? '' : 'bg-gradient-to-br from-emerald-700 via-emerald-600 to-lime-600'}`}
        style={heroImg ? { backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/20 to-transparent" aria-hidden />
      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto max-w-7xl w-full px-4 pb-6 md:pb-10">
          <h1 className="mt-2 text-3xl md:text-5xl font-semibold text-white drop-shadow">Investigación y Desarrollo (I+D)</h1>
          <p className="mt-2 max-w-2xl text-white/85 text-sm md:text-base">La innovación constituye un elemento clave de nuestra competitividad.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="#i-d-content" className="inline-flex items-center justify-center rounded-md bg-[#00833E] px-5 py-3 font-medium text-white shadow hover:bg-[#00994C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00833E] gap-2">
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
  )
}

function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl w-full px-4 py-4 text-sm text-gray-600">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="hover:underline text-gray-700">Inicio</Link>
        </li>
        <li aria-hidden className="text-gray-400">/</li>
        <li className="text-gray-500" aria-current="page">Investigación y Desarrollo</li>
      </ol>
    </nav>
  )
}

function MainContent() {
  return (
    <section className="mx-auto max-w-7xl w-full px-4 pb-10">
  <div className="w-full">
  <h2 className="text-2xl md:text-3xl font-semibold text-emerald-800">Investigación y Desarrollo</h2>
  <div className="my-4">
    <div
      className="rounded-full"
      style={{ width: '80px', height: '8px', background: 'linear-gradient(90deg, #00833E 0%, #7ED957 100%)' }}
    />
  </div>

  <div className="mt-4 text-[15px] leading-relaxed md:text-base w-full">
    <p>
      <span className="text-emerald-700 font-semibold">La innovación constituye un elemento clave de nuestra competitividad. Por lo tanto, resulta esencial para la sostenibilidad de Agrofina.</span><br/>
      <strong>Somos la única empresa Argentina con capacidad para producir con tecnología propia en base a nuestros desarrollos analíticos, de síntesis y de formulaciones.</strong><br/><br/>
      Desde nuestros comienzos hemos sintetizado y formulado más de 130 ingredientes activos, contamos con más de 100 formulaciones registradas y más de 180 desarrolladas, que dan cuenta de la capacidad y el compromiso de nuestros investigadores con el desarrollo de herramientas aplicadas a las buenas prácticas de una agricultura sostenible en Argentina y en el mundo.<br/><br/>
      Desde el 2011, nuestro Laboratorio de Desarrollo Analítico cuenta con <strong>Certificación BPL-OCDE</strong>, convirtiendo a Agrofina en la primera empresa del rubro en lograr esta certificación.<br/><br/>
      Actualmente el Laboratorio de Investigación y Desarrollo cuenta con la certificación de su sistema de gestión ambiental y de seguridad y salud en el trabajo según las normas ISO 14001 e ISO 45001.
    </p>
          </div>
      </div>
    </section>
  )
}

function Downloads() {
  const items = [
    { label: 'Certificado IRAM 14001 (pdf)', file: '/pdfs/id/IRAM-14001.pdf' },
    { label: 'Certificado IQNET 14001 (pdf)', file: '/pdfs/id/IQNET-14001.pdf' },
    { label: 'Certificado IRAM 45001 (pdf)', file: '/pdfs/id/IRAM-45001.pdf' },
    { label: 'Certificado IQNET 45001 (pdf)', file: '/pdfs/id/IQNET-45001.pdf' },
  ]

  return (
    <section className="mx-auto max-w-7xl w-full px-4 pb-14">
      <div className="rounded-2xl bg-white p-6 shadow ring-1 ring-black/5">
        <h3 className="text-xl md:text-2xl font-semibold text-emerald-800">Certificaciones</h3>
        <div className="my-4">
          <div
            className="rounded-full"
            style={{ width: '80px', height: '8px', background: 'linear-gradient(90deg, #00833E 0%, #7ED957 100%)' }}
          />
        </div>
        <p className="mt-1 text-gray-600 text-sm">Descargá las certificaciones vigentes de nuestro sistema de gestión.</p>

                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {items.map((it) => (
                    <a
                      key={it.label}
                      href={it.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-between border border-emerald-200 rounded-lg bg-emerald-50 px-5 py-4 font-semibold text-emerald-800 shadow transition hover:bg-emerald-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                      download
                    >
                      <span>{it.label}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 ml-3">
                        <path fillRule="evenodd" d="M3 14.25A2.25 2.25 0 0 0 5.25 16.5h9.5A2.25 2.25 0 0 0 17 14.25v-1.5a.75.75 0 0 1 1.5 0v1.5A3.75 3.75 0 0 1 14.75 18H5.25A3.75 3.75 0 0 1 1.5 14.25v-1.5A.75.75 0 0 1 3 12.75v1.5Zm3.22-6.03a.75.75 0 0 1 1.06 0L9.25 10.16V2.75a.75.75 0 0 1 1.5 0v7.41l1.97-1.94a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L6.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </a>
                  ))}
                </div>
      </div>
    </section>
  )
}
