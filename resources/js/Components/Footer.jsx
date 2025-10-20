export default function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-white/70">
            <div className="mx-auto max-w-7xl px-4 py-8 text-center text-sm text-gray-600 sm:px-6 lg:px-8">
                © {new Date().getFullYear()} Agrofina. Todos los derechos reservados.
            </div>
        </footer>
    );
}
