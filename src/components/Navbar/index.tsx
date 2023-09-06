import { ImFire, ImUser } from "react-icons/im";
import Button from "../Dummies/Button";

export default function Navbar() {
  const navbarItems = [ImFire, ImUser];
  return (
    <>
      <div className="my-4">
        <ul className="text-2xl flex items-center justify-evenly">
          {navbarItems.map((Component, i) => {
            const hasNextItem = navbarItems.length - 1 !== i;
            return (
              <>
                <li key={i} className="w-full">
                  <Button variant="borderless" className="w-full py-2 px-4">
                    <Component className="m-auto" />
                  </Button>
                </li>
                {hasNextItem && <li className="mx-4 text-secondary">|</li>}
              </>
            );
          })}
        </ul>
      </div>
      <hr className="w-100 border-bgsecondary border-y-1" />
    </>
  );
}
