import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

export default function ServicioTecnico() {
    return (
        <GuestLayout>
            <Head title="Servicio Técnico" />
            <h1 className="text-3xl font-bold text-gray-900">Servicio Técnico</h1>
            <p className="mt-4 text-gray-700">
                Asistencia y soporte especializado para nuestros productos.
            </p>
        </GuestLayout>
    );
}
