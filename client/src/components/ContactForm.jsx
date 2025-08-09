import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "contact_form", // Replace with your EmailJS Service ID
        "template_j8j4wa6", // Replace with your EmailJS Template ID
        formData,
        "BgYHc4dOh_xqNGHy7" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            message: "",
          });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center px-6 sm:px-10 lg:px-20 py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/contact.png')", // Replace with your image
      }}
    >
      <Toaster position="top-center" reverseOrder={false} />
      <div className="absolute inset-0 bg-opacity-40 z-0" />

      <div
        className="relative z-10 w-full max-w-4xl backdrop-blur-lg bg-white/60 border border-white/30 shadow-2xl rounded-xl p-6 sm:p-12"
        data-aos="fade-up"
      >
        <div className="mb-12 text-center">
          <h2
            className="text-4xl sm:text-5xl font-extrabold uppercase text-[#000]"
            style={{ fontFamily: "Fortuner" }}
          >
            Get In Touch
          </h2>
          <div className="w-20 mx-auto mt-4 border-t-4 border-[#bf272f]"></div>
          <p className="text-gray-700 mt-4 text-sm sm:text-base">
            We'd love to hear from you! Fill out the form and we'll get back to you.
          </p>
        </div>

        <form onSubmit={sendEmail} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-800">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white text-gray-900 placeholder-gray-400 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#bf272f]"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-800">Email</label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white text-gray-900 placeholder-gray-400 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#bf272f]"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-800">Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="123-456-7890"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-white text-gray-900 placeholder-gray-400 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#bf272f]"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-800">Company</label>
            <input
              type="text"
              name="company"
              placeholder="Your Company"
              value={formData.company}
              onChange={handleChange}
              className="w-full bg-white text-gray-900 placeholder-gray-400 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#bf272f]"
            />
          </div>

          <div className="col-span-1 sm:col-span-2">
            <label className="block mb-1 text-sm font-semibold text-gray-800">Message</label>
            <textarea
              rows="5"
              name="message"
              placeholder="Type your message here..."
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-white text-gray-900 placeholder-gray-400 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#bf272f] resize-none"
              required
            ></textarea>
          </div>

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
