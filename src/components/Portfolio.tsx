import { Play } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const Portfolio = () => {
  const portfolioItems = [
    { image: portfolio1, title: "Commercial Production", type: "Video" },
    { image: portfolio2, title: "Product Photography", type: "Photo" },
    { image: portfolio3, title: "Film Production", type: "Video" },
    { image: portfolio4, title: "Corporate Videos", type: "Video" }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Our Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of our recent productions and creative projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {portfolioItems.map((item, index) => (
            <div 
              key={index}
              className="relative group rounded-lg overflow-hidden aspect-video cursor-pointer"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col">
                {item.type === "Video" && (
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <Play className="h-8 w-8 text-primary-foreground ml-1" />
                  </div>
                )}
                <h3 className="text-xl font-semibold text-foreground transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h3>
                <span className="text-sm text-primary transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {item.type}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Video Player Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Featured Project</h3>
          <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl shadow-primary/20">
            <div className="aspect-video bg-card flex items-center justify-center">
              <video 
                controls 
                className="w-full h-full"
                poster={portfolio1}
              >
                <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
