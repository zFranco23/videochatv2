"use client";

import { FiPhoneOff } from "react-icons/fi";
import { Button } from "../ui/button";
import { useSocketContext } from "@/context/socket";

const CallOptions = () => {
  const { isCallAccepted, isCallEnded, leaveCall } = useSocketContext();

  if (!isCallAccepted || isCallEnded) return null;

  return (
    <div className="w-full flex items-center justify-center mt-6">
      <Button variant="outline" className="py-6 px-4" onClick={leaveCall}>
        <FiPhoneOff color="red" size={40} />
      </Button>
    </div>
  );
};

export default CallOptions;
