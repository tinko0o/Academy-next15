import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import Hero from "./_components/Hero";
import VideoPlayer from "@/components/global/player";
import ProfessionalsSkillsFilter from "./_components/professionals-skills-filter";
import Testimonials from "./_components/testimonials";

export default function Home() {
  const query = new QueryClient();
  const videoJsOptions = {
    poster: "",
    sources: [
      {
        // src: "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.mp4/.m3u8",
        src: "http://localhost:3100/playlist",
        type: "application/x-mpegURL",
      },
    ],
  };
  return (
    <HydrationBoundary state={dehydrate(query)}>
      <div className="">
        <Hero />
        <ProfessionalsSkillsFilter />
        <Testimonials />
        {/* <VideoPlayer options={videoJsOptions} /> */}
      </div>
    </HydrationBoundary>
  );
}
