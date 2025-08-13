import React from "react";
import "./TrustedCompany.css";
import logoAlfaDAO from "/trusted-logo/AlfaDAO Logo.jpg";
import logoAltlier from "/trusted-logo/Altlier-logo.png";
import logoBera from "/trusted-logo/Bera Baddies Logo.png";
import logoDoge from "/trusted-logo/Doge Logo.svg";
import logoMew from "/trusted-logo/Mew Logo.jpg";
import logoNarra from "/trusted-logo/narra.png";
import logoToken from "/trusted-logo/token.svg";
import logoWyk from "/trusted-logo/wyk logo.webp";

const TrustedCompany = () => {
    const logos = [
        logoAlfaDAO,
        logoAltlier,
        logoBera,
        logoDoge,
        logoMew,
        logoNarra,
        logoToken,
        logoWyk,
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
