"use client";
import SparklesCore from "@/components/SparklesCore";


export  function ComingSoon() {
  return (
    <div className="h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
       Hold on, coming Soon
      </h1>
      <p className="text-center text-white relative text-lgmy-10 z-20">Sit tight. i am working hard to bring this live</p>
    </div>
  );
}
