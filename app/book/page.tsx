"use client";

import NavBar from "@/components/navbar";
import { FunctionComponent} from "react";

const AppointmentPage: FunctionComponent = () => {

  return (
    <div>
      <NavBar/>
      <div className="flex flex-col items-center justify-center min-h-screen bg-blue-700">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0kGoH4C_qhaUb7QbcDpVjQm_XqndscWcPvM--WuT5mzkuVtMPJjWNIIvVSd6JSwOxxmDSemJwE?gv=true" width="100%" height="850"></iframe>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;