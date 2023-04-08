import React from 'react'
import MapSection from './Map'
import Footer from '../Home/Footer/Footer'

const Contact = () => {
    return (
        <div>
            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <div>
                                <h1 className="text-2xl font-semibold">Contact Us</h1>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <form className="mt-8 space-y-6">
                                    <input type="hidden" name="remember" defaultValue="true" />
                                    <div className="relative">
                                        <label htmlFor="name" className="text-sm font-medium text-gray-700">
                                            Name
                                        </label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            autoComplete="name"
                                            required
                                            className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 text-base text-gray-700 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
                                        />
                                    </div>
                                    <div className="relative">
                                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 text-base text-gray-700 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
                                        />
                                    </div>
                                    <div className="relative">
                                        <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                                            Phone
                                        </label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            autoComplete="tel"
                                            required
                                            className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 text-base text-gray-700 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
                                        />
                                    </div>
                                    <div className="relative">
                                        <label htmlFor="message" className="text-sm font-medium text-gray-700">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="4"
                                            required
                                            className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 text-base text-gray-700 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center py-2 px-4 border-solid border-2 border-sky-500 rounded-md shadow-sm text-sm font-medium text-black bg-gradient-to-r from-cyan-400 to-sky-500 hover:from-cyan-500 hover:to-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MapSection></MapSection>
            <Footer></Footer>
        </div>
    )
}

export default Contact