import { SlLike } from "react-icons/sl";
import { FaRegComments } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";

import UserImage from "../Dummies/UserImage";
import Button from "../Dummies/Button";
import Tooltip from "../Dummies/Tooltip";

type Interaction = {
  Icon: React.FC<any>;
  count: number;
  tooltip: string;
};

export default function Post() {
  const interactions: Interaction[] = [
    {
      Icon: SlLike,
      count: 0,
      tooltip: "Like",
    },
    {
      Icon: AiOutlineRetweet,
      count: 0,
      tooltip: "Repost",
    },
    {
      Icon: FaRegComments,
      count: 0,
      tooltip: "Comment",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="min-h-[8rem] flex gap-2">
        <div className="min-w-[4rem] h-full">
          <UserImage className="m-auto" size={36} />
        </div>
        <div>
          <div className="flex items-center gap-2 h-[30px]">
            <h2 className="text-sm font-light">George Beck</h2>
            <p className="text-xs font-light text-secondary pt-0.5">1h ago</p>
          </div>
          <div className="my-2">
            <p className="font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quibusdam, molestiae, voluptatum, voluptatibus, dolorum nesciunt
              quia quae quod voluptate doloremque quos. Quisquam quibusdam,
              molestiae, voluptatum, voluptatibus, dolorum nesciunt quia quae
              quod voluptate doloremque quos.
            </p>
          </div>
        </div>
      </div>
      <div className="my-2 cursor-default select-none">
        <ul className="flex items-center justify-evenly">
          {interactions.map((interaction, i) => {
            const hasNextItem = interactions.length - 1 !== i;
            return (
              <>
                <li key={i} className="flex-1 ">
                  <Tooltip
                    trigger={
                      <Button variant="borderless" className="w-full py-2 px-4">
                        <interaction.Icon className="m-auto" />
                      </Button>
                    }
                    content={interaction.tooltip}
                  />
                </li>
                {hasNextItem && <li className="mx-4 text-secondary">|</li>}
              </>
            );
          })}
        </ul>
      </div>
      <hr className="border-bgsecondary border-y-1" />
    </div>
  );
}
