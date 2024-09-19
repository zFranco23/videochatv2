"use client";

import { Button } from "@/components/ui/button";
import { useSocketContext } from "@/context/socket";
import { useToast } from "@/hooks/use-toast";

import { FiCopy } from "react-icons/fi";

const UserDetails = () => {
  const { toast } = useToast();
  const { socket } = useSocketContext();
  const handleCopyId = async () => {
    try {
      await navigator.clipboard?.writeText(socket.id);
      toast({
        title: "Copied!",
      });
    } catch (err) {
      console.error(err);
      toast({
        title: "Error copying id",
      });
    }
  };

  return (
    <div className="flex gap-2 items-center hidde">
      <p>
        Room ID : <b>XXXXXXXXXXX</b>
      </p>
      <Button variant="outline" onClick={handleCopyId}>
        <FiCopy />
      </Button>
    </div>
  );
};

export default UserDetails;
