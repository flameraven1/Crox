"use client"

import { useState } from "react";

export default function Home() {
  const [showIframe, setShowIframe] = useState(false);

  return (
    <div className="min-dvw min-h-dvh flex justify-center items-center">
      <button onClick={
        () => {setShowIframe(true)
        }
        } className="bg-lime-600 text-white font-bold font-sans px-3 py-2 hover:bg-lime-700 cursor-pointer">Visit!</button>


      {showIframe && (
        <iframe
          src="/api/visit"
          className="w-full h-[90vh] border mt-4"
        />
      )}
    </div>
  )
}
