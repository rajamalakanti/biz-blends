import React from 'react'
import NavBar from '@/components/navbar'

const GCal = () => {
  return (
    <div>
      <NavBar />
      <section className="flex flex-col items-center h-[calc(100vh-90px)] justify-center">

        {/* Iframe Container */}
        <div className="w-full max-w-[1280px] h-full overflow-hidden">
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0kGoH4C_qhaUb7QbcDpVjQm_XqndscWcPvM--WuT5mzkuVtMPJjWNIIvVSd6JSwOxxmDSemJwE?gv=true"
            width="100%"
            height="100%"
            className="rounded-lg max-w-full max-h-full"
            style={{ minHeight: '100%', border: 'none' }}
          ></iframe>
        </div>
      </section>
    </div>
  )
}

export default GCal
