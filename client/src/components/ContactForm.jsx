import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactForm = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center px-6 sm:px-10 lg:px-20 py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/contact.png')", // Update with your image path
      }}
    >
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-opacity-40 z-0" />

      {/* Form Container */}
      <div
        className="relative z-10 w-full max-w-4xl backdrop-blur-lg bg-white/60 border border-white/30 shadow-2xl rounded-xl p-6 sm:p-12"
        data-aos="fade-up"
      >
        {/* Title */}
        <div className="mb-12 text-center">
          <h2
            className="text-4xl sm:text-5xl font-extrabold uppercase text-[#000]"
            style={{ fontFamily: 'Fortuner' }}
          >
            Get In Touch
          </h2>
          <div className="w-20 mx-auto mt-4 border-t-4 border-[#bf272f]"></div>
          <p className="text-gray-700 mt-4 text-sm sm:text-base">
            We'd love to hear from you! Fill out the form and we'll get back to you.
          </p>
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-800">Name</label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full bg-white text-gray-900 placeholder-gray-400 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#bf272f]"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-800">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full bg-white text-gray-900 placeholder-gray-400 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#bf272f]"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-800">Phone</label>
            <input
              type="tel"
              placeholder="123-456-7890"
              className="w-full bg-white text-gray-900 placeholder-gray-400 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#bf272f]"
            />
          </div>

          {/* Company */}
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-800">Company</label>
            <input
              type="text"
              placeholder="Your Company"
              className="w-full bg-white text-gray-900 placeholder-gray-400 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#bf272f]"
            />
          </div>

          {/* Message */}
          <div className="col-span-1 sm:col-span-2">
            <label className="block mb-1 text-sm font-semibold text-gray-800">Message</label>
            <textarea
              rows="5"
              placeholder="Type your message here..."
              className="w-full bg-white text-gray-900 placeholder-gray-400 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#bf272f] resize-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="col-span-1 sm:col-span-2 text-center mt-2">
            <button
              type="submit"
              className="bg-[#bf272f] hover:bg-[#9e1e26] text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
