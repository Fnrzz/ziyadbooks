import TestimonialCarousel from "./TestimonialCarousel";

const Testimonials = () => {
  return (
    <div className="w-full flex flex-col gap-10 pb-10">
      <div className="w-full">
        <h2 className="text-3xl lg:text-4xl font-bold decoration-primary underline underline-offset-15">
          Testimonials
        </h2>
      </div>
      <div className="w-full">
        <TestimonialCarousel />
      </div>
    </div>
  );
};

export default Testimonials;
