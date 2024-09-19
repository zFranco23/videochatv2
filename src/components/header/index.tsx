import CallCta from "../cta/call-cta";
import UserDetails from "./user-details";

const Header = () => {
  return (
    <nav className="flex justify-between items-center p-6 shadow-md">
      <a>
        <p className="text-primary font-bold text-2xl">Meetly</p>
      </a>

      <div className="flex gap-2 items-center">
        <UserDetails />
        <CallCta />
      </div>
    </nav>
  );
};

export default Header;
