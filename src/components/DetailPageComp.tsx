import Image from 'next/image';

export default function DetailPageComp() {
	return (
		<div className="flex flex-col gap-6">
			<h3 className="font-bold text-[1.3rem] whitespace-nowrap ">
				Share the holidays, stays and experiences
				<br />
				with your friends and family
			</h3>
			<p>
				You receive trending & curated Itineraries and Insider deals on Hotels &
				Flights to share
			</p>
			<Image
				src="/detail-img.png"
				alt="detail-mg"
				width={600}
				height={300}
				className="object-contain shadow-xl rounded-[1.2rem]"
			/>
		</div>
	);
}
