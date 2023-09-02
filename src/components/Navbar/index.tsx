export default function Navbar() {
  const navbarItems = ["🔥", "👤"];
  return (
    <>
      <div className="my-4">
        <ul className="text-2xl flex items-center justify-evenly">
          {navbarItems.map((item, i) => {
            const hasNextItem = navbarItems.length - 1 !== i;
            return (
              <>
                <li
                  key={i}
                  className="flex-1 text-center cursor-pointer hover:bg-bgsecondary rounded-lg transition ease-out bg-bgprimary duration-200"
                >
                  {item}
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
