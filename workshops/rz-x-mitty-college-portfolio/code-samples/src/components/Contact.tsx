'use client'

import { FormEvent, useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message!')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="bg-slate-800 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-4xl font-bold text-white sm:text-5xl">
          Get In Touch
        </h2>
        <p className="mt-4 text-lg text-slate-300">
          Have a question or want to collaborate? Send me a message!
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-2 block w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-3 text-white placeholder-slate-400 transition-colors duration-200 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2 block w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-3 text-white placeholder-slate-400 transition-colors duration-200 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="mt-2 block w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-3 text-white placeholder-slate-400 transition-colors duration-200 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
              placeholder="Your message here..."
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/50"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
