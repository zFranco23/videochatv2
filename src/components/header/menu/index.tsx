"use client";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FiMenu } from "react-icons/fi";
import UserDetails from "../user-details";
import { useSocketContext } from "@/context/socket";

export const Menu = () => {
  const { userName } = useSocketContext();
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <FiMenu />
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-white">
          <SheetHeader>
            <SheetTitle>{userName}</SheetTitle>
            <SheetDescription>Your menu options</SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div>
              <UserDetails />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
