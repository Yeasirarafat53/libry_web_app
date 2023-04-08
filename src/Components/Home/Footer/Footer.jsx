import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaInvision, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="bg-blue-800 pt-10 sm:mt-10 pt-10">
                <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
                    <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                        <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                            About us
                        </div>

                        <p className="my-3 block text-gray-400 text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in scelerisque lorem, ac bibendum justo. Integer quis est et est maximus vehicula.
                        </p>
                    </div>

                    <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                        <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                            Quick Links
                        </div>

                        <ul className="my-3">
                            <li>
                                <Link to="/" className="text-gray-300 hover:text-gray-100 text-sm font-medium block mb-2">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-300 hover:text-gray-100 text-sm font-medium block mb-2">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog" className="text-gray-300 hover:text-gray-100 text-sm font-medium block mb-2">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-300 hover:text-gray-100 text-sm font-medium block mb-2">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                        <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                            Social Media
                        </div>

                        <div className="flex">
                            <a href="#" className="w-8 mr-4 text-gray-300 hover:text-white">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="w-8 mr-4 text-gray-300 hover:text-white">
                                <FaTwitter />
                            </a>
                            <a href="#" className="w-8 mr-4 text-gray-300 hover:text-white">
                                <FaInstagram />
                            </a>
                            <a href="#" className="w-8 mr-4 text-gray-300 hover:text-white">
                                <FaInvision />
                            </a>
                        </div>
                    </div>
                </div>
            </footer >
        </div >
    )
}

export default Footer