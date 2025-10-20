import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <GuestLayout>
            <Head title="Inicio" />
            <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-lg bg-white p-8 shadow">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Bienvenido a Agrofina
                    </h1>
                    <p className="mt-4 text-gray-600">
                        Descubrí nuestros servicios, red comercial y planta de producción.
                    </p>
                </div>
                <div className="rounded-lg bg-white p-8 shadow">
                    <h2 className="text-xl font-semibold text-gray-900">
                        Novedades
                    </h2>
                    <p className="mt-2 text-gray-600">Contenido destacado próximamente…</p>
                </div>
            </div>
        </GuestLayout>
    );
}
