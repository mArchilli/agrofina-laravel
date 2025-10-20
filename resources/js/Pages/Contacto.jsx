import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

export default function Contacto() {
    return (
        <GuestLayout>
            <Head title="Contacto" />
            <h1 className="text-3xl font-bold text-gray-900">Contacto</h1>
            <p className="mt-4 text-gray-700">
                Escribinos y nos pondremos en contacto a la brevedad.
            </p>
        </GuestLayout>
    );
}
