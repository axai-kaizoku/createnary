import CustomButton from '@/components/CustomButton';
import DetailPageComp from '@/components/DetailPageComp';
import DetailPageNum from '@/components/DetailPageNum';

export default function Detail() {
	return (
		<div className="bg-primary-white h-fit pt-44 sm:pt-44 flex justify-center items-center md:pt-44 lg:pt-36 pb-8 relative">
			<div className="flex w-full h-fit flex-col sm:flex-row sm:justify-center  pl-0  md:pl-32 lg:pl-28 xl:pl-60">
				{/* Sticky Block starts*/}
				<div className="font-bold text-2xl px-4 block sm:hidden">
					HOW IT WORKS
				</div>

				<div className="sm:sticky top-0 bottom-0 pt-6 px-4 sm:pt-40 w-full sm:w-1/3 h-fit flex gap-6 md:px-6 lg:px-16 flex-col ">
					<h3 className="font-bold text-2xl">
						GetSetYo handholds you at every step of the way
					</h3>
					<p>
						You focus on helping your friends and family, we take care of
						everything else.
					</p>
					<div className="flex justify-start pt-4 items-center w-full">
						<CustomButton
							btnText="Get Started"
							bgColor="bg-primary-blue"
							textColor="text-primary-white"
						/>
					</div>
				</div>
				{/* Sticky Block ends */}
				<div className="flex w-full pt-8 justify-start sm:pt-0 sm:w-3/5">
					<div className="w-3/12 sm:w-[8%]  flex items-center flex-col">
						<DetailPageNum num="1" />
						<div className="h-[50vh] sm:h-[90vh] border border-[#D6D6D6]"></div>
						<DetailPageNum num="2" />
						<div className="h-[50vh] sm:h-[90vh] border border-[#D6D6D6]"></div>
						<DetailPageNum num="3" />
						<div className="h-[50vh] sm:h-[90vh] border border-[#D6D6D6]"></div>
						<DetailPageNum num="4" />
						<div className="h-[42vh] border border-[#D6D6D6]"></div>
					</div>
					<div className="flex flex-col gap-5 w-full sm:w-1/2 pr-4 sm:pl-10 sm:pr-0">
						<DetailPageComp
							title="Share the holidays, stays and experiences with your friends and family
						"
							description="You receive trending & curated Itineraries and Insider deals on Hotels & Flights to share"
							img="/detail-one.png"
							alt="detail-one"
						/>
						<div className="h-[5vh] sm:h-[42vh] "></div>
						<DetailPageComp
							title="Understand their requirements and budgets"
							description="You receive trending & curated Itineraries and Insider deals on Hotels & Flights to share"
							img="/detail-two.png"
							alt="detail-two"
						/>
						<div className="h-[4vh] sm:h-[44vh] "></div>
						<DetailPageComp
							title="Share the payment link, sit back and relax"
							description="You receive trending & curated Itineraries and Insider deals on Hotels & Flights to share"
							img="/detail-two.png"
							alt="detail-two"
						/>
						<div className="h-[6vh] sm:h-[47vh] "></div>
						<DetailPageComp
							title="Get Rewarded each time"
							description="You receive trending & curated Itineraries and Insider deals on Hotels & Flights to share"
							img="/detail-three.png"
							alt="detail-three"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
