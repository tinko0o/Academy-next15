import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ShoppingCart } from "lucide-react";
import { CourseCard } from "../card";
import Link from "next/link";

export const CartAction = () => {
  const data = [
    {
      title: "ChatGPT, DeepSeek, Grok and 30+ More AI Tools",
      instructors: ["Anton Voroniuk", "Anton Voroniuk 2"],
      price: "₫399,000",
      imageUrl: "https://img-c.udemycdn.com/course/480x270/5231088_b1e8_2.jpg",
      href: "/courses/ai-tools",
    },
    {
      title: "ChatGPT, DeepSeek, Grok and 30+ More AI Tools",
      instructors: ["Anton Voroniuk", "Anton Voroniuk 2"],
      price: "₫399,000",
      imageUrl: "https://img-c.udemycdn.com/course/480x270/5231088_b1e8_2.jpg",
      href: "/courses/ai-tools",
    },
  ];
  return (
    <HoverCard openDelay={0} closeDelay={0}>
      <HoverCardTrigger asChild>
        <Button aria-label="Cart" title="Cart" variant={"ghost"} size={"icon"}>
          <ShoppingCart className="size-5" />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-full max-w-[300px] p-0 overflow-hidden">
        {data.map((item, index) => (
          <CourseCard
            key={index}
            title={item.title}
            instructors={item.instructors}
            price={item.price}
            imageUrl={item.imageUrl}
            href={item.href}
          />
        ))}

        <div className="p-2 ">
          <p className="text-base py-2">
            Total: <span className="font-bold">₫798,000</span>
            <span className="text-sm ml-2 text-gray-500 line-through">
              ₫998,000
            </span>
          </p>
          <Link href="/checkout">
            <Button className="w-full cursor-pointer">Checkout</Button>
          </Link>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
