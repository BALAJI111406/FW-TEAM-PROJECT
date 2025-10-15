import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  price: number;
  originalPrice?: number;
  badge?: string;
}

const ProductCard = ({ id, image, title, price, originalPrice, badge }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, title, price, image });
  };

  return (
    <div className="group relative">
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-muted mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {badge && (
          <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
            {badge}
          </Badge>
        )}
        <Button
          variant="secondary"
          size="sm"
          className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </div>
      <h3 className="font-medium mb-2">{title}</h3>
      <div className="flex items-center gap-2">
        <span className="font-bold">${price}</span>
        {originalPrice && (
          <span className="text-sm text-muted-foreground line-through">${originalPrice}</span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
