import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { useEffect } from "react";

const Hero = () => {
  const scrollToReservation = () => {
    document.getElementById("reservation")?.scrollIntoView({ behavior: "smooth" });
  };

  // Inject glow animation CSS
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes pulse-glow {
        0%, 100% {
          filter: drop-shadow(0 0 5px rgba(168,85,247,0.6)) drop-shadow(0 0 10px rgba(168,85,247,0.4));
        }
        50% {
          filter: drop-shadow(0 0 15px rgba(168,85,247,0.9)) drop-shadow(0 0 25px rgba(168,85,247,0.7));
        }
      }
      .animate-pulse-glow {
        animation: pulse-glow 3s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="flex items-center justify-center gap-3 text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
    <img
      src="hprodd.png"
      alt="Hanchi Production"
      className="h-auto w-auto inline-block object-contain invert brightness-125 contrast-125"
    />
    Hanchi Production
    <img
  src="akk.png"
  alt=" Aziz khlaifia"
  className="h-24.5 w-auto inline-block object-contain invert brightness-125 contrast-125"
/>

  </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
          Professional Video & Photo Production Services
        </p>
        <p className="text-lg text-muted-foreground/80 mb-12 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
          Bringing your vision to life with cinematic excellence and creative storytelling
        </p>
        <Button
          size="lg"
          onClick={scrollToReservation}
          className="group bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-7 delay-500"
        >
          Book Our Services
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700" />
    </section>
  );
};

export default Hero;
