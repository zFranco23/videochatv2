"use client";

import { useEffect } from "react";
import { ToastAction } from "../ui/toast";
import { useToast } from "@/hooks/use-toast";

import { FiPhone } from "react-icons/fi";
import { useSocketContext } from "@/context/socket";

const AnswerCall = () => {
  const { toast } = useToast();

  const { callDetail, answerCall } = useSocketContext();

  const handleShowAnswerToast = () => {
    if (!callDetail) return;
    toast({
      className: "bg-white",
      title: `${callDetail.name} is calling!`,
      description: "Call him later",
      action: (
        <ToastAction
          altText="Answer call"
          className="flex gap-2"
          onClick={() => answerCall(callDetail.from)}
        >
          Answer
          <FiPhone />
        </ToastAction>
      ),
    });
  };

  useEffect(() => {
    if (callDetail) {
      handleShowAnswerToast();
    }
  }, [callDetail]);

  return <></>;
};

export default AnswerCall;
