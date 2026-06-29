
"use client";

import { useEffect } from "react";

export default function ThankYouPage() {
     useEffect(() => {
    localStorage.setItem("meetingScheduled", "true");
  }, []);
  return (
    <main className="flex min-h-screen items-center justify-center  text-[#1A1A1A]">
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          🎉 Meeting Scheduled!
        </h1>

        <p className="mt-4">
          Thank you for booking a consultation.
        </p>

        <p className="text-gray-500 mt-2">
          We've sent you a confirmation email.
        </p>
      </div>
    </main>
  );
}