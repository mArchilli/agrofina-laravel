import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

export default function Politicas() {
  return (
    <GuestLayout>
      <Head title="Políticas" />
      <section className="py-12 text-center">
        <h1 className="text-3xl font-semibold text-gray-900">Políticas</h1>
        <p className="mt-2 text-gray-600">Contenido de políticas próximamente.</p>
      </section>
    </GuestLayout>
  );
}
