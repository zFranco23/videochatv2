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

const CallCta = () => {
  return (
    <AlertDialog>
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

        <Input />

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CallCta;
