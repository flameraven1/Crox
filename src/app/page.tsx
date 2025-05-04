"use client"

export default function Home() {

  const handleClick = async () =>{
    window.open("/api/visit", "_blank");
    const sendRequest = await fetch("/api/visit" , {
      method : "GET"
    });
    const text = await sendRequest.text();
    console.log(text);
  }

  return (
    <div className="min-dvw min-h-dvh flex justify-center items-center">
      <button onClick={handleClick} className="bg-lime-600 text-white font-bold font-sans px-3 py-2 hover:bg-lime-700 cursor-pointer">Visit!</button>
    </div>
  )
}
