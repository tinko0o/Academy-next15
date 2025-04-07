import { Card, CardContent, CardFooter } from "@/components/ui/card";

import Link from "next/link";
import RatingStar from "../rating-star";

type Props = {
  tagUrl: string;
  tilte: string;
  subTilte: string;
  thumbnail: string | null;
  rating: string;
  rateCount: string | null;
  bestSeller?: boolean;
  preview?: string;
  price: string;
};

const GroupCard = ({
  tagUrl,
  tilte,
  subTilte,
  rating,
  rateCount,
  thumbnail,
  preview,
  bestSeller = false,
}: Props) => {
  return (
    <Card className="dark:bg-gray-800 rounded-xl overflow-hidden ">
      <Link href={`/course/${tagUrl}`}>
        <img
          src={thumbnail || `./images/default/media.png`}
          alt="thumbnail"
          className="w-full opacity-70 "
        />
        <CardContent className="pt-3 pb-1 ">
          <p className="text-base leading-tight font-bold">{tilte}</p>
          <p className="text-sm py-2 truncate text-body-color ">{subTilte}</p>
          <RatingStar rating={rating} reviews={rateCount} />
        </CardContent>
        <CardFooter className="">
          {bestSeller && (
            <p className=" text-sm p-[2px] px-2 bg-yellow rounded-md">
              Best seller
            </p>
          )}
        </CardFooter>
      </Link>
    </Card>
  );
};

export default GroupCard;
