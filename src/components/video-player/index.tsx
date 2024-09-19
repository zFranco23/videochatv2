"use client";

import { useSocketContext } from "@/context/socket";
import AnswerCall from "../answer-call";
import VideoStream from "./video-stream";

const VideoPlayer = () => {
  const { selfVideoRef, userVideoRef, isCallAccepted } = useSocketContext();
  return (
    <div className="flex gap-6 flex-col lg:flex-row items-center justify-center">
      <AnswerCall />

      <VideoStream ref={selfVideoRef} />

      {isCallAccepted && <VideoStream ref={userVideoRef} />}
    </div>
  );
};

export default VideoPlayer;
