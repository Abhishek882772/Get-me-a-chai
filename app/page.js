"use client"
import Image from "next/image";


export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center text-white items-center h-[44vh] gap-4">
        <div className="text-white font-bold text-2xl flex">Buy me a Chai  &nbsp;&nbsp;<img className="invert-100 w-8" src="cup.png" alt="" />
        </div>
        <p>A Croudfunding platform for creaters. Get funded by your fans and followers. Start now!</p>
        <div><button type="button" className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-bold rounded-lg text-sm px-5
      py-2.5 text-center me-2 mb-2">start Here</button>
          <button type="button" className="text-gray-900 font-bold bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradent-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800  rounded-lg text-sm px-5
       py-2.5 text-center me-2 mb-2">Read More</button>
        </div>
      </div>
      <div className="bg-white opacity-10 h-1">

      </div>
      <div className="text-white container mx-auto py-16">
        <h1 className="text-xl font-bold text-center mb-14">Your fans can buy a Chai</h1>
        <div className="flex gap-5 justify-around ">
          <div className="item py-2 space-y-3 flex flex-col justify-center items-center"><img className="bg-slate-400  text-black rounded-2xl " width={98} src="/new2.gif" alt="" />
            <p className="font-bold text-sm">Fund Yourself</p>
            <p className="text-xs">Your Fans are available for you to help you</p></div>
          <div className="item py-2 space-y-3 flex flex-col justify-center items-center"><img className="bg-slate-400  text-black rounded-2xl " width={98} src="/coin-spin.gif" alt="" />
            <p className="font-bold text-sm">Fund Yourself</p>
            <p className="text-xs">Your Fans are available for you to help you</p></div>
          <div className="item py-2 space-y-3 flex flex-col justify-center items-center"><img className="bg-slate-400  text-black rounded-2xl " width={98} src="/Fund-Raisingps.gif" alt="" />
            <p className="font-bold text-sm">
              Fans want to help</p>
            <p className="text-xs">Your Fans are available for you to help you</p></div>
        </div>
      </div>
      <div className="bg-white opacity-10 h-1">

      </div>
      <div className="text-white container mx-auto py-16 flex flex-col justify-center items-center">
        <h1 className="text-xl font-bold text-center mb-14">Learn More About us</h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/-6IAYDbMCCE?si=h08rdgybi10Y5Es7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>      </div>
    </>
  );
}
