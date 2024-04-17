'use client';

import { cn } from '@/lib/utils';
import { Slider } from '@/components/ui/slider';

type SliderProps = React.ComponentProps<typeof Slider>;

export function CustomSlider({ className, ...props }: SliderProps) {
	return (
		<>
			<Slider
				defaultValue={[50]}
				max={100}
				step={1}
				className={cn('w-full ', className)}
				{...props}
			/>
			<div className="w-full flex justify-center items-center">
				<span className="rounded-2xl mt-2.5 w-fit px-3 py-2 border-b-2 border-b-primary-blue">
					500K
				</span>
			</div>
		</>
	);
}
