import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

export default function Eng() {
  return (
    <GuestLayout container={false}>
      <Head title="ENG" />
      {/* HERO */}
      <section className="relative w-full overflow-hidden h-[46vh] md:h-screen" aria-label="Main image - ENG">
        <div
          className="h-[46vh] md:h-screen w-full bg-cover bg-center"
          style={{ backgroundImage: `url(/images/soja-eng.jpg)` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent" aria-hidden />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-7xl w-full px-4 pb-6 md:pb-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">Welcome to Agrofina's website</h1>
            <p className="mt-2 text-lg md:text-2xl font-medium text-white/90 drop-shadow">We are dedicated to the develop, produce and distribute crop protection products.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="#eng-content" className="inline-flex items-center justify-center rounded-md bg-lime-500 px-5 py-3 font-medium text-black shadow hover:bg-lime-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                  <path d="M6 9l6 6 6-6" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                See more
              </a>
              <a href="/contacto" className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 px-5 py-3 font-medium text-white backdrop-blur hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section id="eng-content" className="bg-white py-12">
        <div className="mx-auto max-w-7xl w-full px-4">
          <div className="w-full text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-emerald-800">About Agrofina</h2>
            <div className="my-4">
              <div
                className="rounded-full"
                style={{ width: '80px', height: '8px', background: 'linear-gradient(90deg, #00833E 0%, #7ED957 100%)' }}
              />
            </div>
            <div className="space-y-5">
              <p className="font-semibold text-emerald-800">In Agrofina, we study, select and combine the best global technologies and adapt them to the local needs. We are the only company in the region able to produce with its own technology: synthesis and formulation in-house.</p>
              <p className="font-semibold text-emerald-800">Research and Development Laboratory</p>
              <p>The Synthesis and Formulation Laboratory is responsible for the development of active ingredients and their formulations. It has developed more than 50 active ingredients and 120 formulations.</p>
              <p>The Analytical Development Laboratory is one of two in Argentina that received the international certification of GLP from the Organization for Economic Cooperation and Development (OECD). Test laboratory accredited by the OAA, Nº LE 109. (The scope of accreditation is described in the F01-(DC-LE-01) attached to the certificate of accreditation at www.oaa.org.ar)</p>
              <p className="font-semibold text-emerald-800">Manufacturing Plant</p>
              <p>Agrofina synthesizes and formulates a wide variety of complex molecules in its primary manufacturing facility. Flexible production processes and stringent controls allow Agrofina to produce annually 20 active ingredients and 5 categories of products avoiding cross contamination. Processes are constantly reviewed with the objective of optimizing raw material/solvent consumption and effluents.</p>
              <p className="font-semibold text-emerald-800">Sales Network</p>
              <p>Agrofina has developed an extensive sales & distribution network throughout Argentina’s agricultural area. Products are stored in strategic locations in order to meet just-in time order requirements that allows permanent support to our clients.</p>
            </div>
          </div>
        </div>
      </section>
    </GuestLayout>
  );
}
