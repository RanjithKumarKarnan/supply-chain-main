import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import apparelImg from "/products/apparel.jpg";
import bagsImg from "/products/bags.jpg";
import officeImg from "/products/office.jpg";
import techImg from "/products/tech.jpg";
import drinkwareImg from "/products/botles.jpg";

const cards = [
    {
        title: "Apparel",
        image: apparelImg,
        span: "Tees, hats & more",
        bgColor: "bg-green-600",
    },
    {
        title: "Bags",
        image: bagsImg,
        span: "For office, gym, travel",
        bgColor: "bg-[#00bfff]",
    },
    {
        title: "Office",
        image: officeImg,
        span: "Desks, pens & notes",
        bgColor: "bg-purple-600",
    },
    {
        title: "Tech",
        image: techImg,
        span: "Headphones & gadgets",
        bgColor: "bg-orange-500",
    },
    {
        title: "Drinkware",
        image: drinkwareImg,
        span: "Hydration & more",
        bgColor: "bg-[#bf272f]",
    },
];

export default function TopProducts() {
    useEffect(() => {
        AOS.init({ once: true, duration: 800 });
    }, []);

    return (
        <section
            id="products"
            className="relative w-full min-h-screen flex items-center justify-center px-6 sm:px-10 lg:px-20 py-16 bg-white overflow-hidden"
        >
            <div className="w-full max-w-5xl mx-auto">
                {/* Section Title */}
                <div className="mb-12 text-center">
                    <h3
                        className="text-[#000] text-4xl md:text-5xl font-extrabold uppercase tracking-wide"
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
            className="relative rounded-2xl overflow-hidden shadow-xl h-[300px]"
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
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Permanent Title Overlay with Same BG */}
            <div
                className={`absolute bottom-0 left-0 w-full px-6 py-8 text-white ${card.bgColor}`}
            >
                <h2 className="text-2xl font-bold">{card.title}</h2>
                {/* <p className="text-sm">{card.span}</p> */}
            </div>
        </div>
    );
}
