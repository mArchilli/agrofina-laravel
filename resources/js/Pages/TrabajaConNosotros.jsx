import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

export default function TrabajaConNosotros() {
  return (
    <GuestLayout>
      <Head title="Trabajá con nosotros" />
      <section className="py-12 text-center">
        <h1 className="text-3xl font-semibold text-gray-900">Trabajá con nosotros</h1>
        <p className="mt-2 text-gray-600">Oportunidades laborales próximamente.</p>
      </section>
    </GuestLayout>
  );
}
