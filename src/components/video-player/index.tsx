"use client";

import { useSocketContext } from "@/context/socket";
import AnswerCall from "../answer-call";
import VideoStream from "./video-stream";

const VideoPlayer = () => {
  const { selfVideoRef, userVideoRef, isCallAccepted, userName, receptorName } =
    useSocketContext();
  return (
    <div className="flex gap-6 flex-col lg:flex-row items-center justify-center">
      <AnswerCall />

      <VideoStream name={userName} ref={selfVideoRef} />

      {isCallAccepted && <VideoStream name={receptorName} ref={userVideoRef} />}
    </div>
  );
};

export default VideoPlayer;
