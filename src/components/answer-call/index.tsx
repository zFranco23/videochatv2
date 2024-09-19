"use client";

import { useEffect } from "react";
import { ToastAction } from "../ui/toast";
import { useToast } from "@/hooks/use-toast";

import { FiPhone } from "react-icons/fi";

const AnswerCall = () => {
  const { toast } = useToast();

  const handleShowAnswerToast = () => {
    toast({
      className: "bg-white",
      title: "Franco is calling!",
      description: "Call him later",
      action: (
        <ToastAction altText="Answer call" className="flex gap-2">
          Answer
          <FiPhone />
        </ToastAction>
      ),
    });
  };

  useEffect(() => {
    setTimeout(() => {
      handleShowAnswerToast();
    }, 1000);
  }, [toast]);

  return <></>;
};

export default AnswerCall;
