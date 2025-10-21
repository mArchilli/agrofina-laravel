import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

export default function AgroNews() {
  return (
    <GuestLayout>
      <Head title="AgroNews" />
      <section className="py-12 text-center">
        <h1 className="text-3xl font-semibold text-gray-900">AgroNews</h1>
        <p className="mt-2 text-gray-600">Noticias y artículos próximamente.</p>
      </section>
    </GuestLayout>
  );
}
