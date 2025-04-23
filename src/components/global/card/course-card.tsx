/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import RatingStar from "../rating-star";

type Course = {
  id: number;
  title: string;
  visible_instructors: string[];
  price: string;
  image: string;
  href: string;
  subTilte: string;
  avg_rating: number;
  num_reviews: number | null;
  bestSeller?: boolean;
  preview?: string;
};

type CourseCardProps = {
  data: Course;
  type: "small" | "medium" | "large";
};

export const CourseCard = ({ data, type }: CourseCardProps) => {
  switch (type) {
    case "small":
      return (
        <Link href={data.href}>
          <Card className="w-full py-4 max-w-xs rounded-none">
            <CardContent className="flex gap-3 px-1  items-center">
              <div className="min-w-[60px] h-[60px] rounded-md overflow-hidden">
                <Image
                  src={data.image}
                  alt={data.title}
                  width={60}
                  height={60}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1 space-y-1">
                <h4 className="text-sm font-semibold leading-tight line-clamp-2">
                  {data.title}
                </h4>
                <p className="text-muted-foreground text-xs line-clamp-1">
                  {data.visible_instructors.join(", ")}
                </p>
                <p className="text-sm font-bold">{data.price}</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      );
    case "medium":
      return (
        <Card className="dark:bg-gray-800 rounded-xl overflow-hidden ">
          <Link href={`/course/${data.href}`}>
            <img
              width={60}
              height={60}
              src={data?.image || `./images/default/media.png`}
              alt="thumbnail"
              className="w-full opacity-70 "
            />
            <CardContent className="pt-3 pb-1 ">
              <p className="text-base leading-tight font-bold">{data.title}</p>
              <p className="text-sm py-2 truncate text-body-color ">
                {data.subTilte}
              </p>
              <RatingStar rating={data.avg_rating} reviews={data.num_reviews} />
            </CardContent>
            <CardFooter className="">
              {data.bestSeller && (
                <p className=" text-sm p-[2px] px-2 bg-yellow rounded-md">
                  Best seller
                </p>
              )}
            </CardFooter>
          </Link>
        </Card>
      );
  }
};
