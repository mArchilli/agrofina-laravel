import { Link, usePage } from '@inertiajs/react';

export default function Navbar({ variant = 'client' }) {
    const { auth } = usePage().props;
    const isAdmin = !!auth?.user;

    return (
        <nav className="border-b border-gray-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-6">
                    <Link href="/" className="text-lg font-semibold text-gray-800">
                        Agrofina
                    </Link>
                    <div className="hidden gap-4 sm:flex">
                        {variant === 'client' ? (
                            <>
                                <Link href={route('i-d')} className="text-sm text-gray-600 hover:text-gray-900">I+D</Link>
                                <Link href={route('servicio-tecnico')} className="text-sm text-gray-600 hover:text-gray-900">Servicio Técnico</Link>
                                <Link href={route('red-comercial')} className="text-sm text-gray-600 hover:text-gray-900">Red Comercial</Link>
                                <Link href={route('planta-produccion')} className="text-sm text-gray-600 hover:text-gray-900">Planta de Producción</Link>
                                <Link href={route('contacto')} className="text-sm text-gray-600 hover:text-gray-900">Contacto</Link>
                            </>
                        ) : (
                            <>
                                <Link href={route('dashboard')} className="text-sm text-gray-600 hover:text-gray-900">Dashboard</Link>
                            </>
                        )}
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    {variant === 'client' && !isAdmin && (
                        <>
                            <Link
                                href={route('login')}
                                className="rounded px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                Ingresar
                            </Link>
                            <Link
                                href={route('register')}
                                className="rounded bg-indigo-600 px-3 py-1.5 text-sm text-white hover:bg-indigo-500"
                            >
                                Crear cuenta
                            </Link>
                        </>
                    )}
                    {variant === 'admin' && isAdmin && (
                        <span className="text-sm text-gray-600">{auth.user.name}</span>
                    )}
                </div>
            </div>
        </nav>
    );
}
