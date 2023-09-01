import React from "react";
import Typewriter from "typewriter-effect";

export default function RightBar() {
  return (
    <div
      className="right-bar  overflow-auto bg-fixed bg-cover bg-no-repeat bg-center col-span-10 md:col-span-2 h-[100vh]"
      style={{ backgroundImage: `url(./images/introC.jpg)` }}
    >
      <div className="flex flex-col justify-center items-center text-white gap-4 md:mt-[320px] mt-60  text-center ">
        <h1 className="text-3xl font-medium md:text-4xl ">Welcome</h1>
        <h1 className="text-5xl md:text-7xl font-semibold">
          <Typewriter
            onInit={(typeWriter) => {
              typeWriter
                .typeString("I'm Azizollah Payandeh.")
                .start()
                .pauseFor(2000)
                .deleteAll()
                .typeString("I'm a Front-End Developer.")
                .start()
                .pauseFor(2000)
                .deleteAll()
                .typeString("I'm a Programmer.")
                .start()
                .pauseFor(2000);
            }}
            options={{
              loop: true,
            }}
          />
        </h1>

        <p className="text-[20px] opacity-80">based in Iran, Mashhad</p>

        <button className="border hover:bg-green-500 hover:text-white transition-all border-green-500 p-3 font-medium mt-2 w-36 rounded-3xl text-green-500">
          Hire Me
        </button>
      </div>
    </div>
  );
}
