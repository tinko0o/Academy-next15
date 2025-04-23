import { UserCard } from "@/components/global/card";
import { Separator } from "@/components/ui/separator";
import { CONSTANTS } from "@/constants";
import { QuoteIcon } from "lucide-react";

const Testimonials = () => {
  // {CONSTANTS.signInForm.map((field) => (
  return (
    <div className="container">
      <div className="my-4 mt-20">
        <h2 className="font-bold text-center dark:text-white text-xl sm:text-2xl sm:leading-tight md:text-3xl md:leading-tight">
          See what others are achieving through learning
        </h2>
      </div>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4">
          {CONSTANTS.testimonial.slice(0, 4).map((data) => (
            <div
              key={data.id}
              className="p-3 border dark:border-gray-600 rounded-lg shadow-sm"
            >
              <QuoteIcon size={18} className="my-2" />
              <p className="mb-2">{data.message}</p>
              <Separator />
              <UserCard user={data.user} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
