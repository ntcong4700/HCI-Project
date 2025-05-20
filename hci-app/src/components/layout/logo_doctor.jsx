import React from "react";
import doctorLogo from "./doctor_logo.png";

const LogoDoctor = () => {
    return (
        <>
            <div className="box">
                <div className="logo">
                    <div className="frame">
                        <div className="overlap-group">
                            <img className="img" alt="wtf" src={doctorLogo} />
                            <div className="text-wrapper">Doctor</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LogoDoctor;
