import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

export default function Institucional() {
  return (
    <GuestLayout>
      <Head title="Institucional" />
      <section className="py-12 text-center">
        <h1 className="text-3xl font-semibold text-gray-900">Institucional</h1>
        <p className="mt-2 text-gray-600">Contenido institucional próximamente.</p>
      </section>
    </GuestLayout>
  );
}
