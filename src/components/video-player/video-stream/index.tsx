import { forwardRef, LegacyRef } from "react";

interface VideoStreamProps {
  name?: string;
}

const VideoStream = forwardRef(({ name }: VideoStreamProps, ref) => {
  return (
    <div className="w-full lg:w-1/2 relative">
      {name && (
        <div className="absolute bg-white p-2 left-2 top-2 rounded-md font-bold max-w-18ch">
          {name}
        </div>
      )}
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
