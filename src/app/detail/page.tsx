import CustomButton from '@/components/CustomButton';
import DetailPageComp from '@/components/DetailPageComp';
import DetailPageNum from '@/components/DetailPageNum';

export default function Detail() {
	return (
		<div className="bg-primary-white h-fit pt-36 pb-8 relative">
			<div className="flex w-full h-fit justify-center">
				{/* Sticky Block starts*/}
				<div className="sticky  top-0 bottom-0 pt-40 w-1/3 h-fit flex gap-6 px-10 flex-col ">
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
				<div className="w-1/12  flex items-center flex-col">
					<DetailPageNum num="1" />
					<div className="h-[90vh] border border-[#D6D6D6]"></div>
					<DetailPageNum num="2" />
					<div className="h-[90vh] border border-[#D6D6D6]"></div>
					<DetailPageNum num="3" />
					<div className="h-[90vh] border border-[#D6D6D6]"></div>
					<DetailPageNum num="4" />
					<div className="h-[42vh] border border-[#D6D6D6]"></div>
				</div>
				<div className="flex flex-col gap-5 w-1/3 px-10">
					<DetailPageComp />
					<div className="h-[42vh] "></div>
					<DetailPageComp />
					<div className="h-[40vh] "></div>
					<DetailPageComp />
					<div className="h-[42vh] "></div>
					<DetailPageComp />
				</div>
			</div>
		</div>
	);
}
