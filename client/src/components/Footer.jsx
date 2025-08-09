import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#1a1d21] text-white py-16 px-6 sm:px-10 lg:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
                {/* Logo + About */}
                <div className="col-span-2 space-y-5">
                    <img src="/comp-logo.png" alt="Company Logo" className="h-12 w-auto" />
                    <h4 className="text-lg font-semibold">We Made This.</h4>
                    <p className="text-sm text-gray-300">
                        Custom promo products people actually want to keep. We help brands
                        stand out with impactful, useful, and stylish promotional items.
                    </p>
                    <a
                        href="#"
                        className="text-sm text-[#bf272f] hover:underline block"
                    >
                        Do Not Sell My Personal Information
                    </a>
                </div>

                {/* Latest News */}
                <div>
                    <h5 className="text-sm font-bold uppercase tracking-wider mb-4 text-gray-400">
                        Latest News
                    </h5>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>
                            <a href="#" className="hover:text-white">
                                10 Gift Ideas for Corporate Events
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white">
                                Trending Custom Products 2025
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Services / Links */}
                <div>
                    <h5 className="text-sm font-bold uppercase tracking-wider mb-4 text-gray-400">
                        Services
                    </h5>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>
                            <a href="#" className="hover:text-white">
                                Bulk Ordering
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white">
                                Swag Distribution
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white">
                                Company Gifting
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white">
                                Custom Branding
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Info / Support */}
                <div>
                    <h5 className="text-sm font-bold uppercase tracking-wider mb-4 text-gray-400">
                        Information
                    </h5>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>
                            <a href="#" className="hover:text-white">Contact Us</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white">Terms of Service</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
                © 2025 Suplly Chain. All rights reserved. Designed by ❤️ Ranco Technology.
            </div>
        </footer>
    );
};

export default Footer;
