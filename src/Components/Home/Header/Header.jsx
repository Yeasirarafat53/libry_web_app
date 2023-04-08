import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <header className="bg-white shadow">
                <nav className="container mx-auto px-6 py-3 ">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Link className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-xl font-medium" to="/">
                                Home
                            </Link>
                            <Link className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-xl font-medium" to="/about">
                                About
                            </Link>
                            <Link className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-xl font-medium" to="/products">
                                Products
                            </Link>
                            <Link className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-xl font-medium" to="/booking">
                                Booking
                            </Link>
                            <Link className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-xl font-medium" to="/contact">
                                Contact
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header