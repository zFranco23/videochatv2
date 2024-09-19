import { FiPhoneOff } from "react-icons/fi";
import { Button } from "../ui/button";

const CallOptions = () => {
  return (
    <div className="w-full flex items-center justify-center mt-6">
      <Button variant="outline" className="py-6 px-4">
        <FiPhoneOff color="red" size={40} />
      </Button>
    </div>
  );
};

export default CallOptions;
