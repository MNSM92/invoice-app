
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function Confirm({isOpen, setIsOpen}){

    return(
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={()=>setIsOpen(false)}>
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
                            onClick={()=>setIsOpen(false)}
                            >
                            Cancel
                            </button>
                            <button
                            type="button"
                            className="inline-flex justify-center rounded-full border border-transparent bg-orange-500 px-6 py-3 text-sm font-bold text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={()=>setIsOpen(false)}
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
    )
}
