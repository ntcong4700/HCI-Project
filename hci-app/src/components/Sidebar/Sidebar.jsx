import logo from '../../assets/logo.png';
import { FaRegClock } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { RiMedicineBottleLine } from "react-icons/ri";
import { LiaFacebookMessenger } from "react-icons/lia";
import { useNavigate } from 'react-router-dom';

function Sidebar({ activePage, setActivePage, collapsed }) {
    const navigate = useNavigate();
    
    const buttons = [
        { label: 'Overview', icon: <FaRegClock className="w-6 h-6 text-black" />, path: '/overview' },
        { label: 'Appointment', icon: <AiOutlineBars className="w-6 h-6 text-black" />, path: '/appointment' },
        { label: 'Patients', icon: <BsPeople className="w-6 h-6 text-black" />, path: '/my-patient' },
        { label: 'Medicine', icon: <RiMedicineBottleLine className="w-6 h-6 text-black" />, path: '/medicine' },
        { label: 'Messengers', icon: <LiaFacebookMessenger className="w-6 h-6 text-black" />, path: '/messengers' }
    ];

    const handleNavigation = (btn) => {
        setActivePage(btn.label);
        navigate(btn.path);
    };

    return (
        <div className="h-full bg-[#F4F8FF] flex flex-col items-center p-3 gap-2">
            {/* Logo */}
            {!collapsed && (
                <div className="w-full h-16 flex items-center gap-2 p-3">
                    <img src={logo} alt="logo" className="w-11 h-10 rounded-full" />
                    <span className="text-xl font-bold">Doctor Dashboard</span>
                </div>
            )}

            {/* Navigation buttons */}
            {buttons.map((btn, i) => (
                <div
                    key={i}
                    onClick={() => handleNavigation(btn)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl cursor-pointer
                        transition-all duration-300 ${activePage === btn.label
                        ? 'bg-[#7FD9F7] scale-[1.03]'
                        : 'bg-white hover:bg-[#d2f2fd] hover:scale-[1.02]'}
                    `}
                >
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white">
                        {btn.icon}
                    </div>
                    {!collapsed && <span className="text-black font-medium">{btn.label}</span>}
                </div>
            ))}
        </div>
    );
}

export default Sidebar;
