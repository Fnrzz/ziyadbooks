import AllProducts from "@/components/features/home/AllProducts";
import PopularBooks from "@/components/features/home/PopularBooks";
import PreorderBooks from "@/components/features/home/PreorderBooks";
import { Button } from "@/components/ui/button";
import { BadgeCheck, CreditCard, RotateCcw, Van } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col px-6 md:px-10 mt-8 md:mt-12 gap-6 lg:gap-10">
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 p-6 md:px-10 lg:px-20 bg-primary-foreground rounded-2xl">
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 className="text-4xl lg:text-5xl text-center md:text-left font-extrabold leading-tight">
            The easiest way to <br className="hidden lg:block" /> find any book
          </h1>
          <p className="text-sm md:text-base text-center md:text-left">
            Where you can enjoy shopping your favorite books
          </p>
          <div className="w-full flex justify-center md:justify-start">
            <Button
              variant="default"
              size="lg"
              className="px-10 py-3 rounded-lg"
            >
              Shop now
            </Button>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <Image
            src="/assets/study.webp"
            alt="study illustration"
            width={500}
            height={500}
            className="w-full max-w-[450px] h-auto object-contain md:-mt-20 z-10"
          />
        </div>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 p-4 lg:p-8 bg-primary-foreground rounded-2xl items-center">
          <div className="flex justify-center">
            <BadgeCheck className="w-10 h-10 lg:w-20 lg:h-20 text-primary" />
          </div>
          <h3 className="text-center md:text-left text-md">
            Original <br /> Product
          </h3>
        </div>
        <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 p-4 lg:p-8 bg-primary-foreground rounded-2xl items-center">
          <div className="flex justify-center">
            <CreditCard className="w-10 h-10 lg:w-20 lg:h-20 text-primary" />
          </div>
          <h3 className="text-center md:text-left text-md">
            Easy <br /> Payment
          </h3>
        </div>
        <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 p-4 lg:p-8 bg-primary-foreground rounded-2xl items-center">
          <div className="flex justify-center">
            <Van className="w-10 h-10 lg:w-20 lg:h-20 text-primary" />
          </div>
          <h3 className="text-center md:text-left text-md">
            Easy <br /> Delivery
          </h3>
        </div>
        <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 p-4 lg:p-8 bg-primary-foreground rounded-2xl items-center">
          <div className="flex justify-center">
            <RotateCcw className="w-10 h-10 lg:w-20 lg:h-20 text-primary" />
          </div>
          <h3 className="text-center md:text-left text-md">
            Easy <br /> Return
          </h3>
        </div>
      </div>
      <PopularBooks />
      <PreorderBooks />
      <AllProducts />
    </main>
  );
}
