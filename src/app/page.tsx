import CallOptions from "@/components/call-options";
import VideoPlayer from "@/components/video-player";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videochat WebRTC",
  description: "Videochat build with webrtc + socket io, and next js.",
};

const Home = () => {
  return (
    <div className="h-[calc(100vh-84px)] p-6">
      <VideoPlayer />
      <CallOptions />
    </div>
  );
};

export default Home;
