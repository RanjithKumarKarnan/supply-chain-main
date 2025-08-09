import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
    
const cards = [
    {
        title: "Drinkware",
        image: "/botles.jpg",
        span: "Hydration & more",
        bgColor: "bg-[#bf272f]",
        hoverColor: "hover:bg-[#9e1e26]",
    },
    {
        title: "Bags",
        image: "/bags.jpg",
        span: "For office, gym, travel",
        bgColor: "bg-[#00bfff]",
        hoverColor: "hover:bg-[#009ccc]",
    },
    {
        title: "Office",
        image: "/office.jpg",
        span: "Desks, pens & notes",
        bgColor: "bg-purple-600",
        hoverColor: "hover:bg-purple-700",
    },
    {
        title: "Tech",
        image: "/tech.jpg",
        span: "Headphones & gadgets",
        bgColor: "bg-orange-500",
        hoverColor: "hover:bg-orange-600",
    },
    {
        title: "Apparel",
        image: "/apparel.jpg",
        span: "Tees, hats & more",
        bgColor: "bg-green-600",
        hoverColor: "hover:bg-green-700",
    },
];

export default function TopProducts() {
    useEffect(() => {
        AOS.init({ once: true, duration: 800 });
    }, []);

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center px-6 sm:px-10 lg:px-20 py-16 bg-white overflow-hidden">
            <div className="w-full max-w-6xl mx-auto">
                {/* Section Title */}
                <div className="mb-12 text-center">
                    <h3
                        className="text-[#000] text-3xl sm:text-4xl font-extrabold uppercase tracking-wide"
                        style={{ fontFamily: "Fortuner" }}
                    >
                        Top Products
                    </h3>
                    <div className="w-20 mt-4 border-t-4 border-[#bf272f] mx-auto"></div>
                </div>

                {/* Grid Layout */}
                <div className="space-y-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {cards.slice(0, 2).map((card, idx) => (
                            <FadeCard key={card.title} card={card} delay={idx * 100} />
                        ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {cards.slice(2).map((card, idx) => (
                            <FadeCard key={card.title} card={card} delay={(idx + 2) * 100} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function FadeCard({ card, delay }) {
    return (
        <div
            className="relative rounded-2xl overflow-hidden shadow-xl group h-[300px] transition-all duration-500"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay={delay}
            data-aos-offset="0"
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-opacity-30 group-hover:bg-opacity-50 z-10 transition duration-500" />

            {/* Content */}
            <div
                className={`absolute bottom-0 left-0 w-full px-6 py-5 z-20 flex flex-col sm:flex-row justify-between items-start sm:items-end text-white transition-colors duration-500 ${card.bgColor} ${card.hoverColor}`}
            >
                <div>
                    <h4 className="text-xl font-bold mb-1">{card.title}</h4>
                    <p className="text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        {card.span}
                    </p>
                </div>

                <button className="mt-3 sm:mt-0 bg-white text-black font-semibold px-5 py-2 rounded-full text-sm shadow-md opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    Shop Now →
                </button>
            </div>
        </div>
    );
}
