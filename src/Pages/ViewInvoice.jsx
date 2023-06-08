import React from "react";
import { useState, useEffect } from "react";

import arrowleft from "../assets/icon-arrow-left.svg";

import Sidebar from "./Components.jsx/Sidebar";
import Confirm from "./Components.jsx/Confirm";
import SlideOver from "./Components.jsx/SlideOver";

function ViewInvoice({isMobile}) {
  const [value, setValue] = useState(1);

  const [isOpen, setIsOpen] = useState(true);
  const [open, setOpen] = useState(true);



  return (
    <>
      <div className="w-full h-full bg-red-800">
        <div className="flex flex-col absolute justify-between lg:left-[25%] left-[5.2%] lg:top-[65px] top-[129px]  lg:w-[50%] w-[89.6%] h-auto">
          <div className="flex space-x-4 h-[15px] w-auto">
            <img src={arrowleft} alt="arroe left" className="w-2 h-4" />
            <p className="text-base font-bold leading-none text-gray-900">
              Go Back
            </p>
          </div>

          <div className="flex justify-between items-center px-4 bg-white rounded-lg w-full h-[88px]">
            <div className="flex justify-between items-center md:w-[159px] w-full h-[40px] md:px-0 px-[10%]">
              <p className="text-xs font-medium leading-none text-gray-400">
                Status
              </p>
              <div className="w-24 h-full">
                <div className="flex items-center justify-center flex-1 h-full pl-4 pr-5 pt-3.5 pb-2.5 bg-[#FFF9F0] rounded-md">
                  <div className="flex space-x-2 items-center justify-end flex-1 h-full">
                    <div className="w-2 h-2 bg-[#FF8F00] rounded-full" />
                    <p className="text-base font-bold leading-none text-[#FF8F00]">
                      Pending
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            {!isMobile ? (
              <div className="flex justify-between items-center w-[309px] h-[48px]">
                <button
                  onClick={() => setOpen(true)}
                  className="w-auto h-full p-4 bg-gray-50 rounded-full"
                >
                  <p className="text-base font-bold leading-none text-gray-400">
                    Edit
                  </p>
                </button>

                <button
                  className="w-auto h-full p-4 bg-red-500 rounded-full"
                  onClick={() => setIsOpen(true)}
                >
                  <p className="text-base font-bold leading-none text-white">
                    Delete
                  </p>
                </button>

                <div className="w-auto h-full p-4 bg-purple-500 rounded-full">
                  <p className="text-base font-bold leading-none text-white">
                    Mark as Paid
                  </p>
                </div>
              </div>
            ) : null}

            {/* Buttons */}
          </div>

          <div className=" flex flex-col w-full h-auto">
            <div className="flex flex-col w-full h-auto md:px-[50px] py-[48px] px-4">
              <div className="flex md:flex-row flex-col items-start pb-4 justify-between">
                <div className="flex flex-col space-y-1.5 items-start justify-end pl-1.5 pr-96 pt-2.5 pb-6 w-full h-[82px]">
                  <p className="text-base font-bold leading-normal">#XM9141</p>
                  <p className="text-xs font-medium leading-none text-gray-400">
                    Graphic Design
                  </p>
                </div>
                <div className="">
                  <p className="text-xs font-medium leading-none text-right text-gray-400">
                    19 Union Terrace
                    <br />
                    London <br />
                    E1 3EZ
                    <br />
                    United Kingdom
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 items-start pb-6 h-auto w-full">
                <div className="flex flex-col justify-start space-y-16 col-span-1 h-full">
                  <div className="inline-flex flex-col space-y-6 items-start justify-start w-auto h-auto">
                    <p className="text-xs font-medium leading-none text-gray-400">
                      Invoice Date
                    </p>
                    <p className="text-base font-bold leading-tight text-gray-900">
                      21 Aug 2021
                    </p>
                  </div>

                  <div className="inline-flex flex-col space-y-6 items-start justify-start w-auto h-auto">
                    <p className="text-xs font-medium leading-none text-gray-400">
                      Payment Due
                    </p>
                    <p className="text-base font-bold leading-tight text-gray-900">
                      20 Sep 2021
                    </p>
                  </div>
                </div>
                <div className="col-span-1 h-full">
                  <div className="flex flex-col space-y-2.5 items-start justify-start w-auto h-auto">
                    <p className="text-xs font-medium leading-none text-gray-400">
                      Bill To
                    </p>
                    <p className="text-base font-bold leading-tight text-gray-900 pt-4 pb-2">
                      Alex Grim
                    </p>
                    <p className="text-xs font-medium leading-loose text-gray-400">
                      84 Church Way
                      <br />
                      Bradford <br />
                      BD1 9PB
                      <br />
                      United Kingdom
                    </p>
                  </div>
                </div>
                <div className="col-span-2 h-full">
                  <div className="flex flex-col space-y-3 items-start justify-start w-auto h-auto">
                    <p className="text-xs font-medium leading-none text-gray-400">
                      Sent to
                    </p>
                    <p className="text-base font-bold w-full leading-tight text-gray-900 pt-2">
                      alexgrim@mail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gray-200 rounded-t-md">
                <div className="flex h-auto w-full">
                  <div className="flex flex-col w-[45%] md:justify-start justify-between ">
                    {!isMobile ? (
                      <p className="text-sm text-gray-500 pb-4">Item Name</p>
                    ) : null}
                    <p className="text-md text-black font-semibold pb-4">
                      Banner Design
                    </p>
                    <p className="text-md text-black font-semibold">
                      Emailo Design
                    </p>
                  </div>
                  <div className="flex flex-col items-center w-[15%]">
                    {!isMobile ? (
                      <p className="text-sm text-gray-500 pb-4">QTY.</p>
                    ) : null}
                    <p className="text-md text-gray-500 font-semibold pb-4">
                      1
                    </p>
                    <p className="text-md text-gray-500 font-semibold">2</p>
                  </div>
                  <div className="flex flex-col items-end w-[20%]">
                    {!isMobile ? (
                      <p className="text-sm text-gray-500 pb-4">Price</p>
                    ) : null}
                    <p className="text-md text-gray-500 font-semibold pb-4">
                      $ 156.00
                    </p>
                    <p className="text-md text-gray-500 font-semibold">
                      $ 200.00
                    </p>
                  </div>
                  <div className="flex flex-col items-end w-[20%]">
                    {!isMobile ? (
                      <p className="text-sm text-gray-500 pb-4">Total</p>
                    ) : null}
                    <p className="text-md text-black font-semibold pb-4">
                      $ 156.00
                    </p>
                    <p className="text-md text-black font-semibold">$ 200.00</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-[#373B53] rounded-b-md">
                <div className="flex justify-between h-auto w-full">
                  <p className="text-sm text-gray-200">Ammount Due</p>
                  <p className="text-2xl text-gray-200 font-semibold">
                    $ 556.00
                  </p>
                </div>
              </div>
            </div>

            {isMobile ? (
              <div className="flex justify-between items-center w-full h-auto p-2 space-x-1">
                <button
                  onClick={() => setOpen(true)}
                  className="w-auto h-full px-6 py-4 bg-gray-50 rounded-full"
                >
                  <p className="text-base font-bold leading-none text-gray-400">
                    Edit
                  </p>
                </button>

                <button
                  className="w-auto h-full p-4 bg-red-500 rounded-full"
                  onClick={() => setIsOpen(true)}
                >
                  <p className="text-base font-bold leading-none text-white">
                    Delete
                  </p>
                </button>

                <div className="w-auto h-full p-4 bg-purple-500 rounded-full">
                  <p className="text-base font-bold leading-none text-white">
                    Mark as Paid
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <Sidebar />
      </div>

      <SlideOver open={open} setOpen={setOpen} />

      <Confirm isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default ViewInvoice;
