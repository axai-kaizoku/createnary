import { CustomButtonProps } from '@/types';
import Link from 'next/link';

export default function CustomButton({
	href,
	btnText,
	bgColor,
	textColor,
	onClick,
}: CustomButtonProps) {
	return (
		<>
			{href ? (
				<Link
					href={href!}
					className={`${bgColor} ${textColor} w-fit  rounded-2xl px-5 py-3`}>
					{btnText}
				</Link>
			) : (
				<button
					className={`${bgColor} ${textColor} w-fit  rounded-2xl px-5 py-3`}
					onClick={onClick}>
					{btnText}
				</button>
			)}
		</>
	);
}
