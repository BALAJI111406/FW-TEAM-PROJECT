import ProductCard from "@/components/ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";
import product9 from "@/assets/product-9.jpg";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: "dress-1",
    image: product1,
    title: "Elegant Maxi Dress",
    price: 299,
    originalPrice: 399,
    badge: "Sale",
  },
  {
    id: "dress-7",
    image: product7,
    title: "Emerald Evening Gown",
    price: 449,
    badge: "New",
  },
  {
    id: "jacket-4",
    image: product4,
    title: "Premium Leather Jacket",
    price: 549,
  },
  {
    id: "dress-8",
    image: product8,
    title: "Floral Summer Dress",
    price: 199,
  },
  {
    id: "watch-5",
    image: product5,
    title: "Luxury Wristwatch",
    price: 799,
  },
  {
    id: "dress-9",
    image: product9,
    title: "Little Black Dress",
    price: 279,
  },
  {
    id: "handbag-2",
    image: product2,
    title: "Designer Handbag",
    price: 459,
  },
  {
    id: "shoes-6",
    image: product6,
    title: "Classic Dress Shoes",
    price: 349,
  },
  {
    id: "sneakers-3",
    image: product3,
    title: "Stylish Sneakers",
    price: 189,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="container py-20">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-4xl font-bold mb-2">Featured Collection</h2>
          <p className="text-lg text-muted-foreground">Handpicked favorites just for you</p>
        </div>
        <Button variant="outline">View All</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
