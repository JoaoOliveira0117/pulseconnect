import UserImage from "../Dummies/UserImage";

export default function User({ hasImage = true }) {
  return (
    <div
      className="flex items-center justify-between cursor-pointer gap-2 p-2 px-4
    hover:bg-bgsecondary rounded-full transition ease-out bg-bgprimary duration-200"
    >
      <UserImage hasImage={hasImage} />
      <h2 className="block w-full max-w-[8rem] overflow-hidden whitespace-nowrap text-sm font-light text-end ">
        George Beck
      </h2>
    </div>
  );
}
