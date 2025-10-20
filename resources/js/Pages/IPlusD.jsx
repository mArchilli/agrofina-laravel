import { Head } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

export default function IPlusD() {
    return (
        <GuestLayout>
            <Head title="I+D" />
            <h1 className="text-3xl font-bold">I+D</h1>
            <p className="mt-4 text-base text-black/70 dark:text-white/70">
                Esta es la página de Investigación y Desarrollo.
            </p>
        </GuestLayout>
    );
}
