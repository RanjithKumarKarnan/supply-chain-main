import React, { useState, useEffect, useRef } from 'react';

const OurPromise = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // Intersection Observer for scroll animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const promises = [
        {
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H6C4.9 1 4 1.9 4 3V21C4 22.1 4.9 23 6 23H18C19.1 23 20 22.1 20 21V9H21ZM18 21H6V3H14V9H18V21Z" />
                </svg>
            ),
            title: 'Quality First',
            subtitle: 'Premium Standards',
            description: "Every item we produce meets the same high standards we’d want for our own brand. From fabric to finish, we work only with trusted factories and suppliers in China & India, ensuring products you’re proud to hand out — and your audience is proud to wear.",
            stats: '95% Rejection Rate',
            gradient: 'from-[#bf272f]/10 to-[#bf272f]/5'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4V2A10,10 0 0,1 20,10H18A8,8 0 0,0 12,4M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6V18Z" />
                </svg>
            ),
            title: 'End-to-End Ease',
            subtitle: 'Effortless Process',
            description: "We manage everything — sourcing, design, QC, packaging, and delivery — so you don’t have to juggle multiple vendors. Whether it’s 100 or 10,000 pieces, we keep your project on time and on budget.",
            stats: 'Seconds to Checkout',
            gradient: 'from-[#bf272f]/10 to-[#bf272f]/5'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                </svg>
            ),
            title: 'Your Team Behind the Scenes',
            subtitle: 'Always Here',
            description: "We work like an extension of your team, not just a vendor. If you have an idea, we’ll make it happen. If you’re not sure what’s possible, we’ll guide you. From concept to doorstep, we’ve got your back.",
            stats: '24/7 Support',
            gradient: 'from-[#bf272f]/10 to-[#bf272f]/5'
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="relative w-full py-20 px-4 sm:px-8 lg:px-16 overflow-hidden bg-gradient-to-br from-gray-50 to-white"
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-10 left-10 w-20 h-20 border-2 border-[#bf272f]/10 rounded-full animate-pulse"></div>
                <div className="absolute top-32 right-20 w-16 h-16 bg-[#bf272f]/5 rotate-45 animate-bounce" style={{ animationDuration: '3s' }}></div>
                <div className="absolute bottom-20 left-32 w-12 h-12 border-2 border-[#bf272f]/10 rotate-12 animate-spin" style={{ animationDuration: '8s' }}></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-[#bf272f]/5 to-transparent rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-radial from-[#bf272f]/3 to-transparent rounded-full blur-3xl opacity-20"></div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="relative inline-block">
                        <h2 className="text-4xl md:text-5xl font-black text-[#000] mb-4 relative" style={{ fontFamily: 'Fortuner', letterSpacing: '2px' }}>
                            Our Promise
                            <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#bf272f] rounded-full animate-ping"></div>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#bf272f] to-[#bf272f]/50 mx-auto rounded-full relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#bf272f] to-[#bf272f]/50 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                    <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
                        Three pillars that define our commitment to excellence
                    </p>
                </div>

                {/* Promise Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {promises.map((promise, index) => (
                        <div
                            key={index}
                            className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer border border-gray-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                                }`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${promise.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#bf272f]/20 via-transparent to-[#bf272f]/20 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500 p-[1px]">
                                <div className="w-full h-full bg-white rounded-3xl"></div>
                            </div>

                            <div className="relative z-10">
                                <div className="relative mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-[#bf272f] to-[#bf272f]/80 rounded-2xl flex items-center justify-center text-white transform group-hover:rotate-6 transition-all duration-500 shadow-lg">
                                        {promise.icon}
                                    </div>
                                    <div className="absolute -top-2 -right-2 bg-[#bf272f] text-white text-xs px-3 py-1 rounded-full font-semibold opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-500">
                                        {promise.stats}
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <h3 className="text-2xl font-bold text-[#000] mb-1 group-hover:text-[#bf272f] transition-colors duration-300">
                                        {promise.title}
                                    </h3>
                                    <p className="text-[#bf272f] text-sm font-semibold uppercase tracking-wider">
                                        {promise.subtitle}
                                    </p>
                                </div>

                                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                    {promise.description}
                                </p>

                                <div className="mt-6 h-1 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-[#bf272f] to-[#bf272f]/60 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                                </div>
                            </div>

                            <div className="absolute top-6 right-6 w-2 h-2 bg-[#bf272f] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className={`text-center mt-16 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="inline-flex items-center space-x-2 text-[#bf272f] font-semibold">
                        <span>Experience the difference</span>
                        <svg className="w-4 h-4 animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurPromise;
