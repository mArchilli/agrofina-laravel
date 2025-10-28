import { Link } from '@inertiajs/react';

const leftLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicio Técnico', href: route('servicio-tecnico') },
  { label: 'Red Comercial', href: route('red-comercial') },
  { label: 'I+D', href: route('i-d') },
  { label: 'Planta de Producción', href: route('planta-produccion') },
  { label: 'Contacto', href: route('contacto') },
];
const rightLinks = [
  { label: 'Institucional', href: route('institucional') },
  { label: 'Políticas', href: route('politicas') },
  { label: 'Novedades', href: route('novedades') },
  { label: 'AgroNews', href: route('agro-news') },
  { label: 'Trabajá con nosotros', href: route('trabaja') },
  { label: 'Proveedores', href: route('proveedores') },
];

export default function Footer() {
  return (
    <>
      <footer className="w-full bg-emerald-900 text-emerald-50">
        <div className="mx-auto max-w-6xl px-4 pt-2 pb-4 md:pt-6 md:pb-6">
            {/* Ubicaciones: integradas dentro del footer para evitar líneas divisorias en mobile */}
            <div className="pt-4 pb-4 flex flex-col gap-6 md:flex-row md:gap-8 md:pt-10 md:justify-center md:space-x-12 md:mb-10 justify-between">
            <div className="flex-1 min-w-[220px]">
              <div className="font-medium text-emerald-50 mb-1">Administración</div>
              <div className="text-emerald-100/90 text-sm">
                <span className="inline-flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" width="14" height="14" style={{verticalAlign:'middle'}}>
                    <path fill="#059669" d="M10 2a6 6 0 0 0-6 6c0 4.418 5.25 9.25 5.477 9.462a1 1 0 0 0 1.046 0C10.75 17.25 16 12.418 16 8a6 6 0 0 0-6-6zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
                  </svg>
                  Dr. Nicolás Repetto 3676
                </span><br/>
                (Complejo Olivos Building I) Olivos, BA | ARG
              </div>
            </div>
            <div className="flex-1 min-w-[220px]">
              <div className="font-medium text-emerald-50 mb-1">Laboratorio</div>
              <div className="text-emerald-100/90 text-sm">
                <span className="inline-flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" width="14" height="14" style={{verticalAlign:'middle'}}>
                    <path fill="#059669" d="M10 2a6 6 0 0 0-6 6c0 4.418 5.25 9.25 5.477 9.462a1 1 0 0 0 1.046 0C10.75 17.25 16 12.418 16 8a6 6 0 0 0-6-6zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
                  </svg>
                  Joaquín V. González 4977 (C1419AYK)
                </span><br/>
                Ciudad Autónoma de Buenos Aires | ARG
              </div>
            </div>
            <div className="flex-1 min-w-[220px]">
              <div className="font-medium text-emerald-50 mb-1">Planta producción</div>
              <div className="text-emerald-100/90 text-sm">
                <span className="inline-flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" width="14" height="14" style={{verticalAlign:'middle'}}>
                    <path fill="#059669" d="M10 2a6 6 0 0 0-6 6c0 4.418 5.25 9.25 5.477 9.462a1 1 0 0 0 1.046 0C10.75 17.25 16 12.418 16 8a6 6 0 0 0-6-6zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
                  </svg>
                  Camino Santa Ana S/N (B2800DDF)
                </span><br/>
                Zárate, Provincia de Buenos Aires | ARG
              </div>
            </div>
            </div>

            {/* Divisoria horizontal entre Ubicaciones y la grilla principal */}
            <div className="border-t border-white/10 mt-10 mb-10" />

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              <div>
                <div className="text-lg font-semibold">Agrofina</div>
                <p className="mt-2 text-emerald-100/80 text-sm">
                  Protección de cultivos para una producción eficiente y sustentable.
                </p>
              </div>
              <div>
                <div className="font-medium">Navegación</div>
                <ul className="mt-3 space-y-1 text-sm text-emerald-100/90">
                  {leftLinks.map(link => (
                    <li key={link.label}>
                      <Link href={link.href} className="hover:text-emerald-50 transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="font-medium">Empresa</div>
                <ul className="mt-3 space-y-1 text-sm text-emerald-100/90">
                  {rightLinks.map(link => (
                    <li key={link.label}>
                      <Link href={link.href} className="hover:text-emerald-50 transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="font-medium">Contacto</div>
                <ul className="mt-3 space-y-1 text-sm text-emerald-100/90">
                  <li>Argentina</li>
                  <li>+54 11 4837 7800</li>
                  <li>info@agrofina.com.ar</li>
                </ul>
              </div>
              <div>
                <div className="font-medium">Redes</div>
                <ul className="mt-3 space-y-1 text-sm text-emerald-100/90">
                  <li><a href="https://www.linkedin.com/company/agrofina-sa/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-50 transition-colors">LinkedIn</a></li>
                  <li><a href="https://www.instagram.com/agrofinaoficial/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-50 transition-colors">Instagram</a></li>
                  <li><a href="https://www.youtube.com/watch?v=YBaXGmzZL60" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-50 transition-colors">Youtube</a></li>
                  <li><a href="https://www.facebook.com/AgrofinaArgentina" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-50 transition-colors">Facebook</a></li>
                  <li><a href="https://x.com/Agrofinatec" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-50 transition-colors">X</a></li>
                </ul>
              </div>
            </div>

            <div className="mt-10 border-t border-white/10 pt-6 text-xs text-emerald-100/70">
              <div className="flex flex-col items-center gap-6 sm:gap-2 sm:flex-row sm:justify-between">
                <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                  <span className="text-center sm:text-left">© {new Date().getFullYear()} Agrofina. Todos los derechos reservados.</span>
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-6 sm:mt-0 sm:ml-0">
                    <a href="https://www.ciafa.org.ar/" target="_blank" rel="noopener noreferrer">
                      <img src="/images/logo-ciafa.png" alt="Logo Ciafa" className="h-12 w-auto" />
                    </a>
                    <a href="https://www.grupolosgrobo.com/ideas-para-transformar/medios/premio-fortuna-a-la-mejor-empresa-de-agroservicios-agrofina" target="_blank" rel="noopener noreferrer">
                      <img src="/images/premio-fortuna.png" alt="Premio Fortuna" className="h-10 w-auto" />
                    </a>
                    <a href="https://www.grupolosgrobo.com/" target="_blank" rel="noopener noreferrer">
                      <img src="/images/grupo-los-grobos.png" alt="Grupo Los Grobo" className="h-24 w-40 object-contain" />
                    </a>
                  </div>
                </div>
              </div>
            </div>


        </div>
      </footer>
    </>
  );
}