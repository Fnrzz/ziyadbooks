import { Product } from "@/types/ProductTypes";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link
      href={`/product/${product.slug}`}
      key={product.id}
      className="flex flex-col group p-4 transition-shadow bg-white"
    >
      <div className="relative w-full aspect-[3/4] mb-4 bg-gray-50 rounded-lg overflow-hidden">
        {product.preorder && (
          <span className="absolute top-2 left-2 z-10 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded">
            PRE-ORDER
          </span>
        )}
        {Number(product.diskon) > 0 && (
          <span className="absolute top-2 left-2 z-10 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded">
            {product.diskon}% OFF
          </span>
        )}
        <Image
          src={product.image_url}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </div>

        <div className="flex flex-col mt-auto gap-2">
          <div className="flex flex-col">
            {product.price > product.final_price ? (
              <>
                <span className="text-xs text-gray-400 line-through">
                  {product.price_formatted}
                </span>
                <span className="text-lg font-bold text-primary">
                  {product.final_price_formatted}
                </span>
              </>
            ) : (
              <span className="text-lg font-bold text-primary mt-4">
                {product.final_price_formatted}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
