import categoryWomen from "@/assets/category-women.jpg";
import categoryNew from "@/assets/category-new.jpg";
import categoryBestsellers from "@/assets/category-bestsellers.jpg";
import categoryMen from "@/assets/category-men.jpg";

const categories = [
  { name: "Women", image: categoryWomen },
  { name: "New Arrivals", image: categoryNew },
  { name: "Best Sellers", image: categoryBestsellers },
  { name: "Men", image: categoryMen },
];

const CategoryGrid = () => {
  return (
    <section className="container py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Shop by Category</h2>
        <p className="text-lg text-muted-foreground">Find your perfect style</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <a
            key={category.name}
            href="#"
            className="group relative overflow-hidden rounded-lg aspect-square"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent flex items-end p-6">
              <h3 className="text-xl font-bold text-background">{category.name}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
