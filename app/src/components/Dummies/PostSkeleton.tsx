const defaults = ' h-4 rounded-full bg-bgsecondary';

export default function PostSkeleton() {
	return (
		<div className={'min-w-[700px] max-w-2xl mx-auto animate-pulse'}>
			<div className={'flex gap-2'}>
				<div className={'w-[4rem] h-[4rem] aspect-square rounded-full bg-bgsecondary'} />
				<div className={'w-full'}>
					<div className={'flex justify-between items-center'}>
						<div className={'flex'}>
							<div className={`${defaults} w-24 mb-2`} />
							<div className={`${defaults} w-48 mb-2 ml-4`} />
						</div>
						<div className={`${defaults} w-24 mb-2`} />
					</div>
					<div className={'my-2'}>
						<div className={`${defaults} w-full mb-2`} />
						<div className={`${defaults} w-full mb-2`} />
						<div className={`${defaults} w-24 mb-2`} />
					</div>
					<div className={' my-2 cursor-default select-none mt-8'}>
						<div className={'flex items-center justify-evenly'}>
							<div className={`${defaults} w-8 mb-2`} />
							<div className={`${defaults} w-8 mb-2`} />
							<div className={`${defaults} w-8 mb-2`} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
