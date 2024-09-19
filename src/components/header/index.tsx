import CallCta from "../cta/call-cta";
import { Menu } from "./menu";
import UserDetails from "./user-details";

const Header = () => {
  return (
    <nav className="flex justify-between items-center p-6 shadow-md">
      <div className="flex gap-4 items-center">
        <Menu />

        <a>
          <p className="text-primary font-bold text-2xl">Meetly</p>
        </a>
      </div>

      <div className="flex gap-2 items-center">
        <div className="hidden lg:block">
          <UserDetails />
        </div>
        <CallCta />
      </div>
    </nav>
  );
};

export default Header;
