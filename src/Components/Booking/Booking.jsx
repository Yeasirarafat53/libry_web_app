import React, { useState } from 'react'
import CalendarSection from './Calender';
import ImageSlider from './Slider';

const Booking = () => {
    const images = [
        "./images/blog02.png",
        "./images/blog03.png",
        "./images/blog04.png"
      ];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        preferredDate: '',
        preferredTime: '',
        additionalInfo: '',
    });
    const [service, setService] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
    };

    return (
        <div>
            <ImageSlider images={images} />
            <div className="flex flex-col gap-2 md:flex-row p-4 mt-6">
                <div className="md:w-1/2 p-4 border-solid border-2 border-sky-500">
                    <h2 className="text-2xl font-semibold mb-2 px-5 ">Select Date & Time</h2>
                    <CalendarSection></CalendarSection>
                </div>
                <div className="md:w-1/2 p-4 border-solid border-2 border-sky-500">
                    <h2 className="text-3xl font-semibold mb-6">Book a Service</h2>
                    <form onSubmit={handleSubmit} className="space-y-6" >
                        <input type="hidden" name="bot-field" />
                        <input type="hidden" name="form-name" value="booking" />
                        <div className="space-y-2">
                            <label className="text-gray-600 font-medium">Select a Service</label>
                            <select name="service" value={service} onChange={(e) => setService(e.target.value)} className="border-2 border-gray-200 p-2 w-full rounded-lg" required>
                                <option value="">-- Select a Service --</option>
                                <option value="Service A">Breakfast</option>
                                <option value="Service B">Lunch</option>
                                <option value="Service C">Dinner</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-gray-600 font-medium">Name</label>
                            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="border-2 border-gray-200 p-2 w-full rounded-lg" required />
                        </div>
                        <div className="space-y-2">
                            <label className="text-gray-600 font-medium">Email</label>
                            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border-2 border-gray-200 p-2 w-full rounded-lg" required />
                        </div>
                        <div className="space-y-2">
                            <label className="text-gray-600 font-medium">Phone Number</label>
                            <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="border-2 border-gray-200 p-2 w-full rounded-lg" required />
                        </div>
                        <button type="submit" className="bg-green-500 text-green-900 py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300">Book Now</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Booking