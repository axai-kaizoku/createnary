'use client';

import { Slider } from '@/components/ui/slider';
import { useEffect, useState } from 'react';
import { CustomSliderProps } from '@/types';

export function CustomSlider({
	defaultValue,
	minValue,
	totalValue,
	steps,
	symbols,
	onChange,
}: CustomSliderProps) {
	const [value, setValue] = useState<number[]>([400]);

	const sendData = (data: number[]) => {
		onChange(data[0]);
	};

	useEffect(() => {
		sendData(value);
	}, [value]);

	return (
		<>
			<Slider
				defaultValue={[defaultValue]}
				min={minValue}
				max={totalValue}
				step={steps}
				className="w-full"
				onValueChange={(e: number[]) => setValue(e)}
			/>
			<div className="w-full flex justify-center items-center">
				<span className="rounded-2xl mt-2.5 w-fit px-3 py-2 border-b-2 border-b-primary-blue">
					{value}
					{symbols}
				</span>
			</div>
		</>
	);
}
