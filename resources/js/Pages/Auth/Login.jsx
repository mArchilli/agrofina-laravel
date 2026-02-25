import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });
    
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
            <Head title="Iniciar Sesión" />
            
            {/* Fondo con gradients orgánicos animados */}
            <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-lime-50">
                {/* Gradients decorativos de fondo */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-400/35 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-lime-400/35 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-300/15 to-lime-300/15 rounded-full blur-3xl"></div>
                
                {/* Container principal */}
                <div className="min-h-screen flex flex-col justify-center items-center px-4 py-12 relative z-10">
                    
                    {/* Logo */}
                    <div className="mb-8 animate-[fadeIn_0.8s_ease-out] flex justify-center">
                        <Link href="/" className="block transition-transform duration-300 hover:scale-105">
                            <img 
                                src="/images/logo-login.png" 
                                alt="Agrofina" 
                                className="h-20 w-auto drop-shadow-lg mx-auto"
                            />
                        </Link>
                    </div>

                    {/* Card principal con glassmorphism */}
                    <div className="w-full sm:max-w-md animate-[fadeIn_1s_ease-out]">
                        <div className="relative">
                            {/* Glassmorphism card */}
                            <div className="relative backdrop-blur-xl bg-white/80 rounded-3xl shadow-2xl border border-white/50 overflow-hidden transition-all duration-300 hover:shadow-3xl hover:scale-[1.02]">
                                {/* Efecto de brillo superior */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-emerald-500 to-lime-400"></div>
                                
                                {/* Contenido */}
                                <div className="p-8 md:p-10">
                                    {/* Header */}
                                    <div className="text-center mb-8">
                                        <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-700 to-emerald-900 bg-clip-text text-transparent mb-2">
                                            Bienvenido
                                        </h1>
                                        <p className="text-gray-600 text-sm">
                                            Accede a tu panel de administración
                                        </p>
                                    </div>

                                    {status && (
                                        <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-sm text-emerald-700">
                                            {status}
                                        </div>
                                    )}

                                    <form onSubmit={submit} className="space-y-6">
                                        {/* Email Input */}
                                        <div className="relative">
                                            <label 
                                                htmlFor="email" 
                                                className="block text-sm font-medium text-gray-700 mb-2"
                                            >
                                                Correo electrónico
                                            </label>
                                            <div className="relative">
                                                <input
                                                    id="email"
                                                    type="email"
                                                    name="email"
                                                    value={data.email}
                                                    autoComplete="username"
                                                    autoFocus
                                                    onFocus={() => setEmailFocused(true)}
                                                    onBlur={() => setEmailFocused(false)}
                                                    onChange={(e) => setData('email', e.target.value)}
                                                    className={`w-full px-4 py-3 bg-white/50 border-2 rounded-xl transition-all duration-300 focus:outline-none ${
                                                        emailFocused || data.email
                                                            ? 'border-emerald-500 shadow-lg shadow-emerald-500/20'
                                                            : 'border-gray-200 hover:border-emerald-300'
                                                    }`}
                                                    placeholder="tu@email.com"
                                                />
                                            </div>
                                            <InputError message={errors.email} className="mt-2" />
                                        </div>

                                        {/* Password Input */}
                                        <div className="relative">
                                            <label 
                                                htmlFor="password" 
                                                className="block text-sm font-medium text-gray-700 mb-2"
                                            >
                                                Contraseña
                                            </label>
                                            <div className="relative">
                                                <input
                                                    id="password"
                                                    type={showPassword ? 'text' : 'password'}
                                                    name="password"
                                                    value={data.password}
                                                    autoComplete="current-password"
                                                    onFocus={() => setPasswordFocused(true)}
                                                    onBlur={() => setPasswordFocused(false)}
                                                    onChange={(e) => setData('password', e.target.value)}
                                                    className={`w-full px-4 py-3 pr-12 bg-white/50 border-2 rounded-xl transition-all duration-300 focus:outline-none ${
                                                        passwordFocused || data.password
                                                            ? 'border-emerald-500 shadow-lg shadow-emerald-500/20'
                                                            : 'border-gray-200 hover:border-emerald-300'
                                                    }`}
                                                    placeholder="••••••••"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-emerald-600 transition-colors duration-200"
                                                    tabIndex={-1}
                                                >
                                                    {showPassword ? (
                                                        /* Ojo tachado - ocultar */
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                                        </svg>
                                                    ) : (
                                                        /* Ojo abierto - mostrar */
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                        </svg>
                                                    )}
                                                </button>
                                            </div>
                                            <InputError message={errors.password} className="mt-2" />
                                        </div>

                                        {/* Remember me & Forgot password */}
                                        <div className="flex items-center justify-between text-sm">
                                            <label className="flex items-center cursor-pointer group">
                                                <Checkbox
                                                    name="remember"
                                                    checked={data.remember}
                                                    onChange={(e) => setData('remember', e.target.checked)}
                                                    className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                                                />
                                                <span className="ml-2 text-gray-600 group-hover:text-emerald-700 transition-colors">
                                                    Recordarme
                                                </span>
                                            </label>

                                            {canResetPassword && (
                                                <Link
                                                    href={route('password.request')}
                                                    className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
                                                >
                                                    ¿Olvidaste tu contraseña?
                                                </Link>
                                            )}
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="group relative w-full px-6 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                                        >
                                            {/* Efecto de brillo animado */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-[shimmer_2s_ease-in-out]"></div>
                                            <span className="relative z-10">
                                                {processing ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                                            </span>
                                        </button>
                                    </form>

                                    {/* Link para volver */}
                                    <div className="mt-6 text-center">
                                        <Link
                                            href="/"
                                            className="inline-flex items-center text-gray-600 hover:text-emerald-600 font-medium transition-colors"
                                        >
                                            ← Volver al sitio
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Sombra verde decorativa */}
                            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400/20 to-lime-400/20 rounded-3xl blur-2xl -z-10"></div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-8 text-center text-sm text-gray-600">
                        <p>Campo inteligente, innovación natural</p>
                    </div>
                </div>
            </div>
        </>
    );
}

{/* Animación shimmer para el botón */}
<style jsx>{`
    @keyframes shimmer {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(100%);
        }
    }
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`}</style>