import { useEffect, useState } from "react";

export default function NewProduct() {
    const [services, setServices] = useState([]);
    const [selectedOption, setSelectedOption] = useState("men's clothing");

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => setServices(data))
            .catch((error) => console.error(error));
    }, []);

    const handleCategoryChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="max-w-6xl m-auto px-4 py-10">
            <div className="">
                <h2 className="text-3xl font-semibold mb-4">Choose Product</h2>
                <label htmlFor="category" className="text-gray-700 text-2xl font-bold mb-2">Select a category:</label>
                <select
                    onChange={handleCategoryChange}
                    name="" id=""
                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option value="men's clothing">Men's clothing</option>
                    <option value="jewelery">Jewelry</option>
                    <option value="electronics">Electronics</option>
                    <option value="women's clothing">Women's clothing</option>
                </select>
            </div>
            <hr />
            <div className="flex flex-wrap">
                {services.filter((value) => {
                    return value.category === selectedOption;
                }).map((service) => (
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4" key={service.id}>
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-48 object-cover"
                            />
                            <div>
                                <div className="p-4 h-48">
                                    <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                                    <p className="text-gray-600 uppercase ">{service.category}</p>
                                </div>
                                <div className="flex items-center p-4">
                                    <span className="font-semibold text-xl">${service.price}</span>
                                    <button className="ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
