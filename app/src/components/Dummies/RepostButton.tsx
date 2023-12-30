import Button from './Button';
import Tooltip from './Tooltip';
import { AiOutlineRetweet } from 'react-icons/ai';

type RepostButtonProps = {
	count: number;
	active: boolean;
	dispatch: () => void;
};

export default function RepostButton({ count, active, dispatch }: RepostButtonProps) {
	return (
		<Tooltip content="Repost" delayDuration={150}>
			<div className="w-full">
				<Button
					variant="borderless"
					className="w-full py-2 m-auto flex items-center justify-center gap-2 transition-all duration-150"
					onClick={dispatch}
					active={active}
				>
					<AiOutlineRetweet
						className={`${active ? 'bg-white rounded-sm text-bgprimary' : ''} transition-all duration-75`}
					/>
					<span className="w-4">{count}</span>
				</Button>
			</div>
		</Tooltip>
	);
}
