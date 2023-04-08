import React from 'react'
import CustomerReview from '../Review/CustomerReview'
import Blogs from '../Blogs/Blogs'
import Footer from '../Footer/Footer'
import FeaturedServicesSection from '../Services/Services'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation';
import Banner from '../../../images/food.png';

const Home = () => {
    return (
        <div>
            {/* About The Company */}
            <section className="bg-white border-b py-8">
                <div className="container mx-auto flex flex-wrap pt-4 pb-12">
                    <div className="w-full md:w-1/2 md:pr-12">
                        <h1 className="font-bold text-3xl md:text-5xl leading-tight mb-6">
                            Welcome to Our Library
                        </h1>
                        <p className="text-xl mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in scelerisque lorem, ac bibendum justo. Integer quis est et est maximus vehicula.
                        </p>
                            <TypeAnimation
                                sequence={[
                                    ' Which ',
                                    1000,
                                    'Book you',
                                    2000,
                                    'Need',
                                ]}
                                wrapper="span"
                                cursor={true}
                                repeat={Infinity}
                                style={{ fontSize: '1.5em', display: 'inline-block', color: 'rgb(14 165 236)', fontWeight: 'bold' }}
                            /> <br /><br />
                        <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to="/contact">
                            Contact Us
                        </Link>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img className="w-full md:max-w-sm mx-auto" src="./Books/library.png" alt="Banner" />
                    </div>
                </div>
            </section>

            {/* Featured Services */}
            <FeaturedServicesSection></FeaturedServicesSection>

            {/* Customer Review */}
            <CustomerReview></CustomerReview>

            {/* letest blogs */}
            {/* <Blogs></Blogs> */}

            {/* Footer */}
            <Footer></Footer>
        </div>
    )
}

export default Home