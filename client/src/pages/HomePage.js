import ArtCarousel from "../components/ArtCarousel";
import CultureSection from "../components/CultureSection";
import Footer from "../components/Footer";
import Gallery from "../components/Galary";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function HomePage() {
    return(
<>
<Navbar />
<Hero/>
<ArtCarousel/>
<Gallery/>
<CultureSection/>
<Footer/>
</>
    );
};
