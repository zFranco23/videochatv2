import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FiMenu } from "react-icons/fi";
import UserDetails from "../user-details";

export const Menu = () => {
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
            <SheetTitle>Franco xd</SheetTitle>
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
