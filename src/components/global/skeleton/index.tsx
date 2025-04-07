import { Skeleton as SkeletonUI } from "@/components/ui/skeleton";

type Props = {
  element: "CARD" | "POST" | "ITEM";
};

const Skeleton = ({ element }: Props) => {
  switch (element) {
    case "ITEM":
      return (
        <div className="flex flex-col gap-y-3 h-full  rounded-xl overflow-hidden">
          <SkeletonUI className="h-5 w-[80%] rounded-md " />
          <SkeletonUI className="h-5 w-[60%] rounded-md " />
          <SkeletonUI className="h-5 w-[80%] rounded-md " />
          <SkeletonUI className="h-5 w-[50%] rounded-md " />
          <SkeletonUI className="h-5 w-[40%] rounded-md " />
          <SkeletonUI className="h-5 w-[60%] rounded-md " />
          <SkeletonUI className="h-5 w-[40%] rounded-md " />
        </div>
      );
    case "CARD":
      return (
        <div className="flex flex-col gap-y-3 h-full  rounded-xl overflow-hidden">
          <SkeletonUI className="h-[200px] w-full " />
          <SkeletonUI className="h-[40px] w-7/12 rounded-md ml-5 " />
          <SkeletonUI className="h-[30px] w-4/12 rounded-md ml-5 " />
        </div>
      );

    case "POST":
      return (
        <div className=" w-full pt-4  text-white rounded-lg   overflow-hidden">
          <div className="flex items-center mb-3 px-4">
            <SkeletonUI className="w-12 h-12 mr-4 rounded-full " />
            <div>
              <SkeletonUI className="h-5 w-24 rounded-md  mb-1" />
              <SkeletonUI className="h-4 w-40 rounded-md " />
            </div>
          </div>
          <SkeletonUI className="h-[280px] w-full " />
          <div className="flex items-center gap-3   px-6 py-2">
            <SkeletonUI className="h-4 w-20 rounded-md " />
            <SkeletonUI className="h-4 w-20 rounded-md " />
            <SkeletonUI className="h-4 w-20 rounded-md " />
          </div>
        </div>
      );

    default:
      return <></>;
  }
};

export default Skeleton;
