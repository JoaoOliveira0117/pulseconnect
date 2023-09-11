import Button from "../Dummies/Button";
import Tooltip from "../Dummies/Tooltip";
import UserImage from "../Dummies/UserImage";
import Input from "../Input";
import { AiOutlinePlus } from "react-icons/ai";

export default function PostComposer() {
  return (
    <div
      className="flex mx-auto min-w-[48rem] mt-4 mb-8 
      items-start justify-evenly gap-4"
    >
      <UserImage size={52} />
      <div
        className={`w-full bg-bgtertiary rounded-tl-lg rounded-3xl 
      flex items-center justify-between py-2 `}
      >
        <Input
          variant="transparent"
          className="w-full pr-2"
          placeholder="What are you thinking today? 🔥"
          multiline
        />
        <Tooltip
          trigger={
            <Button
              variant="borderless"
              className="bg-transparent hover:bg-transparent mr-2 mt-auto"
            >
              <AiOutlinePlus
                className={`text-bgprimary text-4xl bg-secondary
          px-[0.5rem] hover:text-white transition-all 
         duration-150 rounded-full`}
              />
            </Button>
          }
          content={"Create a new post"}
        />
      </div>
    </div>
  );
}
