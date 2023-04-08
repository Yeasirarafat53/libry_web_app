import React from 'react'

const About = () => {
    const teamMembers = [
        {
            name: "John Doe",
            role: "CEO",
            image: "https://picsum.photos/id/1025/200/200",
        },
        {
            name: "Jane Doe",
            role: "Marketing Manager",
            image: "https://picsum.photos/id/1027/200/200",
        },
        {
            name: "Mark Smith",
            role: "Sales Manager",
            image: "https://picsum.photos/id/1032/200/200",
        },
    ];
    return (
        <div>
            {/* About Us */}
            <div className="max-w-6xl m-auto px-4 py-16">
                <h2 className="text-3xl font-semibold mb-6">About Us</h2>
                <div className="flex flex-col md:flex-row md:space-x-8">
                    <div className="w-full md:w-1/2">
                        <p className="text-gray-600 leading-loose mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat lacus nibh, nec vestibulum velit laoreet vel. Suspendisse potenti. Proin non libero sit amet lorem commodo commodo eget in velit. Donec bibendum metus purus, nec placerat metus faucibus ut. Sed molestie, tortor a eleifend vulputate, lectus nibh porttitor velit, id laoreet nisi elit sit amet nunc. Praesent vitae eros vel sapien consequat porttitor. Integer pellentesque scelerisque ipsum, ac tempus lacus lacinia vel.
                        </p>
                        <p className="text-gray-600 leading-loose mb-6">
                            Sed auctor, magna sed elementum rutrum, elit elit fermentum elit, a luctus massa ipsum eget felis. Fusce vestibulum iaculis congue. Duis quis tincidunt nibh, eu aliquam dolor. Nullam tincidunt lectus vitae neque pulvinar, at tincidunt enim ultricies. Pellentesque iaculis justo vel orci varius, a gravida magna ullamcorper. Sed at justo at enim egestas venenatis vel eu velit. Aliquam ut urna lacinia, vehicula dolor vel, blandit nibh. Ut egestas turpis vel mauris facilisis, sit amet maximus felis mollis. Vivamus eget blandit ante, non efficitur lorem. Maecenas a magna vel sapien dignissim tristique. Nam ultrices ligula id nisi congue faucibus.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img src="https://cdnwebsite.databox.com/wp-content/uploads/2020/12/01062702/about-us-page-examples.png" alt="About Us" className="w-full h-full object-cover object-center rounded-lg shadow-lg" />
                        {/* "https://picsum.photos/id/1015/600/400" */}
                    </div>
                </div>
            </div>
            {/* Team Members */}
            <div className="max-w-6xl m-auto px-4 py-16">
                <h2 className="text-3xl font-semibold mb-6">Our Team</h2>
                <div className="flex flex-wrap justify-center">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="w-full md:w-1/3 p-4">
                            <div className="relative">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover object-center rounded-lg shadow-lg"
                                />
                                <div className="absolute inset-0 bg-gray-900 opacity-75 rounded-lg"></div>
                                <div className="absolute inset-0 p-6 flex flex-col justify-center items-center">
                                    <h3 className="text-white text-lg font-semibold mb-2">
                                        {member.name}
                                    </h3>
                                    <p className="text-gray-300 text-sm">{member.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Mission & Vission */}
            <div className="max-w-6xl m-auto px-4 py-16">
                <h2 className="text-3xl font-semibold mb-6">Mission & Vision</h2>
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 p-4">
                        <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
                            bibendum lorem, eu cursus metus. Integer eu purus augue. Donec ac
                            odio tellus. Praesent eget augue sit amet odio porttitor sodales ut
                            eget nisi. Sed convallis, lorem vel dignissim pellentesque, ex
                            ligula dignissim purus, quis laoreet risus justo quis leo.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                        <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
                            bibendum lorem, eu cursus metus. Integer eu purus augue. Donec ac
                            odio tellus. Praesent eget augue sit amet odio porttitor sodales ut
                            eget nisi. Sed convallis, lorem vel dignissim pellentesque, ex
                            ligula dignissim purus, quis laoreet risus justo quis leo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About