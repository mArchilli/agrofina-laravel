import { useEffect, useMemo, useRef, useState } from 'react'
import { Head, Link } from '@inertiajs/react'
import GuestLayout from '@/Layouts/GuestLayout'

// Assets desde /public/images/commercialNetwork
const bannerImg = '/images/commercialNetwork/Red-comercial.jpg'
const mapImg = '/images/commercialNetwork/mapa-servtecnico.png'

// Etiquetas amigables por región (usadas en tooltips y títulos)
const regionLabels = {
  'noa-cordobanorte': 'NOA y Córdoba Norte',
  nea: 'NEA',
  'cbacentrosur-sanluis': 'Córdoba Centro/Sur y San Luis',
  'santafecentro-entrerios': 'Santa Fe Centro y Entre Ríos',
  sntafesur: 'Santa Fe Sur',
  'bsasnorte-este-sudeste': 'Buenos Aires Norte, Este y Sudeste',
  'bsasnoroeste-lapampa': 'Buenos Aires Noroeste y La Pampa',
  'bsascentro-sur-sudoeste': 'Buenos Aires Centro, Sur y Sudoeste',
}

// Colores alineados con los fills del mapa SVG
const regionColors = {
  'noa-cordobanorte': '#FFAAFF', // Rosa claro
  nea: '#AAAAFF', // Violeta claro
  'santafecentro-entrerios': '#32CD32', // Verde vivo
  'cbacentrosur-sanluis': '#FFB74D', // Naranja
  sntafesur: '#00BFFF', // Celeste vivo
  'bsasnorte-este-sudeste': '#FF0000', // Rojo
  'bsasnoroeste-lapampa': '#61B196', // Verde agua
  'bsascentro-sur-sudoeste': '#AA55FF', // Rosa vivo
}

// Representantes Técnicos comerciales por región (usado en tooltips y en las cards)
const advisorsByRegion = {
  'noa-cordobanorte': [
    { nombre: 'Santiago Araoz', telefono: '+54 9 11 2744-9683', email: 'saraoz@agrofina.com.ar' },
  ],
  nea: [
    { nombre: 'Mariano Asinari', telefono: '+54 9 379 460-3985', email: 'masinari@agrofina.com.ar' },
  ],
  'cbacentrosur-sanluis': [
    { nombre: 'Patricia Loza', telefono: '+54 9 3525 53-2997', email: 'ploza@agrofina.com.ar' },
  ],
  'santafecentro-entrerios': [
    { nombre: 'Mauro Paz', telefono: '+54 9 341 649-1639', email: 'mpaz@agrofina.com.ar' },
    { nombre: 'Fernando Tschopp', telefono: '+54 9 340 443-9918', email: 'ftschopp@agrofina.com.ar' },
  ],
  sntafesur: [
    { nombre: 'Pablo Musante', telefono: '+54 9 11 3379-4269', email: 'pmusante@agrofina.com.ar' },
  ],
  'bsasnorte-este-sudeste': [
    { nombre: 'Gustavo López', telefono: '+54 9 11 3379-3807', email: 'glopez@agrofina.com.ar' },
  ],
  'bsasnoroeste-lapampa': [
    { nombre: 'Ramón Baretta', telefono: '+54 9 2342 40-6341', email: 'rbaretta@agrofina.com.ar' },
  ],
  'bsascentro-sur-sudoeste': [
    { nombre: 'Juan Orfali', telefono: '+54 9 2317 50-1575', email: 'jorfali@agrofina.com.ar' },
  ],
}

export default function RedComercial() {

  const jsonLd = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Red Comercial',
    provider: {
      '@type': 'Organization',
      name: 'Agrofina',
    },
    areaServed: 'Argentina',
    serviceType: 'Servicios comerciales y distribución',
    url: typeof window !== 'undefined' ? window.location.href : undefined,
    audience: {
      '@type': 'Audience',
      audienceType: 'Productores y distribuidores'
    }
  }), [])

  return (
    <GuestLayout container={false}>
      <Head title="Red Comercial | Agrofina">
        <meta
          name="description"
          content="Tenemos una amplia red de servicios y distribución que analiza junto a cada cliente las mejores soluciones. Hacé clic en el mapa para acceder a los datos del asesor más cercano a tu zona."
        />
      </Head>
      <div className="w-full">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Hero />
        <Breadcrumbs />
        <Intro />
        <TeamAndMap />
        <CTAService />
      </div>
    </GuestLayout>
  )
}

