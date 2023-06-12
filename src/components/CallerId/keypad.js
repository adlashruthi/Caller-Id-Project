import React from "react";

const Keypad = () => {
  return (
    <>
      <div className="flex items-center  justify-start ml-80  mt-10">
        <button className="bg-blue-500 bg-gradient-to-r from-pink-500 to-sky-600 rounded-full px-3 py-1 text-white mx-8">
          P
        </button>
        <button className="bg-slate-800 rounded-full px-3 py-1 text-white mx-8">
          #
        </button>
        <button className="bg-green-400 rounded-full px-3 py-1 text-white mx-8">
          P
        </button>
        <button className="bg-blue-500 bg-gradient-to-r from-pink-300 to-sky-800 rounded-full px-3 py-1 text-white mx-8">
          #
        </button>
        <button className="bg-orange-700 rounded-full px-3 py-1 text-white mx-8">
          U
        </button>
        <button className="bg-green-300 bg-gradient-to-r from-green-400 to-sky-600 rounded-full px-2 py-1 text-white mx-8">
          RR
        </button>
      </div>
      <div className="flex justify-start items-center ml-96 mt-10">
        <h1 className="text-blue-300 text-3xl mx-16"> 1</h1>

        <h1 className="text-blue-300 text-3xl mx-14"> 2</h1>

        <h1 className="text-blue-300 text-3xl mx-20"> 3</h1>
      </div>
      <div className="flex justify-start items-center ml-72 mt-0">
        <h1 className="text-blue-600 text-md ml-72">ABC</h1>
        <h1 className="text-blue-600 text-md ml-32 ">DEF</h1>
      </div>
      <div className="flex justify-start items-center ml-96 mt-4">
        <h1 className="text-blue-300 text-3xl mx-16"> 4</h1>

        <h1 className="text-blue-300 text-3xl mx-14"> 5</h1>

        <h1 className="text-blue-300 text-3xl mx-20"> 6</h1>
      </div>
      <div className="flex justify-start items-center ml-72 mt-0">
        <h1 className="text-blue-600 text-sm ml-40">GHI</h1>
        <h1 className="text-blue-600 text-sm ml-28 ">JKL</h1>
        <h1 className="text-blue-600 text-sm ml-32 ">MNO</h1>
      </div>

      <div className="flex justify-start items-center ml-96 mt-4">
        <h1 className="text-blue-300 text-3xl mx-16"> 7</h1>

        <h1 className="text-blue-300 text-3xl mx-14"> 8</h1>

        <h1 className="text-blue-300 text-3xl mx-20"> 9</h1>
      </div>
      <div className="flex justify-start items-center ml-72 mt-0">
        <h1 className="text-blue-600 text-sm ml-40">PQRS</h1>
        <h1 className="text-blue-600 text-sm ml-24 ">TUV</h1>
        <h1 className="text-blue-600 text-sm ml-32 ">WXYZ</h1>
      </div>

      <div className="flex justify-start items-center ml-96 mt-4">
        <h1 className="text-blue-300 text-xl mx-16"> *</h1>
        <h1 className="text-blue-300 text-3xl mx-16"> 0</h1>
        <h1 className="text-blue-300 text-3xl mx-16"> #</h1>
      </div>
      <div className="flex justify-start items-center ml-80 mt-0">
        <h1 className="text-blue-600 text-md ml-64 pl-3"> + </h1>
      </div>
    </>
  );
};

export default Keypad;
