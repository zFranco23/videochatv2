import { forwardRef, LegacyRef } from "react";

const VideoStream = forwardRef((_, ref) => {
  return (
    <div className="w-full lg:w-1/2">
      <video
        ref={ref as LegacyRef<HTMLVideoElement>}
        autoPlay
        className="w-full rounded-md"
      />
    </div>
  );
});

VideoStream.displayName = "VideoStream";

export default VideoStream;
