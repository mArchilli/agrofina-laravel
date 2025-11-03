import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });
    
    const [emailFocused, setEmailFocused] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        post(route('password.email'));
    };

    return (
        <>
            <Head title="Recuperar Contraseña" />
            
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
                                    {/* Header con ícono */}
                                    <div className="text-center mb-8">
                                        {/* Ícono de sobre */}
                                        <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-emerald-100 to-lime-100 rounded-2xl shadow-lg">
                                            <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        
                                        <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-700 to-emerald-900 bg-clip-text text-transparent mb-3">
                                            ¿Olvidaste tu contraseña?
                                        </h1>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            No te preocupes. Ingresá tu correo y te enviaremos un enlace para restablecer tu contraseña.
                                        </p>
                                    </div>

                                    {/* Mensaje de éxito */}
                                    {status && (
                                        <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-sm text-emerald-700 flex items-start">
                                            <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span>{status}</span>
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
                                                {/* Ícono de sobre en el input */}
                                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                                    <svg className={`w-5 h-5 transition-colors ${emailFocused ? 'text-emerald-500' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <InputError message={errors.email} className="mt-2" />
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="group relative w-full px-6 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                                        >
                                            {/* Efecto de brillo animado */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-[shimmer_2s_ease-in-out]"></div>
                                            <span className="relative z-10 flex items-center justify-center">
                                                {processing ? (
                                                    <>
                                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                        </svg>
                                                        Enviando...
                                                    </>
                                                ) : (
                                                    <>
                                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                        </svg>
                                                        Enviar correo de recuperación
                                                    </>
                                                )}
                                            </span>
                                        </button>
                                    </form>

                                    {/* Link para volver al login */}
                                    <div className="mt-6 text-center">
                                        <Link
                                            href={route('login')}
                                            className="inline-flex items-center text-gray-600 hover:text-emerald-600 font-medium transition-colors group"
                                        >
                                            <svg className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                            </svg>
                                            Volver al inicio de sesión
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Sombra verde decorativa */}
                            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400/20 to-lime-400/20 rounded-3xl blur-2xl -z-10"></div>
                        </div>
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
