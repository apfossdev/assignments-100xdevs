import StarIcon from "./icons/star.png";
import { LockIcon } from "./icons/LockIcon";
import { DownChevron } from "./icons/DownChevron";
import { Play } from "./icons/Play";
import { MergeIcon } from "./icons/MergeIcon";

export const FavouriteCard = () => {
  return (
    <div className="flex flex-col bg-neutral-800 w-80 text-white">
      <div className="flex flex-col">
        <img src={StarIcon} alt="Star" className="w-20 h-20" />
        <p className="text-3xl font-semibold">Favourite</p>
        <div className="flex text-sm">
          <p>Annamalai </p>
          <p>• 19 questions • </p>
          <LockIcon />
          <p>Private</p>
          <DownChevron />
        </div>
        <div className="flex">
          <div className="flex text-black">
            <Play />
            <p>Practice</p>
          </div>
          <MergeIcon />
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};
