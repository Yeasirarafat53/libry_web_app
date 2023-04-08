import React from 'react'

import Blog1 from'../../../images/blog1.png';
import Blog2 from'../../../images/blog2.png';

const Blogs = () => {
    return (
        <div>
            {/* Latest Blog Posts */}
            <section className="bg-white py-8">
                <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
                    <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                        Latest Blog Posts
                    </h2>
                    <div className="w-full mb-4">
                        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>

                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                                <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                                    <img
                                        src={Blog1}
                                        alt="blog post"
                                        className="h-full w-full rounded-t pb-6"
                                    />
                                    <p className="w-full text-gray-600 text-xs md:text-sm px-6 mt-4">
                                        August 30, 2023
                                    </p>
                                    <div className="w-full font-bold text-xl text-gray-800 px-6 mt-4">
                                        10 Reasons Why Traveling is Good for Your Health
                                    </div>
                                    <p className="text-gray-800 font-serif text-base px-6 mb-5">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in scelerisque lorem, ac bibendum justo. Integer quis est et est maximus vehicula.
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                                <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                                    <img
                                        src={Blog2}
                                        alt="blog post"
                                        className="h-full w-full rounded-t pb-6"
                                    />
                                    <p className="w-full text-gray-600 text-xs md:text-sm px-6 mt-4">
                                        August 25, 2023
                                    </p>
                                    <div className="w-full font-bold text-xl text-gray-800 px-6 mt-4">
                                        The Best Beaches to Visit in the Summer
                                    </div>
                                    <p className="text-gray-800 font-serif text-base px-6 mb-5">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in scelerisque lorem, ac bibendum justo. Integer quis est et est maximus vehicula.
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                                <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                                    <img
                                        src={Blog1}
                                        alt="blog post"
                                        className="h-full w-full rounded-t pb-6"
                                    />
                                    <p className="w-full text-gray-600 text-xs md:text-sm px-6 mt-4">
                                        August 20, 2023
                                    </p>
                                    <div className="w-full font-bold text-xl text-gray-800 px-6 mt-4">
                                        The Best Way to Learn Anything you want
                                    </div>
                                    <p className="text-gray-800 font-serif text-base px-6 mb-5">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in scelerisque lorem, ac bibendum justo. Integer quis est et est maximus vehicula.
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blogs