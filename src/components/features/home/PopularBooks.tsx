"use client";
import { getPopularProducts } from "@/services/products/getPopularProducts";
import { Product } from "@/types/ProductTypes";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import SkeletonProductCard from "./SkeletonProductCard";
import ProductCard from "./ProductCard";

const PopularBooks = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getPopularProducts();
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
          Popular
        </h2>
        <Link href="/" className="flex items-center gap-2 text-primary">
          See More <ChevronRight />
        </Link>
      </div>
      {loading && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <SkeletonProductCard key={index} />
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
          Belum ada buku populer saat ini.
        </p>
      )}
      {!loading && !error && products.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PopularBooks;
