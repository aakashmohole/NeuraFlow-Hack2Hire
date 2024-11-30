import { Link } from "react-router-dom";

const MobileMenu = ({ isOpen }) => {
  return (
    <div
      className={`w-11/12 mx-auto bg-gray-900/90 mt-4 text-white block md:hidden p-4 rounded ${
        isOpen ? "block" : " hidden"
      }`}
    >
      <div className="flex flex-col justify-between items-center gap-4">
        <Link to="/forum" className="hover:text-blue-400">
          Forum
        </Link>
        <Link
          to="/create-channel"
          className="hover:text-blue-400 w-40 text-center"
        >
          Create Community
        </Link>
        <Link to="/community" className="hover:text-blue-400 ">
          Channels
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
