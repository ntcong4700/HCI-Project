import { BsTelephone } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuCircleUserRound } from "react-icons/lu";

export default function Header({ toggleSidebar, activePage }) {
    return (
        <div className="w-full h-14 bg-white flex items-center justify-between shadow-md rounded-full px-4">
            <div className="flex items-center space-x-2">
                <button onClick={toggleSidebar} className="h-14 w-14 flex items-center justify-center">
                    <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <div className="text-sm">
                    <span className="font-inter font-semibold text-gray-700">Dashboard</span>
                    <span className="mx-1 text-gray-500">/</span>
                    <span className="text-gray-700">{activePage}</span>
                </div>
            </div>

            <div className="flex items-center space-x-3">
                <input
                    type="text"
                    placeholder="🔍 Search"
                    className="px-3 py-1.5 text-sm rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-sky-400"
                />
                <BsTelephone className="h-6 w-6 text-gray-600" />
                <IoIosNotificationsOutline className="h-7 w-7 text-gray-600" />
                <LuCircleUserRound className="h-6 w-6 text-gray-600" />
            </div>
        </div>
    );
}
