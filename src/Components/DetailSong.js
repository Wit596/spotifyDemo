import React from "react";

export default function DetailSong() {
  return (
    <div className="col-span-1 p-3">
      <h2 className="text-cyan-500 font-bold">Now playing</h2>
      <h2 className="text-neutral-400 text-2xl">3107</h2>
      <div className="w-[240px] m-auto mt-10">
        <img className="w-full" src="data:image/jpeg;base64,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" alt="avatar"></img>
      </div>
      <div className="flex justify-evenly items-center mt-10">
        <img className="w-[70px] rounded-full" src="data:image/jpeg;base64,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" alt="avatar"></img>
        <span className="text-xl text-white">W/n</span>
      </div>
    </div>
  );
}