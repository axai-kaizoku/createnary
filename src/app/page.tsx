import CustomButton from '@/components/CustomButton';
import { CarouselPlugin } from '@/components/CarouselPlugin';
import Image from 'next/image';

export default function Home() {
	return (
		<>
			{/* Section ONe */}
			<section className="w-full sm:h-[130vh] md:h-[180vh] lg:h-screen bg-section-one-bg-mobile md:bg-section-one-bg  bg-cover bg-center bg-no-repeat flex lg:justify-between justify-normal lg:flex-row flex-col">
				<div className="flex flex-col w-full lg:w-2/5 mt-40 py-8 md:py-20 md:pl-10 lg:pl-32 gap-4 md:gap-8">
					<h3 className="text-3xl font-semibold">
						<div className="text-center md:text-left lg:whitespace-nowrap">
							Welcome To India’s First{' '}
							<span className="text-primary-blue">
								<br />
								Creator’s Marketplace
							</span>
						</div>
					</h3>
					<p className="font-bold text-xl md:hidden text-center">
						Create your E-Store @ Zero Cost
					</p>
					<p className="font-bold md:block hidden text-xl lg:whitespace-nowrap">
						Create your first E-Store @ Zero Cost
					</p>
					<p className="font-medium text-lg lg:whitespace-nowrap md:block hidden">
						Empower your creativity with Createnary. Showcase, sell,
						<br /> and connect with a global audience effortlessly, turn your
						<br />
						products into profits.
					</p>
					<div className="flex justify-center items-center md:block">
						<CustomButton
							btnText="Get Started"
							href="/detail"
							bgColor="bg-primary-blue"
							textColor="text-primary-white"
						/>
					</div>
				</div>
				<div className="mt-0 lg:mt-36 w-full lg:w-3/5  lg:ml-24 flex justify-center items-center">
					<Image
						src="/hero.png"
						alt="hero"
						width={1000}
						height={1200}
						className="object-scale-down w-[calc(100% + 250px)] md:w-full"
					/>
				</div>
			</section>
			{/* Section Two */}
			<section className="h-screen w-full bg-primary-blue text-primary-white">
				<div className="w-full flex flex-col gap-2 py-8 justify-center font-bold text-3xl items-center">
					<h3 className="md:text-left text-center">
						Your audience wants links
					</h3>
					<p className="font-medium text-lg hidden md:block">
						Make it easy for them by linking products to every post and video
					</p>
					<p className="font-medium text-lg whitespace-nowrap text-center md:hidden">
						Make it easy for them by linking products
						<br />
						to every post and video
					</p>
				</div>
				{/* Carasole */}
				<div className="w-full flex justify-center items-center">
					<CarouselPlugin />
				</div>
				<div className="w-full flex justify-center items-center py-8">
					<CustomButton
						btnText="Try for free"
						href="/detail"
						bgColor="bg-primary-white"
						textColor="text-primary-blue"
					/>
				</div>
			</section>
		</>
	);
}
