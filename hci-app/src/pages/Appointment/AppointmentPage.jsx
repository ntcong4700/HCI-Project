import React, { useState, useEffect } from "react";
import { Calendar, Clock, Plus, X, ChevronLeft, ChevronRight, CheckCircle2, AlertCircle, Clock4 } from "lucide-react";
import doctorImg from "../../assets/doctor_and_child.png";

const initialTimelineData = [
    {
        time: "10.20 am",
        status: "complete",
        title: "Patient checkup",
        description: "Routine checkup for patient John Doe."
    },
    {
        time: "11.00 am",
        status: "pending",
        title: "Fill prescription",
        description: "Filling prescription for patient John Doe. Medication: Amoxicillin 500mg, 3 times a day for 7 days."
    },
    {
        time: "11.30 am",
        status: "complete",
        title: "Medical consultation",
        description: "Consultation with Dr. Smith regarding patient's ongoing treatment plan and next steps."
    },
    {
        time: "12.00 am",
        status: "occupies",
        title: "Operation",
        description: "Scheduled operation for patient Jane Doe. Procedure: Appendectomy. Team: Dr. Lee, Nurse Kim."
    },
    {
        time: "12.20 am",
        status: "occupies",
        title: "Operation",
        description: "Emergency operation for patient Mark. Procedure: Fracture repair. Team: Dr. Lee, Nurse Kim."
    },
    {
        time: "12.50 am",
        status: "complete",
        title: "Patient checkup",
        description: "Follow-up checkup for patient Anna. Monitoring recovery progress."
    }
];

