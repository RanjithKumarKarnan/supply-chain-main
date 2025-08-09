import React, { useState, useEffect } from "react";
import { Heart, ShoppingCart, Menu, X, Search, User } from "lucide-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }

            setIsScrolled(currentScrollY > 50);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <>
            {/* Main Navbar */}
            <div
                className={`w-full fixed top-0 left-0 z-50 transform transition-all duration-500 ease-out ${showNavbar ? "translate-y-0" : "-translate-y-full"
                    } ${isScrolled
                        ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100"
                        : "bg-white"
                    }`}
            >
                {/* Animated top border */}
                <div className="h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>

                <div className="flex items-center justify-between px-6 lg:px-20 py-4 max-w-7xl mx-auto">
                    {/* Logo with hover effect */}
                    <div className="flex-shrink-0 relative group">
                        <a href="#" className="block">
                            <div className="relative">
                                <img
                                    src="/logo.jpeg" 
                                    alt="Company Logo"
                                    className="h-8 sm:h-10 w-auto transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-lg"></div>
                            </div>
                        </a>
                    </div>


                    {/* Center Navigation - Desktop */}
                    <nav className="hidden lg:flex items-center space-x-12">
                        {["About", "Products", "Contact"].map((item, index) => (
                            <a
                                key={item}
                                href="#"
                                className="relative group text-gray-800 font-medium text-lg transition-all duration-300 hover:text-red-600"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <span className="relative z-10">{item}</span>
                                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-400 group-hover:w-full transition-all duration-300"></div>
                                <div className="absolute -inset-2 bg-red-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                            </a>
                        ))}
                    </nav>

                    {/* Right Side Actions */}
                    {/* <div className="flex items-center">
                        <button className="hidden md:flex p-2 rounded-full hover:bg-gray-100 transition-colors duration-300 group">
                            <Search className="w-5 h-5 text-gray-600 group-hover:text-red-600 transition-colors duration-300" />
                        </button>
                        <button className="hidden md:flex p-2 rounded-full hover:bg-gray-100 transition-colors duration-300 group">
                            <User className="w-5 h-5 text-gray-600 group-hover:text-red-600 transition-colors duration-300" />
                        </button>
                        <button className="relative p-2 rounded-full hover:bg-red-50 transition-all duration-300 group">
                            <Heart className="w-5 h-5 text-gray-600 group-hover:text-red-600 group-hover:scale-110 transition-all duration-300" />
                            <div className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                        <button className="relative p-2 rounded-full hover:bg-red-50 transition-all duration-300 group">
                            <ShoppingCart className="w-5 h-5 text-gray-600 group-hover:text-red-600 group-hover:scale-110 transition-all duration-300" />
                            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                                0
                            </span>
                        </button>
                        <button
                            className="lg:hidden relative p-2 rounded-full hover:bg-red-50 transition-colors duration-300"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <Menu className="w-6 h-6 text-gray-800" />
                        </button>
                    </div> */}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-50 lg:hidden transition-all duration-500 ${isMenuOpen
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    onClick={() => setIsMenuOpen(false)}
                ></div>

                {/* Menu Panel */}
                <div
                    className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white transform transition-transform duration-500 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-100">
                        <h3 className="text-xl font-bold text-gray-800">Menu</h3>
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
                        >
                            <X className="w-6 h-6 text-gray-600" />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <nav className="p-6 space-y-2">
                        {["About", "Products", "Contact"].map((item, index) => (
                            <a
                                key={item}
                                href="#"
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center p-4 rounded-xl hover:bg-red-50 hover:text-red-600 transition-all duration-300 font-medium text-gray-800 group"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <span>{item}</span>
                                <div className="ml-auto w-2 h-2 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Actions */}
                    <div className="p-6 border-t border-gray-100 space-y-4">
                        <button className="flex items-center p-3 w-full rounded-xl hover:bg-gray-50 transition-colors duration-300">
                            <Search className="w-5 h-5 text-gray-600 mr-3" />
                            <span className="text-gray-800">Search</span>
                        </button>
                        <button className="flex items-center p-3 w-full rounded-xl hover:bg-gray-50 transition-colors duration-300">
                            <User className="w-5 h-5 text-gray-600 mr-3" />
                            <span className="text-gray-800">Account</span>
                        </button>
                        {/* <button className="w-full bg-red-600 text-white py-4 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 hover:shadow-lg">
                            Get Started
                        </button> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;