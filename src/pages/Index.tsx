import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import ReservationForm from "@/components/ReservationForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Portfolio />
      <ReservationForm />
      <Footer />
    </div>
  );
};

export default Index;