function Intro() {
  const svgWrapRef = useRef(null)
  const [hoverKey, setHoverKey] = useState(null)
  const [tipPos, setTipPos] = useState({ x: 0, y: 0 })

  const handleEnter = (key) => setHoverKey(key)
  const handleLeave = () => setHoverKey(null)
  const handleMove = (e) => {
    if (!svgWrapRef.current) return
    const rect = svgWrapRef.current.getBoundingClientRect()
    setTipPos({ x: e.clientX - rect.left + 10, y: e.clientY - rect.top + 10 })
  }

  const highlights = [
    { title: 'Cobertura nacional', desc: 'Asesoras/es y distribuidores en las principales regiones productivas.', emoji: '🗺️' },
    { title: 'Atención cercana', desc: 'Contacto directo para consultas comerciales y disponibilidad.', emoji: '🤝' },
    { title: 'Logística ágil', desc: 'Coordinación con nuestra red para entregas oportunas.', emoji: '🚚' },
  ]

  return (
    <section className="mx-auto max-w-7xl w-full px-4 pb-12">
      <div className="grid gap-8 md:grid-cols-2 md:items-start">
        <article className="max-w-none">
          <h2 className="text-2xl md:text-3xl font-semibold text-emerald-800">Nuestra red comercial</h2>
          <p className="mt-3 text-gray-700">
            Tenemos una amplia red de servicios y distribución que analizan junto a cada cliente las mejores soluciones a
            partir de sus necesidades productivas. <span className="font-medium">Hacé clic en el mapa para acceder a los
            datos de contacto del asesor más cercano a tu zona.</span>
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-4 shadow ring-1 ring-black/5">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-lime-500/15 text-lime-700 text-lg" aria-hidden>
                    {item.emoji}
                  </span>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl bg-gradient-to-br from-emerald-600 to-lime-600 p-4 text-white shadow">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-medium">¿Dudas técnicas o necesidad de recomendaciones puntuales?</p>
                <p className="text-white/90 text-sm">Elegí tu región en el mapa o escribinos y coordinamos una visita a campo.</p>
              </div>
              <div className="flex gap-2">
                <a href="#contacto-servicio-tecnico" className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 font-medium text-emerald-700 hover:bg-white/90">Contactos</a>
              </div>
            </div>
          </div>
        </article>

        <aside id="mapa-servicio-tecnico" className="rounded-2xl bg-white shadow ring-1 ring-black/5">
          <div ref={svgWrapRef} className="relative w-full overflow-hidden rounded-xl bg-white">
            <svg
              viewBox="0 0 1080 1380"
              className="h-full w-full"
              role="img"
              aria-label="Mapa de cobertura nacional de Argentina"
              preserveAspectRatio="xMidYMid meet"
            >
              <image href={mapImg} x="0" y="0" width="1080" height="1380" />
              
            </svg>
            {hoverKey && (
              <div
                className="pointer-events-none absolute z-10 rounded-md border border-gray-200 bg-white/95 px-3 py-2 text-sm shadow-sm"
                style={{ left: tipPos.x, top: tipPos.y, maxWidth: '260px' }}
                role="status"
                aria-live="polite"
              >
                <div className="text-[13px] font-semibold text-emerald-800">{regionLabels[hoverKey] || 'Región'}</div>
                <div className="text-xs text-gray-700 mt-0.5">Representantes Técnicos comerciales</div>
                {advisorsByRegion[hoverKey] && (
                  <div className="mt-1 space-y-2">
                    {advisorsByRegion[hoverKey].map((p, idx) => (
                      <div key={p.email || idx} className="text-xs">
                        <div className="font-medium text-gray-900 text-[13px]">{p.nombre}</div>
                        <div>
                          <span className="text-gray-500">Email:</span>{' '}
                          <a className="text-emerald-700 hover:underline" href={`mailto:${p.email}`}>{p.email}</a>
                        </div>
                        <div className="text-gray-500">Tel: {p.telefono}</div>
                      </div>
                    ))}
                  </div>
                )}
                <div className="mt-1 text-[11px] text-emerald-700"><a href="#contacto-servicio-tecnico">Ver contactos</a></div>
              </div>
            )}
          </div>
          <p className="mt-3 text-sm px-4 text-gray-600">
            Encontra en el mapa los datos de contacto del asesor más cercano a tu zona.
          </p>
        </aside>
      </div>
    </section>
  )
}

