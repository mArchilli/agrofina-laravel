import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

export default function RedComercial() {
    return (
        <GuestLayout>
            <Head title="Red Comercial" />
            <h1 className="text-3xl font-bold text-gray-900">Red Comercial</h1>
            <p className="mt-4 text-gray-700">
                Conocé nuestra red de distribuidores y canales de venta.
            </p>
        </GuestLayout>
    );
}
