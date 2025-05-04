"use client"

export default function Home() {

  const handleClick = async () =>{
    const sendRequest = await fetch("/api/visit" , {
      method : "GET"
    });
    console.log(sendRequest)
  }

  return (
    <div className="min-dvw min-h-dvh flex justify-center items-center">
      <button onClick={handleClick} className="bg-lime-600 text-white font-bold font-sans px-3 py-2 hover:bg-lime-700 cursor-pointer">Visit!</button>
    </div>
  )
}