function TeamAndMap() {
  const reps = [
    { nombre: 'Osvaldo Boiero', rol: 'Jefe de Ventas Región Norte', email: 'oboiero@agrofina.com.ar', telefono: '+54 9 11 2630-7435' },
    { nombre: 'Marcelo Pecile', rol: 'Jefe de Ventas Región Centro', email: 'mpecile@agrofina.com.ar', telefono: '+54 9 11 3134-3993' },
    { nombre: 'Nicolás Hary', rol: 'Jefe de Ventas Región Sur', email: 'nhary@agrofina.com.ar', telefono: '+54 9 2395 40-8059' },
  ]

  return (
    <section id="contacto-servicio-tecnico" className="mx-auto max-w-7xl w-full px-4 py-10">
      <div className="mt-8 rounded-2xl bg-white p-6 shadow ring-1 ring-black/5">
        <h3 className="text-lg md:text-xl font-semibold text-emerald-800">Representantes Técnicos comerciales</h3>
        <p className="mt-1 text-gray-600 text-sm">Encontrá el representante técnico comercial específico de cada zona.</p>
        <RegionCards advisorsByRegion={advisorsByRegion} />
      </div>
    </section>
  )
}

function CTAService() {
  return (
    <section className="relative w-full overflow-hidden mt-6">
      <div className="absolute inset-0 bg-gradient-to-r from-lime-500/20 via-emerald-400/20 to-transparent" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 py-10">
        <div className="rounded-2xl bg-gradient-to-br from-emerald-600 to-lime-600 p-7 text-white shadow">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold">¿Necesitás asesoramiento comercial?</h2>
              <p className="mt-1 text-white/90">Consultá el mapa por región o escribinos para coordinar disponibilidad y condiciones.</p>
            </div>
            <div className="md:justify-self-end flex gap-3">
              <a href="#mapa-servicio-tecnico" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 font-medium text-emerald-700 shadow transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg">Ver mapa</a>
              <a href="#contacto-servicio-tecnico" className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 px-5 py-3 font-medium text-white backdrop-blur transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg">Ver contactos</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function RegionCards({ advisorsByRegion }) {
  return (
    <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Object.entries(advisorsByRegion).map(([regionKey, personas]) => {
        const color = regionColors[regionKey]
        const title = regionLabels[regionKey] || regionKey.replaceAll('-', ' ')
        return (
          <article
            key={regionKey}
            className="rounded-xl border p-5 hover:shadow-sm transition-shadow"
            style={color ? { borderColor: color } : undefined}
          >
            <h4 className="font-medium text-emerald-800 flex items-start gap-2">
              <span
                aria-hidden
                className="mt-1 inline-block h-2.5 w-2.5 rounded-full"
                style={color ? { backgroundColor: color } : undefined}
              />
              {title}
            </h4>
            {color && (
              <div className="mt-2 h-1.5 w-16 rounded-full" style={{ backgroundColor: color }} aria-hidden />
            )}
            <div className="mt-2 space-y-3 text-sm">
              {personas.map((p) => (
                <div key={p.email} className="rounded-md bg-gray-50 p-3">
                  <div className="font-medium">{p.nombre}</div>
                  <div>
                    <a className="text-emerald-700 hover:underline" href={`mailto:${p.email}`}>{p.email}</a>
                  </div>
                  <div className="text-gray-600">{p.telefono}</div>
                </div>
              ))}
            </div>
          </article>
        )
      })}
    </div>
  )
}

function Hero() {
  return (
    <section className="relative w-full overflow-hidden h-[46vh] md:h-screen" aria-label="Imagen principal - Red Comercial">
      <div
        className="h-[46vh] md:h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImg})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent" aria-hidden />
      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto max-w-7xl w-full px-4 pb-6 md:pb-10">
          <h1 className="mt-2 text-3xl md:text-5xl font-semibold text-white drop-shadow">Red Comercial</h1>
          <p className="mt-2 max-w-2xl text-white/85 text-sm md:text-base">
            Tenemos una amplia red en todo el país para acompañarte con asesoramiento y disponibilidad.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="#mapa-servicio-tecnico" className="group inline-flex items-center justify-center rounded-md bg-[#00833E] px-4 py-2.5 font-medium text-white shadow transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00833E] gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1">
                <path d="M6 9l6 6 6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Ver mapa de regiones
            </a>
            <a href="#contacto-servicio-tecnico" className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 px-4 py-2.5 font-medium text-white backdrop-blur transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
              Ver contactos
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl w-full px-4 py-3 text-sm text-gray-600">
      <ol className="flex items-center gap-2">
        <li>
          <Link href="/" className="hover:underline text-gray-700">Inicio</Link>
        </li>
        <li aria-hidden>›</li>
        <li className="text-gray-900">Red Comercial</li>
      </ol>
    </nav>
  )
}


