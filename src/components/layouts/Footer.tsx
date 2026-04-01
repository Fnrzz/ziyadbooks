import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-primary-foreground px-6 md:px-10 py-6 flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-16">
      <div className="flex flex-col gap-2">
        <h5 className="text-md lg:text-xl font-bold decoration-primary underline underline-offset-10 mb-4">
          CUSTOMER SERVICE
        </h5>
        <Link
          href="/"
          className="text-md lg:text-lg text-primary hover:underline"
        >
          Contact us
        </Link>
        <Link
          href="/"
          className="text-md lg:text-lg text-primary hover:underline"
        >
          FAQ
        </Link>
        <Link
          href="/"
          className="text-md lg:text-lg text-primary hover:underline"
        >
          Track Order
        </Link>
        <Link
          href="/"
          className="text-md lg:text-lg text-primary hover:underline"
        >
          Track Shipper
        </Link>
        <Link
          href="/"
          className="text-md lg:text-lg text-primary hover:underline"
        >
          Return
        </Link>
      </div>

      <div className="flex flex-col gap-2">
        <h5 className="text-md lg:text-xl font-bold decoration-primary underline underline-offset-10 mb-4">
          COMPANY
        </h5>
        <Link
          href="/"
          className="text-md lg:text-lg text-primary hover:underline"
        >
          About us
        </Link>
        <Link
          href="/"
          className="text-md lg:text-lg text-primary hover:underline"
        >
          Blog
        </Link>
      </div>

      <div className="w-full lg:w-auto h-full flex flex-col gap-2">
        <h5 className="text-md lg:text-xl font-bold decoration-primary underline underline-offset-10 mb-4">
          PAYMENT
        </h5>
        <div className="grid grid-cols-3 md:grid-cols-4 items-center justify-items-center gap-4 md:gap-6">
          <Image
            src="/assets/payments/bca.png"
            alt="BCA"
            width={80}
            height={80}
            className="w-full max-w-[80px] h-auto object-contain"
          />
          <Image
            src="/assets/payments/bni.webp"
            alt="BNI"
            width={80}
            height={80}
            className="w-full max-w-[80px] h-auto object-contain"
          />
          <Image
            src="/assets/payments/bri.webp"
            alt="BRI"
            width={80}
            height={80}
            className="w-full max-w-[80px] h-auto object-contain"
          />
          <Image
            src="/assets/payments/mandiri.png"
            alt="Mandiri"
            width={80}
            height={80}
            className="w-full max-w-[80px] h-auto object-contain"
          />
          <Image
            src="/assets/payments/cimb.png"
            alt="CIMB"
            width={80}
            height={80}
            className="w-full max-w-[80px] h-auto object-contain"
          />
          <Image
            src="/assets/payments/kredivo.png"
            alt="Kredivo"
            width={80}
            height={80}
            className="w-full max-w-[80px] h-auto object-contain"
          />
        </div>
        <h5 className="text-md lg:text-xl font-bold decoration-primary underline underline-offset-10 mt-10 mb-4">
          DELIVERY
        </h5>
        <div className="grid grid-cols-3 md:grid-cols-4 items-center justify-items-center gap-4 md:gap-6">
          <Image
            src="/assets/delivery/jnt.png"
            alt="jnt"
            width={80}
            height={80}
            className="w-full max-w-[80px] h-auto object-contain"
          />
          <Image
            src="/assets/delivery/spx.png"
            alt="spx"
            width={80}
            height={80}
            className="w-full max-w-[80px] h-auto object-contain"
          />
          <Image
            src="/assets/delivery/jne.png"
            alt="jne"
            width={80}
            height={80}
            className="w-full max-w-[80px] h-auto object-contain"
          />
          <Image
            src="/assets/delivery/gosend.png"
            alt="gosend"
            width={80}
            height={80}
            className="w-full max-w-[80px] h-auto object-contain"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
