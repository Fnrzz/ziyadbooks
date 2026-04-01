"use client";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { getAllProducts } from "@/services/products/getAllProducts";
import { Product } from "@/types/ProductTypes";
import { Search, SlidersHorizontal } from "lucide-react";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import SkeletonProductCard from "./SkeletonProductCard";
import CustomPagination from "@/components/ui/custom-pagination";
import Link from "next/link";

const AllProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await getAllProducts(currentPage, 8);
        setProducts(result.data);
        setTotalPages(result.last_page);
      } catch (error) {
        setError(
          error instanceof Error ? error : new Error("Something went wrong"),
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="w-full flex flex-col md:flex-row gap-10 md:items-end">
        <div className="w-full md:w-2/6">
          <h2 className="text-3xl lg:text-4xl font-bold decoration-primary underline underline-offset-15">
            All Products
          </h2>
        </div>
        <div className="w-full md:w-4/6 h-full flex items-end">
          <InputGroup className="bg-white rounded-lg border border-gray-200  p-5 ">
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
              <SlidersHorizontal className="text-primary" />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
              <Search className="text-primary" />
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-2/6 flex flex-col gap-4 p-4">
          <Link href="/" className="flex items-center gap-2 hover:text-primary">
            Novel dan Satra
          </Link>
          <Link href="/" className="flex items-center gap-2 hover:text-primary">
            Buku Anak
          </Link>
          <Link href="/" className="flex items-center gap-2 hover:text-primary">
            Pengembangan Diri
          </Link>
          <Link href="/" className="flex items-center gap-2 hover:text-primary">
            Pendidikan dan Refrensi
          </Link>
          <Link href="/" className="flex items-center gap-2 hover:text-primary">
            Komputer & Teknologi
          </Link>
          <Link href="/" className="flex items-center gap-2 hover:text-primary">
            Psikologi
          </Link>
          <Link href="/" className="flex items-center gap-2 hover:text-primary">
            Seni & Desain
          </Link>
          <Link href="/" className="flex items-center gap-2 hover:text-primary">
            Medis
          </Link>
          <Link href="/" className="flex items-center gap-2 hover:text-primary">
            Spiritualitas
          </Link>
          <Link href="/" className="flex items-center gap-2 hover:text-primary">
            Travel
          </Link>
          <Link href="/" className="flex items-center gap-2 hover:text-primary">
            Kamus
          </Link>
        </div>
        <div className="w-full md:w-4/6">
          {loading && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
              Belum ada buku saat ini.
            </p>
          )}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {!loading && !error && totalPages > 1 && (
            <div className="w-full flex mt-10">
              <CustomPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
