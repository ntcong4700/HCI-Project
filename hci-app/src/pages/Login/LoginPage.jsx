import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import doctor from "../../assets/doctor.png";
import logo from "../../assets/logo.png";
import ForgotPasswordPopup from "./ForgotPasswordPopup";

const LoginPage = ({ onLoginSuccess }) => {
    const [showPopup, setShowPopup] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [fadeIn, setFadeIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("adminPassword")) {
            localStorage.setItem("adminPassword", "admin123");
        }
        setFadeIn(true);
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const savedPassword = localStorage.getItem("adminPassword");

        if (email === "admin@example.com" && password === savedPassword) {
            onLoginSuccess();
            localStorage.setItem("isLoggedIn", "true");
            navigate("/overview");
        } else {
            alert("❌ Login failed: Invalid credentials");
        }
        setIsLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white p-4 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #2563eb 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="w-full max-w-6xl bg-white rounded-[40px] shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-3xl relative">
                <div className="flex flex-col md:flex-row h-full">
                    {/* Left side - Login Form */}
                    <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative z-10">
                        <div className="max-w-md mx-auto w-full animate-fadeIn">
                            {/* Logo and Title */}
                            <div className="flex items-center mb-8 group">
                                <img 
                                    className="w-16 h-16 object-cover transition-transform duration-500 group-hover:rotate-12" 
                                    src={logo} 
                                    alt="Logo" 
                                />
                                <h1 className="text-3xl md:text-4xl font-semibold text-black ml-4 font-inter transition-all duration-300 group-hover:text-[#1266de]">
                                    Medical Dashboard
                                </h1>
                            </div>

                            <div className="bg-[#f4f8ff] rounded-[40px] shadow-md p-6 md:p-8 transition-all duration-300 hover:shadow-xl">
                                <form onSubmit={handleLogin} className="space-y-6">
                                    <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                                        <h2 className="text-3xl md:text-4xl font-black text-black">Log In</h2>
                                        <p className="text-lg md:text-2xl font-bold text-black opacity-40 mt-2">
                                            please enter your account details to our platform
                                        </p>
                                    </div>

                                    <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                                        <label className="text-xl md:text-2xl font-black text-black block font-mulish">Email</label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="mt-2 w-full h-10 md:h-12 border border-[#4185e5] rounded-[10px] px-3 py-2 text-base md:text-lg font-inter focus:outline-none focus:border-[#1266de] focus:shadow-md transition-all duration-300 hover:border-[#1266de] hover:scale-[1.02]"
                                            placeholder="example@gmail.com"
                                            required
                                        />
                                    </div>

                                    <div className="animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                                        <label className="text-xl md:text-2xl font-bold text-black">Password</label>
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="mt-2 w-full h-10 md:h-12 border border-[#4185e5] rounded-[10px] px-3 py-2 text-base md:text-lg font-inter focus:outline-none focus:border-[#1266de] focus:shadow-md transition-all duration-300 hover:border-[#1266de] hover:scale-[1.02]"
                                            placeholder="***********************"
                                            required
                                        />
                                    </div>

                                    <div className="flex items-center justify-between animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
                                        <button
                                            type="button"
                                            onClick={() => setShowForgotPassword(true)}
                                            className="text-[#1266de] underline text-base md:text-lg font-bold hover:text-[#0b4cb8] transition-all duration-300 hover:scale-105"
                                        >
                                            Forgot password ?
                                        </button>
                                    </div>

                                    <div className="flex justify-center animate-fadeInUp" style={{ animationDelay: '1s' }}>
                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className={`w-full md:w-64 h-12 md:h-16 bg-[#1266de] rounded-[40px] shadow-lg text-white text-2xl md:text-3xl font-semibold transition-all duration-300
                                                ${isLoading 
                                                    ? 'opacity-75 cursor-not-allowed' 
                                                    : 'hover:bg-[#0f54c4] hover:shadow-xl transform hover:-translate-y-1 hover:scale-105'
                                                }`}
                                        >
                                            {isLoading ? (
                                                <div className="flex items-center justify-center">
                                                    <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                                    Signing in...
                                                </div>
                                            ) : (
                                                'Log In'
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Doctor Image */}
                    <div className="hidden md:block w-1/2 relative overflow-hidden rounded-r-[40px] group">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-800/20 z-10"></div>
                        <img
                            src={doctor}
                            alt="Doctor"
                            className="w-full h-full object-cover object-center transform transition-all duration-700 group-hover:scale-105 animate-float"
                            style={{ objectPosition: 'center 20%' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-20"></div>
                    </div>
                </div>
            </div>

            {showForgotPassword && (
                <ForgotPasswordPopup onClose={() => setShowForgotPassword(false)} />
            )}
        </div>
    );
};

export default LoginPage;
