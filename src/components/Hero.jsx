import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Sparkles, Zap, Star, ArrowRight, Play, Rocket, Trophy } from "lucide-react";

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [typedText, setTypedText] = useState("");
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [scrollY, setScrollY] = useState(0);
    const heroRef = useRef(null);

    const words = ["WE HANDLE THE MERCH.", "YOU MAKE THE IMPACT."];
    const colors = ["text-white", "text-[#bf272f]"];

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (heroRef.current) {
                const rect = heroRef.current.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = (e.clientY - rect.top) / rect.height;
                setMousePosition({ x: (x - 0.5) * 2, y: (y - 0.5) * 2 });
            }
        };
        const handleScroll = () => setScrollY(window.scrollY);

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("scroll", handleScroll);
        setIsVisible(true);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let delay = 100;

        const typeWriter = () => {
            const currentWord = words[wordIndex];

            if (isDeleting) {
                setTypedText(currentWord.substring(0, charIndex - 1));
                charIndex--;
                delay = 50;
            } else {
                setTypedText(currentWord.substring(0, charIndex + 1));
                charIndex++;
                delay = 100;
            }

            if (!isDeleting && charIndex === currentWord.length) {
                delay = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setCurrentWordIndex(wordIndex);
                delay = 500;
            }

            setTimeout(typeWriter, delay);
        };

        const timer = setTimeout(typeWriter, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative overflow-hidden">
            <div
                ref={heroRef}
                className="relative min-h-screen flex items-center justify-center"
                style={{
                    paddingTop: '80px',
                    background: `
                        radial-gradient(ellipse 80% 50% at 20% 40%, rgba(191, 39, 47, 0.15) 0%, transparent 50%),
                        radial-gradient(ellipse 60% 50% at 80% 60%, rgba(191, 39, 47, 0.1) 0%, transparent 50%),
                        linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%)
                    `,
                    transform: `translateY(${scrollY * 0.5}px)`
                }}
            >
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(191, 39, 47, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(191, 39, 47, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '50px 50px',
                        transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
                    }}
                />

                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full mix-blend-screen filter blur-xl opacity-70 animate-pulse"
                            style={{
                                left: `${20 + (i * 15)}%`,
                                top: `${20 + (i * 10)}%`,
                                width: `${60 + Math.random() * 40}px`,
                                height: `${60 + Math.random() * 40}px`,
                                background: `radial-gradient(circle, ${i % 2 === 0 ? '#bf272f' : '#ffffff'} 0%, transparent 70%)`,
                                animationDelay: `${i * 0.5}s`,
                                animationDuration: `${3 + Math.random() * 2}s`,
                                transform: `translate(${mousePosition.x * (10 + i * 2)}px, ${mousePosition.y * (10 + i * 2)}px)`
                            }}
                        />
                    ))}
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                    <div className="mb-8">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4">
                            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                                <div className="relative inline-block">
                                    <span
                                        className={`block ${colors[currentWordIndex]} tracking-tight relative z-10`}
                                        style={{ fontFamily: 'Fortuner', letterSpacing: '2px' }}
                                    >
                                        {typedText}
                                        <span className="inline-block w-0.5 h-12 sm:h-16 bg-[#bf272f] ml-1 animate-pulse"></span>
                                    </span>
                                    <span
                                        className="absolute inset-0 bg-gradient-to-r from-[#bf272f]/20 to-transparent blur-2xl"
                                        style={{ transform: 'scale(1.1)' }}
                                    ></span>
                                </div>
                            </div>
                        </h1>

                        <p className={`text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                        End-to-end merch production for
                            <span className="relative mx-2">
                                <span className="text-[#bf272f] font-semibold">startups, expos & corporate teams</span>
                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#bf272f] to-transparent"></div>
                            </span>
                             — from creative to doorstep.
                        </p>
                    </div>

                    <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                        <button className="group relative px-8 py-4 bg-gradient-to-r from-[#bf272f] via-red-600 to-[#bf272f] text-white font-bold rounded-full overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#bf272f]/30">
                            <div className="absolute inset-0 bg-gradient-to-r from-red-700 via-[#bf272f] to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <span className="relative z-10 flex items-center space-x-2">
                                <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                                <span>See Products</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                        </button>

                        
                    </div>

                    <div className={`transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                        <div className="flex flex-col items-center space-y-2">
                            <span className="text-xs text-gray-500 font-medium">SCROLL TO EXPLORE</span>
                            <div className="relative">
                                <ChevronDown className="w-6 h-6 text-white/40 animate-bounce cursor-pointer hover:text-[#bf272f] transition-colors duration-300" />
                                <ChevronDown className="w-6 h-6 text-white/20 animate-bounce absolute inset-0" style={{ animationDelay: '0.2s' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
