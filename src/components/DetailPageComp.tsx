import { DetailPageCompProps } from '@/types';
import Image from 'next/image';

export default function DetailPageComp({
	title,
	description,
	img,
	alt,
}: DetailPageCompProps) {
	return (
		<div className="flex flex-col gap-6">
			<h3 className="font-bold text-[1.3rem]">{title}</h3>
			<p>{description}</p>
			<Image
				src={img}
				alt={alt}
				width={800}
				height={500}
				className="object-contain shadow-xl rounded-[1.2rem]"
			/>
		</div>
	);
}
