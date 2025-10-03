import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Hanchi Production
            </h3>
            <p className="text-muted-foreground">
              Professional video and photo production services for all your creative needs.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@hanchiproduction.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+216 94995608</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Rue De Lebanon Tunis Tunisia</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-muted-foreground flex justify-center items-center gap-2">
          <p className="flex items-center gap-2 transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-125">
            &copy; {new Date().getFullYear()}
            <div className="flex items-center justify-center gap-4">
  <div className="w-24 h-24 flex items-center justify-center">
    <img
      src="hprodd.png"
      alt="Hanchi Production"
      className="w-full h-full object-contain invert brightness-125 contrast-125"
    />
  </div>
  <div className="w-24 h-24 flex items-center justify-center">
    <img
      src="akk.png"
      alt="Aziz khlaifia"
      className="w-full h-full object-contain invert brightness-125 contrast-125"
    />
  </div>
</div>



            Hanchi Production. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
