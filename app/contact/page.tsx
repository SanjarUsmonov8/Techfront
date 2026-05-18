"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    })

    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission here
        console.log(formData)
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 3000)
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Contact Our Sellers</h1>
                    <p className="text-xl text-gray-600">Get in touch with us for any inquiries or support</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {/* Contact Info Cards */}
                    <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                        <div className="text-blue-600 text-4xl mb-4">📞</div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Phone</h3>
                        <p className="text-gray-600 mb-4">Call us during business hours</p>
                        <p className="text-lg font-semibold text-blue-600">
                            +998-(88)-001-9678
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                        <div className="text-blue-600 text-4xl mb-4">📧</div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Email</h3>
                        <p className="text-gray-600 mb-4">Send us an email anytime</p>
                        <p className="text-lg font-semibold text-blue-600">
                            azimovanvar698@gmail.com
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                        <div className="text-blue-600 text-4xl mb-4">🔗</div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Website</h3>
                        <p className="text-gray-600 mb-4">Visit our Telegram</p>
                        <a href="#" className="text-lg font-semibold text-blue-600 hover:underline">
                           t.me/@usm_on_off_s
                        </a>
                    </div>
                </div>

                <div className="flex justify-around"> {/* Contact Form */}
                    <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl mx-auto w-200">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your full name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your.email@example.com"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                    required
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Your phone number"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                />
                            </div>

                            {/* Subject */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="What is this about?"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                    required
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your message here..."
                                    rows={6}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                                    required
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                            >
                                Send Message
                                <span>✉️</span>
                            </button>

                            {/* Success Message */}
                            {submitted && (
                                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                                    <p className="font-semibold">Message sent successfully!</p>
                                    <p className="text-sm">We will get back to you soon.</p>
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Business Hours */}
                    <div className="mt-12 bg-blue-50 rounded-lg p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Hours</h3>
                        <div className="grid grid-cols-2 gap-6 text-gray-700">
                            <div>
                                <p className="font-semibold">Monday - Friday</p>
                                <p>9:00 AM - 6:00 PM</p>
                            </div>
                            <div>
                                <p className="font-semibold">Saturday</p>
                                <p>10:00 AM - 4:00 PM</p>
                            </div>
                            <div>
                                <p className="font-semibold">Sunday</p>
                                <p>Closed</p>
                            </div>
                            <div>
                                <p className="font-semibold">Holidays</p>
                                <p>Closed</p>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    )
}
