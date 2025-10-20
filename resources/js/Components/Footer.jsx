export default function Footer() {
  return (
    <footer className="w-full bg-emerald-900 text-emerald-50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-lg font-semibold">Agrofina</div>
            <p className="mt-2 text-emerald-100/80 text-sm">
              Protección de cultivos para una producción eficiente y sustentable.
            </p>
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
            <div className="font-medium">Productos</div>
            <ul className="mt-3 space-y-1 text-sm text-emerald-100/90">
              <li>Herbicidas</li>
              <li>Fungicidas</li>
              <li>Insecticidas</li>
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
  )
}
