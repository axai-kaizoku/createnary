'use client';

import { useState } from 'react';
import CustomButton from './CustomButton';
import { CustomSlider } from './CustomSlider';
import SearchInfluencer from './SearchInfluencer';
import { formatNumberWithCommas } from '@/utils';

export default function CalculationSection() {
	const [influencer, setInfluencer] = useState<string>('');
	const [followers, setFollowers] = useState<number>(500);
	const [products, setProducts] = useState<number>(25);
	const [monthlyIncome, setMonthlyIncome] = useState<string>('12,000');
	const [yearlyIncome, setYearlyIncome] = useState<string>('1,44,000');

	const handleInfluencer = (data: string) => {
		setInfluencer(data);
	};

	const handlefollowers = (data: number) => {
		setFollowers(data);
	};

	const handleProducts = (data: number) => {
		setProducts(data);
	};

	const handleSubmit = async () => {
		const response = await fetch('/api/calculation', {
			method: 'POST',
			body: JSON.stringify({ influencer, followers, products }),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();
		setMonthlyIncome(formatNumberWithCommas(data.monthlyIncome));
		setYearlyIncome(formatNumberWithCommas(data.yearlyIncome));
	};

	return (
		<>
			<div className="w-full flex md:flex-row flex-col justify-center items-center">
				<div className="flex flex-col w-full px-6 md:p-0 md:w-2/5   md:pl-20 gap-4">
					<div className="flex flex-col gap-5 md:gap-8 py-2 md:py-4">
						<p className="font-medium">What kind of influencer are you?</p>
						<SearchInfluencer onChange={handleInfluencer} />
					</div>
					<div className="flex flex-col gap-5 md:gap-8 py-2 md:py-4">
						<p className="font-medium">How many followers do you have?</p>
						<CustomSlider
							defaultValue={500}
							totalValue={1000}
							minValue={10}
							steps={10}
							symbols="K"
							onChange={handlefollowers}
						/>
					</div>
					<div className="flex flex-col gap-5 md:gap-8 py-2 md:py-4">
						<p className="font-medium">
							How many products do you list monthly?
						</p>
						<CustomSlider
							defaultValue={25}
							totalValue={50}
							minValue={1}
							steps={1}
							onChange={handleProducts}
						/>
					</div>
				</div>
				<div className="w-full flex md:hidden justify-center items-center py-8 md:py-16">
					<CustomButton
						btnText="Calculate"
						bgColor="bg-primary-blue"
						textColor="text-primary-white"
						onClick={handleSubmit}
					/>
				</div>
				<div className="flex flex-row md:flex-col font-bold items-center text-center justify-around md:justify-center mt-8 gap-10 md:gap-28 w-2/6">
					<div className="flex flex-col gap-3">
						<h4 className="text-xl">Monthly Earning</h4>
						<p className="text-2xl md:text-4xl text-primary-blue">
							₹{monthlyIncome}
						</p>
					</div>
					<div className="flex flex-col gap-3">
						<h4 className="text-xl whitespace-break-spaces">Yearly Earning</h4>
						<p className="text-2xl md:text-4xl text-primary-blue">
							₹{yearlyIncome}
						</p>
					</div>
				</div>
			</div>
			<div className="w-full hidden md:flex justify-center items-center py-16">
				<CustomButton
					btnText="Calculate"
					bgColor="bg-primary-blue"
					textColor="text-primary-white"
					onClick={handleSubmit}
				/>
			</div>
		</>
	);
}
