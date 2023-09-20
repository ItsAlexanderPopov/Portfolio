import React, { useState } from 'react'

const Contact = () => {

  const [ subject, setSubject ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ message, setMessage ] = useState('')

  return (
    <section id='Contact'>
      <p className='text-8xl mb-20'>Contact Me</p>
      <div className='bg-lightMainColor rounded-lg mb-20 flex m-auto shadow-project shadow-lightMainColor h-[650px]'>
        <form id='contact-form' className='m-4 flex flex-col gap-20 text-mainColor'>
          <div className='flex gap-20'>
            <div>
              <label htmlFor='email' className='text-secondaryColor mr-4'>Email</label>
              <input type='email' id='email' className='rounded-sm bg-secondaryColor'
              ></input>
            </div>

            <div>
              <label htmlFor='subject' className='text-secondaryColor mr-4'>Subject</label>
              <input type='text' id='subject' className='rounded-sm bg-secondaryColor'
              ></input>
            </div>
          </div>
          <div className='flex'>
            <label htmlFor='message' className='text-secondaryColor mr-4'>Message</label>
            <textarea id='message' rows={4} cols={20} maxLength={500} 
            className='rounded-sm bg-secondaryColor'
            ></textarea>
          </div>
        </form>
      </div>
    </section>
  )
}


export default Contact