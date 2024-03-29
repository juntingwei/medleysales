'use client'

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { error } from 'console';

export default function Contact() {

  const [completed, setCompleted] = useState({from_name: false, from_number: false, from_email: false, message: false})

  //emailjs configuration 

  const form: any = useRef()

  const sendEmail = (e: any) => {

    e.preventDefault();

    emailjs.sendForm('service_75gxcfm', 'template_wvf9o4b', form.current, '-SjUqeXoFkogZvmFb')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  //test function so that i dont use up email quota

  const sendTest = (e: any) => {

    e.preventDefault()

    console.log('send')
  }

  const checkClicked = (e: any) => {
    e.preventDefault()

    const currentId = e.target.id

    setCompleted((prevState) => ({
      ...prevState,
      [currentId]: true
    }))
  }

  console.log(completed)

    return(
        <div className="">
            <div className="p-4 pb-16 relative bg-cblob bg-top bg-no-repeat bg-auto">

              <div className="p-8 rounded-3xl bg-white text-offblack relative tablet:p-16 tablet:max-w-[860px] tablet:mx-auto desktop:max-w-[860px] desktop:m-auto">

                  <p className="font-poppins-m text-3xl text-center mb-8">Contact Us</p>
                  <p className="font-poppins text-center mb-8">Leave us a message and we will reply as soon as possible</p>

                  <form ref={form} onSubmit={sendTest} className="">

                      <label htmlFor="from_name" className="block mb-2 mt-4">Full name<a className='text-red-300 '> *</a></label>
                      <input
                        type="text"
                        id="from_name"
                        name='from_name'
                        onBlur={checkClicked}
                        placeholder="Enter your full name (required)"
                        className={`w-full h-4 p-6 rounded ${completed.from_name && 'border-red-300 border'}`}
                      />
                      {completed.from_name && <p className='text-red-300'>Please enter a full name</p>}
                      
                      <label htmlFor="from_number" className='block mb-2 mt-4'>Mobile Number<a className='text-red-300 '> *</a></label>
                      <input
                        type="text"
                        id="from_number"
                        name='from_number'
                        placeholder="Enter your mobile number (required)"
                        className={`w-full h-4 p-6 rounded ${completed.from_name && 'border-red-300 border'}`}
                      />
                      {completed.from_name && <p className='text-red-300'>Please enter a full name</p>}

                      <label htmlFor="from_email" className='block mb-2 mt-4'>Email<a className='text-red-300 '> *</a></label>
                      <input
                        type="text"
                        id="from_email"
                        name='from_email'
                        placeholder="Enter your email address (required)"
                        className={`w-full h-4 p-6 rounded ${completed.from_name && 'border-red-300 border'}`}
                      />
                      {completed.from_name && <p className='text-red-300'>Please enter a full name</p>}

                      <label htmlFor="message" className='block mb-2 mt-4'>Your message<a className='text-red-300 '> *</a></label>
                      <textarea
                        id="message"
                        name='message'
                        placeholder="Please type your message here "
                        className={`w-full h-20 p-6 self-stretch rounded text-left text start m-0 shadow ${completed.from_name && 'border-red-300 border'}`}
                      />
                      {completed.from_name && <p className='text-red-300'>Please enter a full name</p>}

                      <input type="submit" className="text-center bg-accent py-4 px-8 rounded text-offblack w-full mt-4 shadow hover:shadow-lg hover:cursor-pointer"/>
                  
                  </form>
              </div>
          </div>
        </div>
    )
}