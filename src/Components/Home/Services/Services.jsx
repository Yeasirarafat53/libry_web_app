import React from 'react';

const services = [
  {
    title: 'Java Script ',
    description: 'We create beautiful and functional websites to help your business succeed.',
    image: "./Books/book1.png"
  },
  {
    title: 'Java',
    description: 'We develop and execute effective social media strategies to help you reach your audience.',
    image: "./Books/book2.png"
  },
  {
    title: 'Phython',
    description: 'We optimize your website to rank higher in search engine results pages and drive more traffic to your site.',
    image: "./Books/book3.png"
  },
];

const FeaturedServicesSection = () => {
  return (
    <div className="bg-gray-100 py-5">
      <div className="container mx-auto">
        <h2 className="w-full mb-6 text-5xl font-bold leading-tight text-center text-gray-800">Featured Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="text-3xl mb-4 ">
                <img src={service.image} alt="" />
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedServicesSection;
