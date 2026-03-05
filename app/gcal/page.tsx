import React from 'react'

const GCal = () => {
  return (
    <div className="bg-black min-h-screen">
      <section className="flex flex-col items-center h-[calc(100vh-90px)] justify-center py-10 px-4 sm:px-6 lg:px-8">

        {/* Navigation / Header Context */}
        <div className="w-full max-w-5xl mb-6 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-medium font-cormorant text-white tracking-wide">Schedule Session</h2>
            <p className="text-sm font-light text-zinc-400 mt-1">Select your preferred date and time.</p>
          </div>
        </div>

        {/* Iframe Container */}
        <div className="w-full max-w-5xl h-[800px] bg-zinc-950 rounded-xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 p-2 md:p-4">
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0kGoH4C_qhaUb7QbcDpVjQm_XqndscWcPvM--WuT5mzkuVtMPJjWNIIvVSd6JSwOxxmDSemJwE?gv=true"
            width="100%"
            height="100%"
            className="w-full h-full rounded-lg"
            style={{
              minHeight: '100%',
              border: 'none',
              filter: 'invert(1) hue-rotate(180deg) opacity(0.9)',
              colorScheme: 'dark'
            }}
          ></iframe>
        </div>
      </section>
    </div>
  )
}

export default GCal
