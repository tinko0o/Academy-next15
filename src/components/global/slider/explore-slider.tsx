"use client";
import { Slider } from "@/components/global/slider";
import { SwiperSlide } from "swiper/react";
import Skeleton from "@/components/global/skeleton";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CourseCard } from "../card";
type Props = {
  query?: string;
};

const ExploreSlider = ({}: Props) => {
  const onLoadSlider = true;
  const isFetching = false;
  const status = 200;
  const groups = [
    {
      id: 0,
      title: "string;",
      visible_instructors: ["string"],
      tagUrl: "string;",
      price: "string;",
      image: "./images/default/media.png",
      href: "string;",
      subTilte: "string;",
      avg_rating: 4,
      num_reviews: 4,
      bestSeller: false,
      preview: "string;",
    },
  ];
  for (let i = 0; i < 10; i++) {
    groups.push({
      id: i + 1,
      title: "string;",
      visible_instructors: ["string"],
      tagUrl: "string;",
      price: "string;",
      image: "./images/default/media.png",
      href: "string;",
      subTilte: "string;",
      avg_rating: 2.2,
      num_reviews: 4,
      bestSeller: false,
      preview: "string;",
    });
  }
  return (
    status === 200 &&
    groups.length > 0 &&
    onLoadSlider && (
      <div className="flex relative ">
        <button
          aria-label="prev-btn"
          className="absolute disabled:hidden top-1/2 -translate-y-1/2 left-0 z-10 p-2 bg-white  dark:bg-black rounded-full shadow-md prev-btn"
        >
          <ChevronLeft className="text-black dark:text-white" size={24} />
        </button>
        <div
          style={{
            maskImage: `linear-gradient(to right,rgba(0, 0, 0, 0),rgba(0, 0, 0, 1) 10%,rgba(0, 0, 0, 1) 90%,rgba(0, 0, 0, 0))`,
          }}
          className="w-full"
        >
          <Slider
            freeMode
            className="flex"
            spaceBetween={20}
            autoHeight
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            // onReachEnd={() => refetch()}
            breakpoints={{
              200: {
                slidesPerView: 1.2,
                slidesOffsetBefore: 40,
                slidesOffsetAfter: 40,
              },
              820: {
                slidesPerView: 2.4,
                slidesOffsetBefore: 40,
                slidesOffsetAfter: 40,
              },
              1024: {
                slidesPerView: 3.2,
                slidesOffsetBefore: 150,
                slidesOffsetAfter: 150,
              },
              1280: {
                slidesPerView: 4.3,
                slidesOffsetBefore: 150,
                slidesOffsetAfter: 150,
              },
              1540: {
                slidesPerView: 5.6,
                slidesOffsetBefore: 150,
                slidesOffsetAfter: 150,
              },
            }}
          >
            {groups.map((group) => (
              <SwiperSlide className="w-80" key={group.id}>
                <CourseCard type="medium" data={group} />
              </SwiperSlide>
            ))}

            {/* {fetchedData?.status === 200 &&
            data.map((group: any) => (
              <SwiperSlide key={group.id}>
                <GroupCard {...group} />
              </SwiperSlide>
            ))} */}
            {isFetching && (
              <SwiperSlide>
                <Skeleton element="CARD" />
              </SwiperSlide>
            )}
          </Slider>
        </div>
        <button
          aria-label="next-btn"
          className="absolute disabled:hidden top-1/2 -translate-y-1/2 right-0 z-10 p-2 bg-white dark:bg-black rounded-full shadow-md next-btn"
        >
          <ChevronRight className="text-black dark:text-white" size={24} />
        </button>
      </div>
    )
  );
};

export default ExploreSlider;
