"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import { Input } from "../ui/input";
import { useSocketContext } from "@/context/socket";

const UserNameModal = () => {
  const { isEditNameModalOpen, toggleEditNameModal, userName, setUserName } =
    useSocketContext();

  const [name, setName] = useState<string>(userName);

  const handleSaveName = () => {
    if (name.trim().length > 0) {
      setUserName(name);
      toggleEditNameModal();
    }
  };

  return (
    <AlertDialog open={isEditNameModalOpen} onOpenChange={toggleEditNameModal}>
      <AlertDialogContent className="bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle>Edit your name</AlertDialogTitle>
          <AlertDialogDescription>
            This name is shown when you call someone.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <Input value={name} onChange={(e) => setName(e.target.value)} />

        <AlertDialogFooter className="flex gap-2">
          <AlertDialogAction
            className="flex items-center gap-2"
            onClick={handleSaveName}
            disabled={!name}
          >
            Save
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default UserNameModal;
