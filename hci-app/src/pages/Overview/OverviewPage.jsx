import React, { useState, useEffect } from 'react';
import { MoreHorizontal, ChevronLeft, ChevronRight, FileText, Heart, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MedicalDashboard = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [appointmentPage, setAppointmentPage] = useState(1);
    const [hoveredRow, setHoveredRow] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [stats, setStats] = useState({ totalPatients: 0, onTreatment: 0, pending: 0 });

    useEffect(() => {
        setIsLoaded(true);
        // Animate stats counting
        const interval = setInterval(() => {
            setStats(prev => ({
                totalPatients: Math.min(prev.totalPatients + 1, 8),
                onTreatment: Math.min(prev.onTreatment + 1, 5),
                pending: Math.min(prev.pending + 1, 1)
            }));
        }, 100);

        setTimeout(() => clearInterval(interval), 800);
        return () => clearInterval(interval);
    }, []);

    const appointmentRequests = [
        { name: "Capucino assassino", date: "01.01.2025", time: "14:00", approved: true },
        { name: "Tung Tung Sahur", date: "03.01.2025", time: "11:00", approved: false },
        { name: "Lurii Larila", date: "05.03.2026", time: "12:00", approved: true },
        { name: "Tralalelo Tralala", date: "04.07.2025", time: "15:00", approved: false },
        { name: "Panettone Stallone", date: "30.11.2025", time: "15:45", approved: true }
    ];

    const todayPatients = [
        { name: "Hieu Thu 2", status: "Pending", dob: "12.01.1999", startDate: "01.01.2025", id: "123SDASDAD", note: "📋" },
        { name: "Son Tung MTP", status: "On treatment", dob: "15.02.1989", startDate: "19.01.2025", id: "DSSDS12DD", note: "📋" },
        { name: "David Beckham", status: "Off treatment", dob: "11.11.1998", startDate: "12.08.2025", id: "DASSDD123", note: "📋" },
        { name: "Harry Maguire", status: "Closed", dob: "10.08.1950", startDate: "12.03.2025", id: "11122233333", note: "📋" },
        { name: "David  Beckkham", status: "On treatment", dob: "08.10.1590", startDate: "14.05.2025", id: "01836767672", note: "📋" },
        { name: "Timothy Chan", status: "On treatment", dob: "10.03.1986", startDate: "11.01.2025", id: "ABC12345561", note: "📋" },
        { name: "Christiano Ronaldo", status: "On treatment", dob: "03.10.1968", startDate: "22.02.2025", id: "123DSDF345", note: "📋" },
        { name: "Lionel Messi", status: "On treatment", dob: "12.04.1234", startDate: "18.01.2025", id: "11160066666", note: "📋" }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case "Pending": return "bg-orange-100 text-orange-600";
            case "On treatment": return "bg-green-100 text-green-600";
            case "Off treatment": return "bg-blue-100 text-blue-600";
            case "Closed": return "bg-purple-100 text-purple-600";
            default: return "bg-gray-100 text-gray-600";
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br bg-[F4F8FF] p-6">
            <div className="max-w-7xl mx-auto">

                {/* Top Section */}
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {/* Doctor Welcome Card */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-500 hover:bg-white/90 group">
                        <div className="flex justify-between items-start mb-4">
                            <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">Doctor</h2>
                            <button className="text-gray-400 hover:text-gray-600 hover:rotate-90 transition-all duration-300">
                                <MoreHorizontal size={20} />
                            </button>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="flex-1">
                                <h3 className="text-lg font-medium text-gray-800 mb-2 group-hover:text-blue-700 transition-colors duration-300">Welcome Dr. Strange !!!</h3>
                                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Have a nice day!</p>
                            </div>
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 hover:rotate-6 shadow-lg">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg flex items-center justify-center text-white font-bold text-xl animate-pulse">
                                    👨‍⚕️
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Appointment Requests */}
                    <div 
                        className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-500 hover:bg-white/90 group cursor-pointer"
                        onClick={() => navigate('/appointment')}
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h2 className="text-xl font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">Appointment Request</h2>
                            <button 
                                className="text-gray-400 hover:text-gray-600 hover:rotate-90 transition-all duration-300"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigate('/appointment');
                                }}
                            >
                                <MoreHorizontal size={20} />
                            </button>
                        </div>

                        <div className="space-y-3">
                            <div className="grid grid-cols-4 gap-4 text-sm font-medium text-gray-600 pb-2 border-b border-gray-100">
                                <span>Name</span>
                                <span>Date</span>
                                <span>Time</span>
                                <span></span>
                            </div>

                            {appointmentRequests.slice(0, 5).map((appointment, index) => (
                                <div
                                    key={index}
                                    className={`grid grid-cols-4 gap-4 items-center py-2 rounded-lg px-2 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:shadow-md transform hover:scale-[1.02] ${
                                        index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
                                    }`}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigate('/appointment');
                                    }}
                                >
                                    <span className="text-sm text-gray-800 font-medium">{appointment.name}</span>
                                    <span className="text-sm text-gray-600">{appointment.date}</span>
                                    <span className="text-sm text-gray-600">{appointment.time}</span>
                                    <div className="flex space-x-2">
                                        <button 
                                            className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs transition-all duration-300 hover:scale-125 hover:rotate-12 shadow-lg hover:shadow-green-300 hover:bg-green-600"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                // Handle approve
                                            }}
                                        >
                                            ✓
                                        </button>
                                        <button 
                                            className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white text-xs transition-all duration-300 hover:scale-125 hover:rotate-12 shadow-lg hover:shadow-red-300"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                // Handle reject
                                            }}
                                        >
                                            ✕
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center items-center space-x-2 mt-4 text-sm">
                            <button 
                                className="text-gray-400 hover:text-blue-600 transition-all duration-300"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    // Handle pagination
                                }}
                            >
                                «
                            </button>
                            <button 
                                className="text-gray-400 hover:text-blue-600 transition-all duration-300"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    // Handle pagination
                                }}
                            >
                                ‹
                            </button>
                            <span className="px-2 py-1 bg-blue-500 text-white rounded">1</span>
                            <span className="px-2 py-1">2</span>
                            <span className="px-2 py-1">...</span>
                            <span className="px-2 py-1">8</span>
                            <button 
                                className="text-gray-400 hover:text-blue-600 transition-all duration-300"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    // Handle pagination
                                }}
                            >
                                ›
                            </button>
                            <button 
                                className="text-gray-400 hover:text-blue-600 transition-all duration-300"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    // Handle pagination
                                }}
                            >
                                »
                            </button>
                        </div>
                    </div>
                </div>

                {/* Today Patients Table */}
                <div className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} hover:shadow-2xl hover:bg-white/90`}>
                    <div className="flex justify-between items-center p-6 border-b border-gray-100">
                        <h2 className="text-xl font-semibold text-gray-800">Today Patients</h2>
                        <button className="text-gray-400 hover:text-gray-600 hover:rotate-90 transition-all duration-300">
                            <MoreHorizontal size={20} />
                        </button>
                    </div>

                    <div className="overflow-x-hidden">
                        <table className="w-full">
                            <thead className="bg-gradient-to-r from-gray-50 to-blue-50">
                            <tr>
                                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Name</th>
                                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Status</th>
                                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">DOB</th>
                                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Start Date</th>
                                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">ID number</th>
                                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Note</th>
                                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Last prescription</th>
                            </tr>
                            </thead>
                            <tbody>
                            {todayPatients.map((patient, index) => (
                                <tr
                                    key={index}
                                    className={`border-b border-gray-50 transition-all duration-500 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:shadow-xl transform hover:scale-[1.02] hover:translate-x-2 hover:border-l-4 hover:border-l-blue-500 ${
                                        hoveredRow === index ? 'bg-gradient-to-r from-blue-50 to-purple-50 shadow-xl scale-[1.005] translate-x-2 border-l-2 border-l-blue-400' : ''
                                    } animate-fade-in-up`}
                                    onMouseEnter={() => setHoveredRow(index)}
                                    onMouseLeave={() => setHoveredRow(null)}
                                    style={{
                                        animationDelay: `${index * 100}ms`,
                                        animationFillMode: 'both'
                                    }}
                                >
                                    <td className="py-4 px-6 font-medium text-gray-800 transition-all duration-300 hover:text-blue-600 hover:font-semibold">{patient.name}</td>
                                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-current/30 ${getStatusColor(patient.status)}`}>
                        {patient.status}
                      </span>
                                    </td>
                                    <td className="py-4 px-6 text-gray-600 transition-all duration-300 hover:text-gray-800 hover:font-medium">{patient.dob}</td>
                                    <td className="py-4 px-6 text-gray-600 transition-all duration-300 hover:text-gray-800 hover:font-medium">{patient.startDate}</td>
                                    <td className="py-4 px-6 text-gray-600 font-mono text-sm transition-all duration-300 hover:text-blue-600 hover:font-bold hover:bg-blue-50 hover:rounded-lg hover:px-2">{patient.id}</td>
                                    <td className="py-4 px-6">
                      <span className="w-8 h-8 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-125 hover:rotate-12 hover:shadow-lg cursor-pointer hover:from-orange-200 hover:to-orange-300 hover:shadow-orange-300/50">
                        📋
                      </span>
                                    </td>
                                    <td className="py-4 px-6">
                                        <button className="text-gray-400 hover:text-blue-600 transition-all duration-300 hover:scale-125 hover:rotate-12 p-2 rounded-lg hover:bg-blue-50 hover:shadow-md">
                                            <FileText size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Table Pagination */}
                    <div className="flex justify-center items-center space-x-2 p-4 text-sm border-t border-gray-100">
                        <button className="text-gray-400 hover:text-blue-600 transition-all duration-300 hover:scale-125 p-1 rounded">«</button>
                        <button className="text-gray-400 hover:text-blue-600 transition-all duration-300 hover:scale-125 p-1 rounded">‹</button>
                        <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">1</span>
                        <span className="px-3 py-1 hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 rounded-lg cursor-pointer transition-all duration-300 hover:scale-110">2</span>
                        <span className="px-2 py-1">...</span>
                        <span className="px-3 py-1 hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 rounded-lg cursor-pointer transition-all duration-300 hover:scale-110">8</span>
                        <button className="text-gray-400 hover:text-blue-600 transition-all duration-300 hover:scale-125 p-1 rounded">›</button>
                        <button className="text-gray-400 hover:text-blue-600 transition-all duration-300 hover:scale-125 p-1 rounded">»</button>
                    </div>
                </div>

                {/* Floating Action Button */}
                <div className="fixed bottom-8 right-8">
                    <button className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 hover:rotate-12 flex items-center justify-center text-white font-bold text-2xl animate-bounce hover:animate-none">
                        +
                    </button>
                </div>

                {/* CSS Animations */}
                <style jsx>{`
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in-up {
            animation: fade-in-up 0.6s ease-out forwards;
            opacity: 0;
          }

          @keyframes slide-in-left {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slide-in-right {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .animate-slide-in-left {
            animation: slide-in-left 0.6s ease-out forwards;
          }

          .animate-slide-in-right {
            animation: slide-in-right 0.6s ease-out forwards;
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>
            </div>
        </div>
    );
};

export default MedicalDashboard;