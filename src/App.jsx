import React from "react"; 
import { useState, useEffect } from "react";
import logo from "./assets/logo.svg";
import avater from "./assets/image-avatar.jpg";
import moon from "./assets/icon-moon.svg";
import arrowleft from "./assets/icon-arrow-left.svg"

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'


function App() {
  const [value, setValue] =useState(1);

  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }


  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial check on component mount
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window.innerWidth]);

  

  
        

  const [open, setOpen] = useState(true)




  return (
    <> 
      
        <div className="w-full h-full bg-red-800">

         



          <div className="flex flex-col absolute justify-between lg:left-[25%] left-[5.2%] lg:top-[65px] top-[129px]  lg:w-[50%] w-[89.6%] h-auto">

              <div className="flex space-x-4 h-[15px] w-auto">
                  <img src={arrowleft} alt="arroe left" className="w-2 h-4"/>
                  <p className="text-base font-bold leading-none text-gray-900">Go Back</p>

              </div>


              <div className="flex justify-between items-center px-4 bg-white rounded-lg w-full h-[88px]">
                  <div className="flex justify-between items-center md:w-[159px] w-full h-[40px] md:px-0 px-[10%]">

                  <p className="text-xs font-medium leading-none text-gray-400">Status</p>
                    <div className="w-24 h-full">
                        <div className="flex items-center justify-center flex-1 h-full pl-4 pr-5 pt-3.5 pb-2.5 bg-[#FFF9F0] rounded-md">
                            <div className="flex space-x-2 items-center justify-end flex-1 h-full">
                                <div className="w-2 h-2 bg-[#FF8F00] rounded-full"/>
                                <p className="text-base font-bold leading-none text-[#FF8F00]">Pending</p>
                            </div>
                        </div>
                    </div>

                  </div>

                  {/* Buttons */}
                  {!isMobile?
                  <div className="flex justify-between items-center w-[309px] h-[48px]">
                    <button onClick={()=>setOpen(true)} className="w-auto h-full p-4 bg-gray-50 rounded-full">
                    <p className="text-base font-bold leading-none text-gray-400">Edit</p>

                    </button>

                    <button className="w-auto h-full p-4 bg-red-500 rounded-full" onClick={()=>setIsOpen(true)}>
                      <p className="text-base font-bold leading-none text-white">Delete</p>

                    </button>

                    <div className="w-auto h-full p-4 bg-purple-500 rounded-full">
                    <p className="text-base font-bold leading-none text-white">Mark as Paid</p>

                    </div>

                  </div>:null}

                   {/* Buttons */}
              </div>

              

              <div className=" flex flex-col w-full h-auto">
                <div className="flex flex-col w-full h-auto md:px-[50px] py-[48px] px-4">

                
                <div className="flex md:flex-row flex-col items-start pb-4 justify-between">
                  <div className="flex flex-col space-y-1.5 items-start justify-end pl-1.5 pr-96 pt-2.5 pb-6 w-full h-[82px]">
                    <p className="text-base font-bold leading-normal">#XM9141</p>
                    <p className="text-xs font-medium leading-none text-gray-400">Graphic Design</p>
                    
                  </div>
                  <div className="">
                  <p className="text-xs font-medium leading-none text-right text-gray-400">19 Union Terrace<br/>London <br/>E1 3EZ<br/>United Kingdom</p>

                  </div>


                  
                  

            

                </div>



                <div className="grid grid-cols-2 items-start pb-6 h-auto w-full">
                      <div className="flex flex-col justify-start space-y-16 col-span-1 h-full">
                      <div className="inline-flex flex-col space-y-6 items-start justify-start w-auto h-auto">
                        <p className="text-xs font-medium leading-none text-gray-400">Invoice Date</p>
                        <p className="text-base font-bold leading-tight text-gray-900">21 Aug 2021</p>
                      </div>

                      <div className="inline-flex flex-col space-y-6 items-start justify-start w-auto h-auto">
                        <p className="text-xs font-medium leading-none text-gray-400">Payment Due</p>
                        <p className="text-base font-bold leading-tight text-gray-900">20 Sep 2021</p>
                      </div>

                      </div>
                      <div className="col-span-1 h-full">

                        <div className="flex flex-col space-y-2.5 items-start justify-start w-auto h-auto">
                          <p className="text-xs font-medium leading-none text-gray-400">Bill To</p>
                          <p className="text-base font-bold leading-tight text-gray-900 pt-4 pb-2">Alex Grim</p>
                          <p className="text-xs font-medium leading-loose text-gray-400">84 Church Way<br/>Bradford <br/>BD1 9PB<br/>United Kingdom</p>
                        </div>

                      </div>
                      <div className="col-span-2 h-full">
                        <div className="flex flex-col space-y-3 items-start justify-start w-auto h-auto">
                          <p className="text-xs font-medium leading-none text-gray-400">Sent to</p>
                          <p className="text-base font-bold w-full leading-tight text-gray-900 pt-2">alexgrim@mail.com</p>
                        </div>

                      </div>
                </div>


                <div className="p-6 bg-gray-200 rounded-t-md">
                  <div className="flex h-auto w-full">
                    <div className="flex flex-col w-[45%] md:justify-start justify-between ">
                      {!isMobile?<p className="text-sm text-gray-500 pb-4">Item Name</p>:null}
                      <p className="text-md text-black font-semibold pb-4">Banner Design</p>
                      <p className="text-md text-black font-semibold">Emailo Design</p> 
                    </div>
                    <div className="flex flex-col items-center w-[15%]">
                    {!isMobile?<p className="text-sm text-gray-500 pb-4">QTY.</p>:null}
                      <p className="text-md text-gray-500 font-semibold pb-4">1</p>
                      <p className="text-md text-gray-500 font-semibold">2</p> 
                    </div>
                    <div className="flex flex-col items-end w-[20%]">
                      {!isMobile?<p className="text-sm text-gray-500 pb-4">Price</p>:null}
                      <p className="text-md text-gray-500 font-semibold pb-4">$ 156.00</p>
                      <p className="text-md text-gray-500 font-semibold">$ 200.00</p> 

                    </div>
                    <div className="flex flex-col items-end w-[20%]">
                    {!isMobile?<p className="text-sm text-gray-500 pb-4">Total</p>:null}
                      <p className="text-md text-black font-semibold pb-4">$ 156.00</p>
                      <p className="text-md text-black font-semibold">$ 200.00</p> 

                    </div>

                  </div>

                </div>

                  <div className="p-6 bg-[#373B53] rounded-b-md">
                    <div className="flex justify-between h-auto w-full">
                      <p className="text-sm text-gray-200">Ammount Due</p>
                      <p className="text-2xl text-gray-200 font-semibold">$ 556.00</p>

                    </div> 
                  </div>

                </div>


                {isMobile?
                  <div className="flex justify-between items-center w-full h-auto p-2 space-x-1">
                    <button onClick={()=>setOpen(true)} className="w-auto h-full px-6 py-4 bg-gray-50 rounded-full">
                    <p className="text-base font-bold leading-none text-gray-400">Edit</p>

                    </button>

                    <button className="w-auto h-full p-4 bg-red-500 rounded-full" onClick={()=>setIsOpen(true)}>
                    <p className="text-base font-bold leading-none text-white">Delete</p>

                    </button>

                    <div className="w-auto h-full p-4 bg-purple-500 rounded-full">
                    <p className="text-base font-bold leading-none text-white">Mark as Paid</p>

                    </div>

                  </div>:null}

                

            
                </div>

             

                
              

            </div>

             {/* Side Bar */}
          <div className="flex lg:flex-col flex-row justify-between fixed lg:h-full lg:w-[103px] w-full h-[80px] bg-gray-700 left-0 top-0 lg:rounded-r-2xl">
            {/* Icon */}
            <div className="lg:w-[103px] lg:h-[103px] w-[80px] h-[80px] overflow-hidden">
              <div className="absolute overflow-hidden top-0 left-0 lg:w-full lg:h-[103px] w-[80px] h-full bg-[#7C5DFA] items-center justify-center rounded-r-2xl">
                <div className="absolute top-10 left-0 lg:w-full lg:h-[103px] w-[80px] h-full bg-[#9277FF] items-center justify-center rounded-tl-2xl rounded-br-2xl"></div>
                <div className="absolute top-0 left-0  w-full h-full">
                  <img src={logo} alt="" className="w-full h-full p-[25px]" />
                </div>
              </div>
            </div>
            {/* Icon */}

            <div className="flex lg:flex-col flex-row justify-between items-center lg:w-[103px] lg:h-[117px] w-[120px] h-full overflow-hidden lg:mb-6 mr-8">
              <div className="w-5 h-5">
                <img src={moon} alt="moon" className="w-full h-full" />
              </div>
              <div className="lg:w-full lg:h-[1px] w-[1px] h-full bg-[#494E6E]"></div>
              <div className="lg:w-10 lg:h-10 w-8 h-8 overflow-hidden rounded-full">
                <img src={avater} alt="" className="w-full h-full" />
              </div>
            </div>
          </div>
          {/* Side Bar */}
            


          </div>

       
          
       
      
     




      <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 lg:left-28 lg:top-0 left-0 top-20 flex max-w-full">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen lg:max-w-[40%] md:max-w-[80%]">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute right-0 top-0 -mr-10 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-red-500 rounded-r-3xl px-10 py-6 shadow-xl">
                    <p className="text-2xl font-bold leading-loose">Edit #XM9141</p>
                    <div>
                      <p className="text-base font-bold leading-none text-purple-500">Bill From</p>
                      <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                        First name
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    
                   
                    <div className="grid grid-cols-3 gap-4 w-full h-auto pt-4">
                      <div className='col-span-1'>
                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                          First name
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>

                      </div>

                      <div className='col-span-1'>
                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                          First name
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>

                      </div>

                      <div className='col-span-1'>
                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                          First name
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                        </div>
                      </div>
                      

                    </div>



                    <div>
                      <p className="text-base font-bold leading-none text-purple-500">Bill To</p>
                      <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                        Client's Name
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>

                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                        Client's Email
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>

                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                        Street Address
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    
                   
                    <div className="grid grid-cols-3 gap-4 w-full h-auto pt-4">
                      <div className='col-span-1'>
                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                          City
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>

                      </div>

                      <div className='col-span-1'>
                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                          Post Code
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>

                      </div>

                      <div className='col-span-1'>
                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                          Country
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                        </div>
                      </div>
                      

                    </div>



                    <div>
                      <p className="text-base font-bold leading-none text-purple-500">Bill To</p>
                      <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                        Client's Name
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>

                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                        Client's Email
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>

                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                        Street Address
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    
                   
                    <div className="grid grid-cols-3 gap-4 w-full h-auto pt-4">
                      <div className='col-span-1'>
                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                          City
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>

                      </div>

                      <div className='col-span-1'>
                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                          Post Code
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>

                      </div>

                      <div className='col-span-1'>
                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                          Country
                        </label>
                        <div className="mt-2.5">
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                        </div>
                      </div>
                      

                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>



    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[480px] transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 text-black font-bold"
                  >
                    Confirm Delation
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Are you sure you want to delete invoice #XM9141? This action cannot be undone.
                    </p>
                  </div>

                  <div className="flex flex-row justify-end space-x-4 mt-8">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-full border border-transparent bg-gray-100 px-6 py-3 text-sm font-bold text-gray-700 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-full border border-transparent bg-orange-500 px-6 py-3 text-sm font-bold text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Delete
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>






   
    </>
  );
}

export default App;
