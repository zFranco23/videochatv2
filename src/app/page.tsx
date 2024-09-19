import CallOptions from "@/components/call-options";
import VideoPlayer from "@/components/video-player";

const Home = () => {
  return (
    <div className="h-[calc(100vh-84px)] p-6">
      <VideoPlayer />
      <CallOptions />
    </div>
  );
};

export default Home;
