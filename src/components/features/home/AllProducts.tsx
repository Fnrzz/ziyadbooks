"use client";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";
import { getAllProducts } from "@/services/products/getAllProducts";
import { Product } from "@/types/ProductTypes";
import { Search, SlidersHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const AllProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      try {
        const result = await getAllProducts();
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

  const PaginationComponent = () => {
    const pages = [];
    const maxVisiblePages = 3;

    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (endPage - startPage + 1 < maxVisiblePages) {
      if (currentPage < 3) {
        endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
      } else {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }
    }

    if (startPage > 1) {
      pages.push(
        <PaginationItem key="1">
          <PaginationLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(1);
            }}
          >
            1
          </PaginationLink>
        </PaginationItem>,
      );
      if (startPage > 2)
        pages.push(<PaginationEllipsis key="ellipsis-start" />);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink
            href="#"
            isActive={currentPage === i}
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(i);
            }}
          >
            {i}
          </PaginationLink>
        </PaginationItem>,
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1)
        pages.push(<PaginationEllipsis key="ellipsis-end" />);
      pages.push(
        <PaginationItem key={totalPages}>
          <PaginationLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(totalPages);
            }}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>,
      );
    }

    return pages;
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
        <div className="w-full md:w-2/6"></div>
        <div className="w-full md:w-4/6">
          {loading && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
              Belum ada buku saat ini.
            </p>
          )}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => (
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
            ))}
          </div>
          {!loading && !error && totalPages > 1 && (
            <div className="w-full flex justify-end mt-10">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(currentPage - 1);
                      }}
                      className={
                        currentPage === 1
                          ? "pointer-events-none opacity-50"
                          : ""
                      }
                    />
                  </PaginationItem>

                  {PaginationComponent()}

                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(currentPage + 1);
                      }}
                      className={
                        currentPage === totalPages
                          ? "pointer-events-none opacity-50"
                          : ""
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
