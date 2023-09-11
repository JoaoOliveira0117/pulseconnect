import Link from "next/link";
import DropdownMenu from "../DropdownMenu";
import UserImage from "../Dummies/UserImage";

interface dropdownItem {
  Component: React.FC<any>;
  href: string;
}

export default function User({ hasImage = true }) {
  const dropdownItems: dropdownItem[] = [
    {
      Component: () => <span>User Settings</span>,
      href: "/home/user-settings",
    },
    {
      Component: () => <span>Logout</span>,
      href: "/login",
    },
  ];

  return (
    <DropdownMenu
      trigger={
        <div
          className="flex items-center justify-between cursor-pointer gap-2 p-2 px-4
          hover:bg-bgsecondary rounded-full transition ease-out bg-bgprimary duration-200"
        >
          <UserImage hasImage={hasImage} />
          <h2 className="block w-full max-w-[8rem] overflow-hidden whitespace-nowrap text-sm font-light text-end ">
            George Beck
          </h2>
        </div>
      }
      items={dropdownItems.map((item) => (
        <Link key={item.href} href={item.href} className="w-full py-2 px-2">
          <item.Component />
        </Link>
      ))}
    />
  );
}
