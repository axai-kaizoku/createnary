'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function NavLinks() {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const handleisOpen = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div className="top-[450px] -left-10 hidden inset-0 z-10 fixed lg:flex items-center w-20 h-20 backdrop-blur-md backdrop-filter  bg-primary-blue bg-opacity-40 rounded-full">
			<Image
				src="/right-arrow.svg"
				alt="right-arrow"
				width={16}
				height={18}
				className="object-contain cursor-pointer ml-12"
			/>
		</div>
	);
}
