import { Button } from "@/components/ui/button";

import { LeftBottomBg } from "@/icons/backgrounds/left-bottom-bg";
import { LeftCenterBg } from "@/icons/backgrounds/left-center-bg";
import { TopRightBg } from "@/icons/backgrounds/top-right-bg";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container ">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Study at your own pace. Unlock new opportunities
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  Choose from thousands of high-quality online courses. Enroll
                  today and begin your learning journey!
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link href={"/explore"}>
                    <Button
                      className="bg-[#4A6CF7] hover:bg-[#4A6CF7]/80 text-white"
                      variant={"default"}
                      size={"lg"}
                    >
                      Explore
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
          <TopRightBg />
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
          <LeftCenterBg />
          <LeftBottomBg />
        </div>
      </section>
    </>
  );
};

export default Hero;
