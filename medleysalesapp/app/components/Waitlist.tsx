'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function Waitlist(props: any) {
  
    return (
      <div>
        <Transition appear show={props.isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10 text-offblack" onClose={props.closeModal}>
  
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
                  <Dialog.Panel className="rounded-2xl w-[620px] bg-white p-16 text-center align-middle shadow-xl transition-all">
                    
                    <div className="my-8 text-offblack">
                      <form className=''>
                        <h3 className='text-offblack font-custom font-poppins-m mb-4'>Join the waitlist</h3>
                        <label htmlFor="" className="block text-left text-sm">Full name</label>
                          <input
                            type="text"
                            id=""
                            name=""
                            placeholder="Enter your full name"
                            className="flex flex-col w-full h-4 p-6 self-stretch rounded shadow"
                        />
                        <label htmlFor="" className="block text-left text-sm mt-4">Email</label>
                          <input
                            type="text"
                            id=""
                            name=""
                            placeholder="Enter your email address"
                            className="flex flex-col w-full h-4 p-6 self-stretch rounded shadow"
                        />
                        <input type="submit" className="text-center bg-accent rounded text-offblack w-full p-4 shadow hover:shadow-lg hover:cursor-pointer mt-4"/>
                      </form>
                    </div>
  
                    <div className="mt-4">
                      <button
                        type="button"
                        className="underline"
                        onClick={props.closeModal}
                      >
                        Cancel
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    )
  }
  