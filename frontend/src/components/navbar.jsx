import { CircleQuestionMark } from "lucide-react";
const NavBar = () => {
  return (
    <>
      <div className="w-full flex justify-between px-3 py-1.5 sm:px-6 sm:py-3 bg-forest ">
        <div className="flex gap-1 justify-center items-center px-2 py-1">
          <img src="recycle.png" className="size-5" alt="" />
          <p className="text-lg text-white font-semibold font-outfit">
            Recyc<span className="text-secondary">Log</span>
          </p>
        </div>
        <div className="text-mint flex items-center gap-1 justify-center px-2 py-1 font-roboto">
          <CircleQuestionMark size={18} />
          <a href="" className="underline text-sm" role="button">
            Need help?
          </a>
        </div>
      </div>
    </>
  );
};
export default NavBar;
