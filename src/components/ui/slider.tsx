'use client';

import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

import { cn } from '@/lib/utils';

const Slider = React.forwardRef<
	React.ElementRef<typeof SliderPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
	<SliderPrimitive.Root
		ref={ref}
		className={cn(
			'relative flex w-full touch-none select-none items-center',
			className,
		)}
		{...props}>
		<SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-xl bg-slider-bg ">
			<SliderPrimitive.Range className="absolute h-full bg-primary-blue " />
		</SliderPrimitive.Track>
		<SliderPrimitive.Thumb className="block h-7 w-5 rounded-sm bg-primary-blue bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50" />
	</SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
