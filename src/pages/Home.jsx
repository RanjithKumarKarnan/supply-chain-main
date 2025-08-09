
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import OurPromise from "../components/OurPromise";
import AboutUs from "../components/AboutUs";
import TopProducts from "../components/TopProducts";
import ContactForm from "../components/ContactForm";
import TrustedCompany from "../components/TrustedCompany";
// import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedCompany />
      <OurPromise />
      <AboutUs />
      <TopProducts />
      <ContactForm />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
