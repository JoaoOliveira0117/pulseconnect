import { SlLike } from 'react-icons/sl';
import Button from './Button';
import Tooltip from './Tooltip';

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
					className="w-full py-2 m-auto flex items-center justify-center gap-2"
					onClick={dispatch}
					active={active}
				>
					<SlLike />
					{count}
				</Button>
			</div>
		</Tooltip>
	);
}
