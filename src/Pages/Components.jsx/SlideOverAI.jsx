import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/solid";

export default function SlideOver({ open, setOpen }) {
  const data = [
    { id: 1, name: "Banner Design", qty: 1, price: "156.00", total: "156.00" },
    { id: 1, name: "Email Design", qty: 2, price: "200.00", total: "400.00" },
  ];

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setOpen(false)}
        >
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
                    <div className="h-full bg-gray-50 dark:bg-black rounded-r-3xl shadow-xl px-6 py-6">
                      <div className="flex h-full flex-col overflow-y-scroll pr-4">
                        <p className="text-2xl font-bold leading-loose pb-8">
                          New Invoice
                        </p>
                        <div>
                          <p className="text-base font-bold leading-none text-purple-500 pb-4">
                            Bill From
                          </p>
                          <label
                            htmlFor="first-name"
                            className="block text-sm font-semibold leading-6 text-gray-500"
                          >
                            Street Address
                          </label>
                          <div className="mt-2.5">
                            <input
                              type="text"
                              name="first-name"
                              id="first-name"
                              autoComplete="given-name"
                              className="block w-full rounded-md border-0 px-3.5 py-2 bg-inherit text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>

                          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 w-full h-auto pt-4">
                            <div className="col-span-1">
                              <label
                                htmlFor="first-name"
                                className="block text-sm font-semibold leading-6 text-gray-500"
                              >
                                City
                              </label>
                              <div className="mt-2.5">
                                <input
                                  type="text"
                                  name="first-name"
                                  id="first-name"
                                  autoComplete="given-name"
                                  className="block w-full rounded-md border-0 px-3.5 py-2 bg-inherit text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>

                            <div className="col-span-1">
                              <label
                                htmlFor="first-name"
                                className="block text-sm font-semibold leading-6 text-gray-500"
                              >
                                Post Code
                              </label>
                              <div className="mt-2.5">
                                <input
                                  type="text"
                                  name="first-name"
                                  id="first-name"
                                  autoComplete="given-name"
                                  className="block w-full rounded-md border-0 px-3.5 py-2 bg-inherit text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>

                            <div className="col-span-2">
                              <label
                                htmlFor="first-name"
                                className="block text-sm font-semibold leading-6 text-gray-500"
                              >
                                Country
                              </label>
                              <div className="mt-2.5">
                                <input
                                  type="text"
                                  name="first-name"
                                  id="first-name"
                                  autoComplete="given-name"
                                  className="block w-full rounded-md border-0 px-3.5 py-2 bg-inherit text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="text-base font-bold leading-none text-purple-500 py-6">
                            Bill To
                          </p>
                          <label
                            htmlFor="first-name"
                            className="block text-sm font-semibold leading-6 text-gray-500"
                          >
                            Client's Name
                          </label>
                          <div className="mt-2.5 pb-4">
                            <input
                              type="text"
                              name="first-name"
                              id="first-name"
                              autoComplete="given-name"
                              className="block w-full rounded-md border-0 px-3.5 py-2 bg-inherit text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>

                          <label
                            htmlFor="first-name"
                            className="block text-sm font-semibold leading-6 text-gray-500"
                          >
                            Client's Email
                          </label>
                          <div className="mt-2.5 pb-4">
                            <input
                              type="text"
                              name="first-name"
                              id="first-name"
                              autoComplete="given-name"
                              className="block w-full rounded-md border-0 px-3.5 py-2 bg-inherit text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>

                          <label
                            htmlFor="first-name"
                            className="block text-sm font-semibold leading-6 text-gray-500"
                          >
                            Street Address
                          </label>
                          <div className="mt-2.5">
                            <input
                              type="text"
                              name="first-name"
                              id="first-name"
                              autoComplete="given-name"
                              className="block w-full rounded-md border-0 px-3.5 py-2 bg-inherit text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>

                          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 w-full h-auto pt-4">
                            <div className="col-span-1">
                              <label
                                htmlFor="first-name"
                                className="block text-sm font-semibold leading-6 text-gray-500"
                              >
                                City
                              </label>
                              <div className="mt-2.5">
                                <input
                                  type="text"
                                  name="first-name"
                                  id="first-name"
                                  autoComplete="given-name"
                                  className="block w-full rounded-md border-0 px-3.5 py-2 bg-inherit text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>

                            <div className="col-span-1">
                              <label
                                htmlFor="first-name"
                                className="block text-sm font-semibold leading-6 text-gray-500"
                              >
                                Post Code
                              </label>
                              <div className="mt-2.5">
                                <input
                                  type="text"
                                  name="first-name"
                                  id="first-name"
                                  autoComplete="given-name"
                                  className="block w-full rounded-md border-0 px-3.5 py-2 bg-inherit text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>

                            <div className="col-span-2">
                              <label
                                htmlFor="first-name"
                                className="block text-sm font-semibold leading-6 text-gray-500"
                              >
                                Country
                              </label>
                              <div className="mt-2.5">
                                <input
                                  type="text"
                                  name="first-name"
                                  id="first-name"
                                  autoComplete="given-name"
                                  className="block w-full rounded-md border-0 px-3.5 py-2 bg-inherit text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>
                         
                          </div>

                          <label
                            htmlFor="first-name"
                            className="block text-sm pt-4 font-semibold leading-6 text-gray-500"
                          >
                            Invoice Date
                          </label>
                          <div className="mt-2.5">
                            <input
                              type="date"
                              name="first-name"
                              id="first-name"
                              autoComplete="given-name"
                              className="block w-full rounded-md border-0 px-3.5 py-2 bg-inherit text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>

                          <label
                            htmlFor="first-name"
                            className="block text-sm pt-4 font-semibold leading-6 text-gray-500"
                          >
                            Payment Terms
                          </label>
                          <div className="mt-2.5">
                            <select
                              type="text"
                              name="first-name"
                              id="first-name"
                              autoComplete="given-name"
                              className="block w-full rounded-md border-0 px-3.5 py-2 bg-inherit text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            > 
                                <option><p>Next 1 Day</p></option>
                                <option><p>Next 7 Days</p></option>
                                <option><p>Next 14 Days</p></option>
                                <option><p>Next 30 Days</p></option>

                            </select>
                          </div>



                          <label
                            htmlFor="first-name"
                            className="block text-sm pt-4 font-semibold leading-6 text-gray-500"
                          >
                            Project Description
                          </label>
                          <div className="mt-2.5">
                            <input
                              type="text"
                              name="first-name"
                              id="first-name"
                              autoComplete="given-name"
                              className="block w-full rounded-md border-0 px-3.5 py-2 bg-inherit text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                          <p className="text-lg font-bold leading-loose pt-6 text-gray-500">
                            Item List
                          </p>

                          <table className="w-full h-auto">
                            <thead>
                              <tr className="text-left text-gray-500 ">
                                <th className="w-[42.5%] h-12 pl-4">
                                  Item Name
                                </th>
                                <th className="w-[12.5%] pl-4"> Qty.</th>
                                <th className="w-[20%] pl-4">Price</th>
                                <th className="w-[11%] pl-4">Total</th>
                                <th className="w-[12%] pl-4"></th>
                              </tr>
                            </thead>
                            <tbody>
                              {data.map((item) => (
                                <tr key={item.id} className="text-center">
                                  <td>
                                    <div className="p-3 border-2 rounded-md m-2 font-bold dark:text-white">
                                      {item.name}
                                    </div>
                                  </td>
                                  <td>
                                    <div className="p-3 border-2 rounded-md m-2 font-bold dark:text-white">
                                      {item.qty}
                                    </div>
                                  </td>
                                  <td>
                                    <div className="p-3 border-2 rounded-md m-2 font-bold dark:text-white">
                                      {item.price}
                                    </div>
                                  </td>
                                  <td>
                                    <div className="p-3 m-2 font-bold text-gray-500">
                                      {item.total}
                                    </div>
                                  </td>
                                  <td>
                                    <button className="w-4 h-4 text-gray-500 mx-auto font-bold">
                                      <TrashIcon />
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          <button className="w-full h-12 rounded-full mt-2 mb-20 bg-gray-100 dark:bg-dark-primary dark:hover:bg-dark-secondary hover:bg-slate-primary font-bold text-gray-500">
                            +Add New Item
                          </button>
                        </div>
                        <div className="relative w-full h-auto">
                          <div className="fixed w-[86%] bottom-2 flex flex-row justify-between h-16 bg-gray-50 dark:bg-black py-2">
                            <button onClick={()=>setOpen(false)} className="w-auto h-full md:px-4 px-2 py-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600">
                              Discard
                            </button>
                            <div className="flex flex-row justify-between space-x-2 w-auto h-full">
                              <button className="w-auto h-full md:px-4 px-2 py-2 bg-black dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-300 rounded-full">
                                Save as Draft
                              </button>
                              <button className="w-auto h-full md:px-4 px-2 py-2 md:text-base text-sm bg-indigo-secondary hover:bg-indigo-primary text-white rounded-full">
                                Save & Send
                              </button>
                            </div>
                          </div>
                        </div>

                        <div></div>
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
  );
}
