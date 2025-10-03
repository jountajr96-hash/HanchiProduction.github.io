import { Video, Camera, Film } from "lucide-react";

const About = () => {
  const services = [
    {
      icon: Video,
      title: "Video Production",
      description: "Professional video production for commercials, corporate videos, and events"
    },
    {
      icon: Camera,
      title: "Photography",
      description: "High-quality photography services for products, events, and portraits"
    },
    {
      icon: Film,
      title: "Post-Production",
      description: "Expert editing, color grading, and visual effects for stunning results"
    }
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We specialize in creating captivating visual content that tells your story and engages your audience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-8 rounded-lg bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
