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

    // Repeat enough times to cover at least 6 screens width
    const repeatedLogos = Array(10).fill(logos).flat();

    return (
        <div className="trusted-wrapper">
            <h5 className="trusted-title">Trusted by</h5>

            <div className="marquee" role="region" aria-label="Trusted company logos">
                <div className="marquee-track">
                    {repeatedLogos.map((logo, index) => (
                        <div className="logo-item" key={index}>
                            <img
                                src={logo}
                                alt={`Trusted Logo ${index + 1}`}
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
