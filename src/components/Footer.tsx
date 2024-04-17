import Image from 'next/image';

export default function Footer() {
	return (
		<footer className="bg-bg-footer text-white w-full flex flex-col justify-between">
			<div className="flex w-full md:flex-row flex-col my-14 px-10 sm:px-20 md:px-24 lg:px-32 justify-between">
				<h2 className="flex pb-10 md:p-0 items-center  sm:justify-center text-2xl font-normal font-Monoton">
					Createnary
				</h2>
				<ul className="flex flex-col pb-9 sm:pb-4 md:pb-4 gap-3 font-light">
					<li className="font-normal">Navigation</li>
					<li>About Createnary</li>
					<li>Contact Us</li>
					<li>Refund</li>
					<li>Newsletter</li>
					<li>Terms & Conditions</li>
					<li>Privacy & Policy</li>
				</ul>
				<ul className="flex flex-col font-light gap-3">
					<li className="font-normal">Contacts</li>
					<li className="flex gap-2">
						<Image
							src="/location.svg"
							alt="location"
							width={16}
							height={16}
							className="object-contain"
						/>{' '}
						Delhi, India
					</li>
					<li className="flex gap-2">
						<span className="w-4 h-4 bg-transparent"></span> +91 98765 43210
					</li>
					<li className="flex gap-2">
						<Image
							src="/phone.svg"
							alt="phone"
							width={16}
							height={16}
							className="object-contain"
						/>{' '}
						+91 99999 99999
					</li>
				</ul>
			</div>
			<p className="flex flex-col  text-center">
				<hr className="hidden sm:inline " />
				<span className="font-extralight text-center p-4">
					&copy; Createnary 2024
				</span>
			</p>
		</footer>
	);
}