export default function AppointmentPage() {
    const [timelineData, setTimelineData] = useState(initialTimelineData);
    const [selectedTask, setSelectedTask] = useState(null);
    const [showAddModal, setShowAddModal] = useState(false);
    const [form, setForm] = useState({ name: '', date: '', time: '' });
    const [isLoaded, setIsLoaded] = useState(false);
    const [hoveredTask, setHoveredTask] = useState(null);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleAddSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            time: form.time,
            status: "pending",
            title: form.name,
            description: `Task scheduled for ${form.date} at ${form.time}.`
        };
        setTimelineData([...timelineData, newTask]);
        setShowAddModal(false);
        setForm({ name: '', date: '', time: '' });
    };

    return (
        <div className="flex min-h-screen bg-[#F4F8FF] relative">
            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Content */}
                <div className="flex-1 flex gap-6 p-6">
                    {/* Left Main Section */}
                    <div className="flex-1 flex flex-col gap-6">
                        {/* Stats & Illustration */}
                        <div className={`flex gap-6 h-40 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <div className="flex flex-1 gap-4 bg-white/80 backdrop-blur-sm rounded-xl p-4 items-center shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-500 hover:bg-white/90 group">
                                <div className="flex flex-col gap-3 flex-1">
                                    <div className="flex gap-3">
                                        <div className="bg-[#7FD9F7] rounded-xl px-4 py-2 flex flex-col items-center min-w-[120px] transition-all duration-300 hover:scale-105 hover:shadow-lg group-hover:bg-blue-100">
                                            <span className="text-xs text-gray-700 group-hover:text-gray-900">Complete appointment this week</span>
                                            <span className="text-2xl font-bold group-hover:text-blue-600">56</span>
                                        </div>
                                        <div className="bg-[#7FD9F7] rounded-xl px-4 py-2 flex flex-col items-center min-w-[120px] transition-all duration-300 hover:scale-105 hover:shadow-lg group-hover:bg-blue-100">
                                            <span className="text-xs text-gray-700 group-hover:text-gray-900">Pending appointment this week</span>
                                            <span className="text-2xl font-bold group-hover:text-blue-600">52</span>
                                        </div>
                                    </div>
                                    <div className="bg-[#7FD9F7] rounded-xl px-4 py-2 flex flex-col items-center min-w-[120px] w-1/2 transition-all duration-300 hover:scale-105 hover:shadow-lg group-hover:bg-blue-100">
                                        <span className="text-xs text-gray-700 group-hover:text-gray-900">Total appointment this week</span>
                                        <span className="text-2xl font-bold group-hover:text-blue-600">108</span>
                                    </div>
                                </div>
                                <img src={doctorImg} alt="Doctor" className="h-40 object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-3" />
                            </div>
                        </div>

                        {/* Calendar */}
                        <div className={`bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50 transition-all duration-500 hover:shadow-2xl hover:bg-white/90 group ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <div className="flex justify-between items-center mb-4">
                                <div className="font-semibold text-lg group-hover:text-blue-600 transition-colors duration-300">Calendar</div>
                                <div className="flex gap-2">
                                    <button className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-110 hover:rotate-12">
                                        <ChevronLeft className="h-5 w-5" />
                                    </button>
                                    <button className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-110 hover:rotate-12">
                                        <ChevronRight className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-300">SUN</span>
                                <span className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-300">MON</span>
                                <span className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-300">TUE</span>
                                <span className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-300">WED</span>
                                <span className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-300">THU</span>
                                <span className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-300">FRI</span>
                                <span className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-300">SAT</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-xs hover:text-blue-600 transition-colors duration-300 cursor-pointer">11</span>
                                <span className="text-xs hover:text-blue-600 transition-colors duration-300 cursor-pointer">12</span>
                                <span className="text-xs hover:text-blue-600 transition-colors duration-300 cursor-pointer">13</span>
                                <span className="text-xs bg-blue-600 text-white rounded-full px-2 py-0.5 hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer">14</span>
                                <span className="text-xs hover:text-blue-600 transition-colors duration-300 cursor-pointer">15</span>
                                <span className="text-xs hover:text-blue-600 transition-colors duration-300 cursor-pointer">16</span>
                                <span className="text-xs hover:text-blue-600 transition-colors duration-300 cursor-pointer">17</span>
                            </div>
                        </div>

                        {/* Timeline */}
                        <div className={`bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/50 transition-all duration-500 hover:shadow-2xl hover:bg-white/90 group min-h-[450px] flex flex-col justify-start ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <div className="font-semibold mb-6 text-lg group-hover:text-blue-600 transition-colors duration-300">Timeline</div>
                            <div className="flex flex-col gap-6 flex-1">
                                {timelineData.map((item, idx) => (
                                    <TimelineItem
                                        key={idx}
                                        time={item.time}
                                        status={item.status}
                                        title={item.title}
                                        onViewDetails={() => setSelectedTask(item)}
                                        isHovered={hoveredTask === idx}
                                        onHover={() => setHoveredTask(idx)}
                                        onLeave={() => setHoveredTask(null)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Section: Add Task & Task Details */}
                    <div className="w-96 flex flex-col gap-6">
                        {/* Add task card */}
                        <div className={`bg-white/80 backdrop-blur-sm rounded-xl p-8 flex flex-col items-center shadow-lg border border-white/50 transition-all duration-500 hover:shadow-2xl hover:bg-white/90 group ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <div className="w-30 h-30 bg-[#E6F0FF] rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                                <img src={doctorImg} alt="Add task" className="h-28 object-contain" />
                            </div>
                            <div className="text-center text-lg font-semibold mb-4 group-hover:text-blue-600 transition-colors duration-300">Add task in your schedule now</div>
                            <button 
                                className="bg-blue-600 text-white px-6 py-2 rounded-lg text-base font-semibold transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-lg flex items-center gap-2"
                                onClick={() => setShowAddModal(true)}
                            >
                                <Plus className="h-5 w-5" />
                                Add Task
                            </button>
                        </div>

                        {/* Task Details table */}
                        <div className={`bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50 transition-all duration-500 hover:shadow-2xl hover:bg-white/90 group min-h-[460px] w-full ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <div className="font-semibold mb-4 text-lg group-hover:text-blue-600 transition-colors duration-300">Task details</div>
                            {selectedTask ? (
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                                            selectedTask.status === "complete" 
                                                ? "bg-green-100 text-green-600" 
                                                : selectedTask.status === "pending" 
                                                    ? "bg-yellow-100 text-yellow-600" 
                                                    : "bg-red-100 text-red-600"
                                        }`}>
                                            {selectedTask.status === "complete" ? (
                                                <CheckCircle2 className="h-6 w-6" />
                                            ) : selectedTask.status === "pending" ? (
                                                <Clock4 className="h-6 w-6" />
                                            ) : (
                                                <AlertCircle className="h-6 w-6" />
                                            )}
                                        </div>
                                        <div>
                                            <div className="font-medium text-base group-hover:text-blue-600 transition-colors duration-300">{selectedTask.title}</div>
                                            <div className="text-sm text-gray-500 flex items-center gap-1">
                                                <Clock className="h-4 w-4" />
                                                {selectedTask.time}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg transition-all duration-300 hover:bg-gray-100">
                                        {selectedTask.description}
                                    </div>
                                </div>
                            ) : (
                                <div className="text-gray-400 text-sm flex items-center justify-center h-full">
                                    Select a task to see details
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Add Task Modal */}
            {showAddModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 w-96 shadow-2xl border border-white/50 relative transform transition-all duration-300 scale-100 hover:scale-[1.02]">
                        <button 
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-all duration-300 hover:scale-110 hover:rotate-90"
                            onClick={() => setShowAddModal(false)}
                        >
                            <X className="h-6 w-6" />
                        </button>
                        <h2 className="text-xl font-semibold mb-6 text-center text-gray-800">Add Task</h2>
                        <form onSubmit={handleAddSubmit} className="flex flex-col gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Task Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter task name"
                                    value={form.name}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Date</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={form.date}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Time</label>
                                <input
                                    type="time"
                                    name="time"
                                    value={form.time}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                                    required
                                />
                            </div>
                            <button 
                                type="submit" 
                                className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                            >
                                <Plus className="h-5 w-5" />
                                Add Task
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

function TimelineItem({ time, status, title, onViewDetails, isHovered, onHover, onLeave }) {
    const getStatusIcon = () => {
        switch (status) {
            case "complete":
                return <CheckCircle2 className="h-5 w-5 text-green-500" />;
            case "pending":
                return <Clock4 className="h-5 w-5 text-yellow-500" />;
            default:
                return <AlertCircle className="h-5 w-5 text-red-500" />;
        }
    };

    return (
        <div 
            className={`flex items-center text-sm group transition-all duration-300 ${
                isHovered ? 'bg-blue-50 scale-[1.02] shadow-lg rounded-lg px-4 py-2' : ''
            }`}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
        >
            <span className="w-20 text-gray-500 group-hover:text-gray-700 transition-colors duration-300">{time}</span>
            <div className="mx-2 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                {getStatusIcon()}
            </div>
            <span className="flex-1 group-hover:text-blue-600 transition-colors duration-300">{title}</span>
            <button
                className="text-blue-600 hover:text-blue-800 text-xs ml-2 focus:outline-none transition-all duration-300 hover:scale-110"
                onClick={onViewDetails}
            >
                View details
            </button>
        </div>
    );
}