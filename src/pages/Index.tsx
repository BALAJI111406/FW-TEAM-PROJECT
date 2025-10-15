import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen scroll-smooth">
      <Header />
      <main>
        <Hero />
        <CategoryGrid />
        <section id="women" className="scroll-mt-20">
          <FeaturedProducts />
        </section>
        <section id="men" className="scroll-mt-20">
          <FeaturedProducts />
        </section>
        <section id="new-arrivals" className="scroll-mt-20">
          <FeaturedProducts />
        </section>
        <section id="best-sellers" className="scroll-mt-20">
          <FeaturedProducts />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
