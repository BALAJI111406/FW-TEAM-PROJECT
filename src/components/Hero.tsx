import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-fashion.jpg";

const Hero = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/20" />
      </div>
      <div className="container relative h-full flex items-center">
        <div className="max-w-xl space-y-6">
          <p className="text-sm font-medium tracking-wider text-muted-foreground">NEW COLLECTION</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            Discover Elegance Redefined
          </h2>
          <p className="text-lg text-muted-foreground">
            Curated pieces that celebrate timeless style and modern sophistication
          </p>
          <Button variant="hero" size="lg" className="mt-4">
            Shop Women
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
