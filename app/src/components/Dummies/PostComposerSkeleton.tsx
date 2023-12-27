export default function PostComposerSkeleton() {
	return (
		<div className="flex mx-auto min-w-[48rem] mt-4 mb-8 justify-evenly items-center gap-4 animate-pulse">
			<div className="w-full aspect-square rounded-full bg-bgsecondary" />
			<div className="min-w-[43rem] bg-bgsecondary rounded-tl-lg rounded-3xl flex items-center justify-end py-2 h-12" />
		</div>
	);
}
