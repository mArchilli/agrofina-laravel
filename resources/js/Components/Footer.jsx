
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
      {/* Mini sección de navegación */}
      {/* <div className="w-full bg-emerald-800/95 text-emerald-50 border-t border-emerald-700 flex justify-center">
        <div className="mx-auto max-w-6xl w-full px-2 py-2 flex flex-col items-center">
          <div className="font-bold tracking-wide text-base mb-1 w-full text-center">NAVEGACIÓN</div>
          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-2">
            <nav className="flex flex-row flex-wrap justify-center gap-2">
              {leftLinks.map(link => (
                <Link key={link.label} href={link.href} className="text-emerald-50/90 hover:text-white px-2 py-1 rounded transition-colors text-sm font-medium whitespace-nowrap">
                  {link.label}
                </Link>
              ))}
            </nav>
            <span className="inline-block bg-emerald-50 mx-2 sm:my-0 my-2 h-px w-20 sm:h-7 sm:w-px" />
            <nav className="flex flex-row flex-wrap justify-center gap-2">
              {rightLinks.map(link => (
                <Link key={link.label} href={link.href} className="text-emerald-50/90 hover:text-white px-2 py-1 rounded transition-colors text-sm font-medium whitespace-nowrap">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div> */}
      <footer className="w-full bg-emerald-900 text-emerald-50">
        <div className="mx-auto max-w-6xl px-4 py-20">
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
              <li><a href="https://www.linkedin.com/company/agrofina-sa/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/agrofinaoficial/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://www.youtube.com/watch?v=YBaXGmzZL60" target="_blank" rel="noopener noreferrer">Youtube</a></li>
              <li><a href="https://www.facebook.com/AgrofinaArgentina" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://x.com/Agrofinatec" target="_blank" rel="noopener noreferrer">X</a></li>
            </ul>
          </div>
        </div>
  <div className="mt-10 border-t border-white/10 pt-6 text-xs text-emerald-100/70">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
            <div className="text-center sm:text-left">
              © {new Date().getFullYear()} Agrofina. Todos los derechos reservados.
            </div>
            <div className="text-center sm:text-right">
              Desarrollado por
              {' '}
              <a
                href="https://archillimatias.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-emerald-50"
              >
                Archilli Matias
              </a>
              {' '}y{' '}
              <a
                href="https://comollileon.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-emerald-50"
              >
                Comolli Leon
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </>
  )
}
