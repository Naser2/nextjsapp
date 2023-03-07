import { Fragment, useState } from 'react'
import { div, Transition } from '@headlessui/react'
// import { CheckIcon } from '@heroicons/react/24/outline'

export default function Modal({ open = false, toggleModal, message }) {
  // console.log("OPEN MODAL", open)

  return (
    <>
      {open ? (
        <div show={open} as={Fragment} className="relative">
          <div
            as="div"
            className="relative z-10 h-full"
            onClose={() => setModalOpen}
          >
            <div
              id="Transition.Child"
              as={Fragment}
              disablePortal
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 -mt-60 bg-gray-500 bg-opacity-75  transition-opacity" />
            </div>

            <div className="fixed inset-0 z-10 -mt-44  overflow-y-auto">
              <div className="-mt-24 flex min-h-full items-end justify-center text-center sm:items-center sm:p-0">
                <div
                  id="Transition.Child"
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <div className="modalPadding relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl  transition-all sm:max-w-sm">
                    <div>
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                        {message.icon}
                      </div>
                      <div className="mt-3 text-center sm:mt-5">
                        <div
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          {message.title}
                        </div>
                        <div className="mt-2 mb-4">
                          <p className="text-sm text-gray-500">
                            {message.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-slate-700 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
                      onClick={() => toggleModal(false)}
                    >
                      Got it
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}
