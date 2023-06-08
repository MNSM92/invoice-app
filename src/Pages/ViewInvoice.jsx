 import { useState } from "react";
import { Link } from "react-router-dom";

import arrowleft from "../assets/icon-arrow-left.svg";

import Sidebar from "./Components.jsx/Sidebar";
import Confirm from "./Components.jsx/Confirm";
import SlideOver from "./Components.jsx/SlideOver";

function ViewInvoice({darkMode, setDarkMode, isMobile}) {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);



  return (
    <>
     
      <div className="absolute top-0 left-0 w-full min-h-full bg-[#F8F8FB] dark:bg-black">
        <div className="flex flex-col relative justify-between lg:left-[25%] left-[5.2%] lg:top-[65px] top-[129px] mb-[150px]  lg:w-[50%] w-[89.6%] h-auto">
          <div className="flex space-x-4 h-[15px] w-auto">
            <img src={arrowleft} alt="arroe left" className="w-2 h-4" />
            <Link to="/" className="text-base font-bold leading-none text-gray-900 dark:text-gray-200">
              Go Back
            </Link>
          </div>

          <div className="flex justify-between items-center px-4 bg-inherit rounded-lg w-full h-[88px]">
            <div className="flex justify-between items-center md:w-[159px] w-full h-[40px] md:px-0 px-[10%]">
              <p className="text-xs font-medium leading-none text-gray-400">
                Status
              </p>
              <div className="w-24 h-full">
                <div className="flex items-center justify-center flex-1 h-full pl-4 pr-5 pt-3.5 pb-2.5 bg-inherit rounded-md">
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
                  className="w-auto h-full px-6 bg-gray-100 hover:bg-slate-primary dark:bg-black dark:hover:bg-white rounded-full"
                >
                  <p className="text-base font-bold leading-none text-gray-400">
                    Edit
                  </p>
                </button>

                <button
                  className="w-auto h-full p-4 bg-red-secondary hover:bg-red-primary rounded-full"
                  onClick={() => setIsOpen(true)}
                >
                  <p className="text-base font-bold leading-none text-white">
                    Delete
                  </p>
                </button>

                <button className="w-auto h-full p-4 bg-indigo-secondary hover:bg-indigo-primary hover:bg-in rounded-full">
                  <p className="text-base font-bold leading-none text-white">
                    Mark as Paid
                  </p>
                </button>
              </div>
            ) : null}

            {/* Buttons */}
          </div>

          <div className=" flex flex-col w-full h-auto">
            <div className="flex flex-col w-full h-auto md:px-[50px] py-[48px] px-4">
              <div className="flex md:flex-row flex-col items-start pb-4 justify-between">
                <div className="flex flex-col space-y-1.5 items-start justify-end pt-2.5 pb-6 w-full h-[82px]">
                  <p className="text-base font-bold leading-normal dark:text-gray-100">#XM9141</p>
                  <p className="text-xs font-medium leading-none text-gray-400 dark:text-gray-200">
                    Graphic Design
                  </p>
                </div>
                <div className="">
                  <p className="text-xs font-medium leading-none text-right text-gray-400 dark:text-gray-200">
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
                    <p className="text-xs font-medium leading-none text-gray-400 dark:text-gray-200">
                      Invoice Date
                    </p>
                    <p className="text-base font-bold leading-tight text-gray-900 dark:text-gray-50">
                      21 Aug 2021
                    </p>
                  </div>

                  <div className="inline-flex flex-col space-y-6 items-start justify-start w-auto h-auto">
                    <p className="text-xs font-medium leading-none text-gray-400 dark:text-gray-200">
                      Payment Due
                    </p>
                    <p className="text-base font-bold leading-tight text-gray-900 dark:text-gray-50">
                      20 Sep 2021
                    </p>
                  </div>
                </div>
                <div className="col-span-1 h-full">
                  <div className="flex flex-col space-y-2.5 items-start justify-start w-auto h-auto">
                    <p className="text-xs font-medium leading-none text-gray-400 dark:text-gray-200">
                      Bill To
                    </p>
                    <p className="text-base font-bold leading-tight text-gray-900 dark:text-gray-50 pt-4 pb-2">
                      Alex Grim
                    </p>
                    <p className="text-xs font-medium leading-loose text-gray-400 dark:text-gray-200">
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
                    <p className="text-xs font-medium leading-none text-gray-400 dark:text-gray-200">
                      Sent to
                    </p>
                    <p className="text-base font-bold w-full leading-tight text-gray-900 dark:text-gray-50 pt-2">
                      alexgrim@mail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-inherit rounded-t-md">
                <div className="flex h-auto w-full">
                  <div className="flex flex-col w-[45%] md:justify-start justify-between ">
                    {!isMobile ? (
                      <p className="text-sm text-gray-500 dark:text-gray-50 pb-4">Item Name</p>
                    ) : null}
                    <p className="text-md text-black dark:text-gray-50 font-semibold pb-4">
                      Banner Design
                    </p>
                    <p className="text-md text-black dark:text-gray-50 font-semibold">
                      Emailo Design
                    </p>
                  </div>
                  <div className="flex flex-col items-center w-[15%]">
                    {!isMobile ? (
                      <p className="text-sm text-gray-500 dark:text-gray-50 pb-4">QTY.</p>
                    ) : null}
                    <p className="text-md text-gray-500 dark:text-gray-50 font-semibold pb-4">
                      1
                    </p>
                    <p className="text-md text-gray-500 dark:text-gray-50 font-semibold">2</p>
                  </div>
                  <div className="flex flex-col items-end w-[20%]">
                    {!isMobile ? (
                      <p className="text-sm text-gray-500 dark:text-gray-50 pb-4">Price</p>
                    ) : null}
                    <p className="text-md text-gray-500 dark:text-gray-50 font-semibold pb-4">
                      $ 156.00
                    </p>
                    <p className="text-md text-gray-500 dark:text-gray-50 font-semibold">
                      $ 200.00
                    </p>
                  </div>
                  <div className="flex flex-col items-end w-[20%]">
                    {!isMobile ? (
                      <p className="text-sm text-gray-500 dark:text-gray-50 pb-4">Total</p>
                    ) : null}
                    <p className="text-md text-black dark:text-gray-50 font-semibold pb-4">
                      $ 156.00
                    </p>
                    <p className="text-md text-black dark:text-gray-50 font-semibold">$ 200.00</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-[#373B53] dark:bg-inherit rounded-b-md">
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
                  className="w-auto h-full px-6 py-4 bg-gray-100 hover:bg-slate-primary dark:bg-black dark:hover:bg-white rounded-full"
                >
                  <p className="text-base font-bold leading-none text-gray-400">
                    Edit
                  </p>
                </button>

                <button
                  className="w-auto h-full p-4 bg-red-secondary hover:bg-red-primary rounded-full"
                  onClick={() => setIsOpen(true)}
                >
                  <p className="text-base font-bold leading-none text-white">
                    Delete
                  </p>
                </button>

                <button className="w-auto h-full p-4 bg-indigo-secondary hover:bg-indigo-primary rounded-full">
                  <p className="text-base font-bold leading-none text-white">
                    Mark as Paid
                  </p>
                </button>
              </div>
            ) : null}
          </div>
        
        <Sidebar darkMode={darkMode} setDarkMode={setDarkMode}/>
        </div>
      </div>

      <SlideOver open={open} setOpen={setOpen} />

      <Confirm isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default ViewInvoice;
