import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <>
      <Navbar />

      <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1615920292087-6d9f818e9e13?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Service"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
