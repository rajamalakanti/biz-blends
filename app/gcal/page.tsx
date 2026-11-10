import React from 'react'

const GCal = () => {
  return (
    <div className="min-h-[calc(100vh-8rem)]">
      <section className="flex flex-col items-center justify-center py-12 md:py-16 px-4 sm:px-6 lg:px-8">

        <div className="w-full max-w-5xl mb-8 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3 animate-fade-rise">
          <div>
            <p className="text-espresso/60 font-display text-base font-light tracking-wide mb-1">
              Effect
            </p>
            <h2 className="text-3xl md:text-4xl font-medium font-display text-espresso tracking-wide">
              Schedule Session
            </h2>
            <p className="text-sm font-light text-cocoa/65 mt-1">
              Select your preferred date and time with Tim Medina.
            </p>
          </div>
        </div>

        <div className="w-full max-w-5xl h-[800px] bg-cream border-2 border-espresso/20 rounded-3xl overflow-hidden shadow-[0_24px_50px_-24px_rgba(36,22,18,0.35)] p-2 md:p-4 animate-draw-in relative">
          <div className="absolute top-0 inset-x-0 h-1.5 bg-espresso z-10" aria-hidden />
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0kGoH4C_qhaUb7QbcDpVjQm_XqndscWcPvM--WuT5mzkuVtMPJjWNIIvVSd6JSwOxxmDSemJwE?gv=true"
            width="100%"
            height="100%"
            className="w-full h-full rounded-2xl"
            style={{
              minHeight: '100%',
              border: 'none',
            }}
            title="Book an appointment with Effect Hair Studio"
          ></iframe>
        </div>
      </section>
    </div>
  )
}

export default GCal
