import React from "react";
import "./TrustedCompany.css";

const TrustedCompany = () => {
    const logos = [
        "/trusted-logo/AlfaDAO Logo.jpg",
        "/trusted-logo/Altlier-logo.png",
        "/trusted-logo/Bera Baddies Logo.png",
        // "/trusted-logo/Berachain Foundation.svg",
        "/trusted-logo/Doge Logo.svg",
        "/trusted-logo/Mew Logo.jpg",
        "/trusted-logo/narra.png",
        // "/trusted-logo/RaveDAO Logo.avif",
        "/trusted-logo/token.svg",
        "/trusted-logo/wyk logo.webp",
    ];

    return (
        <div className="w-full bg-white py-12 px-0 sm:px-0 overflow-hidden">
            <h5 className="text-[#bf272f] tracking-wide font-bold text-lg sm:text-xl mb-8 text-center uppercase">
                Trusted by 
            </h5>
            <div className="relative w-full">
                <div className="marquee">
                    <div className="marquee-content">
                        {logos.concat(logos).map((logo, index) => (
                            <img
                                key={index}
                                src={logo}
                                alt={`Trusted Logo ${index + 1}`}
                                className="h-16 sm:h-18 mx-6 object-contain rounded-4xl transition duration-300 ease-in-out"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustedCompany;
