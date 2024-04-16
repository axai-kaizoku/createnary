import Image from 'next/image';

export default function Header() {
	return (
		<header className="w-full inset-0 z-10 fixed justify-center mt-4 flex">
			<nav className="w-3/4 h-[90px] backdrop-blur-sm backdrop-filter rounded-full">
				<div className="flex h-full justify-between items-center px-10">
					<div className="flex items-center w-2/4 justify-around">
						<h3 className="text-2xl font-medium">Createnary</h3>
						<div className="flex bg-white px-2 rounded-3xl">
							<Image
								src="/search.svg"
								alt="search"
								width={16}
								height={16}
								className="object-contain mx-2"
							/>
							<input
								type="text"
								placeholder="Search Creators"
								className="p-3.5 rounded-r-3xl "
							/>
						</div>
					</div>
					<ul className="flex items-center w-2/4 justify-evenly">
						<li className="flex gap-2">
							<Image
								src="/search.svg"
								alt="search"
								width={16}
								height={16}
								className="object-contain"
							/>
							Cart
						</li>
						<li className="flex gap-2">
							<Image
								src="/search.svg"
								alt="search"
								width={16}
								height={16}
								className="object-contain"
							/>
							Cart
						</li>
						<li className="flex gap-2">
							<Image
								src="/search.svg"
								alt="search"
								width={16}
								height={16}
								className="object-contain"
							/>
							Cart
						</li>
						<li className="flex gap-2">
							Login
							<Image
								src="/search.svg"
								alt="search"
								width={16}
								height={16}
								className="object-contain"
							/>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}
