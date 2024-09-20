"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import { FiPhone } from "react-icons/fi";
import { useState } from "react";
import { useSocketContext } from "@/context/socket";

const CallCta = () => {
  const { callUser } = useSocketContext();
  const [value, setValue] = useState<string>("");

  const handleCallUser = () => {
    callUser(value);
  };

  return (
    <AlertDialog
      onOpenChange={() => {
        setValue("");
      }}
    >
      <AlertDialogTrigger asChild>
        <Button>
          <p className="hidden lg:block">Meet someone</p>
          <FiPhone className="lg:hidden" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle>Call someone</AlertDialogTitle>
          <AlertDialogDescription>
            Enter the room id you want to join:
          </AlertDialogDescription>
        </AlertDialogHeader>

        <Input value={value} onChange={(e) => setValue(e.target.value)} />

        <AlertDialogFooter className="flex gap-2">
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="flex items-center gap-2"
            onClick={handleCallUser}
          >
            Call
            <FiPhone />
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CallCta;
