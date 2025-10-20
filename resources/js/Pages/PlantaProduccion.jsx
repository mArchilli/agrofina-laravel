import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

export default function PlantaProduccion() {
    return (
        <GuestLayout>
            <Head title="Planta de Producción" />
            <h1 className="text-3xl font-bold text-gray-900">Planta de Producción</h1>
            <p className="mt-4 text-gray-700">
                Información sobre nuestra planta de producción y procesos.
            </p>
        </GuestLayout>
    );
}
