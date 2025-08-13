import React from "react";
import "./TrustedCompany.css";

const TrustedCompany = () => {
    const logos = [
        "/trusted-logo/AlfaDAO Logo.jpg",
        "/trusted-logo/Altlier-logo.png",
        "/trusted-logo/Bera Baddies Logo.png",
        "/trusted-logo/Doge Logo.svg",
        "/trusted-logo/Mew Logo.jpg",
        "/trusted-logo/narra.png",
        "/trusted-logo/token.svg",
        "/trusted-logo/wyk logo.webp",
    ];

    return (
        <div className="w-full bg-white py-16 overflow-hidden">
            <h5 className="text-[#bf272f] tracking-wide font-bold text-lg sm:text-xl mb-10 text-center uppercase">
                Trusted by
            </h5>

            <div className="marquee" role="region" aria-label="Trusted company logos">
                <div className="marquee-track">
                    {/* First sequence */}
                    {logos.map((logo, index) => (
                        <div className="logo-item" key={`logo-a-${index}`}>
                            <img
                                src={logo}
                                alt={`Trusted Logo ${index + 1}`}
                                className="logo-img"
                            />
                        </div>
                    ))}
                    {/* Duplicate sequence for seamless loop */}
                    {logos.map((logo, index) => (
                        <div className="logo-item" key={`logo-b-${index}`} aria-hidden="true">
                            <img
                                src={logo}
                                alt=""
                                className="logo-img"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustedCompany;
