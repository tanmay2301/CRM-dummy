    import React, { useState } from "react";
    import Calendar from "react-calendar";
    import "react-calendar/dist/Calendar.css";
    import SideBar from "./custom-components/SideBar";
    import Header from "./custom-components/Header";

    function CalendarPage() {
        const [date, setDate] = useState(new Date());
        const [checkedEvents, setCheckedEvents] = useState(Array(3).fill(false));

        const events = [
            { time: "10:00 AM", event: "Meeting with team" },
            { time: "1:00 PM", event: "Submit report on new clients" },
            { time: "3:00 PM", event: "Project review" },
        ];

        const handleCheck = (index) => {
            const newChecked = [...checkedEvents];
            newChecked[index] = !newChecked[index];
            setCheckedEvents(newChecked);
        };

        return (
            <>
                <Header />
                <SideBar />
                <div className="flex justify-center items-start min-h-screen w-full pt-0 ml-[4.5%]">
                    <div className="w-full max-w-7xl p-6 flex gap-6 bg-white">
                        
                        <div className="w-2/3 flex justify-center p-6">
                            <div className="scale-[1.2] p-4">
                                <Calendar 
                                    onChange={setDate} 
                                    value={date} 
                                    className="w-full text-2xl font-light border-none shadow-lg"
                                />
                            </div>
                        </div>

                        <div className="w-1/3 p-6">
                            <h2 className="text-2xl font-bold mb-4">Today's Events</h2>
                            <ul className="space-y-3">
                                {events.map((event, index) => (
                                    <li 
                                        key={index} 
                                        className="flex items-center gap-3 text-lg text-gray-900 p-3 rounded-md shadow"
                                    >
                                        <input 
                                            type="checkbox" 
                                            checked={checkedEvents[index]} 
                                            onChange={() => handleCheck(index)}
                                            className="w-6 h-6 accent-grey-500 cursor-pointer"
                                        />
                                        <span className="font-semibold">{event.time}:</span> {event.event}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </>
        );
    }

    export default CalendarPage;
