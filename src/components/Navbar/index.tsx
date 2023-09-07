"use client";
import { ImFire, ImUser } from "react-icons/im";
import Button from "../Dummies/Button";
import Tooltip from "../Dummies/Tooltip";
import Link from "next/link";
import { usePathname } from "next/navigation";

type items = {
  Icon: React.FC<any>;
  href: string;
  tooltip: JSX.Element;
};

export default function Navbar() {
  const pathname = usePathname();
  const navbarItems: items[] = [
    { Icon: ImFire, href: "/home/trending", tooltip: <em>Trending 🔥</em> },
    { Icon: ImUser, href: "/home/personal", tooltip: <>Your Profile</> },
  ];
  return (
    <>
      <div className="my-4">
        <div className="text-2xl flex items-center justify-evenly">
          {navbarItems.map((item, i) => {
            const hasNextItem = navbarItems.length - 1 !== i;
            return (
              <>
                <Tooltip
                  trigger={
                    <Link key={i} href={item.href} className="w-full">
                      <Button
                        variant="borderless"
                        className="w-full py-2"
                        active={pathname === item.href}
                      >
                        <item.Icon className="m-auto" />
                      </Button>
                    </Link>
                  }
                  content={item.tooltip}
                />
                {hasNextItem && (
                  <span key={i} className="mx-4 text-secondary">
                    |
                  </span>
                )}
              </>
            );
          })}
        </div>
      </div>
      <hr className="w-100 border-bgsecondary border-y-1" />
    </>
  );
}
