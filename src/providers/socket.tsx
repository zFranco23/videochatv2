"use client";

import { CallDetail } from "@/base/types/types";
import { SocketContext } from "@/context/socket";
import { useToast } from "@/hooks/use-toast";
import { requestMediaAudio } from "@/utils/media";
import { useEffect, useRef, useState, type ReactNode } from "react";

interface SocketProviderProps {
  children: ReactNode;
}

export const SocketProvider = ({ children }: SocketProviderProps) => {
  const { toast } = useToast();
  const selfVideoRef = useRef<HTMLVideoElement | null>(null);
  const userVideoRef = useRef<HTMLVideoElement | null>(null);

  const [callDetails, setCallDetails] = useState<CallDetail | undefined>();

  const [socket, setSocket] = useState();

  const requestUserMedia = async () => {
    const mediaStream = await requestMediaAudio();
    if (mediaStream) {
      if (selfVideoRef.current) selfVideoRef.current.srcObject = mediaStream;
    } else {
      toast({
        title: "User media not accepted",
        description: "Don't forget to allow video and audio!",
      });
    }
  };

  useEffect(() => {
    requestUserMedia();
  }, []);

  return (
    <SocketContext.Provider
      value={{ socket, setSocket, selfVideoRef, userVideoRef }}
    >
      {children}
    </SocketContext.Provider>
  );
};
