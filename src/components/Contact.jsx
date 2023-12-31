import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import {Button} from './'


const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    emailjs.send(
      "service_4nd5l95",
      "template_l1mw5e7",
      {
        from_name: form.name,
        to_name: 'Alex Popov',
        from_email: form.email,
        to_email: 'itsalexanderpopov@gmail.com',
        message: form.message,
      },
      "IJ8WVX-UToXu6aJse"
      ).then(() => {
        setLoading(false)
        alert('Message has been sent, thank you! I will respond as soon as possible.')
        setForm({name:'', email:'', message:''})

      }, (error)=> {
        setLoading(false)
        console.log(error)
        alert('Something went wrong.')
      })
  }
  return (
    <section className='flex justify-end items-center flex-col min-h-screen mb-[120px]'>
        <h2 className='text-center'>{'<Contact Me>'}</h2>
        <div className='bg-lightMainColor rounded-lg sm:w-1/3 w-4/5 shadow-project shadow-black px-6'>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='my-6'
        >

          <div className='relative'>
            <input
              id='name'
              type='text'
              name='name'
              placeholder='Your Name'
              autoComplete='off'
              value={form.name}
              required
              onChange={handleChange}
              className={`p-2 bg-mainColor rounded-md w-full mb-6 ${form.name !== '' ? 'not-empty' : ''}`}
            />
            <label htmlFor='name'> Name </label>
          </div>
          <div className='relative'>
            <input
              id='email'
              type='email'
              name='email'
              placeholder='Your Email'
              value={form.email}
              autoComplete='off'
              required
              onChange={handleChange}
              className={`p-2 bg-mainColor rounded-md w-full mb-6 ${form.email !== '' ? 'not-empty' : ''}`}
            />
            <label htmlFor='email'> Email </label>
          </div>
          <div className='relative'>
            <textarea
              name='message'
              rows={6}
              placeholder='Your Message'
              value={form.message}
              required
              onChange={handleChange}
              className={`p-2 bg-mainColor rounded-md w-full mb-6 resize-none ${form.message !== '' ? 'not-empty' : ''}`}
            />
            <label htmlFor='message'> Message </label>
          </div>
          <div className='flex justify-center'>
            <Button text={loading ? 'Sending...' : 'Send'}/>
          </div>
        </form>
      </div>
    </section>
  )
}


export default Contact