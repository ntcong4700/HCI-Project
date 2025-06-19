import React, { useState } from "react";

const ForgotPasswordPopup = ({ onClose }) => {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            alert("Password reset link has been sent to your email");
            setIsLoading(false);
            onClose();
        }, 1000);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Backdrop with blur effect */}
            <div 
                className="absolute inset-0 bg-black/30 backdrop-blur-sm"
                onClick={onClose}
            ></div>
            
            {/* Popup content */}
            <div className="relative bg-white/90 backdrop-blur-md rounded-[40px] p-8 w-full max-w-md mx-4 shadow-2xl transform transition-all duration-300 animate-fadeIn">
                <div className="text-center mb-6">
                    <h2 className="text-3xl md:text-4xl font-black text-black mb-2">Forgot Password</h2>
                    <p className="text-lg md:text-2xl font-bold text-black opacity-40">
                        Enter your email to reset your password
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="text-xl md:text-2xl font-black text-black block font-mulish mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full h-10 md:h-12 border border-[#4185e5] rounded-[10px] px-3 py-2 text-base md:text-lg font-inter focus:outline-none focus:border-[#1266de] focus:shadow-md transition-all duration-300 hover:border-[#1266de] hover:scale-[1.02]"
                            placeholder="example@gmail.com"
                            required
                        />
                    </div>

                    <div className="flex justify-center">
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
                                    Sending...
                                </div>
                            ) : (
                                'Send Link'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPasswordPopup;
