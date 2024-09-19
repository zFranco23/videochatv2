"use client";

import { CallDetail } from "@/base/types/types";
import { SocketContext } from "@/context/socket";
import { useToast } from "@/hooks/use-toast";
import { requestMediaAudio } from "@/utils/media";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { io } from "socket.io-client";

interface SocketProviderProps {
  children: ReactNode;
}

const socket = io("http://localhost:5000");

export const SocketProvider = ({ children }: SocketProviderProps) => {
  const { toast } = useToast();
  const selfVideoRef = useRef<HTMLVideoElement | null>(null);
  const userVideoRef = useRef<HTMLVideoElement | null>(null);

  const [isCallEnded, setIsCallEnded] = useState<boolean>(false);
  const [isCallAccepted, setIsCallAccepted] = useState<boolean>(false);
  const [callDetail, setCallDetail] = useState<CallDetail | undefined>();

  const [userId, setUserId] = useState<string>("");

  const requestUserMedia = async () => {
    const mediaStream = await requestMediaAudio();
    if (mediaStream) {
      if (selfVideoRef.current) selfVideoRef.current.srcObject = mediaStream;
    } else {
      toast({
        title: "User media not accepted",
        description: "¡Don't forget to allow video and audio!",
      });
    }
  };

  const callUser = (to: string) => {
    socket.emit("call-user", { to, from: userId, name: "Carlitos" });

    socket.on("call-accepted", () => {
      setIsCallAccepted(true);
    });
  };

  const answerCall = (from: string) => {
    setIsCallAccepted(true);
    socket.emit("answer-call", { to: from });
  };

  const leaveCall = () => {
    setIsCallEnded(true);
    // TODO: end call for both connections
    // socket.emit('call-ended', { to: callDetail.})
  };

  useEffect(() => {
    requestUserMedia();
  }, []);

  useEffect(() => {
    if (window) {
      socket.on("me", setUserId);
      socket.on("user-calling", (data) => {
        setCallDetail(data);
      });
    }
  }, []);

  return (
    <SocketContext.Provider
      value={{
        userId,
        selfVideoRef,
        userVideoRef,
        callUser,
        answerCall,
        leaveCall,
        callDetail,
        isCallAccepted,
        isCallEnded,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};
