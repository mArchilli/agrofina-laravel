import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

export default function Novedades() {
  return (
    <GuestLayout>
      <Head title="Novedades" />
      <section className="py-12 text-center">
        <h1 className="text-3xl font-semibold text-gray-900">Novedades</h1>
        <p className="mt-2 text-gray-600">Próximamente novedades.</p>
      </section>
    </GuestLayout>
  );
}
