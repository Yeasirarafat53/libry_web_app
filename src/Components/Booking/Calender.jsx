import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarSection = () => {
    const [date, setDate] = useState(new Date());

    const onChange = (date) => {
        setDate(date);
    };

    return (
        <div>
            <div className="p-5">
                <div className="container mx-auto">
                    <Calendar
                        onChange={onChange}
                        value={date}
                    />
                    <p className="text-gray-600 mt-4">Available Times - {date.toLocaleDateString()}</p><hr />
                    <ul className="list-disc pl-8">
                        <li>10:00am - 11:00am</li>
                        <li>1:00pm - 2:00pm</li>
                        <li>3:00pm - 4:00pm</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CalendarSection;
