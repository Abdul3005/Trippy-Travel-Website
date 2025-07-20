import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import SignUpForm from "../components/SignUpForm";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid-form" title="Sign Up" btnClass="hide" />
      <AboutUs />
      <SignUpForm />
      <Footer />
    </>
  );
}

export default About;
