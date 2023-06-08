import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'


export default function SlideOver({open, setOpen}){


    const data = [
        { id: 1, name: 'John Doe', age: 25 },
        { id: 2, name: 'Jane Smith', age: 30 },
        { id: 3, name: 'Mike Johnson', age: 28 },
      ];


    return(

        <>

            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={()=>setOpen(false)}>
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
                        <div className="pointer-events-none fixed inset-y-0 bg-gray-500 bg-opacity-50 lg:left-28 lg:top-0 left-0 top-20 flex max-w-full">
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
                            <div className='h-full bg-white rounded-r-3xl shadow-xl px-6 py-6'>
                            
                            <div className="flex h-full flex-col overflow-y-scroll pr-4">
                                <p className="text-2xl font-bold leading-loose">Edit #XM9141</p>
                                <div>
                                <p className="text-base font-bold leading-none text-purple-500">Bill From</p>
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
                                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Project Description
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
                                <p className="text-2xl font-bold leading-loose">Item List</p>
                              
                                <table className='w-full h-auto'>
                                    <thead>
                                        <tr className='text-left'>
                                        <th className='w-[42.5%] h-12 pl-4'>Item Name</th>
                                        <th className='w-[12.5%] pl-4'> Qty.</th>
                                        <th className='w-[20%] pl-4'>Price</th>
                                        <th className='w-[11%] pl-4'>Total</th>
                                        <th className='w-[12%] pl-4'></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((item) => (
                                        <tr key={item.id} className='text-center'>
                                            <td>
                                                <div className='p-3 border-2 rounded-md m-2 '>
                                                    {item.id}
                                                </div> 
                                            </td>
                                            <td>
                                                <div className='p-3 border-2 rounded-md m-2 '>
                                                    {item.id}
                                                </div> 
                                            </td>
                                            <td>
                                                <div className='p-3 border-2 rounded-md m-2 '>
                                                    {item.age}
                                                </div> 
                                            </td>
                                            <td>{item.age}</td>
                                            <td>{item.age}</td>
                                        </tr>
                                        ))}
                                    </tbody>
                                    </table>
                                    <button className='w-full h-12 rounded-full bg-gray-300 font-bold text-gray-500'>
                                        +Add New Item

                                    </button>
                                
                                

                                </div>



                                <div>
                            

                               

                                
                                

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
        </>
    )
    
}