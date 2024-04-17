import { DetailPageNumProps } from '@/types';

export default function DetailPageNum({ num }: DetailPageNumProps) {
	return (
		<div className="flex justify-center items-center  px-4 py-1.5 sm:px-6 sm:py-3.5 rounded-lg text-xl sm:text-3xl bg-primary-blue text-primary-white">
			{num}
		</div>
	);
}
