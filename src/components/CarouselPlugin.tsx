'use client';
import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

export default function CarouselPlugin() {
	const plugin = React.useRef(
		Autoplay({
			delay: 2000,
			stopOnInteraction: true,
			stopOnFocusIn: false,
			stopOnMouseEnter: false,
			stopOnLastSnap: false,
		}),
	);

	return (
		<Carousel
			plugins={[plugin.current]}
			className="max-sm:p-8 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl"
			onMouseEnter={plugin.current.stop}
			onMouseLeave={plugin.current.reset}>
			<CarouselContent>
				<CarouselItem className="flex justify-center">
					<Image
						src="/detail-three.png"
						alt="detail-three"
						width={820}
						height={505}
						className="object-contain "
					/>
				</CarouselItem>
				<CarouselItem className="flex justify-center">
					<Image
						src="/detail-one.png"
						alt="detail-one"
						width={820}
						height={505}
						className="object-contain "
					/>
				</CarouselItem>
				<CarouselItem className="flex justify-center">
					<Image
						src="/detail-two.png"
						alt="detail-two"
						width={820}
						height={505}
						className="object-contain "
					/>
				</CarouselItem>
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}
