import React from "react";
import Image from "next/image";
import headerPic from '/public/IMG_5693.jpg'

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-center">
        <Image src={headerPic} className="object-cover w-screen" quality={100} alt="Home image" priority/>
        <div className="fixed pt-48">
          <div className="p-3 bg-stone-900 rounded-lg text-center">
            <h1 className="text-7xl text-white">
              Sydney Knowland
            </h1>
            <h1 className="text-4xl text-white">&mdash;&mdash;&mdash;</h1>
            <h1 className="text-3xl text-white">Stage Management UNCSA</h1>
          </div>
        </div>
      </div>
    </div>
  );
}