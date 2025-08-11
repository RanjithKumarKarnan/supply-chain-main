import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
    useEffect(() => {
        AOS.init({ once: true, duration: 800 });
    }, []);

    return (
        <section
        id="about"
            className="relative w-full bg-cover bg-center bg-no-repeat py-20 px-6 sm:px-10 lg:px-20 text-white"
            style={{
                backgroundImage: "url('/abouts.png')",
            }}
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-opacity-70"></div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                {/* Left: Text */}
                <div className="w-full md:w-1/2">
                    {/* Title */}
                    <div className="mb-8">
                        <h3
                            className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide"
                            style={{ fontFamily: 'Fortuner', color: '#000000' }}
                        >
                            About Us
                        </h3>
                        <div className="w-20 mt-4 border-t-4 border-[#bf272f]"></div>
                    </div>

                    <p className="text-black text-base sm:text-lg leading-relaxed mb-6">
                        At <strong className="text-[#bf272f]">SupplyCHAIN, </strong>we believe great merchandise is more than just products — it’s a statement of who you are. We’re the hands-on partner that turns your brand vision into premium, custom-crafted merch that makes an impact.
                        <br /><br />
                        From startups making their conference debut to global brands running high-profile campaigns, we help teams express their identity through high-quality, made-to-order items — delivered on time, every time.
                        <br /><br />
                        Our strength lies in our network of trusted suppliers across China, India, and Vietnam, paired with our deep understanding of event timelines, quality control, and brand storytelling. Whether it’s 50 exclusive tees for your core team or 10,000 giveaways for a flagship event, we handle the entire process — design, manufacturing, packaging, and delivery.
                        <br /><br />
                        With SupplyCHAIN, you get more than a supplier — you get a partner committed to making your brand unforgettable.
                    </p>

                </div>

                {/* Right: Image */}
                <div className="w-full md:w-1/2">
                    <div className="relative w-full h-80 sm:h-140 rounded-lg overflow-hidden shadow-xl group">
                        <img
                            src="/about-us.jpg"
                            alt="About Us"
                            className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition duration-300" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
