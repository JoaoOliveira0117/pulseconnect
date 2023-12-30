import Button from './Button';
import Tooltip from './Tooltip';
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';

type LikeButtonProps = {
	count: number;
	active: boolean;
	dispatch: () => void;
};

export default function LikeButton({ count, active, dispatch }: LikeButtonProps) {
	return (
		<Tooltip content="Like" delayDuration={150}>
			<div className="w-full">
				<Button
					variant="borderless"
					className="w-full py-2 m-auto flex items-center justify-center gap-2 transition-all duration-150"
					onClick={dispatch}
					active={active}
				>
					{active ? <AiFillLike /> : <AiOutlineLike />}
					<span className="w-4">{count}</span>
				</Button>
			</div>
		</Tooltip>
	);
}
