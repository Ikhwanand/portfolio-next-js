import React from 'react'
import Image from 'next/image';
import phone from '../assets/phone.png'
import mail from '../assets/mail.png'

const Contact = () => {
  return (
    <div className='max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 p-8
    rounded-lg space-y-8 lg:space-y-0 lg:space-x-8' id='contact'>
        <div className="flex justify-center items-center">
            <ul className='space-y-4'>
                <li className='flex items-center'>
                    <Image src={phone} alt='phone' className='h-[110px] w-auto mr-6'/>
                    <p className="text-xl">+989 989 989 989</p>
                </li>
                <li className='flex items-center'>
                    <Image src={mail} alt='mail' className='h-[110px] w-auto mr-6'/>
                    <p className="text-xl">johndoe@example.com</p>
                </li>
            </ul>
        </div>

        <div className="bg-white/10 p-6 rounded-xl max-w-[550px]">
            <h2 className="text-5xl font-bold text-orange-400 mb-4 text-center">Let's connect</h2>
            <p className="text-white/70 mb-6 text-center">Send me a message and lets schedule a calall!</p>
            <form className="space-y-4">
                <div className='grid md:grid-cols-2 gap-4'>
                    <input type="text" className="bg-black/70 rounded-xl p-3 mb-3 mr-3 focus:outline-none focus:ring-2 focus:ring-orange-40" placeholder='First Name' />
                    <input type="text" className="bg-black/70 rounded-xl p-3 mb-3 mr-3 focus:outline-none focus:ring-2 focus:ring-orange-40" placeholder='Last Name' />
                    <input type="email" className="bg-black/70 rounded-xl p-3 mb-3 mr-3 focus:outline-none focus:ring-2 focus:ring-orange-40" placeholder='Email' />
                    <input type="number" className="bg-black/70 rounded-xl p-3 mb-3 mr-3 focus:outline-none focus:ring-2 focus:ring-orange-40" placeholder='Phone' />
                </div>
                <textarea className="bg-black/70 rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-40" placeholder='Your Message'></textarea>
                <button type="submit" className='bg-orange-700 hover:bg-orange-500 text-white px-6 py-2 w-full font-semibold
                text-xl rounded-xl'>Send Message</button>
                
            </form>
        </div>
    </div>
  )
}

export default Contact