import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

export default function Proveedores() {
  return (
    <GuestLayout>
      <Head title="Proveedores" />
      <section className="py-12 text-center">
        <h1 className="text-3xl font-semibold text-gray-900">Proveedores</h1>
        <p className="mt-2 text-gray-600">Información para proveedores próximamente.</p>
      </section>
    </GuestLayout>
  );
}
