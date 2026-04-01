import { Skeleton } from "@/components/ui/skeleton";

const SkeletonProductCard = () => {
  return (
    <div className="flex flex-col p-4 bg-white">
      <div className="relative w-full aspect-[3/4] mb-4 bg-gray-50 rounded-lg overflow-hidden">
        <Skeleton className="w-full h-full object-cover" />
      </div>

      <div className="flex flex-col gap-3 ">
        <Skeleton className="w-full h-6 " />
        <Skeleton className="w-15 h-6 " />
      </div>
    </div>
  );
};

export default SkeletonProductCard;
