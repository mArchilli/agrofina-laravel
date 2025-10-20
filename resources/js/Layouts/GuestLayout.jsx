import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

export default function GuestLayout({ children, container = true }) {
    return (
        <div className="flex min-h-screen flex-col bg-gray-50">
            <Navbar variant="client" />
            <main className="flex-1">
                {container ? (
                    <div className="mx-auto max-w-7xl p-6 sm:p-8">{children}</div>
                ) : (
                    children
                )}
            </main>
            <Footer />
        </div>
    );
}
