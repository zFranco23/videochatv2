"use client";

import { Button } from "@/components/ui/button";
import { useSocketContext } from "@/context/socket";
import { useToast } from "@/hooks/use-toast";

import { FiCopy } from "react-icons/fi";

const UserDetails = () => {
  const { toast } = useToast();
  const { userId } = useSocketContext();

  const handleCopyId = async () => {
    try {
      await navigator.clipboard?.writeText(userId);
      toast({
        className: "bg-white",
        title: "Copied!",
      });
    } catch (err) {
      console.error(err);
      toast({
        className: "bg-white",
        title: "Error copying id",
      });
    }
  };

  if (!userId) return null;

  return (
    <div className="flex gap-2 items-center hidde">
      <p>
        Room ID : <b>{userId}</b>
      </p>
      <Button variant="outline" onClick={handleCopyId}>
        <FiCopy />
      </Button>
    </div>
  );
};

export default UserDetails;
