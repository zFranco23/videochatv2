"use client";

import { CallDetail } from "@/base/types/types";
import { SocketContext } from "@/context/socket";
import { useToast } from "@/hooks/use-toast";
import { requestMediaAudio } from "@/utils/media";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { io } from "socket.io-client";

import Peer, { Instance as PeerInstance } from "simple-peer";

interface SocketProviderProps {
  children: ReactNode;
}

const socket = io(process.env.NEXT_PUBLIC_HOST_WS ?? "");

export const SocketProvider = ({ children }: SocketProviderProps) => {
  const { toast } = useToast();

  const [stream, setStream] = useState<MediaStream | undefined>();
  const selfVideoRef = useRef<HTMLVideoElement | null>(null);
  const userVideoRef = useRef<HTMLVideoElement | null>(null);

  const [isCallEnded, setIsCallEnded] = useState<boolean>(false);
  const [isCallAccepted, setIsCallAccepted] = useState<boolean>(false);
  const [callDetail, setCallDetail] = useState<CallDetail | undefined>();

  const [userId, setUserId] = useState<string>("");

  const peerConnectionRef = useRef<PeerInstance | null>(null);

  const requestUserMedia = async () => {
    const mediaStream = await requestMediaAudio();
    if (mediaStream) {
      setStream(mediaStream);
      if (selfVideoRef.current) selfVideoRef.current.srcObject = mediaStream;
    } else {
      toast({
        title: "User media not accepted",
        description: "¡Don't forget to allow video and audio!",
      });
    }
  };

  const callUser = (to: string) => {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream,
    });

    peer.on("signal", (offerSignal) => {
      socket.emit("call-user", {
        to,
        from: userId,
        name: "Carlitos",
        signal: offerSignal,
      });
    });

    peer.on("stream", (userStream) => {
      if (userVideoRef.current) userVideoRef.current.srcObject = userStream;
    });

    socket.on("call-accepted", (answerSignal) => {
      setIsCallAccepted(true);
      peer.signal(answerSignal);
    });

    peerConnectionRef.current = peer;
  };

  const answerCall = (from: string) => {
    setIsCallAccepted(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream,
    });

    peer.on("signal", (answerSignal) => {
      socket.emit("answer-call", { to: from, signal: answerSignal });
    });

    peer.on("stream", (userStream) => {
      if (userVideoRef.current) userVideoRef.current.srcObject = userStream;
    });

    peer.signal(callDetail!.signal!);
    peerConnectionRef.current = peer;
  };

  const leaveCall = () => {
    setIsCallEnded(true);
    peerConnectionRef.current?.destroy();

    window.location.reload();
    // TODO: end call for both connections, join both to a new room and disconnect each from that
    // socket.emit('call-ended')
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
