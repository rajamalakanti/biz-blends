"use client";

import NavBar from "@/components/navbar";
import { FunctionComponent} from "react";

const AppointmentPage: FunctionComponent = () => {

  return (
    <div>
      <NavBar/>
      <div className="flex flex-col items-center justify-center min-h-screen bg-amber-600">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1CyQaGjXZdz0yzn4W0iq4qIConx04CDh3zApX7JOxK8FjSM79gnd1Cq0bNTp0XvrxvuCbMxtjt?gv=true" width="100%" height="850"></iframe>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;