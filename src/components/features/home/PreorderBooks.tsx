"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { getPreorderProducts } from "@/services/products/getPreorderProducts";
import { Product } from "@/types/ProductTypes";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const PreorderBooks = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getPreorderProducts();
        setProducts(data);
      } catch (error) {
        setError(
          error instanceof Error ? error : new Error("Something went wrong"),
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full flex flex-col gap-10">
      <div className="w-full flex items-end justify-between">
        <h2 className="text-3xl lg:text-4xl font-bold decoration-primary underline underline-offset-15">
          Preorder
        </h2>
        <Link href="/" className="flex items-center gap-2 text-primary">
          See More <ChevronRight />
        </Link>
      </div>
      {loading && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div className="flex flex-col p-4 bg-white" key={index}>
              <div className="relative w-full aspect-[3/4] mb-4 bg-gray-50 rounded-lg overflow-hidden">
                <Skeleton className="w-full h-full object-cover" />
              </div>

              <div className="flex flex-col gap-3 ">
                <Skeleton className="w-full h-6 " />
                <Skeleton className="w-15 h-6 " />
              </div>
            </div>
          ))}
        </div>
      )}
      {error && (
        <p className="text-gray-500 text-center py-10">
          Terjadi kesalahan: {error.message}
        </p>
      )}
      {!loading && !error && products.length === 0 && (
        <p className="text-gray-500 text-center py-10">
          Belum ada buku preorder saat ini.
        </p>
      )}
      {!loading && !error && products.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {products.map((product) => (
            <Link
              href={`/product/${product.slug}`}
              key={product.id}
              className="flex flex-col group p-4 transition-shadow bg-white"
            >
              <div className="relative w-full aspect-[3/4] mb-4 bg-gray-50 rounded-lg overflow-hidden">
                <span className="absolute top-2 left-2 z-10 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded">
                  PRE-ORDER
                </span>
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
          ))}
        </div>
      )}
    </div>
  );
};

export default PreorderBooks;
