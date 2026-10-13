import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
